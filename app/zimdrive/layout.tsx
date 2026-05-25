import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZimDrive — Zimbabwe VID Test Prep App | Modern Digital Labs",
  description:
    "Pass your Zimbabwe VID driving test with ZimDrive — practice mock exams, road signs, study notes, and daily challenges designed for Zimbabwean learner drivers.",
};

export default function ZimDriveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
