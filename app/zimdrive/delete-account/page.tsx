import type { Metadata } from "next";
import { ZimDriveHeader } from "@/components/zimdrive-header";
import ZimDriveFooter from "@/components/zimdrive-footer";

export const metadata: Metadata = {
  title: "ZimDrive — Account & Data Deletion",
  description:
    "How to delete your ZimDrive account and associated data — in-app or by email — including what is deleted, what is kept, and data retention periods. Developed by Modern Digital Labs (MDL).",
  alternates: { canonical: "/zimdrive/delete-account" },
};

export default function ZimDriveDeleteAccountPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <ZimDriveHeader />

      <main className="mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-20 md:pt-36">
        <div className="mb-12">
          <span
            className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-widest"
            style={{ background: "#F9731615", color: "#C2410C" }}
          >
            <span className="inline-block size-1.5 rounded-full" style={{ background: "#F97316" }} aria-hidden="true" />
            ZimDrive · Account Deletion
          </span>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Account &amp; Data Deletion</h1>
          <p className="mt-4 text-sm text-foreground/60">Developed by Modern Digital Labs (MDL).</p>
        </div>

        <div className="legal-prose legal-prose-zd space-y-10">
          <section>
            <p>You can delete your ZimDrive account and associated data at any time.</p>
          </section>

          <section>
            <h2>Option 1 — In the app</h2>
            <ol>
              <li>Open ZimDrive and sign in.</li>
              <li>Go to Settings.</li>
              <li>Tap &ldquo;Delete Account&rdquo; and confirm. Your account is deleted immediately.</li>
            </ol>
          </section>

          <section>
            <h2>Option 2 — By email</h2>
            <p>
              Email{" "}
              <a href="mailto:mushayidominic@gmail.com?subject=Delete%20My%20Account">mushayidominic@gmail.com</a> from
              your account email address with the subject &ldquo;Delete My Account&rdquo;. We will delete your account
              within 7 days and confirm by email.
            </p>
          </section>

          <section>
            <h2>What is deleted</h2>
            <ul>
              <li>Your account and profile (name, email) held by our sign-in provider.</li>
              <li>Your subscription record on our servers.</li>
            </ul>
          </section>

          <section>
            <h2>What is kept</h2>
            <ul>
              <li>
                Limited payment/transaction records may be retained where required by law or for fraud prevention for
                up to 12 months, then deleted.
              </li>
              <li>
                Learning progress (quiz scores, lessons, XP) is stored only on your device and is removed when you
                uninstall the app or clear its data.
              </li>
            </ul>
          </section>

          <section>
            <h2>Contact</h2>
            <div className="rounded-lg border border-border bg-card p-5 text-sm not-prose">
              <p className="font-semibold text-foreground">Modern Digital Labs (MDL)</p>
              <p className="mt-1 text-foreground/70">App: ZimDrive</p>
              <p className="text-foreground/70">
                Email:{" "}
                <a href="mailto:mushayidominic@gmail.com" className="text-[#F97316] hover:underline">
                  mushayidominic@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <ZimDriveFooter />
    </div>
  );
}
