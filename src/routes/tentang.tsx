import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/section";
import { profile, timeline } from "@/lib/portfolio-data";
import { GraduationCap, Target, Heart, Compass } from "lucide-react";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang Saya — Arya Pratama" },
      { name: "description", content: "Profil, latar belakang pendidikan, dan perjalanan belajar Arya Pratama di bidang Data Science dan NLP." },
      { property: "og:title", content: "Tentang Saya — Arya Pratama" },
      { property: "og:description", content: "Profil dan perjalanan belajar Arya Pratama di bidang teknologi." },
      { property: "og:url", content: "/tentang" },
    ],
    links: [{ rel: "canonical", href: "/tentang" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Berorientasi Dampak", desc: "Setiap baris kode dan analisis harus berujung pada keputusan yang lebih baik." },
  { icon: Heart, title: "Empati Pengguna", desc: "Membangun solusi yang memudahkan pengguna, bukan menyulitkan." },
  { icon: Compass, title: "Growth Mindset", desc: "Belajar terus-menerus dan terbuka terhadap umpan balik." },
  { icon: GraduationCap, title: "Profesionalisme", desc: "Tepat waktu, komunikatif, dan bertanggung jawab atas hasil." },
];

function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20 border-b border-border bg-surface">
        <Container>
          <PageHeader eyebrow="Tentang Saya" title="Profil & Perjalanan" description="Mahasiswa Teknik Informatika dengan ketertarikan kuat pada Data Science dan Natural Language Processing." />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Halo, saya <strong className="text-foreground">{profile.name}</strong>, mahasiswa Teknik Informatika yang berfokus pada
              transformasi data menjadi keputusan. Saya menyukai bagaimana kombinasi statistika, machine learning, dan rekayasa
              perangkat lunak dapat menciptakan produk yang membantu orang sehari-hari.
            </p>
            <p>
              Ketertarikan saya pada NLP dimulai ketika menyelesaikan tugas analisis ulasan produk berbahasa Indonesia. Dari sana, saya
              mendalami model berbasis transformer seperti IndoBERT dan IndoBERTweet, serta berbagai teknik klasifikasi teks. Saya
              percaya bahwa NLP Bahasa Indonesia memiliki potensi besar yang belum sepenuhnya dimanfaatkan.
            </p>
            <p>
              Di luar pembelajaran akademis, saya aktif di organisasi mahasiswa dan mengambil proyek freelance untuk mempertajam
              kemampuan kolaborasi dan komunikasi. Saya percaya kemampuan teknis terbaik harus selalu didampingi soft skill yang kuat.
            </p>
            <p>
              <strong className="text-foreground">Tujuan karier saya</strong> adalah berkontribusi sebagai Data Analyst atau Machine
              Learning Engineer di perusahaan teknologi yang berdampak luas, sambil terus berkontribusi pada riset NLP Bahasa Indonesia.
            </p>
          </div>

          <aside className="rounded-2xl border border-border bg-card p-6 h-fit">
            <h3 className="font-semibold">Fakta Singkat</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div><dt className="text-muted-foreground">Lokasi</dt><dd className="font-medium">{profile.location}</dd></div>
              <div><dt className="text-muted-foreground">Pendidikan</dt><dd className="font-medium">S1 Teknik Informatika</dd></div>
              <div><dt className="text-muted-foreground">Fokus</dt><dd className="font-medium">Data Analysis, NLP, Web Dev</dd></div>
              <div><dt className="text-muted-foreground">Bahasa</dt><dd className="font-medium">Indonesia, Inggris</dd></div>
              <div><dt className="text-muted-foreground">Status</dt><dd className="font-medium">{profile.availability}</dd></div>
            </dl>
          </aside>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-surface border-y border-border">
        <Container>
          <h2 className="text-3xl font-bold text-center">Nilai & Prinsip Kerja</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-background p-6">
                <v.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center">Perjalanan Pendidikan & Pengembangan</h2>
          <ol className="mt-12 relative border-l border-border max-w-2xl mx-auto">
            {timeline.map((t) => (
              <li key={t.year} className="ml-6 pb-10 last:pb-0">
                <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                  •
                </span>
                <div className="text-xs font-semibold text-primary">{t.year}</div>
                <h3 className="mt-1 font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
