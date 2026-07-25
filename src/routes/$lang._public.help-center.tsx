import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Search, BookOpen, CreditCard, Users, Shield, Zap, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/$lang/_public/help-center")({
  head: () => ({
    meta: [
      { title: "Help Center — LexOffice" },
      { name: "description", content: "Guides, tutorials, and answers to common questions about using LexOffice." },
      { property: "og:title", content: "Help Center — LexOffice" },
      { property: "og:description", content: "Guides and answers for LexOffice users." },
    ],
  }),
  component: HelpCenterPage,
});

const CATEGORIES = [
  { icon: Zap, title: "Getting started", desc: "Set up your workspace and invite your team." },
  { icon: BookOpen, title: "Cases & documents", desc: "Manage matters, files, and versions." },
  { icon: Users, title: "Clients & teams", desc: "Roles, permissions, and collaboration." },
  { icon: CreditCard, title: "Billing & invoices", desc: "Payments, invoicing, and receipts." },
  { icon: Shield, title: "Security & privacy", desc: "Data protection and access controls." },
  { icon: FileText, title: "API & integrations", desc: "Connect LexOffice to other tools." },
];

const FAQS = [
  { q: "How do I invite team members?", a: "Open Settings → Team, click Invite, enter the person's email, and choose their role. They'll get an email with a link to join your workspace." },
  { q: "Can clients access LexOffice?", a: "Yes. You can grant clients scoped access to their cases, documents, and invoices through the client portal role." },
  { q: "Is my data encrypted?", a: "All data is encrypted in transit and at rest. Access is scoped by role, with a full audit trail on sensitive actions." },
  { q: "Which languages are supported?", a: "The interface is available in English, Arabic, French, Hindi, Russian, Spanish, and Italian, with full RTL support." },
  { q: "How does billing work?", a: "You're billed monthly per active seat. You can add or remove seats at any time from Settings → Billing." },
  { q: "Can I export my data?", a: "Yes. You can export cases, contacts, and documents at any time from the workspace settings." },
];

function HelpCenterPage() {
  const { lang } = useParams({ from: "/$lang/_public/help-center" });
  return (
    <div className="space-y-16">
      <section className="text-center max-w-3xl mx-auto">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Help center</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">How can we help?</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Search our guides or browse by topic. Can't find what you need? We're one message away.
        </p>
        <div className="mt-8 relative max-w-xl mx-auto">
          <Search className="absolute start-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search articles, guides, and FAQs…"
            className="w-full rounded-full border border-input bg-card ps-11 pe-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Browse by topic</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
          {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-8 md:p-10 text-center">
        <h2 className="text-2xl font-semibold">Still need help?</h2>
        <p className="mt-2 text-muted-foreground">Our support team typically responds within a few hours.</p>
        <Link
          to="/$lang/contact"
          params={{ lang }}
          className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Contact support
        </Link>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full text-start px-6 py-4 flex items-start justify-between gap-4"
    >
      <div>
        <div className="font-medium">{q}</div>
        {open && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a}</p>}
      </div>
      <ChevronDown className={`h-4 w-4 mt-1 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
  );
}
