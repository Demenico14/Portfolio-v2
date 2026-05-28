import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms and Conditions — Modern Digital Labs",
  description:
    "The Terms and Conditions governing your use of services provided by Modern Digital Labs (MDL), including web development, domains, hosting, and support.",
};

export default function TermsPage() {
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
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Terms and Conditions</h1>
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
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions (“Terms”) govern your use of services provided by Modern Digital Labs
              (“MDL”, “we”, “our”, or “us”).
            </p>
            <p>
              By visiting our website, clicking a WhatsApp contact link, initiating a service request through
              WhatsApp, requesting a quotation, sending project information, making payment, or using our services,
              you agree to be bound by these Terms.
            </p>
            <p>If you do not agree with these Terms, you should not request or use our services.</p>
          </section>

          <section>
            <h2>2. Our Services</h2>
            <p>MDL provides digital services including, but not limited to:</p>
            <ul>
              <li>Website development</li>
              <li>Application development</li>
              <li>Domain registration assistance</li>
              <li>Hosting acquisition and setup</li>
              <li>Server configuration</li>
              <li>Technical consulting</li>
              <li>Website maintenance</li>
              <li>Digital project support</li>
              <li>Related technology services</li>
            </ul>
            <p>
              Most communication, ordering, project discussion, file sharing, quotation approval, and service
              fulfilment takes place through WhatsApp Business chat threads.
            </p>
          </section>

          <section>
            <h2>3. WhatsApp-Based Service Requests</h2>
            <p>
              You agree that messages sent through our official WhatsApp Business channel may be used to confirm:
            </p>
            <ul>
              <li>Service requests</li>
              <li>Project scope</li>
              <li>Pricing</li>
              <li>Delivery timelines</li>
              <li>Technical requirements</li>
              <li>Change requests</li>
              <li>Approvals</li>
              <li>Handover instructions</li>
              <li>Support requests</li>
            </ul>
            <p>
              A service request made through WhatsApp may be treated as a valid instruction from you, especially
              where it is followed by payment, file submission, or project approval.
            </p>
            <p>
              You are responsible for ensuring that the information you send through WhatsApp is accurate, complete,
              and authorised.
            </p>
          </section>

          <section>
            <h2>4. Quotations, Pricing, and Payment</h2>
            <p>Prices may be provided through WhatsApp, invoices, proposals, or written messages.</p>
            <p>Unless otherwise stated:</p>
            <ul>
              <li>Prices are valid only for the period stated in the quotation</li>
              <li>Work begins after the required deposit or full payment is received</li>
              <li>Third-party costs may change without notice</li>
              <li>
                Domain, hosting, software, plugin, API, app store, or licensing fees are separate from our service
                fees unless clearly included
              </li>
              <li>
                Payments are non-refundable once work has started, except where required by law or expressly agreed
                in writing
              </li>
            </ul>
            <p>
              Payment methods may include bank transfer, external billing links, mobile money, or other instructions
              sent through official business channels.
            </p>
          </section>

          <section>
            <h2>5. Domain Registration Services</h2>
            <p>
              When you request domain registration, you are responsible for providing accurate and complete
              registration information.
            </p>
            <p>This may include:</p>
            <ul>
              <li>Full legal name</li>
              <li>Physical address</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Organisation details</li>
              <li>Administrative contact details</li>
              <li>Technical contact details</li>
            </ul>
            <p>
              You understand and agree that domain registration depends on third-party registrars, registry
              operators, domain availability, verification processes, and payment confirmation.
            </p>
            <p>MDL is not liable for:</p>
            <ul>
              <li>Domain registration failure caused by incorrect information</li>
              <li>Loss of a domain due to late payment</li>
              <li>Domain drops caused by missed renewals</li>
              <li>Registry delays</li>
              <li>Registrar system errors</li>
              <li>Domain suspension due to policy violations</li>
              <li>Disputes over domain ownership</li>
              <li>Changes in registry or registrar rules</li>
            </ul>
            <p>
              A domain is not guaranteed until it has been successfully registered and confirmed by the relevant
              registrar or registry.
            </p>
          </section>

          <section>
            <h2>6. Hosting Services</h2>
            <p>
              When we assist with hosting acquisition, setup, or configuration, we may act as an intermediary between
              you and an upstream hosting provider.
            </p>
            <p>
              You agree to comply with the hosting provider’s Acceptable Use Policy, terms of service, payment rules,
              security rules, and content restrictions.
            </p>
            <p>MDL is not liable for:</p>
            <ul>
              <li>Server downtime caused by third-party hosting providers</li>
              <li>Hosting suspension caused by your content or conduct</li>
              <li>Data loss in third-party hosting environments</li>
              <li>Provider outages</li>
              <li>Provider pricing changes</li>
              <li>Email deliverability issues caused by third-party infrastructure</li>
              <li>Security breaches caused by weak passwords, outdated software, or client-side negligence</li>
            </ul>
            <p>
              You are responsible for maintaining backups unless a separate written backup service agreement exists.
            </p>
          </section>

          <section>
            <h2>7. Application and Website Development</h2>
            <p>
              For development projects, the project scope will be based on the agreed messages, quotation, proposal,
              feature list, or written specification shared through WhatsApp or another official communication
              channel.
            </p>
            <p>A development project may include milestones such as:</p>
            <ul>
              <li>Initial consultation</li>
              <li>Requirements gathering</li>
              <li>Design approval</li>
              <li>Prototype or layout review</li>
              <li>Development</li>
              <li>Testing</li>
              <li>Revisions</li>
              <li>Deployment</li>
              <li>Final handover</li>
            </ul>
            <p>Timelines are estimates unless clearly stated as fixed deadlines in writing.</p>
            <p>
              Delays may occur where you delay providing content, files, feedback, payment, access credentials,
              approvals, or technical information.
            </p>
          </section>

          <section>
            <h2>8. Project Scope and Change Requests</h2>
            <p>
              The agreed project scope includes only the features, pages, functions, designs, integrations, and
              deliverables specifically confirmed in writing.
            </p>
            <p>Any request outside the agreed scope may be treated as a change request.</p>
            <p>Change requests may affect:</p>
            <ul>
              <li>Price</li>
              <li>Timeline</li>
              <li>Project complexity</li>
              <li>Delivery date</li>
              <li>Maintenance requirements</li>
              <li>Hosting requirements</li>
            </ul>
            <p>
              We may evaluate change requests through WhatsApp chat. Work on a change request begins only once
              pricing, scope, and timing are accepted.
            </p>
          </section>

          <section>
            <h2>9. Client Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate information</li>
              <li>Respond to reasonable requests for feedback</li>
              <li>Provide required files, images, text, content, and credentials on time</li>
              <li>Ensure you have rights to any content you provide</li>
              <li>Avoid sending unlawful, harmful, or infringing material</li>
              <li>Review work and report issues promptly</li>
              <li>Make payments on time</li>
              <li>Secure any credentials handed over to you</li>
              <li>Change passwords after project completion where necessary</li>
              <li>Maintain backups unless MDL is separately contracted to do so</li>
            </ul>
            <p>
              You are responsible for any loss or damage caused by inaccurate information, delayed feedback,
              unauthorised content, or insecure handling of credentials.
            </p>
          </section>

          <section>
            <h2>10. Administrative Credentials and Account Access</h2>
            <p>
              For hosting, domain, server, website, or application setup, we may provide you with administrative
              credentials, login details, API keys, or account access through WhatsApp or another agreed channel.
            </p>
            <p>Once credentials are handed over to you, you are responsible for protecting them.</p>
            <p>You should:</p>
            <ul>
              <li>Store credentials securely</li>
              <li>Avoid sharing credentials with unauthorised persons</li>
              <li>Change temporary passwords</li>
              <li>Enable two-factor authentication where available</li>
              <li>Revoke access that is no longer needed</li>
              <li>Notify us immediately if credentials are compromised</li>
            </ul>
            <p>MDL is not liable for losses caused by your failure to secure credentials after handover.</p>
          </section>

          <section>
            <h2>11. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all code, designs, layouts, graphics, documentation, project files,
              and application work created by MDL remain the property of MDL until full and final payment has been
              received.
            </p>
            <p>
              After full payment is cleared, ownership of the final agreed deliverables transfers to the client,
              excluding:
            </p>
            <ul>
              <li>Third-party libraries</li>
              <li>Open-source software</li>
              <li>Frameworks</li>
              <li>Plugins</li>
              <li>Stock assets</li>
              <li>Fonts</li>
              <li>APIs</li>
              <li>Hosting provider systems</li>
              <li>Domain registrar systems</li>
              <li>Pre-existing MDL tools, templates, methods, or reusable components</li>
            </ul>
            <p>
              MDL may retain the right to reuse general knowledge, techniques, non-client-specific code patterns, and
              development methods gained during the project.
            </p>
            <p>You may not claim ownership of unpaid work, drafts, rejected concepts, or internal development tools.</p>
          </section>

          <section>
            <h2>12. Third-Party Tools, Libraries, and Services</h2>
            <p>
              Projects may rely on third-party tools, libraries, APIs, plugins, hosting platforms, payment providers,
              analytics tools, app stores, or external systems.
            </p>
            <p>
              You understand that third-party services are governed by their own terms, pricing, availability,
              policies, and technical limits.
            </p>
            <p>MDL is not responsible for:</p>
            <ul>
              <li>Third-party service outages</li>
              <li>API changes</li>
              <li>Pricing changes</li>
              <li>Plugin failures</li>
              <li>App store policy changes</li>
              <li>External account suspension</li>
              <li>Third-party security incidents</li>
              <li>Discontinued third-party services</li>
            </ul>
          </section>

          <section>
            <h2>13. App Store and Platform Approval</h2>
            <p>
              Where we develop applications intended for platforms such as Google Play, Apple App Store, or other
              distribution channels, approval is not guaranteed.
            </p>
            <p>
              MDL is not liable for app store rejection, review delays, account suspension, policy changes, or
              distribution restrictions imposed by third-party platforms.
            </p>
            <p>
              We may assist with corrections or resubmissions where agreed, but additional work may attract
              additional fees.
            </p>
          </section>

          <section>
            <h2>14. Confidentiality</h2>
            <p>Both parties agree to treat confidential project information with reasonable care.</p>
            <p>Confidential information may include:</p>
            <ul>
              <li>Business ideas</li>
              <li>Technical specifications</li>
              <li>Source code</li>
              <li>Credentials</li>
              <li>Designs</li>
              <li>Client data</li>
              <li>Internal business processes</li>
              <li>Non-public project information</li>
            </ul>
            <p>
              We will not intentionally disclose your confidential information to unrelated third parties unless
              required for service delivery, authorised by you, or required by law.
            </p>
          </section>

          <section>
            <h2>15. Acceptable Use</h2>
            <p>You must not use our services for:</p>
            <ul>
              <li>Illegal activity</li>
              <li>Fraud</li>
              <li>Spam</li>
              <li>Malware</li>
              <li>Phishing</li>
              <li>Copyright infringement</li>
              <li>Harassment</li>
              <li>Hate speech</li>
              <li>Unauthorised data collection</li>
              <li>Hosting harmful or unlawful content</li>
              <li>Any activity that violates hosting provider, registrar, platform, or legal rules</li>
            </ul>
            <p>
              We may refuse, suspend, or terminate services where we reasonably believe these Terms have been
              breached.
            </p>
          </section>

          <section>
            <h2>16. Suspension and Termination</h2>
            <p>We may suspend, halt, or terminate services if:</p>
            <ul>
              <li>Payment is overdue</li>
              <li>You breach these Terms</li>
              <li>You provide false or misleading information</li>
              <li>You engage in abusive, threatening, or inappropriate chat behaviour</li>
              <li>You request unlawful work</li>
              <li>You misuse hosting or domain services</li>
              <li>You fail to provide required information</li>
              <li>Continued service creates legal, security, financial, or reputational risk</li>
            </ul>
            <p>
              For development projects, we may pause work until outstanding payments, approvals, content, or required
              access details are provided.
            </p>
          </section>

          <section>
            <h2>17. Refunds</h2>
            <p>
              Refunds are not automatically available once work has started, a domain has been registered, hosting
              has been purchased, third-party costs have been paid, or development time has been spent.
            </p>
            <p>Non-refundable items may include:</p>
            <ul>
              <li>Domain registration fees</li>
              <li>Hosting fees</li>
              <li>Third-party software fees</li>
              <li>Plugin or API costs</li>
              <li>Completed work</li>
              <li>Work already in progress</li>
              <li>Custom design or development labour</li>
            </ul>
            <p>
              Any refund decision will depend on the circumstances, work completed, third-party costs incurred, and
              applicable law.
            </p>
          </section>

          <section>
            <h2>18. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, MDL’s total liability for any claim, dispute, loss, or damage
              shall be limited to the exact amount paid by the customer for the specific service giving rise to the
              dispute.
            </p>
            <p>MDL is not liable for:</p>
            <ul>
              <li>Loss of profits</li>
              <li>Loss of business</li>
              <li>Loss of data</li>
              <li>Loss of domain names due to late payment or inaccurate information</li>
              <li>Server downtime</li>
              <li>Hosting provider failure</li>
              <li>App store rejection</li>
              <li>Third-party platform restrictions</li>
              <li>Security incidents caused by client negligence</li>
              <li>Indirect, incidental, special, or consequential damages</li>
            </ul>
            <p>
              You agree that digital services involve third-party systems, internet infrastructure, hosting
              environments, registrars, software dependencies, and external platforms that are not fully controlled
              by MDL.
            </p>
          </section>

          <section>
            <h2>19. No Guarantee of Results</h2>
            <p>We aim to provide professional digital services, but we do not guarantee:</p>
            <ul>
              <li>Specific sales results</li>
              <li>Search engine rankings</li>
              <li>App downloads</li>
              <li>Business revenue</li>
              <li>Platform approval</li>
              <li>Zero downtime</li>
              <li>Complete immunity from cyberattacks</li>
              <li>Permanent compatibility with all third-party systems</li>
            </ul>
            <p>
              Any marketing, performance, ranking, or business growth discussions are estimates or professional
              opinions, not guarantees.
            </p>
          </section>

          <section>
            <h2>20. Maintenance and Support</h2>
            <p>
              Unless a separate maintenance agreement exists, support after project completion may be limited.
            </p>
            <p>
              Additional support, updates, bug fixes, security patches, content changes, hosting changes, or feature
              additions may attract additional fees.
            </p>
            <p>
              A project is considered completed when the agreed deliverables have been provided, deployed, handed
              over, or made available for client review.
            </p>
          </section>

          <section>
            <h2>21. Governing Law</h2>
            <p>These Terms are governed by the laws of Zimbabwe.</p>
            <p>
              Any disputes arising from these Terms, our website, WhatsApp-based service requests, domain services,
              hosting services, application development, or related business dealings shall be handled under the
              courts and laws of Zimbabwe.
            </p>
          </section>

          <section>
            <h2>22. Updates to These Terms</h2>
            <p>
              We may update these Terms from time to time to reflect changes in our services, pricing, legal
              obligations, third-party provider rules, or business operations.
            </p>
            <p>The latest version will be made available through our website or official communication channels.</p>
          </section>

          <section>
            <h2>23. Contact</h2>
            <p>For questions about these Terms, contact:</p>
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
