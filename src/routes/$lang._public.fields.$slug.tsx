import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { Scale, ArrowLeft, Star, MapPin } from "lucide-react";
import { FIELDS, LAWYERS } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/fields/$slug")({
  head: ({ params }) => {
    const f = FIELDS.find((x) => x.slug === params?.slug);
    const title = f ? `${f.name} — LexOffice` : "Field — LexOffice";
    return {
      meta: [
        { title },
        { name: "description", content: f?.description ?? "A legal practice field on LexOffice." },
        { property: "og:title", content: title },
        { property: "og:description", content: f?.description ?? "Legal practice field." },
      ],
    };
  },
  loader: ({ params }) => {
    const field = FIELDS.find((f) => f.slug === params.slug);
    if (!field) throw notFound();
    return { field };
  },
  component: FieldDetail,
});

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function FieldDetail() {
  const { lang } = useParams({ from: "/$lang/_public/fields/$slug" });
  const { field } = Route.useLoaderData();
  const lawyers = LAWYERS.filter((l) => l.fields.includes(field.slug));

  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <Link to="/$lang/fields" params={{ lang }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All fields
      </Link>

      <header className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="grid h-16 w-16 place-items-center rounded-xl bg-primary/10 text-primary">
          <Scale className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{field.name}</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">{field.description}</p>
          <div className="mt-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{field.caseCount}</span> matters handled to date
          </div>
        </div>
      </header>

      <section className="rounded-xl border border-border bg-card p-6 md:p-8">
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Our {field.name.toLowerCase()} practice combines advisory work with strong contentious
          capability. We help clients anticipate risk, structure transactions correctly, and — when
          disputes arise — represent them effectively at every stage. Every engagement is led by a
          senior attorney with dedicated support from associates and paralegals.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Lawyers in this field</h2>
        {lawyers.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            No lawyers currently listed for this field. Please <Link to="/$lang/contact" params={{ lang }} className="text-primary hover:underline">contact us</Link> and we'll match you with the right attorney.
          </p>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lawyers.map((l) => (
              <Link
                key={l.id}
                to="/$lang/lawyers/$id"
                params={{ lang, id: l.id }}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-accent"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary font-semibold">
                  {initials(l.name)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold group-hover:text-primary">{l.name}</div>
                  <div className="text-sm text-muted-foreground">{l.title}</div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {l.city}</span>
                    <span className="flex items-center gap-1 text-amber-500"><Star className="h-3.5 w-3.5 fill-current" /> {l.rating.toFixed(1)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
