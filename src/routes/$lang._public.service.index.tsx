import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/service/")({
  head: () => ({
    meta: [
      { title: "Services — LexOffice" },
      { name: "description", content: "Explore the legal services available through LexOffice." },
      { property: "og:title", content: "Services — LexOffice" },
      { property: "og:description", content: "Legal services offered on LexOffice." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const { lang } = useParams({ from: "/$lang/_public/service/" });
  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Services</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Legal services, on demand</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From single consultations to full litigation representation — transparent pricing, expert delivery.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            to="/$lang/service/$slug"
            params={{ lang, slug: s.slug }}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <h2 className="text-lg font-semibold group-hover:text-primary">{s.name}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.summary}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm">
                <span className="text-muted-foreground">From </span>
                <span className="font-semibold">${s.priceFrom}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
