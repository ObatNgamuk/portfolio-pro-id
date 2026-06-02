import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const nav = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang" },
  { to: "/keahlian", label: "Keahlian" },
  { to: "/proyek", label: "Proyek" },
  { to: "/pengalaman", label: "Pengalaman" },
  { to: "/sertifikasi", label: "Sertifikasi" },
  { to: "/case-study", label: "Case Study" },
  { to: "/resume", label: "Resume" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">A</span>
          <span>Arya Pratama</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground bg-muted" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground hover:bg-muted" }}
              className="rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground bg-muted" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-md px-3 py-2 text-sm font-medium"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
