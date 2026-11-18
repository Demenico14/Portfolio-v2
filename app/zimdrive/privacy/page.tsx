import type { Metadata } from "next";
import { ZimDriveHeader } from "@/components/zimdrive-header";
import ZimDriveFooter from "@/components/zimdrive-footer";
import ZimDriveDisclaimer from "@/components/zimdrive-disclaimer";

export const metadata: Metadata = {
  title: "ZimDrive Privacy Policy",
  description:
    "Privacy Policy for the ZimDrive app by Modern Digital Labs: what information the app collects, how it is used, third-party services, and your choices.",
  alternates: { canonical: "/zimdrive/privacy" },
};

export default function ZimDrivePrivacyPage() {
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
            ZimDrive · Legal
          </span>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
          <dl className="mt-6 space-y-1.5 text-sm text-foreground/60">
            <div className="flex gap-2">
              <dt className="font-medium text-foreground/80">ZimDrive — provided by Modern Digital Labs (MDL)</dt>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="text-foreground/60">Effective Date:</dt>
              <dd>11 May 2026</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="text-foreground/60">Last Updated:</dt>
              <dd>29 May 2026</dd>
            </div>
          </dl>
        </div>

        <ZimDriveDisclaimer />

        <div className="legal-prose legal-prose-zd space-y-10">
          <section>
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy applies to the ZimDrive mobile application (“ZimDrive”, “the App”, “we”, “our”, or
              “us”), which is developed and provided by Modern Digital Labs (MDL).
            </p>
            <p>
              ZimDrive is a freemium mobile application designed to help users practise and prepare for
              driving-related tests through quizzes, learning content, and related app features.
            </p>
            <p>
              By downloading, accessing, or using ZimDrive, you agree to the collection and use of information in
              accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>ZimDrive may collect certain information when you download, access, or use the App.</p>
            <h3>2.1 Automatically Collected Information</h3>
            <p>
              When you use the App, we may automatically collect basic technical and usage information, including:
            </p>
            <ul>
              <li>Your device’s Internet Protocol address, also known as an IP address</li>
              <li>Device type and operating system</li>
              <li>App pages or screens visited</li>
              <li>Time and date of app usage</li>
              <li>Time spent in the App</li>
              <li>Basic app performance and usage data</li>
            </ul>
            <p>
              This information helps us understand how the App is used, improve performance, fix bugs, and maintain
              the quality of the service.
            </p>
          </section>

          <section>
            <h2>3. Location Data</h2>
            <p>ZimDrive does not collect precise location information from your mobile device.</p>
            <p>We do not track your real-time physical location.</p>
          </section>

          <section>
            <h2>4. Information You Provide</h2>
            <p>
              For a better experience, some features of the App may require you to provide personal information,
              including:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Profile picture</li>
              <li>Account information</li>
              <li>Login or authentication details</li>
            </ul>
            <p>
              This information may be used to create and manage your account, personalise your experience, provide
              support, and improve the App.
            </p>
          </section>

          <section>
            <h2>5. Artificial Intelligence</h2>
            <p>
              ZimDrive does not use Artificial Intelligence technologies to process your personal data or provide app
              features.
            </p>
            <p>
              If this changes in the future, this Privacy Policy will be updated to explain how AI-related processing
              works.
            </p>
          </section>

          <section>
            <h2>6. How We Use Your Information</h2>
            <p>We may use collected information to:</p>
            <ul>
              <li>Provide and maintain the App</li>
              <li>Create and manage user accounts</li>
              <li>Improve app performance and user experience</li>
              <li>Monitor app usage and detect technical issues</li>
              <li>Provide important updates or notices</li>
              <li>Respond to user support requests</li>
              <li>Protect the App from misuse, fraud, or security threats</li>
              <li>Send relevant service-related communication</li>
              <li>Send marketing or promotional communication where appropriate</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>
            <p>
              ZimDrive uses third-party services that may collect, store, or process information according to their
              own privacy policies.
            </p>
            <p>These services may include:</p>
            <ul>
              <li>
                <a href="https://expo.dev/privacy" target="_blank" rel="noreferrer">
                  Expo
                </a>{" "}
                — app development and delivery infrastructure
              </li>
              <li>
                <a href="https://clerk.com/legal/privacy" target="_blank" rel="noreferrer">
                  Clerk
                </a>{" "}
                — user authentication and account management
              </li>
            </ul>
            <p>
              These third-party services help us provide features such as authentication, app functionality,
              analytics, development infrastructure, or related services.
            </p>
            <p>
              You should review the privacy policies of these third-party providers to understand how they handle
              your information.
            </p>
          </section>

          <section>
            <h2>8. Sharing of Information</h2>
            <p>We may share information in limited situations, including:</p>
            <ul>
              <li>With trusted third-party service providers that help us operate the App</li>
              <li>When required by law, regulation, court order, or legal process</li>
              <li>When necessary to protect our rights, users, systems, or the public</li>
              <li>When investigating fraud, misuse, or security issues</li>
              <li>With service providers who work on our behalf and are expected to handle information responsibly</li>
            </ul>
            <p>We do not sell users’ personal information to third parties.</p>
          </section>

          <section>
            <h2>9. Data Retention</h2>
            <p>We retain user-provided information for as long as you use the App and for a reasonable period afterwards.</p>
            <p>We may also retain information where necessary for legal, security, business, support, or record-keeping purposes.</p>
            <p>
              If you would like us to delete personal information you provided through the App, you may contact us
              using the email address provided below.
            </p>
          </section>

          <section>
            <h2>10. Opt-Out and Deletion</h2>
            <p>You can stop the App from collecting information by uninstalling it from your device.</p>
            <p>
              You may uninstall the App using the normal uninstall process available on your mobile device or app
              marketplace.
            </p>
            <p>
              To request deletion of personal information linked to your account, contact us at:{" "}
              <a href="mailto:mushayidominic@gmail.com">mushayidominic@gmail.com</a>
            </p>
            <p>We will respond within a reasonable time.</p>
          </section>

          <section>
            <h2>11. Children’s Privacy</h2>
            <p>ZimDrive is not intended to knowingly collect personal information from children under the age of 13.</p>
            <p>We do not knowingly solicit data from or market to children under 13.</p>
            <p>
              If we discover that a child under 13 has provided personal information, we will take reasonable steps to
              delete that information from our systems.
            </p>
            <p>
              If you are a parent or guardian and believe that your child has provided personal information through
              the App, please contact us at:{" "}
              <a href="mailto:mushayidominic@gmail.com">mushayidominic@gmail.com</a>
            </p>
          </section>

          <section>
            <h2>12. Security</h2>
            <p>
              We care about protecting your information and use reasonable physical, electronic, and procedural
              safeguards to protect the information we process and maintain.
            </p>
            <p>
              However, no method of internet transmission, mobile app communication, or electronic storage is
              completely secure. Therefore, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>13. Your Consent</h2>
            <p>
              By using ZimDrive, you consent to the collection, use, and processing of your information as described
              in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2>14. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time.</p>
            <p>
              When changes are made, we will update this page with the revised Privacy Policy. You are encouraged to
              review this Privacy Policy regularly.
            </p>
            <p>Continued use of the App after changes are posted means you accept the updated Privacy Policy.</p>
          </section>

          <section>
            <h2>15. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or how your information is handled, contact:</p>
            <div className="rounded-lg border border-border bg-card p-5 text-sm not-prose">
              <p className="font-semibold text-foreground">Modern Digital Labs (MDL)</p>
              <p className="mt-1 text-foreground/70">App: ZimDrive</p>
              <p className="text-foreground/70">
                Email:{" "}
                <a href="mailto:mushayidominic@gmail.com" className="text-[#F97316] hover:underline">
                  mushayidominic@gmail.com
                </a>
              </p>
              <p className="text-foreground/70">
                Website:{" "}
                <a
                  href="https://www.moderndigitallabs.co.zw/"
                  className="text-[#F97316] hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.moderndigitallabs.co.zw
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
