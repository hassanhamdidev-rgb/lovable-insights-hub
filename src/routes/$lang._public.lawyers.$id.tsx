import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { MapPin, Star, Award, ArrowLeft, Mail, Phone } from "lucide-react";
import { LAWYERS, fieldName } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/lawyers/$id")({
  head: ({ params }) => {
    const l = LAWYERS.find((x) => x.id === params?.id);
    const title = l ? `${l.name} — ${l.title}` : "Lawyer — LexOffice";
    return {
      meta: [
        { title },
        { name: "description", content: l ? `${l.name}, ${l.title} with ${l.years} years of experience in ${l.city}.` : "Lawyer profile." },
        { property: "og:title", content: title },
        { property: "og:description", content: l?.title ?? "Lawyer profile." },
      ],
    };
  },
  loader: ({ params }) => {
    const lawyer = LAWYERS.find((l) => l.id === params.id);
    if (!lawyer) throw notFound();
    return { lawyer };
  },
  component: LawyerDetail,
});

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function LawyerDetail() {
  const { lang } = useParams({ from: "/$lang/_public/lawyers/$id" });
  const { lawyer } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Link to="/$lang/lawyers" params={{ lang }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All lawyers
      </Link>

      <header className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-primary/10 text-primary text-xl font-semibold">
          {initials(lawyer.name)}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{lawyer.name}</h1>
          <p className="mt-1 text-muted-foreground">{lawyer.title}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {lawyer.fields.map((f) => (
              <span key={f} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                {fieldName(f)}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: MapPin, label: "Based in", value: lawyer.city },
          { icon: Award, label: "Experience", value: `${lawyer.years} years` },
          { icon: Star, label: "Client rating", value: `${lawyer.rating.toFixed(1)} / 5.0` },
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
        <h2 className="text-lg font-semibold">Biography</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {lawyer.name} is a {lawyer.title.toLowerCase()} based in {lawyer.city} with {lawyer.years} years
          of practice. Their work focuses on {lawyer.fields.map(fieldName).join(", ")}, representing
          both organizations and individuals in advisory and contentious matters. They combine deep
          subject-matter expertise with a pragmatic, client-first approach.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 md:p-8">
        <h2 className="text-lg font-semibold">Get in touch</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={`mailto:${lawyer.name.split(" ")[0].toLowerCase()}@lexoffice.example`} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent">
            <Phone className="h-4 w-4" /> Call the office
          </a>
        </div>
      </section>
    </div>
  );
}
