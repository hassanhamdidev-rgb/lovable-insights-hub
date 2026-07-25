import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/$lang/_public/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LexOffice" },
      { name: "description", content: "Get in touch with the LexOffice team for sales, partnerships, or support." },
      { property: "og:title", content: "Contact — LexOffice" },
      { property: "og:description", content: "Reach the LexOffice team." },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { icon: Mail, label: "Email", value: "hello@lexoffice.app", href: "mailto:hello@lexoffice.app" },
  { icon: Phone, label: "Phone", value: "+1 (555) 010-2040", href: "tel:+15550102040" },
  { icon: MessageSquare, label: "Support", value: "support@lexoffice.app", href: "mailto:support@lexoffice.app" },
  { icon: MapPin, label: "Office", value: "123 Court Street, Suite 400" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="space-y-12">
      <section className="max-w-2xl">
        <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">Contact</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Get in touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Questions, partnerships, or a demo — we usually respond within one business day.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-5">
        <aside className="lg:col-span-2 space-y-4">
          {CHANNELS.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
                  <div className="mt-0.5 font-medium">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">{content}</a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </aside>

        <form
          className="lg:col-span-3 rounded-xl border border-border bg-card p-6 md:p-8 space-y-4"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" required />
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              required
              rows={6}
              className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="How can we help?"
            />
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">We'll never share your details.</p>
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {sent ? "Sent ✓" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
