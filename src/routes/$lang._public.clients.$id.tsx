import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { Building2, MapPin, Briefcase, Calendar, ArrowLeft } from "lucide-react";
import { CLIENTS } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/clients/$id")({
  head: ({ params }) => {
    const c = CLIENTS.find((x) => x.id === params?.id);
    const title = c ? `${c.name} — Client` : "Client — LexOffice";
    return {
      meta: [
        { title },
        { name: "description", content: c ? `${c.name}, a ${c.industry} client of LexOffice since ${c.since}.` : "Client profile." },
        { property: "og:title", content: title },
        { property: "og:description", content: c?.industry ?? "Client profile." },
      ],
    };
  },
  loader: ({ params }) => {
    const client = CLIENTS.find((c) => c.id === params.id);
    if (!client) throw notFound();
    return { client };
  },
  component: ClientDetail,
});

function ClientDetail() {
  const { lang } = useParams({ from: "/$lang/_public/clients/$id" });
  const { client } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Link to="/$lang/clients" params={{ lang }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All clients
      </Link>

      <header className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="grid h-16 w-16 place-items-center rounded-xl bg-primary/10 text-primary">
          <Building2 className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{client.name}</h1>
          <p className="mt-1 text-muted-foreground">{client.industry}</p>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: MapPin, label: "Location", value: client.city },
          { icon: Briefcase, label: "Active matters", value: `${client.matters}` },
          { icon: Calendar, label: "Client since", value: `${client.since}` },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
              <s.icon className="h-4 w-4" /> {s.label}
            </div>
            <div className="mt-2 text-lg font-semibold">{s.value}</div>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-border bg-card p-6 md:p-8">
        <h2 className="text-lg font-semibold">About</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {client.name} is a {client.industry.toLowerCase()} organization headquartered in {client.city}.
          They have partnered with LexOffice since {client.since}, working closely with our attorneys
          across corporate, commercial and regulatory matters. This profile is a public overview —
          confidential engagement details are only accessible to authorized team members via the dashboard.
        </p>
      </section>
    </div>
  );
}
