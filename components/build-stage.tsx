"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import type { Projected, StageState } from "@/components/build-scene";

/**
 * The home page's pinned 3D sequence: hero → exploded build → one chapter per service.
 * A tall section scrolls past a sticky viewport; scroll progress (damped) drives the
 * three.js scene and every overlay directly through refs, so nothing re-renders in React.
 */

const SECTION_VH = 700; // total height; the sticky viewport consumes 100 of it

const CHAPTER_START = 0.29;
const CHAPTER_LEN = 0.12;

const CHAPTERS = [
  {
    label: "Interface",
    title: "Website Development",
    statement: "Responsive websites designed for businesses, brands, and startups.",
    detail: "Built using current technologies and development practices, and optimized for desktop, tablet, and mobile devices.",
  },
  {
    label: "Application",
    title: "Web Applications",
    statement: "Custom systems and applications built around your business requirements.",
    detail: "From dashboards to booking systems and beyond, designed to support future growth.",
  },
  {
    label: "Code",
    title: "Maintenance & Support",
    statement: "Updates, improvements, and technical support after launch.",
    detail: "Clear communication and ongoing technical assistance whenever your site needs it.",
  },
  {
    label: "Hosting",
    title: "Web Hosting",
    statement: "Reliable hosting solutions with deployment and setup support.",
    detail: "Web hosting and full deployment assistance to get your site live and running reliably.",
  },
  {
    label: "Domain",
    title: "Domain Registration",
    statement: "Assistance with securing and configuring domain names.",
    detail: "Domain registration, DNS configuration, and full setup so everything works seamlessly.",
  },
];

const ss = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

function show(el: HTMLElement | null, a: number, dy: number, motion: boolean) {
  if (!el) return;
  el.style.opacity = a.toFixed(3);
  el.style.visibility = a < 0.01 ? "hidden" : "visible";
  if (motion) {
    el.style.transform = `translate3d(0, ${((1 - a) * dy).toFixed(1)}px, 0)`;
    el.style.filter = a > 0.985 ? "none" : `blur(${((1 - a) * 8).toFixed(2)}px)`;
  }
}

const hidden = { opacity: 0, visibility: "hidden" as const };

export default function BuildStage() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const counterNumRef = useRef<HTMLSpanElement>(null);
  const counterBarRef = useRef<HTMLSpanElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hotspotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dimRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scene: Awaited<ReturnType<typeof loadScene>> | null = null;
    let disposed = false;
    let raf = 0;
    let p = -1;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    let navTheme = "";
    let lastCounter = -1;
    const hot: Projected[] = Array.from({ length: 5 }, () => ({ x: 0, y: 0 }));
    const dimPts: Projected[] = [{ x: 0, y: 0 }, { x: 0, y: 0 }];

    async function loadScene() {
      const m = await import("@/components/build-scene");
      return m.createBuildScene(canvas!);
    }

    loadScene()
      .then((s) => {
        if (disposed) return s.dispose();
        scene = s;
        resize();
        canvas.style.opacity = "1";
      })
      .catch(() => {
        // WebGL unavailable: the overlays still tell the whole story.
      });

    function resize() {
      const r = canvas!.getBoundingClientRect();
      scene?.resize(r.width, r.height);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onPointer = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const start = performance.now();

    function frame() {
      raf = requestAnimationFrame(frame);
      const vh = window.innerHeight;
      const rect = section!.getBoundingClientRect();
      if (rect.bottom < -50 || rect.top > vh + 50) return;

      const motion = !reduce.matches;
      const target = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - vh)));
      p = p < 0 || !motion ? target : p + (target - p) * 0.09;
      if (Math.abs(target - p) < 0.00005) p = target;
      px += (tx - px) * 0.05;
      py += (ty - py) * 0.05;

      const mobile = window.innerWidth < 768;
      const dark = ss(0.04, 0.18, p);
      const turn = ss(0.06, 0.24, p);
      const hotA = ss(0.2, 0.25, p) * (1 - ss(0.9, 0.95, p));

      let focus = -1;
      let focusAmt = 0;
      CHAPTERS.forEach((_, i) => {
        const s = CHAPTER_START + i * CHAPTER_LEN;
        const a = ss(s, s + 0.03, p) * (1 - ss(s + 0.09, s + 0.12, p));
        show(chapterRefs.current[i], a, 28, motion);
        if (a > focusAmt) {
          focus = i;
          focusAmt = a;
        }
      });

      const nextTheme = dark > 0.35 ? "dark" : "light";
      if (nextTheme !== navTheme) {
        navTheme = nextTheme;
        section!.dataset.navTheme = nextTheme;
        window.dispatchEvent(new Event("mdl:navtheme"));
      }

      if (lightRef.current) lightRef.current.style.opacity = (1 - dark).toFixed(3);
      show(heroRef.current, 1 - ss(0.025, 0.09, p), -40, motion);
      const introA = ss(0.15, 0.19, p) * (1 - ss(0.25, 0.29, p));
      show(introRef.current, introA, 30, motion);

      const counterA = ss(CHAPTER_START - 0.01, CHAPTER_START + 0.02, p) * (1 - ss(0.88, 0.91, p));
      show(counterRef.current, counterA, 0, false);
      const chapterPos = Math.min(4, Math.max(0, Math.floor((p - CHAPTER_START) / CHAPTER_LEN)));
      if (chapterPos !== lastCounter && counterNumRef.current) {
        lastCounter = chapterPos;
        counterNumRef.current.textContent = `0${chapterPos + 1}`;
      }
      if (counterBarRef.current) {
        const prog = Math.min(1, Math.max(0, (p - CHAPTER_START) / (CHAPTER_LEN * 5)));
        counterBarRef.current.style.transform = `scaleX(${prog.toFixed(4)})`;
      }

      if (!scene) return;

      const state: StageState = {
        solid: ss(0.08, 0.2, p),
        explode: ss(0.1, 0.25, p) * (1 - ss(0.91, 1, p)),
        turn,
        spin: ss(0.88, 1, p) * 0.9,
        posY: mix(mobile ? 0.17 : 0.1, mobile ? 0.01 : 0.03, turn) + introA * 0.09,
        posX: 0,
        fit: mix(mobile ? 0.84 : 0.42, mobile ? 0.8 : 0.4, turn),
        focus,
        focusAmt,
        dims: 1 - ss(0.03, 0.1, p),
        domain: ss(0.18, 0.26, p) * (1 - ss(0.92, 0.98, p)),
        pointerX: px,
        pointerY: py,
        time: (performance.now() - start) / 1000,
        idle: motion ? 1 : 0,
      };
      scene.render(state);

      scene.projectHotspots(hot);
      hotspotRefs.current.forEach((el, i) => {
        if (!el) return;
        const a = hotA * (focus >= 0 ? mix(1, i === focus ? 1 : 0.45, focusAmt) : 1);
        el.style.transform = `translate3d(${hot[i].x.toFixed(1)}px, ${hot[i].y.toFixed(1)}px, 0)${i === 0 || i === 3 ? " translateX(-100%) translateX(10px)" : ""}`;
        el.style.opacity = a.toFixed(3);
        el.style.visibility = a < 0.02 ? "hidden" : "visible";
        el.dataset.active = String(i === focus && focusAmt > 0.5);
      });

      scene.projectDims(dimPts);
      const dimA = state.dims;
      dimRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translate3d(${dimPts[i].x.toFixed(1)}px, ${dimPts[i].y.toFixed(1)}px, 0) translate(-50%, -50%)${i === 1 ? " rotate(-90deg)" : ""}`;
        el.style.opacity = dimA.toFixed(3);
        el.style.visibility = dimA < 0.02 ? "hidden" : "visible";
      });
    }
    raf = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      scene?.dispose();
    };
  }, []);

  function jumpTo(i: number) {
    const section = sectionRef.current;
    if (!section) return;
    const p = CHAPTER_START + i * CHAPTER_LEN + CHAPTER_LEN * 0.45;
    const top = section.offsetTop + p * (section.offsetHeight - window.innerHeight);
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      data-nav-theme="light"
      className="relative"
      style={{ height: `${SECTION_VH}svh` }}
      aria-label="Modern Digital Labs"
    >
      {/* Scroll anchor for the services sequence (intro starts at ~20% progress). */}
      <div id="services" aria-hidden="true" className="absolute left-0" style={{ top: `${0.2 * (SECTION_VH - 100)}svh` }} />

      <div className="sticky top-0 h-svh w-full overflow-hidden bg-stage-deep">
        {/* Light-to-slate gradient that resolves into the dark stage */}
        <div aria-hidden="true" className="stage-deep-glow absolute inset-0" />
        <div ref={lightRef} aria-hidden="true" className="stage-light absolute inset-0" />
        <div aria-hidden="true" className="stage-columns absolute inset-0" />

        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-1000"
        />

        {/* Blueprint dimension labels */}
        {["1440 px", "900 px"].map((t, i) => (
          <span
            key={t}
            ref={(el) => {
              dimRefs.current[i] = el;
            }}
            aria-hidden="true"
            className={`mono-label pointer-events-none absolute left-0 top-0 whitespace-nowrap text-[10px] ${i === 0 ? "text-[#3A5287]" : "text-blueprint/80"}`}
            style={hidden}
          >
            {t}
          </span>
        ))}

        {/* Hotspots, pinned to each layer of the build */}
        <div className="absolute inset-0 hidden md:block">
          {CHAPTERS.map((c, i) => (
            <button
              key={c.label}
              ref={(el) => {
                hotspotRefs.current[i] = el;
              }}
              type="button"
              onClick={() => jumpTo(i)}
              className={`hotspot group absolute left-0 top-0 -ml-[5px] -mt-[19px] flex items-center gap-3 py-2 ${i === 0 || i === 3 ? "flex-row-reverse pl-2" : "pr-2"}`}
              style={hidden}
              aria-label={`Show ${c.title}`}
            >
              <span className="hotspot-dot block size-[10px] rounded-full border border-blueprint/80" />
              <span className="mono-label whitespace-nowrap text-[11px] text-white/70 transition-colors duration-200 group-hover:text-white group-data-[active=true]:text-white">
                <span className="text-signal-soft">[+]</span> {c.label}
              </span>
            </button>
          ))}
        </div>

        {/* Hero */}
        <div ref={heroRef} className="absolute inset-x-0 bottom-0 will-change-transform">
          <div className="mx-auto grid max-w-[90rem] gap-8 px-6 pb-10 sm:pb-14 lg:grid-cols-12 lg:items-end lg:px-12">
            <h1 className="display text-balance text-[2.35rem] leading-[1.04] text-white sm:text-5xl lg:col-span-8 lg:text-[4.25rem] xl:text-[4.75rem]">
              Modern websites and digital solutions for growing businesses.
            </h1>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="max-w-sm text-[0.95rem] leading-relaxed text-white/72">
                Modern Digital Labs builds functional, modern, and easy-to-use digital products, from professional websites to custom web applications.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="#contact" className="btn-solid">
                  Start a project
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
                <Link href="#services" className="btn-line text-white">
                  Our services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services intro */}
        <div ref={introRef} className="absolute inset-x-0 bottom-0 px-6 pb-14 text-center sm:pb-20" style={hidden}>
          <h2 className="display mx-auto max-w-3xl text-balance text-[1.7rem] leading-[1.15] text-white sm:text-4xl">
            Everything you need to establish and grow your digital presence, from development to deployment.
          </h2>
        </div>

        {/* One chapter per service */}
        {CHAPTERS.map((c, i) => (
          <div
            key={c.title}
            ref={(el) => {
              chapterRefs.current[i] = el;
            }}
            className="pointer-events-none absolute inset-0"
            style={hidden}
          >
            <div className="mx-auto flex h-full max-w-[90rem] flex-col justify-between px-6 pb-24 pt-24 md:flex-row md:items-center md:pb-0 md:pt-0 lg:px-12">
              <p className="display max-w-[19rem] text-balance text-[1.6rem] leading-[1.15] text-white sm:max-w-sm sm:text-3xl lg:max-w-[22rem] lg:text-[2.35rem]">
                {c.statement}
              </p>
              <div className="max-w-[17rem] md:text-right">
                <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.14em] text-white">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{c.detail}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Chapter counter */}
        <div ref={counterRef} aria-hidden="true" className="absolute bottom-8 left-1/2 w-40 -translate-x-1/2 text-center" style={hidden}>
          <div className="mono-label text-[11px] text-white/70">
            [<span ref={counterNumRef}>01</span> / 05]
          </div>
          <div className="mt-3 h-px w-full bg-white/15">
            <span ref={counterBarRef} className="block h-px w-full origin-left scale-x-0 bg-signal-soft" />
          </div>
        </div>
      </div>
    </section>
  );
}
