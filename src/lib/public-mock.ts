export type Field = { slug: string; name: string; description: string; caseCount: number };
export type Lawyer = { id: string; name: string; title: string; years: number; fields: string[]; rating: number; city: string };
export type Client = { id: string; name: string; industry: string; since: number; matters: number; city: string };
export type Post = { slug: string; title: string; excerpt: string; body: string; author: string; date: string; readMin: number; tag: string };
export type Service = { slug: string; name: string; summary: string; body: string; priceFrom: number };

export const FIELDS: Field[] = [
  { slug: "corporate", name: "Corporate Law", description: "Company formation, governance, M&A and shareholder matters.", caseCount: 128 },
  { slug: "criminal", name: "Criminal Defense", description: "Representation across misdemeanor and felony proceedings.", caseCount: 92 },
  { slug: "family", name: "Family Law", description: "Divorce, custody, alimony and inheritance disputes.", caseCount: 74 },
  { slug: "real-estate", name: "Real Estate", description: "Property transactions, leases and title disputes.", caseCount: 61 },
  { slug: "labor", name: "Labor & Employment", description: "Employment contracts, disputes and workplace compliance.", caseCount: 55 },
  { slug: "ip", name: "Intellectual Property", description: "Trademarks, patents, copyright and licensing.", caseCount: 40 },
  { slug: "tax", name: "Tax Law", description: "Tax planning, audits and litigation with authorities.", caseCount: 33 },
  { slug: "immigration", name: "Immigration", description: "Visas, residency, citizenship and appeals.", caseCount: 28 },
];

export const LAWYERS: Lawyer[] = [
  { id: "1", name: "Sarah Al-Mansour", title: "Managing Partner", years: 18, fields: ["corporate", "tax"], rating: 4.9, city: "Riyadh" },
  { id: "2", name: "Omar Haddad", title: "Senior Litigator", years: 14, fields: ["criminal"], rating: 4.8, city: "Dubai" },
  { id: "3", name: "Layla Farouk", title: "Family Law Attorney", years: 11, fields: ["family"], rating: 4.7, city: "Cairo" },
  { id: "4", name: "Karim Nasser", title: "Corporate Counsel", years: 9, fields: ["corporate", "ip"], rating: 4.6, city: "Amman" },
  { id: "5", name: "Nadia Chakir", title: "Real Estate Advisor", years: 12, fields: ["real-estate"], rating: 4.8, city: "Casablanca" },
  { id: "6", name: "Yusuf Rahman", title: "Labor Law Specialist", years: 8, fields: ["labor"], rating: 4.5, city: "Doha" },
  { id: "7", name: "Hala Zayed", title: "IP Attorney", years: 10, fields: ["ip"], rating: 4.7, city: "Beirut" },
  { id: "8", name: "Tarek Bishara", title: "Immigration Counsel", years: 7, fields: ["immigration"], rating: 4.6, city: "Kuwait City" },
];

export const CLIENTS: Client[] = [
  { id: "1", name: "Northwind Industries", industry: "Manufacturing", since: 2019, matters: 24, city: "Riyadh" },
  { id: "2", name: "Blue Harbor Logistics", industry: "Logistics", since: 2021, matters: 12, city: "Dubai" },
  { id: "3", name: "Cedar Health Group", industry: "Healthcare", since: 2018, matters: 31, city: "Amman" },
  { id: "4", name: "Solaris Energy", industry: "Energy", since: 2020, matters: 18, city: "Doha" },
  { id: "5", name: "Meridian Media", industry: "Media", since: 2022, matters: 7, city: "Cairo" },
  { id: "6", name: "Aster Retail Group", industry: "Retail", since: 2017, matters: 42, city: "Kuwait City" },
];

export const POSTS: Post[] = [
  {
    slug: "understanding-commercial-contracts",
    title: "Understanding commercial contracts in 2026",
    excerpt: "A practical primer on what every business owner should verify before signing a commercial agreement.",
    body: "Commercial contracts are the backbone of business relationships. In this article we walk through the essential clauses — parties, scope, price, term, termination, liability, and dispute resolution — and explain what to negotiate hardest. We close with a checklist you can bring to your next negotiation.",
    author: "Sarah Al-Mansour", date: "2026-06-14", readMin: 6, tag: "Corporate",
  },
  {
    slug: "employee-rights-remote-work",
    title: "Employee rights in a remote-work era",
    excerpt: "How labor law is adapting to distributed teams, hybrid schedules, and cross-border employment.",
    body: "Remote work has permanently changed employment law. From working-time recordkeeping to jurisdictional questions about where the work is performed, employers and employees alike need to understand what's changed — and what hasn't.",
    author: "Yusuf Rahman", date: "2026-05-28", readMin: 5, tag: "Labor",
  },
  {
    slug: "trademark-basics-for-founders",
    title: "Trademark basics for founders",
    excerpt: "Protect your brand before your first customer — a founder-friendly guide to trademarks.",
    body: "Filing a trademark early is one of the highest-leverage legal moves a founder can make. This piece explains the difference between common-law rights and registered marks, how to run a clearance search, and what to expect from an examination.",
    author: "Hala Zayed", date: "2026-05-10", readMin: 7, tag: "IP",
  },
  {
    slug: "family-mediation-vs-litigation",
    title: "Family mediation vs. litigation",
    excerpt: "When mediation is the better route — and when going to court is unavoidable.",
    body: "Mediation is faster, cheaper, and less adversarial than litigation, but it isn't right for every case. We compare the two paths across cost, time, privacy, and enforceability.",
    author: "Layla Farouk", date: "2026-04-22", readMin: 4, tag: "Family",
  },
  {
    slug: "buying-property-legal-checklist",
    title: "Buying property: a legal checklist",
    excerpt: "Ten things to verify before signing any real-estate purchase agreement.",
    body: "From title searches to zoning verification and escrow terms, this checklist helps buyers avoid the most common pitfalls in real-estate transactions.",
    author: "Nadia Chakir", date: "2026-04-03", readMin: 8, tag: "Real Estate",
  },
  {
    slug: "criminal-defense-what-to-expect",
    title: "Criminal defense: what to expect",
    excerpt: "A walkthrough of the criminal process from arrest through trial and appeal.",
    body: "Facing a criminal charge is stressful. Knowing the stages of the process — arraignment, discovery, plea negotiations, trial, sentencing, appeal — can help defendants and their families make better decisions.",
    author: "Omar Haddad", date: "2026-03-18", readMin: 9, tag: "Criminal",
  },
];

export const SERVICES: Service[] = [
  { slug: "legal-consultation", name: "Legal Consultation", summary: "One-on-one advisory sessions with a specialist attorney.", body: "Book a focused consultation with a lawyer matched to your matter. Sessions run 30 or 60 minutes and include a written summary of recommendations.", priceFrom: 120 },
  { slug: "contract-drafting", name: "Contract Drafting & Review", summary: "Custom contracts, NDAs, service agreements and reviews.", body: "We draft or review agreements tailored to your business — from NDAs to master service agreements — with clear commercial language and enforceable terms.", priceFrom: 200 },
  { slug: "litigation", name: "Litigation Representation", summary: "Full representation in civil and commercial disputes.", body: "End-to-end representation across pre-litigation strategy, filings, hearings, and settlement negotiations.", priceFrom: 500 },
  { slug: "company-formation", name: "Company Formation", summary: "Incorporation, licensing, and governance setup.", body: "We handle entity selection, incorporation filings, shareholder agreements, and post-incorporation governance so you can focus on the business.", priceFrom: 350 },
  { slug: "trademark-filing", name: "Trademark Filing", summary: "Clearance search, filing, and prosecution of trademarks.", body: "Protect your brand with a full clearance search, application filing, and prosecution response management.", priceFrom: 280 },
  { slug: "family-mediation", name: "Family Mediation", summary: "Neutral mediation for divorce, custody and inheritance.", body: "A confidential, structured process led by an experienced family-law mediator to help parties reach durable agreements.", priceFrom: 180 },
];

export function fieldName(slug: string) {
  return FIELDS.find((f) => f.slug === slug)?.name ?? slug;
}
