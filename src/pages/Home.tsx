import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Network, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Seo } from "@/components/site/Seo";
import logo from "@/assets/feae-logo.png";

const SOCIO_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGo1XZ1Qv4YVD9763wx75xZOLuTE8tsjfeg4yd9GcFpYmGPA/viewform";

const Home = () => {
  return (
    <>
      <Seo
        title="FEAE Aragón — Fórum Europeo de Administradores"
        description="Organización plural e independiente al servicio de la educación en Aragón: red de directivos, inspección y profesorado comprometida con la equidad y la calidad."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px, 90px 90px",
        }} />
        <div className="container relative py-20 md:py-28 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Educación · Aragón
            </p>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl font-black leading-[1.05]">
              FEAE Aragón
              <span className="block text-accent text-2xl md:text-3xl mt-3 font-bold">
                Fórum Europeo de Administradores de la Educación
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              Una organización plural e independiente dedicada a mejorar la equidad y calidad
              de la educación a través del debate crítico y la participación activa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={SOCIO_URL} target="_blank" rel="noopener noreferrer">
                  Hazte Socio <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white">
                <Link to="/conocenos">Conócenos</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-white/30 rounded-full blur-3xl" />
              <div className="relative h-80 w-80 rounded-full bg-white shadow-2xl ring-4 ring-white/40 grid place-items-center p-8">
                <img src={logo} alt="Logo FEAE" className="h-full w-full object-contain px-[2px] py-[2px] mx-[6px] my-0 mr-0 ml-[29px]" width={320} height={320} fetchPriority="high" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "750+", l: "Asociados" },
            { n: "40+", l: "Años de trayectoria" },
            { n: "17", l: "Comunidades federadas" },
            { n: "∞", l: "Compromiso educativo" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-serif text-3xl md:text-4xl font-black text-primary">{s.n}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PILARES */}
      <section className="container py-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold">Nuestra labor</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl font-black text-primary">
            Tres pilares para transformar la educación
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Users, title: "Debate y reflexión", text: "Espacios abiertos donde se confronta y construye pensamiento educativo riguroso." },
            { icon: BookOpen, title: "Difusión de investigación", text: "Publicaciones, jornadas y revistas que acercan el conocimiento a las aulas." },
            { icon: Network, title: "Red de profesionales", text: "Direcciones, inspección, profesorado de todos los niveles y universidad conectados." },
          ].map((p) => (
            <Card key={p.title} className="p-7 border-border shadow-card hover:shadow-elegant transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-primary/10 grid place-items-center text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container py-16 max-w-3xl text-center">
          <Quote className="h-8 w-8 text-primary/30 mx-auto" />
          <p className="mt-4 font-serif text-2xl md:text-3xl text-primary leading-snug">
            "La educación equitativa y de calidad es responsabilidad de toda la comunidad. En FEAE Aragón
            la construimos juntos, desde la pluralidad y la independencia."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="rounded-2xl gradient-hero text-primary-foreground p-10 md:p-14 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center shadow-elegant">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-black">Únete a una red que transforma</h2>
            <p className="mt-3 text-white/85">Más de 750 profesionales ya forman parte de FEAE. Tu voz también cuenta.</p>
          </div>
          <div className="md:justify-self-end">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={SOCIO_URL} target="_blank" rel="noopener noreferrer">Hazte Socio <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
