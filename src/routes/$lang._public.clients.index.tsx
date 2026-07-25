import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Building2, MapPin, Briefcase } from "lucide-react";
import { CLIENTS } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/clients/")({
  head: () => ({
    meta: [
      { title: "Clients — LexOffice" },
      { name: "description", content: "Browse client organizations served on the LexOffice platform." },
      { property: "og:title", content: "Clients — LexOffice" },
      { property: "og:description", content: "Client organizations on LexOffice." },
    ],
  }),
  component: ClientsIndex,
});

function ClientsIndex() {
  const { lang } = useParams({ from: "/$lang/_public/clients/" });
  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Clients</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Organizations we work with</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Trusted by companies across manufacturing, healthcare, energy, retail and more.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CLIENTS.map((c) => (
          <Link
            key={c.id}
            to="/$lang/clients/$id"
            params={{ lang, id: c.id }}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h2 className="font-semibold group-hover:text-primary">{c.name}</h2>
                <p className="text-sm text-muted-foreground">{c.industry}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {c.city}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="h-4 w-4" />
                {c.matters} matters
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">Client since {c.since}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
