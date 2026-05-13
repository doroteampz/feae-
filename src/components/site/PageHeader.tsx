import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}
export const PageHeader = ({ eyebrow, title, description }: Props) => (
  <section className="gradient-subtle border-b border-border">
    <div className="container py-16 md:py-20 max-w-3xl text-center">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold mb-3">{eyebrow}</p>
      )}
      <h1 className="font-serif text-4xl md:text-5xl font-black text-primary leading-tight">{title}</h1>
      {description && <p className="mt-4 text-lg text-muted-foreground text-center whitespace-pre-line">{description}</p>}
    </div>
  </section>
);
