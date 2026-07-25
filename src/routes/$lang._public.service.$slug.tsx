import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { SERVICES } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/service/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params?.slug);
    const title = s ? `${s.name} — LexOffice` : "Service — LexOffice";
    return {
      meta: [
        { title },
        { name: "description", content: s?.summary ?? "Service details on LexOffice." },
        { property: "og:title", content: title },
        { property: "og:description", content: s?.summary ?? "Service details." },
      ],
    };
  },
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServiceDetail,
});

const INCLUDED = [
  "Direct access to a qualified attorney",
  "Written recommendations and next steps",
  "Confidential handling of your matter",
  "Follow-up support within 7 days",
];

function ServiceDetail() {
  const { lang } = useParams({ from: "/$lang/_public/service/$slug" });
  const { service } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <Link to="/$lang/service" params={{ lang }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All services
      </Link>

      <header className="space-y-4">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Service</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{service.name}</h1>
        <p className="text-lg text-muted-foreground">{service.summary}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <section className="rounded-xl border border-border bg-card p-6 md:col-span-2">
          <h2 className="text-lg font-semibold">What's included</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
          <ul className="mt-5 space-y-2">
            {INCLUDED.map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 text-primary" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-xl border border-border bg-card p-6 h-fit">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Starting from</div>
          <div className="mt-2 text-3xl font-bold">${service.priceFrom}</div>
          <p className="mt-2 text-xs text-muted-foreground">Final quote depends on scope and jurisdiction.</p>
          <Link
            to="/$lang/contact"
            params={{ lang }}
            className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Request this service
          </Link>
        </aside>
      </div>
    </div>
  );
}
