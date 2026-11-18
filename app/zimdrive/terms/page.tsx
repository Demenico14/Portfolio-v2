import type { Metadata } from "next";
import { ZimDriveHeader } from "@/components/zimdrive-header";
import ZimDriveFooter from "@/components/zimdrive-footer";
import ZimDriveDisclaimer from "@/components/zimdrive-disclaimer";

export const metadata: Metadata = {
  title: "ZimDrive Terms and Conditions",
  description:
    "Terms for the ZimDrive app by Modern Digital Labs: educational use, the freemium service, user responsibilities, intellectual property and liability.",
  alternates: { canonical: "/zimdrive/terms" },
};

export default function ZimDriveTermsPage() {
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
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Terms and Conditions</h1>
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
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions apply to the ZimDrive mobile application (“ZimDrive”, “the App”, “we”, “our”,
              or “us”), developed and provided by Modern Digital Labs (MDL).
            </p>
            <p>By downloading, accessing, or using ZimDrive, you agree to these Terms and Conditions.</p>
            <p>If you do not agree with these Terms, you should not use the App.</p>
          </section>

          <section>
            <h2>2. About ZimDrive</h2>
            <p>
              ZimDrive is a freemium mobile application designed to help users practise and prepare for
              driving-related tests through quizzes, study content, and related learning features.
            </p>
            <p>The App is provided for educational and practice purposes only.</p>
            <p>
              ZimDrive is not an official government application, not an official VID application, and is not
              affiliated with any government department, licensing authority, or road traffic authority unless
              expressly stated.
            </p>
          </section>

          <section>
            <h2>3. Educational Use Only</h2>
            <p>The content in ZimDrive is provided to help users learn and practise.</p>
            <p>Although we aim to keep the content useful and accurate, we do not guarantee that:</p>
            <ul>
              <li>All questions will appear in an official test</li>
              <li>The App covers every possible test topic</li>
              <li>The App content is always error-free</li>
              <li>Using the App will guarantee that you pass any official driving test</li>
              <li>Official test rules, questions, or procedures will not change</li>
            </ul>
            <p>
              Users are encouraged to also study official materials and follow guidance from relevant licensing or
              road traffic authorities.
            </p>
          </section>

          <section>
            <h2>4. Freemium Service</h2>
            <p>ZimDrive is offered as a freemium service.</p>
            <p>
              Some features may be available for free, while other features may require payment, subscription,
              upgrade, or another form of access.
            </p>
            <p>If charges apply, they will be clearly communicated before you are required to pay.</p>
            <p>We reserve the right to modify, add, remove, or charge for features at any time.</p>
          </section>

          <section>
            <h2>5. User Responsibilities</h2>
            <p>By using ZimDrive, you agree to:</p>
            <ul>
              <li>Use the App lawfully</li>
              <li>Provide accurate information when required</li>
              <li>Keep your account details secure</li>
              <li>Not misuse, copy, reverse engineer, or interfere with the App</li>
              <li>Not attempt to access restricted parts of the App or its systems</li>
              <li>Not use the App for fraud, abuse, spam, or unlawful activity</li>
              <li>Not upload or submit harmful, offensive, or illegal content</li>
            </ul>
            <p>You are responsible for maintaining the security of your device and account.</p>
          </section>

          <section>
            <h2>6. Device Security</h2>
            <p>You are responsible for keeping your mobile device secure.</p>
            <p>
              We strongly advise against jailbreaking, rooting, or modifying your device in ways that remove security
              protections provided by the operating system.
            </p>
            <p>
              Such actions may expose your device to malware, viruses, security vulnerabilities, or cause ZimDrive to
              stop working correctly.
            </p>
          </section>

          <section>
            <h2>7. Internet Access and Data Charges</h2>
            <p>Some features of ZimDrive may require an active internet connection.</p>
            <p>The connection may be through Wi-Fi or your mobile network provider.</p>
            <p>We are not responsible if the App does not function fully because of:</p>
            <ul>
              <li>No internet connection</li>
              <li>Poor network coverage</li>
              <li>Exhausted mobile data</li>
              <li>Network restrictions</li>
              <li>Device issues</li>
              <li>Service provider interruptions</li>
            </ul>
            <p>
              You are responsible for any mobile data charges, roaming charges, or third-party fees that may apply
              when using the App.
            </p>
            <p>
              If you are not the bill payer for the device, you confirm that you have permission from the bill payer
              to use the App.
            </p>
          </section>

          <section>
            <h2>8. Intellectual Property</h2>
            <p>
              All trademarks, logos, designs, source code, database rights, copyrights, content, and other
              intellectual property rights related to ZimDrive remain the property of Modern Digital Labs or its
              licensors.
            </p>
            <p>You may not:</p>
            <ul>
              <li>Copy the App</li>
              <li>Modify the App</li>
              <li>Extract the source code</li>
              <li>Translate the App into other languages without permission</li>
              <li>Create derivative versions of the App</li>
              <li>Reproduce the App’s branding or content without permission</li>
              <li>Reverse engineer or attempt to access the App’s internal systems</li>
            </ul>
            <p>Your use of ZimDrive does not give you ownership of the App or its intellectual property.</p>
          </section>

          <section>
            <h2>9. Third-Party Services</h2>
            <p>ZimDrive may use third-party services that have their own terms and conditions.</p>
            <p>These may include:</p>
            <ul>
              <li>
                <a href="https://expo.dev/terms" target="_blank" rel="noreferrer">
                  Expo
                </a>{" "}
                — app development and delivery infrastructure
              </li>
              <li>
                <a href="https://clerk.com/legal/terms" target="_blank" rel="noreferrer">
                  Clerk
                </a>{" "}
                — user authentication and account management
              </li>
            </ul>
            <p>
              By using the App, you understand that these third-party services may process certain information or
              provide functionality according to their own terms.
            </p>
            <p>
              We are not responsible for the actions, policies, outages, or changes made by third-party service
              providers.
            </p>
          </section>

          <section>
            <h2>10. Accuracy and Availability</h2>
            <p>We aim to keep ZimDrive useful, updated, and available.</p>
            <p>However, we do not guarantee that:</p>
            <ul>
              <li>The App will always be available</li>
              <li>The App will always be compatible with your device</li>
              <li>The App will always be error-free</li>
              <li>The content will always be fully accurate or updated</li>
              <li>The App will meet every user’s specific needs</li>
            </ul>
            <p>We may update, modify, suspend, or discontinue the App at any time.</p>
          </section>

          <section>
            <h2>11. Updates to the App</h2>
            <p>We may release updates to improve, fix, or change ZimDrive.</p>
            <p>You may need to download updates to continue using the App properly.</p>
            <p>
              We do not guarantee that the App will always support every operating system version or device model.
            </p>
            <p>By using the App, you agree to accept updates when they are made available.</p>
          </section>

          <section>
            <h2>12. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Modern Digital Labs is not liable for any direct, indirect,
              incidental, special, or consequential loss arising from:
            </p>
            <ul>
              <li>Your use of the App</li>
              <li>Your inability to use the App</li>
              <li>Reliance on quiz questions or learning content</li>
              <li>Internet or mobile network issues</li>
              <li>Device failure or battery loss</li>
              <li>Third-party service issues</li>
              <li>App errors, bugs, or downtime</li>
              <li>Changes to official test rules or requirements</li>
              <li>Failure to pass an official driving test</li>
            </ul>
            <p>The App is provided on an “as is” and “as available” basis.</p>
          </section>

          <section>
            <h2>13. Termination</h2>
            <p>We may suspend or terminate access to ZimDrive at any time if:</p>
            <ul>
              <li>You breach these Terms</li>
              <li>You misuse the App</li>
              <li>You attempt to copy, reverse engineer, or interfere with the App</li>
              <li>You use the App for unlawful purposes</li>
              <li>Continued access may create security, legal, or business risk</li>
            </ul>
            <p>We may also stop providing the App at any time.</p>
            <p>
              If the App is terminated, the rights granted to you under these Terms will end, and you must stop using
              the App.
            </p>
          </section>

          <section>
            <h2>14. Changes to These Terms</h2>
            <p>We may update these Terms and Conditions from time to time.</p>
            <p>
              When changes are made, we will post the updated Terms. You are encouraged to review the Terms regularly.
            </p>
            <p>Continued use of ZimDrive after changes are posted means you accept the updated Terms.</p>
          </section>

          <section>
            <h2>15. Governing Law</h2>
            <p>These Terms are governed by the laws of Zimbabwe, unless another applicable law requires otherwise.</p>
            <p>
              Any disputes relating to ZimDrive, these Terms, or your use of the App shall be handled under the
              applicable courts and laws of Zimbabwe.
            </p>
          </section>

          <section>
            <h2>16. Contact Us</h2>
            <p>If you have questions or suggestions about these Terms and Conditions, contact:</p>
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
