import { createFileRoute } from "@tanstack/react-router";
import { Scale, Target, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/$lang/_public/about")({
  head: () => ({
    meta: [
      { title: "About — LexOffice" },
      { name: "description", content: "Learn about LexOffice, our mission, and the team behind the legal practice management platform." },
      { property: "og:title", content: "About — LexOffice" },
      { property: "og:description", content: "The team and mission behind LexOffice." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Target, title: "Purpose-built", body: "Every workflow is designed around how law offices actually operate — from intake to invoicing." },
  { icon: Users, title: "Client-first", body: "We build tools that make it easier for lawyers to spend more time with their clients, not their software." },
  { icon: Sparkles, title: "Modern & fast", body: "A clean interface, keyboard-friendly UX, and responsive performance on any device." },
  { icon: Scale, title: "Trust & privacy", body: "Role-based access, audit trails, and data protection are the foundation of everything we ship." },
];

function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="text-center max-w-3xl mx-auto">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">About us</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Legal work, reimagined for modern teams</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          LexOffice is a multi-tenant legal practice management platform bringing cases, documents,
          hearings, and billing into one clear workspace — for law offices of every size.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold">Our mission</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Give legal professionals the same quality of software modern product teams enjoy —
            fast, focused, and built to remove busywork so lawyers can focus on their clients.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold">Our story</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Built alongside working attorneys, LexOffice began as an in-house tool and grew into a
            complete platform trusted by law offices across multiple jurisdictions and languages.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-center">What we value</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3 rounded-xl border border-border bg-card p-8">
        {[
          { k: "500+", v: "Law offices" },
          { k: "7", v: "Supported languages" },
          { k: "99.9%", v: "Uptime" },
        ].map((s) => (
          <div key={s.v} className="text-center">
            <div className="text-3xl font-bold tracking-tight tabular-nums">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
