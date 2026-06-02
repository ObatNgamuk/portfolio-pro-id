import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/section";
import { experiences } from "@/lib/portfolio-data";
import { Briefcase } from "lucide-react";

export const Route = createFileRoute("/pengalaman")({
  head: () => ({
    meta: [
      { title: "Pengalaman — Arya Pratama" },
      { name: "description", content: "Pengalaman magang, organisasi, freelance, kepanitiaan, dan proyek akademik." },
      { property: "og:title", content: "Pengalaman — Arya Pratama" },
      { property: "og:description", content: "Timeline profesional dan kontribusi di berbagai organisasi." },
      { property: "og:url", content: "/pengalaman" },
    ],
    links: [{ rel: "canonical", href: "/pengalaman" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <section className="py-16 sm:py-20 border-b border-border bg-surface">
        <Container>
          <PageHeader eyebrow="Pengalaman" title="Timeline Profesional" description="Magang, organisasi, kepanitiaan, freelance, dan proyek akademik." />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <ol className="relative border-l border-border max-w-3xl mx-auto">
            {experiences.map((e) => (
              <li key={e.role + e.org} className="ml-6 pb-12 last:pb-0">
                <span className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                  <Briefcase className="h-3.5 w-3.5" />
                </span>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg">{e.role}</h3>
                      <p className="text-sm text-muted-foreground">{e.org}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">{e.type}</span>
                      <div className="mt-1 text-xs text-muted-foreground">{e.period}</div>
                    </div>
                  </div>

                  <div className="mt-5 grid sm:grid-cols-2 gap-5 text-sm">
                    <div>
                      <h4 className="font-medium text-foreground">Tanggung Jawab</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
                        {e.responsibilities.map((r) => <li key={r}>{r}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Pencapaian</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
                        {e.achievements.map((a) => <li key={a}>{a}</li>)}
                      </ul>
                    </div>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {e.tech.map((t) => (
                      <li key={t} className="text-[11px] rounded bg-muted px-2 py-0.5 text-muted-foreground">{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
