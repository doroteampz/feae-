import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { Seo } from "@/components/site/Seo";

const board = [
  { role: "Presidenta", name: "Dorotea Pérez Fernández" },
  { role: "Vicepresidente", name: "Fernando Andrés Rubia" },
  { role: "Secretaria", name: "Jara Serrano García" },
  { role: "Tesorera", name: "Silvia Guallar Colomer" },
  { role: "Vocal", name: "María José Sierras Jimerno" },
  { role: "Vocal", name: "María José Iranzo Fierros" },
  { role: "Vocal", name: "Julio Alonso Blanco González" },
  { role: "Vocal", name: "Jorge Sanz Barajas" },
];

const initials = (n: string) =>
  n.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();

const Conocenos = () => (
  <>
    <Seo
      title="Conócenos — FEAE Aragón"
      description="Junta directiva, misión y trayectoria de FEAE Aragón: una red plural de equipos directivos, inspección educativa y profesorado comprometida con la educación aragonesa."
      path="/conocenos"
    />
    <PageHeader
      eyebrow="Sobre nosotros"
      title="Conócenos"
      description="Una asociación con décadas de trayectoria al servicio de la educación pública y de calidad."
    />

    <section className="container py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="font-serif text-2xl font-bold text-primary">¿Qué somos?</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          FEAE Aragón es una <strong className="text-foreground">ONG sin ánimo de lucro</strong> nacida
          en los años 80, federada a nivel estatal e implantada en Aragón. Reunimos a profesionales de
          todos los niveles educativos en torno a un objetivo común: mejorar la equidad y la calidad
          de la educación.
        </p>
      </div>
      <div>
        <h2 className="font-serif text-2xl font-bold text-primary">¿Qué hacemos?</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Generamos espacios para el <strong className="text-foreground">debate, la reflexión, la formación y la difusión
          de experiencias, publicaciones e investigaciones</strong> en materia educativa. Tejemos una red plural de equipos directivos,
          inspección educativa y profesorado, comprometida con la educación aragonesa.
        </p>
      </div>
    </section>

    {/* Stat */}
    <section className="bg-secondary/50 border-y border-border">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl font-black text-primary">+750 asociados</p>
            <p className="text-sm text-muted-foreground">Una comunidad amplia, plural y en crecimiento.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a
            href="https://feae.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center rounded-full bg-accent text-accent-foreground border-0 text-base md:text-lg font-semibold h-12 w-72 shadow-card hover:shadow-elegant hover:opacity-90 transition-all"
          >
            FEAE a nivel estatal →
          </a>
          <a
            href="/docs/Estatutos-FEAE-Aragon-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center rounded-full bg-accent text-accent-foreground border-0 text-base md:text-lg font-semibold h-12 w-72 shadow-card hover:shadow-elegant hover:opacity-90 transition-all"
          >
            Estatutos de la Asociación
          </a>
        </div>
      </div>
    </section>

    {/* Junta */}
    <section className="container py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold">Gobernanza</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl font-black text-primary">Junta Directiva</h2>
        <p className="mt-3 text-muted-foreground">
          Personas que dedican su tiempo y experiencia a impulsar el proyecto FEAE Aragón.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {board.map((m) => (
          <Card key={m.name} className="p-6 text-center border-border shadow-card hover:shadow-elegant transition-shadow">
            <div className="mx-auto h-16 w-16 rounded-full gradient-hero text-primary-foreground grid place-items-center font-serif text-lg font-bold">
              {initials(m.name)}
            </div>
            <p className="mt-4 text-xs uppercase tracking-wider text-primary/70 font-semibold">{m.role}</p>
            <p className="mt-1 font-serif text-base font-bold text-foreground leading-snug">{m.name}</p>
          </Card>
        ))}
      </div>
    </section>
  </>
);

export default Conocenos;
