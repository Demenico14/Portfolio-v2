import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZimDrive — Zimbabwe VID Test Prep App",
  description:
    "Pass your Zimbabwe VID driving test with ZimDrive — practice mock exams, road signs, study notes, and daily challenges designed for Zimbabwean learner drivers.",
  keywords: [
    "ZimDrive",
    "Zimbabwe VID test",
    "VID driving test",
    "Zimbabwe driving test app",
    "learner drivers Zimbabwe",
    "road signs Zimbabwe",
    "VID mock exam",
    "driving test prep Zimbabwe",
  ],
  alternates: {
    canonical: "/zimdrive",
  },
  openGraph: {
    type: "website",
    url: "https://moderndigitallabs.co.zw/zimdrive",
    title: "ZimDrive — Zimbabwe VID Test Prep App",
    description:
      "Pass your Zimbabwe VID driving test with ZimDrive — practice mock exams, road signs, study notes, and daily challenges.",
    images: [{ url: "/zimdrive-app.png", width: 767, height: 1648, alt: "ZimDrive app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZimDrive — Zimbabwe VID Test Prep App",
    description:
      "Practice mock exams, road signs, study notes, and daily challenges for the Zimbabwe VID driving test.",
    images: ["/zimdrive-app.png"],
  },
};

// MobileApplication structured data. Once the app is live, add `installUrl` / `downloadUrl`
// (the Play Store listing) and `offers` (price, even if 0) here.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": "https://moderndigitallabs.co.zw/zimdrive#app",
  name: "ZimDrive",
  url: "https://moderndigitallabs.co.zw/zimdrive",
  description:
    "ZimDrive helps Zimbabwean learner drivers prepare for the VID provisional driving test with timed mock exams, road signs, study notes, and a daily challenge.",
  operatingSystem: "ANDROID",
  applicationCategory: "EducationalApplication",
  image: "https://moderndigitallabs.co.zw/zimdrive-app.png",
  inLanguage: "en-ZW",
  audience: { "@type": "Audience", audienceType: "Learner drivers in Zimbabwe" },
  author: { "@id": "https://moderndigitallabs.co.zw/#organization" },
  publisher: { "@id": "https://moderndigitallabs.co.zw/#organization" },
};

export default function ZimDriveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
