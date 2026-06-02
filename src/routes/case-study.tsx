import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/section";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study — Arya Pratama" },
      { name: "description", content: "Studi kasus mendalam: business problem, metode, hasil, dan lessons learned." },
      { property: "og:title", content: "Case Study — Arya Pratama" },
      { property: "og:description", content: "Proses berpikir dan penyelesaian masalah berbasis data." },
      { property: "og:url", content: "/case-study" },
    ],
    links: [{ rel: "canonical", href: "/case-study" }],
  }),
  component: CaseStudyPage,
});

const featured = projects[0]; // analisis sentimen IndoBERT

function Block({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-semibold">
          {String(n).padStart(2, "0")}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function CaseStudyPage() {
  return (
    <>
      <section className="py-16 sm:py-20 border-b border-border bg-surface">
        <Container>
          <PageHeader eyebrow="Case Study" title="Studi Kasus Mendalam" description="Format presentasi konsultan: dari masalah bisnis hingga insight yang actionable." />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="rounded-3xl border border-border overflow-hidden bg-card">
            <img src={featured.image} alt={featured.title} width={1024} height={640} className="w-full" />
            <div className="p-6 sm:p-8">
              <span className="text-xs font-semibold text-primary">{featured.category}</span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold">{featured.title}</h2>
              <p className="mt-2 text-muted-foreground">{featured.summary}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Block n={1} title="Business Problem">{featured.background}</Block>
          <Block n={2} title="Tujuan Analisis">{featured.goal}</Block>
          <Block n={3} title="Pengumpulan Data">
            Sumber publik marketplace dan API resmi, dengan compliance terhadap Terms of Service masing-masing platform.
          </Block>
          <Block n={4} title="Preprocessing Data">
            Normalisasi slang, penanganan emoji, tokenisasi sub-word IndoBERT, dan penyaringan duplikat near-duplicate.
          </Block>
          <Block n={5} title="Metode yang Digunakan">{featured.methodology.join(" · ")}</Block>
          <Block n={6} title="Tools & Teknologi">{featured.tech.join(", ")}</Block>
          <Block n={7} title="Implementasi">
            Pipeline training di Google Colab Pro, model registry di Hugging Face, deployment REST API via FastAPI di container Docker.
          </Block>
          <Block n={8} title="Hasil">
            <ul className="list-disc pl-5 space-y-1">{featured.results.map((r) => <li key={r}>{r}</li>)}</ul>
          </Block>
          <Block n={9} title="Insight">
            Sentimen negatif paling banyak dipicu oleh isu pengiriman dan deskripsi produk yang tidak sesuai. Tim ops bisa langsung mem-prioritaskan area ini.
          </Block>
          <Block n={10} title="Tantangan">{featured.challenges}</Block>
          <Block n={11} title="Lessons Learned">{featured.lessons}</Block>
          <Block n={12} title="Dokumentasi Visual">
            Notebook, dashboard, dan API docs tersedia di repository GitHub yang ditautkan pada halaman proyek.
          </Block>
        </Container>
      </section>
    </>
  );
}
