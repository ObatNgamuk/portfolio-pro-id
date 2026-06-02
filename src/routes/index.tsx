import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, ExternalLink, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { Container } from "@/components/section";
import { profile, stats, projects, skillCategories, experiences, testimonials } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arya Pratama — Mahasiswa Teknik Informatika & Data Analyst" },
      { name: "description", content: "Portofolio profesional Arya Pratama. Proyek NLP, Data Analysis, dan Machine Learning untuk recruiter dan hiring manager." },
      { property: "og:title", content: "Arya Pratama — Portofolio Profesional" },
      { property: "og:description", content: "Mahasiswa Teknik Informatika dengan fokus pada Data Analysis dan NLP." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />
        <Container className="relative py-20 sm:py-28 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {profile.availability}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Halo, saya <span className="text-gradient">{profile.name}</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground font-medium">{profile.title}</p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/proyek" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition">
                Lihat Proyek <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="/cv-arya-pratama.pdf" download className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted transition">
                <Download className="h-4 w-4" /> Unduh CV
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elevated)]">
              <img src={profileImg} alt={`Foto profil ${profile.name}`} width={768} height={768} className="h-full w-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <Container className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20">
        <Container>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Proyek Unggulan</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Pekerjaan terbaru pilihan</h2>
            </div>
            <Link to="/proyek" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              Lihat semua proyek <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to="/proyek/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.title} loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary">{p.category}</span>
                  <h3 className="mt-1 font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SKILLS SUMMARY */}
      <section className="py-20 bg-surface border-y border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Ringkasan Keahlian</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Stack teknologi yang saya kuasai</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {skillCategories.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-background p-5">
                <h3 className="font-semibold text-sm">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.skills.length} teknologi</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {c.skills.slice(0, 4).map((s) => (
                    <li key={s.name} className="text-xs rounded-md bg-muted px-2 py-0.5">{s.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/keahlian" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              Lihat detail keahlian <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* EXPERIENCE SUMMARY */}
      <section className="py-20">
        <Container>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pengalaman</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Perjalanan profesional</h2>
            </div>
            <Link to="/pengalaman" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              Lihat semua <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {experiences.slice(0, 4).map((e) => (
              <div key={e.role + e.org} className="rounded-xl border border-border bg-card p-5">
                <div className="text-xs text-muted-foreground">{e.period} · {e.type}</div>
                <h3 className="mt-1 font-semibold">{e.role}</h3>
                <p className="text-sm text-muted-foreground">{e.org}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-surface border-y border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Rekomendasi</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Apa kata mereka</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-background p-6">
                <blockquote className="text-base leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary text-secondary-foreground p-10 sm:p-14 text-center">
            <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
            <h2 className="relative text-3xl sm:text-4xl font-bold tracking-tight">Mari Terhubung dan Berdiskusi</h2>
            <p className="relative mt-3 text-base text-secondary-foreground/80 max-w-xl mx-auto">
              Saya terbuka untuk peluang magang, kolaborasi proyek, dan kesempatan karier di perusahaan teknologi.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/kontak" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Hubungi Saya <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10">
                <Github className="h-4 w-4" /> GitHub <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
