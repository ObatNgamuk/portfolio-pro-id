import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Container, PageHeader } from "@/components/section";
import { profile } from "@/lib/portfolio-data";
import { Mail, Github, Linkedin, MapPin, CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — Arya Pratama" },
      { name: "description", content: "Hubungi Arya Pratama untuk peluang magang, kolaborasi proyek, atau kesempatan karier." },
      { property: "og:title", content: "Kontak — Arya Pratama" },
      { property: "og:description", content: "Mari terhubung untuk peluang kolaborasi." },
      { property: "og:url", content: "/kontak" },
    ],
    links: [{ rel: "canonical", href: "/kontak" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    const subject = encodeURIComponent(String(data.get("subject") || "Pesan dari website portofolio"));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="py-16 sm:py-20 border-b border-border bg-surface">
        <Container>
          <PageHeader eyebrow="Kontak" title="Mari Terhubung" description="Saya terbuka untuk peluang magang, kolaborasi proyek, dan kesempatan karier." />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Informasi Kontak</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a></li>
                <li className="flex items-center gap-3"><Linkedin className="h-4 w-4 text-primary" /> <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
                <li className="flex items-center gap-3"><Github className="h-4 w-4 text-primary" /> <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> {profile.location}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-primary text-primary-foreground p-6">
              <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full bg-white/15 px-2.5 py-1">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Status Ketersediaan
              </div>
              <p className="mt-3 text-base font-medium">{profile.availability}</p>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4">
            <h3 className="font-semibold text-lg">Kirim Pesan</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nama" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Subjek" name="subject" required />
            <div>
              <label className="text-sm font-medium">Pesan</label>
              <textarea name="message" required rows={6} className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              <Send className="h-4 w-4" /> Kirim Pesan
            </button>
            {sent && (
              <p className="text-sm text-primary inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> Membuka aplikasi email Anda...</p>
            )}
          </form>
        </Container>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
