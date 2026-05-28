import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Modern Digital Labs",
  description:
    "How Modern Digital Labs (MDL) collects, uses, stores, protects, and shares your information across our website and WhatsApp Business channels.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif font-bold text-base text-foreground">MDL</span>
            <span className="h-4 w-px bg-border" />
            <span className="hidden sm:block font-sans text-xs text-foreground/40 tracking-widest uppercase">
              Modern Digital Labs
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="mb-12">
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
          <dl className="mt-6 space-y-1.5 text-sm text-foreground/60">
            <div className="flex gap-2">
              <dt className="font-medium text-foreground/80">Modern Digital Labs (MDL)</dt>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="text-foreground/40">Website:</dt>
              <dd>
                <a
                  href="https://moderndigitallabs.co.zw"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://moderndigitallabs.co.zw
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="text-foreground/40">Operating Jurisdiction:</dt>
              <dd>Zimbabwe</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="text-foreground/40">Last Updated:</dt>
              <dd>25 May 2026</dd>
            </div>
          </dl>
        </div>

        <div className="legal-prose space-y-10">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Modern Digital Labs (“MDL”, “we”, “our”, or “us”) respects your privacy and is committed to
              protecting the personal information you share with us.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, protect, and share information when you
              interact with us through our website, WhatsApp Business channels, and related digital communication
              platforms.
            </p>
            <p>
              Our website mainly works as a landing page that directs customers to communicate with us through
              WhatsApp. Most service discussions, lead generation, ordering, consultation, document sharing,
              project communication, and service fulfilment happen directly inside WhatsApp chat threads.
            </p>
            <p>
              By using our website, clicking our WhatsApp links, contacting us through WhatsApp, or requesting our
              services, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>
              We collect information in two main ways: automatically through our website and directly from you
              through WhatsApp or other communication channels.
            </p>

            <h3>2.1 Automatically Collected Website Data</h3>
            <p>
              When you visit our website, our systems or hosting provider may automatically collect basic technical
              information, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Date and time of access</li>
              <li>Basic server log information</li>
              <li>General website usage metrics</li>
            </ul>
            <p>
              This information helps us maintain website security, detect technical issues, understand visitor
              activity, and improve website performance.
            </p>

            <h3>2.2 Information You Provide Through WhatsApp Chat</h3>
            <p>
              Because most of our work is handled through WhatsApp Business, we may collect personal and business
              information that you voluntarily send to us in chat. This may include:
            </p>
            <ul>
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Business name</li>
              <li>Physical address</li>
              <li>Billing details</li>
              <li>Project requirements</li>
              <li>Domain name preferences</li>
              <li>Hosting requirements</li>
              <li>Login credentials that you choose to share with us</li>
              <li>Documents, images, files, screenshots, or other attachments</li>
              <li>Technical specifications for applications, websites, or systems</li>
              <li>Business ideas, branding material, and development assets</li>
            </ul>

            <h3>2.3 Information Required for Domain Registration</h3>
            <p>
              When you request domain registration services, we may need to collect and process information required
              by official domain registrars or registry operators. This may include:
            </p>
            <ul>
              <li>Full legal name</li>
              <li>Physical address</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Organisation or business name</li>
              <li>Administrative and technical contact details</li>
            </ul>
            <p>
              Some domain registration information may be required for WHOIS, registry, verification, ownership, or
              compliance purposes, depending on the domain extension and registrar rules.
            </p>

            <h3>2.4 Information Required for Hosting Services</h3>
            <p>
              When you request hosting setup or hosting acquisition, we may collect information needed to create,
              configure, secure, or manage hosting environments. This may include:
            </p>
            <ul>
              <li>Hosting account details</li>
              <li>Domain information</li>
              <li>Server configuration requirements</li>
              <li>Email hosting requirements</li>
              <li>Database details</li>
              <li>Login credentials</li>
              <li>Security settings</li>
              <li>Website files or application files</li>
            </ul>

            <h3>2.5 Information Required for Application Development</h3>
            <p>
              When you request website, software, or application development services, we may collect project-related
              information such as:
            </p>
            <ul>
              <li>Business requirements</li>
              <li>Technical specifications</li>
              <li>User interface ideas</li>
              <li>Branding assets</li>
              <li>Content</li>
              <li>Images</li>
              <li>Design references</li>
              <li>Database structures</li>
              <li>API credentials</li>
              <li>Testing information</li>
              <li>Deployment requirements</li>
            </ul>
            <p>
              Some of this information may be confidential or commercially sensitive. We treat such information with
              care and only use it for the purpose of providing the requested service.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your information only for legitimate business and service delivery purposes, including:</p>
            <ul>
              <li>Responding to enquiries sent through WhatsApp or our website</li>
              <li>Preparing quotations, invoices, and service proposals</li>
              <li>Registering domain names through authorised domain registrars</li>
              <li>Submitting required domain ownership and contact information</li>
              <li>Acquiring, setting up, and configuring hosting services</li>
              <li>Creating and managing hosting accounts</li>
              <li>Developing websites, applications, systems, and digital tools</li>
              <li>Communicating project updates</li>
              <li>Providing technical support</li>
              <li>Troubleshooting service issues</li>
              <li>Securing websites, applications, hosting accounts, and server environments</li>
              <li>Maintaining internal business records</li>
              <li>Preventing fraud, abuse, unauthorised access, or misuse of our services</li>
              <li>Complying with legal, regulatory, registrar, hosting provider, or platform requirements</li>
            </ul>
            <p>We do not use your personal information for unrelated purposes without your permission.</p>
          </section>

          <section>
            <h2>4. Payment Information</h2>
            <p>
              Payments may be handled through external billing links, bank transfer instructions, mobile money
              instructions, or other payment methods communicated to you directly through WhatsApp or official
              business channels.
            </p>
            <p>
              We do not intentionally collect or store full payment card details inside WhatsApp chats. If a
              third-party payment provider is used, that provider is responsible for processing payment information
              according to its own privacy policy and security standards.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Data Sharing</h2>
            <p>We do not sell your personal information.</p>
            <p>
              However, in order to provide certain services, we may need to share relevant information with trusted
              third parties, including:
            </p>
            <ul>
              <li>Domain registrars</li>
              <li>Domain registry operators</li>
              <li>Cloud hosting providers</li>
              <li>Server infrastructure providers</li>
              <li>Email hosting providers</li>
              <li>Payment processors</li>
              <li>Security service providers</li>
              <li>Technical contractors or developers assisting with your project</li>
              <li>Legal or regulatory authorities where required by law</li>
            </ul>
            <p>
              For example, domain registration often requires us to submit your name, email address, phone number,
              physical address, and administrative contact information to a registrar or registry. Hosting setup may
              require us to create accounts or configure services with third-party hosting providers.
            </p>
            <p>We only share the information reasonably necessary to complete the requested service.</p>
          </section>

          <section>
            <h2>6. WhatsApp and Chat-Based Data Security</h2>
            <p>Most client communication with MDL takes place through WhatsApp Business.</p>
            <p>
              WhatsApp provides encryption for message transmission between users. However, once messages, files,
              credentials, or documents are received on our business devices or systems, we are responsible for
              handling them securely.
            </p>
            <p>To protect your data after we receive it, we use reasonable internal security measures, including:</p>
            <ul>
              <li>Limiting access to client information</li>
              <li>Using password protection on business devices where practical</li>
              <li>Avoiding unnecessary forwarding of client files or credentials</li>
              <li>Storing sensitive information only where needed for service delivery</li>
              <li>Deleting unnecessary project files when they are no longer required</li>
              <li>Taking reasonable steps to prevent unauthorised access, loss, misuse, or disclosure</li>
            </ul>
            <p>
              You should avoid sending highly sensitive information through chat unless it is necessary for the
              service requested.
            </p>
          </section>

          <section>
            <h2>7. Login Credentials and Access Details</h2>
            <p>
              For some hosting, website, or application services, you may choose to provide login credentials, API
              keys, server access, domain registrar access, or administrative account details.
            </p>
            <p>
              We use such credentials only for the purpose of completing the requested work. You remain responsible
              for changing passwords, rotating keys, and securing accounts after handover or project completion.
            </p>
            <p>
              Where possible, we recommend creating temporary access accounts rather than sharing permanent master
              passwords.
            </p>
          </section>

          <section>
            <h2>8. Data Retention</h2>
            <p>We keep personal information only for as long as reasonably necessary to:</p>
            <ul>
              <li>Provide the requested services</li>
              <li>Maintain business and project records</li>
              <li>Resolve disputes</li>
              <li>Provide after-service support</li>
              <li>Comply with legal, tax, accounting, registrar, hosting, or contractual requirements</li>
              <li>Protect our rights and prevent misuse of our services</li>
            </ul>
            <p>
              WhatsApp chats, project files, invoices, and service records may be retained for operational and legal
              record-keeping purposes unless you request deletion and we are legally or contractually able to comply.
            </p>
          </section>

          <section>
            <h2>9. User Rights</h2>
            <p>Depending on your location and applicable privacy laws, you may have the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or outdated information</li>
              <li>Request deletion of your personal data or WhatsApp chat records</li>
              <li>Request restriction of certain processing activities</li>
              <li>Object to certain uses of your information</li>
              <li>Request information about how your data has been shared</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p>To exercise these rights, contact us through our official WhatsApp Business channel or by email.</p>
            <p>
              We may need to verify your identity before processing your request. Some information may not be deleted
              immediately where we are required to keep it for legal, tax, registrar, hosting, security, or
              dispute-resolution reasons.
            </p>
          </section>

          <section>
            <h2>10. Data Deletion Requests</h2>
            <p>
              You may request that we delete your personal information, project files, or WhatsApp chat records.
            </p>
            <p>
              Where possible, we will delete the requested information from our active systems and business devices.
              However, deletion may be limited where information is required for:
            </p>
            <ul>
              <li>Domain ownership records</li>
              <li>Registrar compliance</li>
              <li>Hosting account administration</li>
              <li>Tax or accounting records</li>
              <li>Legal obligations</li>
              <li>Security logs</li>
              <li>Ongoing disputes</li>
              <li>Completed transaction records</li>
            </ul>
            <p>If deletion is not fully possible, we will explain the reason where appropriate.</p>
          </section>

          <section>
            <h2>11. International Data Transfers</h2>
            <p>
              Some third-party services we use, such as domain registrars, hosting providers, payment processors, or
              cloud infrastructure providers, may operate outside Zimbabwe.
            </p>
            <p>
              By requesting services from us, you understand that your information may be processed or stored in
              other countries where such providers operate.
            </p>
            <p>
              We take reasonable steps to work with reputable service providers that maintain appropriate security
              and privacy practices.
            </p>
          </section>

          <section>
            <h2>12. Confidential Business Information</h2>
            <p>
              During application development, website development, hosting setup, or consulting, you may share
              confidential business ideas, project details, designs, technical information, or commercial plans.
            </p>
            <p>
              We will not intentionally disclose your confidential project information to unrelated third parties
              unless:
            </p>
            <ul>
              <li>It is necessary to provide the requested service</li>
              <li>You give us permission</li>
              <li>Disclosure is required by law</li>
              <li>Disclosure is required to protect our rights, systems, or users</li>
            </ul>
          </section>

          <section>
            <h2>13. Children’s Privacy</h2>
            <p>
              Our services are intended for businesses, organisations, and individuals capable of entering into
              service agreements. We do not knowingly collect personal information from children for marketing or
              service fulfilment purposes.
            </p>
            <p>
              If we become aware that we have collected personal information from a child without appropriate
              permission, we will take reasonable steps to delete it.
            </p>
          </section>

          <section>
            <h2>14. Cookies and Tracking</h2>
            <p>
              Our website may use basic cookies, analytics tools, or server logs to improve functionality, monitor
              performance, and understand visitor activity.
            </p>
            <p>
              You may disable cookies in your browser settings, although some website features may not function
              properly.
            </p>
          </section>

          <section>
            <h2>15. Security Disclaimer</h2>
            <p>
              We take reasonable steps to protect personal information, but no website, chat platform, server,
              internet transmission, or electronic storage method is completely secure.
            </p>
            <p>
              You are responsible for ensuring that the information you send to us is accurate and that any
              credentials or administrative details shared with us are changed or secured after service completion.
            </p>
          </section>

          <section>
            <h2>16. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, legal
              obligations, platform rules, or business practices.
            </p>
            <p>The latest version will be made available through our website or official communication channels.</p>
          </section>

          <section>
            <h2>17. Contact Us</h2>
            <p>
              For privacy questions, access requests, correction requests, deletion requests, or complaints, contact:
            </p>
            <div className="rounded-lg border border-border bg-card p-5 text-sm not-prose">
              <p className="font-semibold text-foreground">Modern Digital Labs (MDL)</p>
              <p className="mt-1 text-foreground/70">
                Website:{" "}
                <a
                  href="https://moderndigitallabs.co.zw"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://moderndigitallabs.co.zw
                </a>
              </p>
              <p className="text-foreground/70">
                Email:{" "}
                <a href="mailto:mushayidominic@gmail.com" className="text-accent hover:underline">
                 mushayidominic@gmail.com
                </a>
              </p>
              <p className="text-foreground/70">Jurisdiction: Zimbabwe</p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
