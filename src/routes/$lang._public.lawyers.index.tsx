import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { MapPin, Star, Award } from "lucide-react";
import { LAWYERS, fieldName } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/lawyers/")({
  head: () => ({
    meta: [
      { title: "Lawyers — LexOffice" },
      { name: "description", content: "Directory of experienced lawyers available on the LexOffice platform." },
      { property: "og:title", content: "Lawyers — LexOffice" },
      { property: "og:description", content: "Find a lawyer for your case." },
    ],
  }),
  component: LawyersIndex,
});

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function LawyersIndex() {
  const { lang } = useParams({ from: "/$lang/_public/lawyers/" });
  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Lawyers</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Find a lawyer for your case</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Experienced attorneys across corporate, criminal, family, real estate, labor, IP, tax and immigration law.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LAWYERS.map((l) => (
          <Link
            key={l.id}
            to="/$lang/lawyers/$id"
            params={{ lang, id: l.id }}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary font-semibold">
                {initials(l.name)}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold group-hover:text-primary">{l.name}</h2>
                <p className="text-sm text-muted-foreground">{l.title}</p>
                <div className="mt-1 flex items-center gap-1 text-sm text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-medium">{l.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {l.fields.map((f) => (
                <span key={f} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                  {fieldName(f)}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {l.city}</span>
              <span className="flex items-center gap-1.5"><Award className="h-4 w-4" /> {l.years} yrs</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
