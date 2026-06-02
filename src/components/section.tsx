import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center animate-fade-up">
      {eyebrow && (
        <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
      {description && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}
