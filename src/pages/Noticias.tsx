import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Seo } from "@/components/site/Seo";
import cifice from "@/assets/news-cifice.jpg";
import psico from "@/assets/news-psicopedagogia.jpg";
import zaitegi from "@/assets/news-zaitegi.jpg";
import elizondo from "@/assets/news-elizondo.jpg";
import psico1 from "@/assets/news-psico-1.jpg";
import psico2 from "@/assets/news-psico-2.jpg";
import zaitegi1 from "@/assets/news-zaitegi-1.jpg";
import zaitegi2 from "@/assets/news-zaitegi-2.jpg";
import zaitegi3 from "@/assets/news-zaitegi-3.jpg";
import elizondo1 from "@/assets/news-elizondo-1.png";
import elizondo2 from "@/assets/news-elizondo-2.png";
import elizondo3 from "@/assets/news-elizondo-3.png";

type NewsItem = {
  title: string;
  date: string;
  tag: string;
  img: string;
  imgAlt: string;
  text: string;
  gallery?: { src: string; alt: string }[];
  details: React.ReactNode;
};

const news: NewsItem[] = [
  {
    title: "Convenio con CIFICE (Universidad de Zaragoza)",
    date: "2026",
    tag: "Convenio",
    img: cifice,
    imgAlt: "Firma del convenio entre FEAE Aragón y CIFICE de la Universidad de Zaragoza",
    text: "Acuerdo de cooperación en innovación docente, formación del profesorado, calidad de la enseñanza e investigación.",
    details: (
      <div className="space-y-4 text-sm leading-relaxed text-foreground">
        <p>
          El acuerdo se ha publicado en la página web de Unizar:{" "}
          <a
            href="https://cifice.unizar.es/foro-europeo-de-administradores-de-la-educacion-de-aragon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline break-all"
          >
            cifice.unizar.es/foro-europeo-de-administradores-de-la-educacion-de-aragon
          </a>
        </p>
        <p>Ambas entidades acuerdan cooperar en las siguientes áreas prioritarias:</p>
        <div>
          <h4 className="font-serif font-bold text-primary">Innovación educativa</h4>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
            <li>Diseño, desarrollo y evaluación de proyectos de innovación docente en el ámbito universitario y no universitario.</li>
            <li>Intercambio de buenas prácticas y experiencias innovadoras.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-bold text-primary">Formación del profesorado</h4>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
            <li>Organización conjunta de actividades formativas dirigidas al profesorado universitario y a profesionales de la educación.</li>
            <li>Desarrollo de programas de actualización pedagógica y metodológica.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-bold text-primary">Calidad de la docencia y apoyo al estudiantado</h4>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
            <li>Acciones orientadas a la mejora de la calidad de la enseñanza y del acompañamiento académico del estudiantado.</li>
            <li>Elaboración de materiales, guías y recursos educativos.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-bold text-primary">Relaciones institucionales y redes profesionales</h4>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
            <li>Impulso de la colaboración con entidades afines a los objetivos formativos de la Universidad de Zaragoza.</li>
            <li>Participación en redes, foros y espacios de intercambio profesional promovidos por FEAE.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-bold text-primary">Investigación y transferencia en Ciencias de la Educación</h4>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
            <li>Promoción de estudios, investigaciones y publicaciones conjuntas.</li>
            <li>Difusión de resultados en jornadas, congresos y revistas especializadas.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-bold text-primary">Actividades de divulgación y encuentro</h4>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
            <li>Organización de jornadas, seminarios, conversatorios con expertos y encuentros educativos.</li>
            <li>Colaboración en la revista editada por FEAE mediante aportaciones, monográficos o difusión de experiencias.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Convenio con la Asociación Aragonesa de Psicopedagogía",
    date: "18/12/2025",
    tag: "Convenio",
    img: psico,
    imgAlt: "Firma del convenio con la Asociación Aragonesa de Psicopedagogía",
    text: "Colaboración mutua en actividades formativas dirigidas a profesionales de la educación en la Comunidad Autónoma.",
    gallery: [
      { src: psico, alt: "Cabecera del convenio con la Asociación Aragonesa de Psicopedagogía" },
      { src: psico1, alt: "Representantes de FEAE Aragón y la Asociación Aragonesa de Psicopedagogía estrechándose la mano tras la firma" },
      { src: psico2, alt: "Firma del convenio de colaboración entre ambas entidades" },
    ],
    details: (
      <div className="space-y-4 text-sm leading-relaxed text-foreground">
        <p>
          El pasado 18 de diciembre de 2025 FEAE Aragón ha firmado un convenio de colaboración con la
          Asociación aragonesa de Psicopedagogía. Se trata de un acuerdo de colaboración mutua en la
          realización de actividades formativas y de difusión de ambas entidades dirigidas a temas
          educativos dentro de nuestra Comunidad Autónoma.
        </p>
      </div>
    ),
  },
  {
    title: "Charla con Nélida Zaitegi — 'Alto y Claro'",
    date: "27/11/2025",
    tag: "Encuentro",
    img: zaitegi,
    imgAlt: "Cartel de la presentación del libro Alto y Claro de Nélida Zaitegi",
    text: "Presentación del libro 'Alto y Claro' en el CIFICE de la Universidad de Zaragoza.",
    gallery: [
      { src: zaitegi, alt: "Cartel del encuentro con Nélida Zaitegi en CIFICE" },
      { src: zaitegi1, alt: "Asistentes conversando durante el encuentro educativo" },
      { src: zaitegi2, alt: "Nélida Zaitegi acompañada de organizadores en el aula CIFICE" },
      { src: zaitegi3, alt: "Presentación de Nélida Zaitegi en la Facultad de Educación" },
    ],
    details: (
      <div className="space-y-4 text-sm leading-relaxed text-foreground">
        <p>
          Néliza Zaitegui de Miguel nos acompañará el próximo 27 de noviembre a las 18:00 en el
          edificio de CIFICE de la Facultad de Educación para presentarnos su libro{" "}
          <em>Alto y claro: Claves para repensar la educación</em>.
        </p>
        <p>
          Contamos con la colaboración de CIFICE, Centro de Innovación, Formación e Investigación en
          Ciencias de Educación de UNIZAR, que nos ha cedido sus instalaciones.
        </p>
        <p>Una oportunidad excepcional para poder reencontrarnos y seguir hablando sobre educación.</p>
      </div>
    ),
  },
  {
    title: "Coral Elizondo — 'Diseñar hasta los límites'",
    date: "29/10/2025",
    tag: "Encuentro",
    img: elizondo,
    imgAlt: "Cartel de la presentación del libro Diseñar hasta los límites de Coral Elizondo",
    text: "Charla dinámica sobre el libro 'Diseñar hasta los límites', en colaboración con la Fundación Edelvives y CIFICE.",
    gallery: [
      { src: elizondo, alt: "Cartel del encuentro con Coral Elizondo" },
      { src: elizondo1, alt: "Coral Elizondo presentando su libro junto al cartel de la Cátedra Edelvives" },
      { src: elizondo2, alt: "Asistentes y organizadores tras la presentación del libro" },
      { src: elizondo3, alt: "Coral Elizondo durante su intervención sobre Diseñar hasta los límites" },
    ],
    details: (
      <div className="space-y-4 text-sm leading-relaxed text-foreground">
        <p>
          El pasado martes 29 de octubre organizamos la presentación del libro de nuestra compañera
          Coral Elizondo: <em>Diseñar hasta los límites. Estrategias para abrir nuevas posibilidades,
          retos y desafíos para todo el alumnado</em>, editado por Octaedro y que va ya por su segunda
          edición.
        </p>
        <p>
          Para su desarrollo contamos con la colaboración de la Cátedra de la Fundación Edelvives de
          la Universidad de Zaragoza y del Centro de Innovación, Formación e Investigación en Ciencias
          de la Educación (CIFICE), también de la Universidad de Zaragoza, que nos cedió una de sus
          aulas.
        </p>
        <p>
          Al acto asistieron alrededor de treinta docentes e interesados y Coral Elizondo hizo una
          presentación muy dinámica, favoreciendo la participación de los asistentes.
        </p>
      </div>
    ),
  },
];

const Noticias = () => (
  <>
    <Seo
      title="Noticias — FEAE Aragón"
      description="Convenios, encuentros y actividades recientes de FEAE Aragón con instituciones educativas, universidades y profesionales del ámbito educativo."
      path="/noticias"
    />
    <PageHeader
      eyebrow="Actualidad"
      title="Noticias"
      description="Convenios, encuentros y actividades recientes de FEAE Aragón."
    />
    <section className="container py-16">
      <h2 className="sr-only">Últimas noticias</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {news.map((n) => (
          <Dialog key={n.title}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden border-border shadow-card hover:shadow-elegant transition-shadow group cursor-pointer text-left">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={n.img}
                    alt={n.imgAlt}
                    loading="lazy"
                    width={1024}
                    height={576}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105 object-scale-down"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-1 font-semibold uppercase tracking-wider">
                      {n.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {n.date}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-bold text-primary leading-snug">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.text}</p>
                  <p className="mt-4 text-xs font-semibold text-primary uppercase tracking-wider">
                    Leer más →
                  </p>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-0">
              {/* Imagen / carrusel arriba — separado del texto */}
              <div className="bg-muted">
                {n.gallery ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {n.gallery.map((g, i) => (
                        <CarouselItem key={i}>
                          <div className="aspect-[16/9] overflow-hidden bg-muted">
                            <img src={g.src} alt={g.alt} className="h-full w-full object-contain" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                ) : (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={n.img} alt={n.imgAlt} className="h-full w-full object-contain" />
                  </div>
                )}
              </div>
              {/* Contenido textual abajo */}
              <div className="p-6 pt-4">
                <DialogHeader>
                  <div className="flex items-center gap-3 text-xs mb-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-1 font-semibold uppercase tracking-wider">
                      {n.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {n.date}
                    </span>
                  </div>
                  <DialogTitle className="font-serif text-2xl text-primary leading-snug text-left">
                    {n.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">{n.details}</div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  </>
);

export default Noticias;
