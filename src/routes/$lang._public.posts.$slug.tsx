import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { Clock, User, ArrowLeft, Calendar } from "lucide-react";
import { POSTS } from "@/lib/public-mock";

export const Route = createFileRoute("/$lang/_public/posts/$slug")({
  head: ({ params }) => {
    const p = POSTS.find((x) => x.slug === params?.slug);
    const title = p ? `${p.title} — LexOffice` : "Article — LexOffice";
    return {
      meta: [
        { title },
        { name: "description", content: p?.excerpt ?? "Legal article on LexOffice." },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.excerpt ?? "Legal article." },
        { property: "og:type", content: "article" },
      ],
    };
  },
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: PostDetail,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function PostDetail() {
  const { lang } = useParams({ from: "/$lang/_public/posts/$slug" });
  const { post } = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug && p.tag === post.tag).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <Link to="/$lang/posts" params={{ lang }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All posts
      </Link>

      <header className="space-y-4">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{post.tag}</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">{post.title}</h1>
        <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {formatDate(post.date)}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readMin} min read</span>
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-base leading-relaxed text-foreground/90">{post.body}</p>
        <p className="text-base leading-relaxed text-foreground/90">
          For personalized advice on this topic, book a consultation with one of our attorneys through
          the Services page. This article is intended for general information only and does not
          constitute legal advice.
        </p>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border pt-8">
          <h2 className="text-lg font-semibold">Related articles</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/$lang/posts/$slug"
                params={{ lang, slug: r.slug }}
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/40"
              >
                <h3 className="font-medium">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
