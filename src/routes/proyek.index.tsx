import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Github, ExternalLink, ArrowRight } from "lucide-react";
import { Container, PageHeader } from "@/components/section";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/proyek/")({
  head: () => ({
    meta: [
      { title: "Proyek — Arya Pratama" },
      { name: "description", content: "Kumpulan proyek NLP, Machine Learning, Data Analysis, dan Web Development." },
      { property: "og:title", content: "Proyek — Arya Pratama" },
      { property: "og:description", content: "Studi kasus proyek dari pengalaman akademik, magang, dan freelance." },
      { property: "og:url", content: "/proyek" },
    ],
    links: [{ rel: "canonical", href: "/proyek" }],
  }),
  component: ProjectsPage,
});

const categories = ["Semua", "Machine Learning", "NLP", "Data Analysis", "Web Development"] as const;

function ProjectsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("Semua");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = cat === "Semua" || p.category === cat;
      const matchQ =
        q.trim() === "" ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.summary.toLowerCase().includes(q.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(q.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <>
      <section className="py-16 sm:py-20 border-b border-border bg-surface">
        <Container>
          <PageHeader eyebrow="Proyek" title="Studi Kasus & Hasil Karya" description="Filter berdasarkan kategori atau cari proyek tertentu." />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari proyek, teknologi..."
                className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium border transition ${
                    cat === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.slug} className="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
                <Link to="/proyek/$slug" params={{ slug: p.slug }} className="block aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.title} loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-medium text-primary">{p.category}</span>
                  <h3 className="mt-1 font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <li key={t} className="text-[11px] rounded bg-muted px-2 py-0.5 text-muted-foreground">{t}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex gap-2">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-8 w-8 items-center justify-center rounded border border-border hover:bg-muted">
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Demo" className="inline-flex h-8 w-8 items-center justify-center rounded border border-border hover:bg-muted">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                    <Link to="/proyek/$slug" params={{ slug: p.slug }} className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Detail <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-sm text-muted-foreground">Tidak ada proyek yang cocok dengan filter.</p>
          )}
        </Container>
      </section>
    </>
  );
}
