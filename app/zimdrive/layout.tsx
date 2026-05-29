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
    images: [{ url: "/zimdrive-app.png", alt: "ZimDrive app" }],
  },
};

export default function ZimDriveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
