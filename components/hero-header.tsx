'use client'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

const left = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#projects' },
]
const right = [
    { name: 'About', href: '#why-mdl' },
    { name: 'Start a project', href: '#contact' },
]
const all = [...left, { name: 'Process', href: '#process' }, { name: 'FAQ', href: '#faq' }, right[0], right[1]]

/** Reads the data-nav-theme of whatever section sits under the bar. */
function useNavTheme() {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light')
    React.useEffect(() => {
        let raf = 0
        const check = () => {
            raf = 0
            const hits = document.elementsFromPoint(window.innerWidth / 2, 36)
            for (const el of hits) {
                const host = (el as HTMLElement).closest<HTMLElement>('[data-nav-theme]')
                if (host) {
                    setTheme(host.dataset.navTheme === 'dark' ? 'dark' : 'light')
                    return
                }
            }
        }
        const queue = () => {
            if (!raf) raf = requestAnimationFrame(check)
        }
        queue()
        window.addEventListener('scroll', queue, { passive: true })
        window.addEventListener('resize', queue)
        window.addEventListener('mdl:navtheme', queue)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('scroll', queue)
            window.removeEventListener('resize', queue)
            window.removeEventListener('mdl:navtheme', queue)
        }
    }, [])
    return theme
}

function NavItem({ index, name, href, onClick }: { index: number; name: string; href: string; onClick?: () => void }) {
    return (
        <Link href={href} onClick={onClick} className="group mono-label inline-flex items-center gap-2 py-3 text-[11px]">
            <span className="opacity-55 transition-opacity duration-200 group-hover:opacity-100">[{String(index).padStart(2, '0')}]</span>
            <span className="relative">
                {name}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            </span>
        </Link>
    )
}

export const HeroHeader = () => {
    const [open, setOpen] = React.useState(false)
    const theme = useNavTheme()
    const onDark = theme === 'dark' || open

    React.useEffect(() => {
        document.documentElement.style.overflow = open ? 'hidden' : ''
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open])

    return (
        <header className={cn('fixed inset-x-0 top-0 z-30 transition-colors duration-500', onDark ? 'text-white' : 'text-ink')}>
            {/* Soft scrim so the bar stays legible over scrolling content */}
            <div
                aria-hidden="true"
                className={cn(
                    'pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent transition-colors duration-500',
                    onDark ? 'from-stage-deep/95 via-stage-deep/70' : 'from-paper/95 via-paper/70'
                )}
            />
            <nav className="relative mx-auto grid max-w-[90rem] grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center px-6 pt-3 lg:px-12" aria-label="Main">
                <ul className="hidden items-center gap-10 lg:flex">
                    {left.map((item, i) => (
                        <li key={item.name}>
                            <NavItem index={i + 1} {...item} />
                        </li>
                    ))}
                </ul>

                <Link href="#home" className="col-start-1 flex items-center gap-3 whitespace-nowrap justify-self-start py-3 lg:col-start-2 lg:justify-self-center" aria-label="Modern Digital Labs, home">
                    <span className="font-serif text-[0.95rem] font-bold tracking-[0.02em]">MDL</span>
                    <span className="h-3.5 w-px bg-current opacity-30" />
                    <span className="font-serif text-[0.62rem] font-semibold uppercase tracking-[0.22em] sm:text-[0.7rem] sm:tracking-[0.28em]">Modern Digital Labs</span>
                </Link>

                <ul className="hidden items-center justify-end gap-10 lg:flex">
                    {right.map((item, i) => (
                        <li key={item.name}>
                            <NavItem index={i + 3} {...item} />
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="mono-label col-start-2 -mr-2 justify-self-end p-3 text-[11px] lg:hidden"
                >
                    [{open ? 'Close' : 'Menu'}]
                </button>
            </nav>

            {open && (
                <div id="mobile-menu" className="fixed inset-0 -z-10 flex flex-col bg-stage-deep px-6 pb-10 pt-24 lg:hidden">
                    <div aria-hidden="true" className="stage-columns pointer-events-none absolute inset-0" />
                    <ul className="relative flex flex-1 flex-col justify-center">
                        {all.map((item, i) => (
                            <li key={item.name} className="border-t border-white/10 last:border-b">
                                <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-baseline gap-4 py-4 text-white"
                                >
                                    <span className="mono-label text-[11px] text-signal-soft">[{String(i + 1).padStart(2, '0')}]</span>
                                    <span className="display text-3xl">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <p className="mono-label relative text-[10px] text-white/50">Harare, Zimbabwe</p>
                </div>
            )}
        </header>
    )
}
