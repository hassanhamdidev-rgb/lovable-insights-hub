import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/_public/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — LexOffice" },
      { name: "description", content: "The terms governing the use of the LexOffice platform." },
      { property: "og:title", content: "Terms & Conditions — LexOffice" },
      { property: "og:description", content: "Terms of service for LexOffice." },
    ],
  }),
  component: TermsPage,
});

const TERMS = [
  { title: "1. Acceptance of terms", body: "By creating an account or using LexOffice, you agree to be bound by these Terms and by our Privacy Policy. If you do not agree, do not use the service." },
  { title: "2. Eligibility", body: "You must be at least 18 years old and have the legal authority to enter into a binding agreement on behalf of yourself or the organization you represent." },
  { title: "3. Accounts & security", body: "You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. Notify us immediately of any unauthorized use." },
  { title: "4. Acceptable use", body: "You agree not to misuse the service, including uploading unlawful content, attempting to breach security, or interfering with other users' access." },
  { title: "5. Client data ownership", body: "You retain all rights to the case and client data you upload. We access it only as necessary to provide the service or as required by law." },
  { title: "6. Subscriptions & billing", body: "Paid plans are billed in advance on a monthly or annual basis. Subscriptions renew automatically unless canceled before the renewal date." },
  { title: "7. Termination", body: "You may cancel at any time from your account settings. We may suspend or terminate accounts that violate these Terms with reasonable notice where practical." },
  { title: "8. Warranties & liability", body: "The service is provided \"as is\". To the maximum extent permitted by law, our aggregate liability is limited to the fees you paid in the 12 months preceding the claim." },
  { title: "9. Governing law", body: "These Terms are governed by the laws of the jurisdiction where LexOffice is incorporated, without regard to conflict-of-law rules." },
  { title: "10. Contact", body: "Questions about these Terms? Email legal@lexoffice.example." },
];

function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <header className="text-center">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Legal</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Terms & Conditions</h1>
        <p className="mt-4 text-muted-foreground">Effective date: January 15, 2026</p>
      </header>

      <section className="rounded-xl border border-border bg-card p-6 md:p-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          These Terms govern your use of LexOffice. Please read them carefully — together with our
          Privacy Policy they form the agreement between you and us.
        </p>
      </section>

      <div className="space-y-4">
        {TERMS.map((t) => (
          <article key={t.title} className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">{t.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
