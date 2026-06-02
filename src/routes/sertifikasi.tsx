import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/section";
import { certifications } from "@/lib/portfolio-data";
import { Award, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/sertifikasi")({
  head: () => ({
    meta: [
      { title: "Sertifikasi — Arya Pratama" },
      { name: "description", content: "Sertifikasi Data Science, Machine Learning, AI, Programming, dan Cloud Computing." },
      { property: "og:title", content: "Sertifikasi — Arya Pratama" },
      { property: "og:description", content: "Daftar sertifikasi profesional yang diperoleh." },
      { property: "og:url", content: "/sertifikasi" },
    ],
    links: [{ rel: "canonical", href: "/sertifikasi" }],
  }),
  component: CertPage,
});

const cats = ["Semua", "Data Science", "Artificial Intelligence", "Machine Learning", "Programming", "Cloud Computing"] as const;

function CertPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("Semua");
  const filtered = useMemo(() => certifications.filter((c) => cat === "Semua" || c.category === cat), [cat]);

  return (
    <>
      <section className="py-16 sm:py-20 border-b border-border bg-surface">
        <Container>
          <PageHeader eyebrow="Sertifikasi" title="Sertifikat Profesional" description="Kredensial dari penyedia kursus terkemuka untuk memvalidasi keahlian." />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="flex flex-wrap gap-2 justify-center">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium border transition ${
                  cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((c) => (
              <article key={c.name} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">{c.date}</span>
                </div>
                <h3 className="mt-4 font-semibold leading-snug">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <div className="mt-3 text-xs text-muted-foreground">
                  <span className="rounded bg-muted px-2 py-0.5">{c.category}</span>
                  <span className="ml-2">ID: {c.credential}</span>
                </div>
                <a href={c.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                  Lihat Sertifikat <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
