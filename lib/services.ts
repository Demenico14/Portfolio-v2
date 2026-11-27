/**
 * Content for the service pages (/services/[slug]).
 * One source of truth: the pages, metadata, structured data, sitemap and footer all read from here.
 * Keep statements factual; no prices, client counts or guarantees unless they are true and current.
 */

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string; // short name used in navigation and lists
  metaTitle: string; // <title>, ~60 chars, combined with the " | Modern Digital Labs" template
  metaDescription: string; // ~150 chars
  h1: string;
  intro: string;
  summary: string; // one line for lists
  includes: { title: string; body: string }[];
  fit: string[]; // who it's for
  faqs: ServiceFaq[];
  related: string[]; // slugs
  whatsapp: string; // prefilled WhatsApp message
  updated: string; // ISO date the content last changed (sitemap lastModified)
};

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    metaTitle: "Website Development in Zimbabwe",
    metaDescription:
      "Responsive, fast websites for businesses, brands and startups in Harare and across Zimbabwe, designed, built and launched by Modern Digital Labs.",
    h1: "Website development for businesses in Zimbabwe",
    intro:
      "Responsive websites designed for businesses, brands, and startups. We plan, design, build and launch your site, and set up the hosting and domain so it is live and easy to find.",
    summary: "Responsive websites designed for businesses, brands, and startups.",
    includes: [
      {
        title: "Responsive design",
        body: "Layouts planned for phones first, then tablet and desktop, so the site reads and works well on whatever your customers use.",
      },
      {
        title: "Modern development",
        body: "Built using current technologies and development practices, with fast page loads and clean, maintainable code.",
      },
      {
        title: "Search-ready setup",
        body: "Page titles and descriptions, a sitemap, and structured data, so search engines can understand and list your pages.",
      },
      {
        title: "Contact that converts",
        body: "Clear calls to action and direct WhatsApp links, so visitors can reach you in one tap.",
      },
      {
        title: "Hosting and domain included in the launch",
        body: "We handle deployment, hosting setup and domain configuration, so you get a working website, not just files.",
      },
    ],
    fit: [
      "Businesses that need a professional presence online",
      "Startups launching a new brand or product",
      "Creators and organisations replacing an outdated site",
    ],
    faqs: [
      {
        q: "How long does a website take to build?",
        a: "Most websites are completed within a few days to a few weeks depending on complexity and the scope of features required.",
      },
      {
        q: "Will my website work on mobile devices?",
        a: "Yes, every website we build is fully responsive and optimized for all screen sizes from day one.",
      },
      {
        q: "Can you help with hosting and a domain name?",
        a: "Yes. We set up hosting, register or connect your domain, and configure DNS as part of launching your site.",
      },
      {
        q: "How is pricing determined?",
        a: "Every project is unique, so pricing depends on your requirements, features, and timeline. Contact us on WhatsApp for a custom quote.",
      },
    ],
    related: ["web-hosting", "domain-registration", "maintenance-support"],
    whatsapp: "Hi MDL, I'd like a quote for a website. What I need:",
    updated: "2026-11-27",
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    metaTitle: "Custom Web Application Development in Zimbabwe",
    metaDescription:
      "Custom web applications built around your business: dashboards, booking systems, portals and internal tools, from Modern Digital Labs in Harare.",
    h1: "Custom web applications built around your business",
    intro:
      "Custom systems and applications built around your business requirements, from dashboards to booking systems and beyond, designed to support future growth.",
    summary: "Custom systems and applications built around your business requirements.",
    includes: [
      {
        title: "Requirements first",
        body: "We start by understanding your goals and how your team works, then shape the application around that process.",
      },
      {
        title: "Dashboards and internal tools",
        body: "Admin panels, reporting dashboards and record-keeping tools that replace spreadsheets and paperwork.",
      },
      {
        title: "Booking and customer portals",
        body: "Systems your customers use directly: bookings, accounts, orders and self-service.",
      },
      {
        title: "Scalable foundations",
        body: "Systems designed to support future growth, so new features can be added without starting over.",
      },
      {
        title: "Deployment and support",
        body: "We deploy the application, set up hosting, and stay available for updates and technical support after launch.",
      },
    ],
    fit: [
      "Businesses running key processes on spreadsheets or paper",
      "Teams that need a dashboard or internal tool",
      "Companies offering bookings, accounts or self-service online",
    ],
    faqs: [
      {
        q: "Do you build custom applications?",
        a: "Yes, we develop custom web applications tailored to your specific business needs, from dashboards to booking systems and beyond.",
      },
      {
        q: "Will the application work on phones?",
        a: "Yes. Every application we build is fully responsive and works in the browser on phones, tablets and computers.",
      },
      {
        q: "Can the application grow with my business?",
        a: "Yes. We design systems to support future growth, so features can be added as your needs change.",
      },
      {
        q: "How is pricing determined?",
        a: "Pricing depends on your requirements, features, and timeline. Contact us on WhatsApp for a custom quote tailored to your business.",
      },
    ],
    related: ["website-development", "web-hosting", "maintenance-support"],
    whatsapp: "Hi MDL, I'd like to discuss a web application. What I need:",
    updated: "2026-11-27",
  },
  {
    slug: "web-hosting",
    name: "Web Hosting",
    metaTitle: "Web Hosting & Deployment in Zimbabwe",
    metaDescription:
      "Reliable web hosting with full deployment and setup support for websites and web apps in Zimbabwe. Modern Digital Labs gets your site live.",
    h1: "Web hosting with deployment and setup support",
    intro:
      "Reliable hosting solutions with deployment and setup support. We put your website or application online, connect your domain, and make sure it keeps running reliably.",
    summary: "Reliable hosting solutions with deployment and setup support.",
    includes: [
      {
        title: "Hosting setup",
        body: "We choose and configure hosting that suits your website or application.",
      },
      {
        title: "Deployment",
        body: "Full deployment assistance to get your site live and running reliably.",
      },
      {
        title: "Secure connections",
        body: "HTTPS configured so your visitors connect securely and browsers trust your site.",
      },
      {
        title: "Domain connection",
        body: "Your domain pointed to your hosting, with DNS records set up correctly.",
      },
      {
        title: "Ongoing support",
        body: "Help with updates, changes and technical issues after your site is live.",
      },
    ],
    fit: [
      "New websites and applications that need to go live",
      "Sites moving from another host",
      "Owners who want someone to handle the technical setup",
    ],
    faqs: [
      {
        q: "Do you provide hosting?",
        a: "Yes, we provide web hosting solutions and full deployment assistance to get your site live and running reliably.",
      },
      {
        q: "Can you host a website you didn't build?",
        a: "Message us with details of your site and we will tell you whether we can host and deploy it.",
      },
      {
        q: "Do you set up the domain as well?",
        a: "Yes. We assist with domain registration and DNS configuration so the domain points to your hosting.",
      },
      {
        q: "How is pricing determined?",
        a: "Pricing depends on your site and requirements. Contact us on WhatsApp for a quote.",
      },
    ],
    related: ["domain-registration", "website-development", "maintenance-support"],
    whatsapp: "Hi MDL, I need hosting for a website. Details:",
    updated: "2026-11-27",
  },
  {
    slug: "domain-registration",
    name: "Domain Registration",
    metaTitle: "Domain Registration & DNS Setup in Zimbabwe",
    metaDescription:
      "Help registering and configuring your domain name, including .co.zw: DNS setup and connection to your website and hosting, by Modern Digital Labs.",
    h1: "Domain registration and DNS setup",
    intro:
      "Assistance with securing and configuring domain names. We help you register your domain, configure DNS, and connect it to your website so everything works seamlessly.",
    summary: "Assistance with securing and configuring domain names.",
    includes: [
      {
        title: "Choosing a domain",
        body: "Advice on a name that is short, clear and easy for your customers to remember.",
      },
      {
        title: "Registration",
        body: "Help securing your domain, whether a local .co.zw address or an international one such as .com.",
      },
      {
        title: "DNS configuration",
        body: "The records that connect your domain to your website, hosting and other services, set up correctly.",
      },
      {
        title: "Connection to your website",
        body: "Your domain pointed at your site with HTTPS, so it loads securely at your own address.",
      },
    ],
    fit: [
      "Businesses getting their first web address",
      "Brands moving a domain to new hosting",
      "Anyone with a domain that isn't pointing to their site",
    ],
    faqs: [
      {
        q: "Can you help with domains?",
        a: "Absolutely. We assist clients with domain registration, DNS configuration, and full setup so everything works seamlessly.",
      },
      {
        q: "Can you help with a .co.zw domain?",
        a: "Yes. Message us with the name you want and we will help you secure it and set it up.",
      },
      {
        q: "I already have a domain. Can you connect it to my site?",
        a: "Yes. We configure the DNS records so your existing domain points to your website and hosting.",
      },
    ],
    related: ["web-hosting", "website-development", "maintenance-support"],
    whatsapp: "Hi MDL, I need help with a domain name. The name I want:",
    updated: "2026-11-27",
  },
  {
    slug: "maintenance-support",
    name: "Maintenance & Support",
    metaTitle: "Website Maintenance & Support in Zimbabwe",
    metaDescription:
      "Website maintenance and technical support after launch: updates, improvements and fixes, with clear communication, from Modern Digital Labs.",
    h1: "Website maintenance and technical support",
    intro:
      "Updates, improvements, and technical support after launch. Clear communication and ongoing technical assistance whenever your site needs it.",
    summary: "Updates, improvements, and technical support after launch.",
    includes: [
      {
        title: "Content updates",
        body: "Changes to text, images, products and pages when your business changes.",
      },
      {
        title: "Improvements",
        body: "New sections, features and refinements as you learn what your visitors need.",
      },
      {
        title: "Technical support",
        body: "Help when something isn't working, from broken pages to email and domain issues.",
      },
      {
        title: "Clear communication",
        body: "Straightforward updates on what is being done and when, over WhatsApp.",
      },
    ],
    fit: [
      "Sites we built that need ongoing updates",
      "Owners without in-house technical staff",
      "Businesses that need changes made quickly",
    ],
    faqs: [
      {
        q: "Do you support websites after launch?",
        a: "Yes. We provide updates, improvements, and technical support after launch.",
      },
      {
        q: "How do I request a change?",
        a: "Send us a message on WhatsApp describing what you need and we will respond promptly.",
      },
      {
        q: "How is pricing determined?",
        a: "Pricing depends on the work involved. Contact us on WhatsApp for a quote.",
      },
    ],
    related: ["website-development", "web-applications", "web-hosting"],
    whatsapp: "Hi MDL, I need help with an existing website. What I need:",
    updated: "2026-11-27",
  },
];

export const PROCESS = [
  { title: "Planning", description: "Understanding your goals and project requirements." },
  { title: "Design", description: "Creating clean and user-friendly layouts." },
  { title: "Development", description: "Building and testing the final product." },
  { title: "Launch", description: "Deployment, hosting setup, and support." },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
