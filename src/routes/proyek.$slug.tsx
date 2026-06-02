import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Container } from "@/components/section";
import { projects, type Project } from "@/lib/portfolio-data";

export const Route = createFileRoute("/proyek/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.title} — Studi Kasus` : "Proyek" },
        { name: "description", content: p?.summary ?? "" },
        { property: "og:title", content: p?.title ?? "Proyek" },
        { property: "og:description", content: p?.summary ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p?.image ?? "" },
      ],
      links: p ? [{ rel: "canonical", href: `/proyek/${p.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold">Proyek tidak ditemukan</h1>
      <Link to="/proyek" className="mt-4 inline-flex text-primary hover:underline">Kembali ke daftar proyek</Link>
    </Container>
  ),
  component: ProjectDetail,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-wider text-primary">{title}</h2>
      <div className="mt-2 text-base leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };

  return (
    <>
      <Container className="pt-10">
        <Link to="/proyek" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Semua proyek
        </Link>
      </Container>

      <section className="py-10">
        <Container>
          <span className="text-xs font-semibold text-primary">{p.category}</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">{p.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{p.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="text-xs rounded-md bg-muted px-2 py-1">{t}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm hover:bg-muted">
                <Github className="h-4 w-4" /> Lihat di GitHub
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90">
                <ExternalLink className="h-4 w-4" /> Demo Langsung
              </a>
            )}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img src={p.image} alt={p.title} width={1024} height={640} className="w-full" />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <Section title="Latar Belakang Masalah"><p>{p.background}</p></Section>
            <Section title="Tujuan Proyek"><p>{p.goal}</p></Section>
            <Section title="Dataset yang Digunakan"><p>{p.dataset}</p></Section>
            <Section title="Metodologi">
              <ul className="list-disc pl-5 space-y-1.5">
                {p.methodology.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </Section>
            <Section title="Hasil & Evaluasi">
              <ul className="list-disc pl-5 space-y-1.5">
                {p.results.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </Section>
            <Section title="Tantangan yang Dihadapi"><p>{p.challenges}</p></Section>
            <Section title="Pelajaran yang Dipelajari"><p>{p.lessons}</p></Section>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 sticky top-24">
              <h3 className="font-semibold">Ringkasan Teknis</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="text-muted-foreground">Kategori</dt><dd className="font-medium">{p.category}</dd></div>
                <div>
                  <dt className="text-muted-foreground">Teknologi</dt>
                  <dd className="font-medium">{p.tech.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
