import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Clock, User } from "lucide-react";
import { POSTS } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/posts/")({
  head: () => ({
    meta: [
      { title: "Posts — LexOffice" },
      { name: "description", content: "Articles and insights from the LexOffice legal community." },
      { property: "og:title", content: "Posts — LexOffice" },
      { property: "og:description", content: "Legal insights and articles." },
    ],
  }),
  component: PostsIndex,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function PostsIndex() {
  const { lang } = useParams({ from: "/$lang/_public/posts/" });
  const [featured, ...rest] = POSTS;
  return (
    <div className="space-y-12">
      <header className="max-w-3xl">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Blog</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Legal insights & articles</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Practical guides, commentary, and updates from our attorneys.
        </p>
      </header>

      <Link
        to="/$lang/posts/$slug"
        params={{ lang, slug: featured.slug }}
        className="group block rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
      >
        <span className="text-xs font-medium uppercase tracking-wide text-primary">Featured · {featured.tag}</span>
        <h2 className="mt-3 text-2xl md:text-3xl font-bold group-hover:text-primary">{featured.title}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{featured.excerpt}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {featured.author}</span>
          <span>{formatDate(featured.date)}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {featured.readMin} min read</span>
        </div>
      </Link>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <Link
            key={p.slug}
            to="/$lang/posts/$slug"
            params={{ lang, slug: p.slug }}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-primary">{p.tag}</span>
            <h3 className="mt-2 font-semibold leading-snug group-hover:text-primary">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>{formatDate(p.date)}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readMin} min</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
