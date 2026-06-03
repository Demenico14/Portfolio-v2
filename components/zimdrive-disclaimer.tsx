import { AlertTriangle } from "lucide-react";

export default function ZimDriveDisclaimer() {
  return (
    <aside
      role="note"
      aria-labelledby="no-gov-affiliation"
      className="mb-12 rounded-2xl border p-6 sm:p-7"
      style={{ borderColor: "#F9731640", background: "#F9731510" }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex size-7 shrink-0 items-center justify-center rounded-lg text-white"
          style={{ background: "#F97316" }}
        >
          <AlertTriangle className="size-4" />
        </span>
        <h2 id="no-gov-affiliation" className="font-serif text-lg font-bold tracking-tight text-foreground">
          Disclaimer / No Government Affiliation
        </h2>
      </div>

      <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
        <p>
          ZimDrive is an independent educational application created to help learners prepare for their provisional
          driving test in Zimbabwe.
        </p>
        <p>
          This app is{" "}
          <strong className="font-semibold text-foreground">
            not affiliated with, endorsed by, sponsored by, or officially connected to
          </strong>{" "}
          the Government of Zimbabwe, the Traffic Safety Council of Zimbabwe (TSCZ), the Vehicle Inspection
          Department (VID), or any other government department, regulatory authority, or official examination body.
        </p>
        <p>
          The content provided in this app is intended for{" "}
          <strong className="font-semibold text-foreground">educational and practice purposes only</strong>. While
          we aim to provide accurate and helpful learning material, ZimDrive does not guarantee that the questions,
          answers, explanations, or practice tests will be identical to those used in any official driving test or
          examination.
        </p>
        <p>
          Some information in the app may be based on or derived from publicly available road safety and learner
          driver materials, including materials made available by the Traffic Safety Council of Zimbabwe (TSCZ) and
          other public sources. All such information is used only to support learner education and road safety
          awareness.
        </p>
        <p>
          Users are encouraged to consult official sources, including the Traffic Safety Council of Zimbabwe, VID, and
          other relevant authorities, for the most accurate and up-to-date legal, regulatory, and examination
          information.
        </p>
        <p>
          By using ZimDrive, users understand that the app is a private educational tool and that the developers,
          owners, and publishers of the app are not responsible for any loss, failed examination result,
          misunderstanding, or consequence arising from reliance on the app’s content alone.
        </p>
      </div>
    </aside>
  );
}
