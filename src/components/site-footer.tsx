import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">A</span>
            {profile.name}
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Portofolio profesional Mahasiswa Teknik Informatika dengan fokus pada Data Analysis dan NLP.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Navigasi</h4>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li><Link to="/tentang" className="hover:text-foreground">Tentang</Link></li>
            <li><Link to="/keahlian" className="hover:text-foreground">Keahlian</Link></li>
            <li><Link to="/proyek" className="hover:text-foreground">Proyek</Link></li>
            <li><Link to="/pengalaman" className="hover:text-foreground">Pengalaman</Link></li>
            <li><Link to="/sertifikasi" className="hover:text-foreground">Sertifikasi</Link></li>
            <li><Link to="/case-study" className="hover:text-foreground">Case Study</Link></li>
            <li><Link to="/resume" className="hover:text-foreground">Resume</Link></li>
            <li><Link to="/kontak" className="hover:text-foreground">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Terhubung</h4>
          <div className="mt-3 flex items-center gap-3">
            <a aria-label="Email" href={`mailto:${profile.email}`} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-muted">
              <Mail className="h-4 w-4" />
            </a>
            <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-muted">
              <Github className="h-4 w-4" />
            </a>
            <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-muted">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{profile.location}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {profile.name}. Semua hak dilindungi.</span>
          <span>Dibangun dengan React, TanStack Start, dan Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}
