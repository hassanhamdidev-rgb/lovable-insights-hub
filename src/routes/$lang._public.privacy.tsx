import { createFileRoute } from "@tanstack/react-router";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

export const Route = createFileRoute("/$lang/_public/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — LexOffice" },
      { name: "description", content: "How LexOffice collects, uses, and protects your data." },
      { property: "og:title", content: "Privacy Policy — LexOffice" },
      { property: "og:description", content: "Our privacy practices and data protections." },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  { icon: Database, title: "Information we collect", body: "Account details you provide (name, email, organization), case and document data you upload, and technical logs such as IP address, browser type, and timestamps required to operate the service." },
  { icon: Eye, title: "How we use it", body: "To provide, maintain, and improve the platform; to authenticate users; to send transactional notifications; and to meet legal and regulatory obligations." },
  { icon: Lock, title: "How we protect it", body: "Data is encrypted in transit (TLS 1.2+) and at rest. Access is scoped by role, audited, and reviewed on a rolling basis." },
  { icon: UserCheck, title: "Your rights", body: "You may access, correct, export, or delete your personal data at any time via your account settings, or by contacting our privacy team." },
  { icon: Shield, title: "Data sharing", body: "We do not sell personal data. We share it only with processors strictly necessary to operate the platform, under contract and with equivalent protections." },
  { icon: Mail, title: "Contact", body: "Questions about this policy? Reach us at privacy@lexoffice.example — we respond within 5 business days." },
];

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <header className="text-center">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Legal</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: January 15, 2026</p>
      </header>

      <section className="rounded-xl border border-border bg-card p-6 md:p-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          LexOffice ("we", "us") provides a legal practice management platform. This policy explains what
          data we collect, how we use it, and the choices you have. By using LexOffice you agree to the
          practices described below.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {SECTIONS.map(({ icon: Icon, title, body }) => (
          <article key={title} className="rounded-xl border border-border bg-card p-6">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </article>
        ))}
      </div>

      <section className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-3">
        <h2 className="text-lg font-semibold">Cookies</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We use only essential cookies required for authentication and session integrity. We do not use
          third-party advertising trackers.
        </p>
        <h2 className="pt-2 text-lg font-semibold">Retention</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Account and case data is retained while your account is active and for up to 12 months after
          closure, after which it is permanently deleted unless a legal hold applies.
        </p>
        <h2 className="pt-2 text-lg font-semibold">Changes</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We may update this policy from time to time. Material changes will be announced by email at
          least 14 days before taking effect.
        </p>
      </section>
    </div>
  );
}
