import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";

const SOCIO_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGo1XZ1Qv4YVD9763wx75xZOLuTE8tsjfeg4yd9GcFpYmGPA/viewform";

const Contacto = () => (
  <>
    <Seo
      title="Contacto — FEAE Aragón"
      description="Contacta con FEAE Aragón por correo electrónico o redes sociales. Propuestas, colaboraciones y solicitudes para asociarse."
      path="/contacto"
    />
    <PageHeader
      eyebrow="Hablemos"
      title="Contacto"
      description="¿Tienes una propuesta, una colaboración o quieres asociarte? Estaremos encantados de leerte."
    />
    <section className="container py-16 grid md:grid-cols-2 gap-8">
      <Card className="p-8 border-border shadow-card">
        <h2 className="font-serif text-2xl font-bold text-primary">Correo electrónico</h2>
        <p className="mt-2 text-muted-foreground text-sm">
          Escríbenos directamente y te responderemos lo antes posible.
        </p>
        <a
          href="mailto:feaeforumaragon@gmail.com"
          className="mt-6 inline-flex items-center gap-3 text-primary hover:text-primary-glow font-medium"
        >
          <Mail className="h-5 w-5" />
          feaeforumaragon@gmail.com
        </a>
      </Card>

      <Card className="p-8 border-border shadow-card">
        <h2 className="font-serif text-2xl font-bold text-primary">Síguenos</h2>
        <p className="mt-2 text-muted-foreground text-sm">Mantente al día de nuestras actividades.</p>
        <div className="mt-6 flex items-center gap-3">
          <a href="https://www.instagram.com/feaearagon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
             className="h-11 w-11 grid place-items-center rounded-full border border-border text-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/people/FEAE-Arag%C3%B3n/100049209576116/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
             className="h-11 w-11 grid place-items-center rounded-full border border-border text-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </Card>
    </section>

    <section className="container pb-20">
      <div className="rounded-2xl gradient-hero text-primary-foreground p-10 md:p-14 text-center shadow-elegant">
        <h2 className="font-serif text-3xl md:text-4xl font-black">¿Quieres formar parte de FEAE Aragón?</h2>
        <p className="mt-3 text-white/85 max-w-xl mx-auto">
          Únete a una red de más de 750 profesionales comprometidos con la educación.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={SOCIO_URL} target="_blank" rel="noopener noreferrer">
            Hazte Socio <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  </>
);

export default Contacto;
