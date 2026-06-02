import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/section";
import { skillCategories } from "@/lib/portfolio-data";

export const Route = createFileRoute("/keahlian")({
  head: () => ({
    meta: [
      { title: "Keahlian — Arya Pratama" },
      { name: "description", content: "Stack teknis: Python, Java, JavaScript, SQL, Pandas, IndoBERT, MySQL, PostgreSQL, React, dan lainnya." },
      { property: "og:title", content: "Keahlian — Arya Pratama" },
      { property: "og:description", content: "Tingkat penguasaan teknologi dan tools yang saya gunakan." },
      { property: "og:url", content: "/keahlian" },
    ],
    links: [{ rel: "canonical", href: "/keahlian" }],
  }),
  component: SkillsPage,
});

function levelLabel(n: number) {
  if (n >= 88) return "Mahir";
  if (n >= 78) return "Lanjut";
  if (n >= 65) return "Menengah";
  return "Dasar";
}

function SkillsPage() {
  return (
    <>
      <section className="py-16 sm:py-20 border-b border-border bg-surface">
        <Container>
          <PageHeader eyebrow="Keahlian" title="Stack Teknis & Tingkat Penguasaan" description="Kategori teknologi yang saya gunakan dalam proyek akademik, magang, dan freelance." />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid lg:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <article key={cat.name} className="rounded-2xl border border-border bg-card p-6">
              <header>
                <h2 className="text-xl font-semibold">{cat.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
              </header>
              <ul className="mt-6 space-y-4">
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{levelLabel(s.level)} · {s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width]"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
