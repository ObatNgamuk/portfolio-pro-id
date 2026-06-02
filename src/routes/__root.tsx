import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">Halaman gagal dimuat</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Terjadi kesalahan. Coba muat ulang halaman atau kembali ke beranda.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Coba lagi
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted">
            Beranda
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arya Pratama — Portofolio Mahasiswa Teknik Informatika" },
      { name: "description", content: "Portofolio profesional Arya Pratama: Mahasiswa Teknik Informatika, Data Analyst, dan NLP Enthusiast. Proyek, sertifikasi, dan pengalaman." },
      { name: "author", content: "Arya Pratama" },
      { name: "theme-color", content: "#2563EB" },
      { property: "og:title", content: "Arya Pratama — Portofolio Mahasiswa Teknik Informatika" },
      { property: "og:description", content: "Portofolio profesional Arya Pratama: Mahasiswa Teknik Informatika, Data Analyst, dan NLP Enthusiast. Proyek, sertifikasi, dan pengalaman." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Arya Pratama Portofolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Arya Pratama — Portofolio Mahasiswa Teknik Informatika" },
      { name: "twitter:description", content: "Portofolio profesional Arya Pratama: Mahasiswa Teknik Informatika, Data Analyst, dan NLP Enthusiast. Proyek, sertifikasi, dan pengalaman." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d6cb0d2f-7da5-4479-b5fc-6c5594899c75/id-preview-4c252b11--36cc9129-b1b0-408d-ac58-53afdb3f13eb.lovable.app-1780421329449.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d6cb0d2f-7da5-4479-b5fc-6c5594899c75/id-preview-4c252b11--36cc9129-b1b0-408d-ac58-53afdb3f13eb.lovable.app-1780421329449.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arya Pratama",
          jobTitle: "Mahasiswa Teknik Informatika, Data Analyst, NLP Enthusiast",
          url: "/",
          sameAs: ["https://github.com/aryapratama", "https://www.linkedin.com/in/aryapratama"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <BackToTop />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
