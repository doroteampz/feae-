import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { BookOpen, FileText, ExternalLink, Globe, Download } from "lucide-react";
import { Seo } from "@/components/site/Seo";

const publications = [
  { icon: FileText, title: "Revista Forum N.º 47", desc: "Última edición de la revista nacional FEAE.", href: "/docs/ForumAragon-47-Funcion-tutorial.pdf", action: "Leer" },
  { icon: FileText, title: "Revista Forum N.º 46", desc: "Edición anterior de la revista nacional.", href: "/docs/ForumAragon-46-Relacion-familia-escuela.pdf", action: "Leer" },
  { icon: BookOpen, title: "Revista DYLE", desc: "Dirección y Liderazgo Educativo.", href: "https://dyle.es/wp-content/uploads/flipbook/29/mobile/index.html#p=1", action: "Visitar" },
];

const Revistas = () => (
  <>
    <Seo
      title="Revistas y Publicaciones — FEAE Aragón"
      description="Revistas y publicaciones de interés para la comunidad educativa: Forum Aragón, DYLE y otras ediciones de FEAE Aragón."
      path="/revistas"
    />
    <PageHeader
      eyebrow="Documentación"
      title="Revistas y Publicaciones"
      description={
        <>
          Revistas y publicaciones de interés para la comunidad educativa.
          {"\n"}
          Envío de colaboraciones y artículos a la revista Forum Aragón a{" "}
          <a
            href="mailto:forum.educacion.aragon@gmail.com"
            className="font-bold text-primary hover:underline"
          >
            forum.educacion.aragon@gmail.com
          </a>
        </>
      }
    />
    <section className="container py-16">
      <h2 className="sr-only">Listado de publicaciones</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {publications.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="h-full p-6 border-border shadow-card hover:shadow-elegant hover:border-primary/30 transition-all">
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary grid place-items-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-primary leading-snug">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              <p className="mt-4 text-xs uppercase tracking-wider font-semibold text-primary group-hover:text-primary-glow">
                {p.action} →
              </p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  </>
);

export default Revistas;
