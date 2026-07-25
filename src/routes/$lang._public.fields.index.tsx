import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Scale, ArrowRight } from "lucide-react";
import { FIELDS } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/fields/")({
  head: () => ({
    meta: [
      { title: "Practice fields — LexOffice" },
      { name: "description", content: "Legal fields and specializations covered on LexOffice." },
      { property: "og:title", content: "Practice fields — LexOffice" },
      { property: "og:description", content: "Legal practice areas." },
    ],
  }),
  component: FieldsIndex,
});

function FieldsIndex() {
  const { lang } = useParams({ from: "/$lang/_public/fields/" });
  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Practice fields</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Specializations we cover</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Deep expertise across the areas that matter most to individuals, families, and businesses.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FIELDS.map((f) => (
          <Link
            key={f.slug}
            to="/$lang/fields/$slug"
            params={{ lang, slug: f.slug }}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                <Scale className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                {f.caseCount} cases
              </span>
            </div>
            <h2 className="mt-4 text-lg font-semibold group-hover:text-primary">{f.name}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{f.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
