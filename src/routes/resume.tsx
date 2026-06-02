import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/section";
import { profile, skillCategories, experiences, certifications, projects } from "@/lib/portfolio-data";
import { Download, Printer, Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Arya Pratama" },
      { name: "description", content: "Resume ATS-friendly: pendidikan, keahlian, pengalaman, proyek, dan sertifikasi." },
      { property: "og:title", content: "Resume — Arya Pratama" },
      { property: "og:description", content: "Resume profesional ATS-friendly." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <Container className="py-12">
      <div className="no-print flex flex-wrap items-center justify-between gap-3 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Resume</h1>
          <p className="text-sm text-muted-foreground">Versi singkat dan ATS-friendly.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm hover:bg-muted">
            <Printer className="h-4 w-4" /> Print
          </button>
          <a href="/cv-arya-pratama.pdf" download className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90">
            <Download className="h-4 w-4" /> Unduh CV PDF
          </a>
        </div>
      </div>

      <article className="rounded-2xl border border-border bg-card p-8 sm:p-10 space-y-8">
        <header className="border-b border-border pb-6">
          <h2 className="text-3xl font-bold">{profile.name}</h2>
          <p className="mt-1 text-muted-foreground">{profile.title}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> {profile.email}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {profile.location}</span>
            <a href={profile.github} className="inline-flex items-center gap-1 hover:text-foreground"><Github className="h-3.5 w-3.5" /> GitHub</a>
            <a href={profile.linkedin} className="inline-flex items-center gap-1 hover:text-foreground"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a>
          </div>
        </header>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Ringkasan Profil</h3>
          <p className="mt-2 text-sm leading-relaxed">{profile.tagline}</p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Pendidikan</h3>
          <div className="mt-3 text-sm">
            <div className="flex justify-between">
              <strong>S1 Teknik Informatika</strong>
              <span className="text-muted-foreground">2023 – Sekarang</span>
            </div>
            <p className="text-muted-foreground">Universitas Indonesia (contoh) · IPK 3.85 / 4.00</p>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Keahlian</h3>
          <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {skillCategories.map((c) => (
              <li key={c.name}>
                <strong>{c.name}:</strong>{" "}
                <span className="text-muted-foreground">{c.skills.map((s) => s.name).join(", ")}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Pengalaman</h3>
          <div className="mt-3 space-y-5">
            {experiences.map((e) => (
              <div key={e.role + e.org} className="text-sm">
                <div className="flex justify-between flex-wrap gap-1">
                  <strong>{e.role} — {e.org}</strong>
                  <span className="text-muted-foreground">{e.period}</span>
                </div>
                <ul className="mt-1 list-disc pl-5 text-muted-foreground space-y-0.5">
                  {e.responsibilities.slice(0, 3).map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Proyek Pilihan</h3>
          <div className="mt-3 space-y-3">
            {projects.slice(0, 4).map((p) => (
              <div key={p.slug} className="text-sm">
                <strong>{p.title}</strong> <span className="text-muted-foreground">— {p.category}</span>
                <p className="text-muted-foreground">{p.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Sertifikasi</h3>
          <ul className="mt-3 text-sm grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {certifications.map((c) => (
              <li key={c.name}>
                <strong>{c.name}</strong> — <span className="text-muted-foreground">{c.issuer} · {c.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Container>
  );
}
