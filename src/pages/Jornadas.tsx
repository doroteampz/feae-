import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo } from "@/components/site/Seo";
import fondoAsset from "@/assets/fondo.png";
import posterAsset from "@/assets/miradas-poster.jpeg";
import logoCifice from "@/assets/logo-cifice.png";
import logoFacultad from "@/assets/logo-facultad-educacion.png";
import logoEdelvives from "@/assets/logo-edelvives.jpg";
import logoFeaeEuropeo from "@/assets/logo-feae-europeo.jpeg";
import logoPsicopedagogia from "@/assets/logo-psicopedagogia.jpeg";
import logoTeadir from "@/assets/logo-teadir.jpg";
import logoCatedraEdelvives from "@/assets/logo-catedra-edelvives.png";
import logoPatrocinadores from "@/assets/patrocinadores.jpeg";
import logoImacUnizar from "@/assets/imac-unizar.jpeg";
import logoGobierno from "@/assets/logo-gobierno.jfif";

const jornadasJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "XXXIII Jornadas Estatales FEAE — Miradas de la Educación Inclusiva",
  startDate: "2026-10-23",
  endDate: "2026-10-24",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Universidad de Zaragoza · Espacio Ibercaja Joven",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zaragoza",
      addressRegion: "Aragón",
      addressCountry: "ES",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "FEAE Aragón",
    url: "https://feaearagon.org",
  },
  url: "https://feaearagon.org/jornadas",
};

const Jornadas = () => (
  <>
    <Seo
      title="XXXIII Jornadas Estatales FEAE — Zaragoza 2026"
      description="Jornadas FEAE 'Miradas de la Educación Inclusiva' los días 23 y 24 de octubre de 2026 en Zaragoza. Programa, inscripción, sedes y participación."
      path="/jornadas"
      jsonLd={jornadasJsonLd}
    />
    <section
      className="relative border-b border-border overflow-hidden"
      style={{
        backgroundImage: `url(${fondoAsset})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" aria-hidden="true" />
      <div className="container relative py-16 md:py-20 max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{"\n"}</p>
        <h1 className="font-serif text-4xl md:text-5xl font-black text-primary leading-tight drop-shadow-sm">
          XXXIII Jornadas Estatales FEAE
        </h1>
        <div className="mt-4 text-lg text-foreground">
          <span className="block font-serif italic text-xl text-primary">
            "Miradas de la Educación Inclusiva"
          </span>
          <span className="block mt-3">
            Diálogos y estrategias para construir comunidades educativas que cuiden, incluyan, acojan y transformen.
          </span>
          <span className="block mt-3 font-semibold">
            23 y 24 de octubre de 2026 · Zaragoza
          </span>
        </div>
      </div>
    </section>


    <section className="container py-16 max-w-4xl">
      <Card className="p-6 md:p-8 mb-8 border-border shadow-card">
        <p className="text-muted-foreground leading-relaxed">
          Las jornadas <strong className="text-foreground">"Miradas de la Educación Inclusiva"</strong> se enmarcan
          en la misión central de nuestra asociación: ser un punto de encuentro donde profesionales de la
          educación puedan dialogar, contrastar experiencias, construir conocimiento compartido y avanzar
          hacia una educación más justa, accesible y transformadora.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Te invitamos a formar parte activa de este espacio. Tu mirada, tu experiencia y tus preguntas
          son esenciales para seguir construyendo comunidades educativas que acojan y valoren a todas las
          personas. ¿Te unes?
        </p>
        <div className="mt-6 space-y-6 text-sm">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold mb-3">Organiza</p>
              <div className="flex flex-wrap items-center gap-4">
                <img src={logoFeaeEuropeo} alt="FEAE — Fórum Europeo de Administradores de la Educación" className="h-12 w-auto object-contain" loading="lazy" />
                <img src={logoCifice} alt="CIFICE — Universidad de Zaragoza" className="h-12 w-auto object-contain" loading="lazy" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold mb-3">Patrocina</p>
              <div className="flex flex-col items-center gap-4">
                <img src={logoPatrocinadores} alt="Cátedra Caja Rural de Teruel · Fundación Tervalis · Universidad de Zaragoza · Caja Rural de Teruel · Fundación Tervalis" className="h-16 w-auto object-contain" loading="lazy" />
                <img src={logoImacUnizar} alt="iMAC Talento · Spin-off Universidad de Zaragoza" className="h-16 w-auto object-contain" loading="lazy" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold mb-3">Colabora</p>
            <div className="flex flex-wrap items-center gap-4">
              <img src={logoEdelvives} alt="Grupo Edelvives" className="h-18 w-auto object-contain" loading="lazy" />
              <img src={logoFacultad} alt="Facultad de Educación — Universidad de Zaragoza" className="h-12 w-auto object-contain" loading="lazy" />
              <img src={logoCatedraEdelvives} alt="Cátedra Fundación Edelvives — Universidad de Zaragoza" className="h-12 w-auto object-contain" loading="lazy" />
              <img src={logoPsicopedagogia} alt="Asociación Aragonesa de Psicopedagogía" className="h-12 w-auto object-contain" loading="lazy" />
              <img src={logoTeadir} alt="TEAdir Aragón" className="h-12 w-auto object-contain" loading="lazy" />
              <img src={logoGobierno} alt="Gobierno de Aragón" className="h-12 w-auto object-contain" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://forms.gle/tyRLATsYN5tK7DQu9"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 transition-colors"
          >
            Inscripción en las Jornadas →
          </a>
        </div>
      </Card>

      <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-5">Información de las jornadas</h2>
      <Accordion type="single" collapsible className="w-full space-y-3">
        {/* 1. Temática, Objetivos y Destinatarios */}
        <AccordionItem value="item-1" className="border border-border rounded-lg px-5 bg-card shadow-card">
          <AccordionTrigger className="text-left font-serif text-lg font-bold text-primary hover:no-underline">
            1. Temática, Objetivos y Destinatarios
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed space-y-5 pt-2">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Temática de las jornadas</h4>
              <p>
                Las XXXIII Jornadas FEAE <em>Miradas sobre la Inclusión Educativa</em> abordan los tres
                pilares que sostienen una educación inclusiva sólida y sostenible cuyo objetivo pretende
                la presencia, participación y progreso de los estudiantes:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong className="text-foreground">Culturas inclusivas:</strong> cómo pensamos, sentimos y miramos la educación; qué valores, creencias y actitudes permiten construir comunidades que acogen y reconocen la diversidad.</li>
                <li><strong className="text-foreground">Políticas inclusivas:</strong> cómo organizamos, regulamos y garantizamos el derecho a la educación; qué marcos normativos, estructuras y decisiones facilitan la equidad y la igualdad de oportunidades.</li>
                <li><strong className="text-foreground">Prácticas inclusivas:</strong> cómo actuamos, evaluamos y acompañamos en el aprendizaje; qué metodologías, estrategias y modelos de intervención favorecen la participación, el progreso y el bienestar de todo el alumnado.</li>
              </ul>
              <p className="mt-3">
                A través de ponencias, conversatorios, talleres, espacios de debate y presentación de
                pósters, las jornadas ofrecen una mirada amplia y actualizada sobre los avances, retos y
                oportunidades de la educación inclusiva en contextos educativos diversos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Destinatarios</h4>
              <p>Estas jornadas están pensadas para profesionales que desean actualizarse, compartir, aprender y contribuir a una educación que no deje a nadie atrás. Dirigidas a:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Personal docente y profesionales del ámbito de la Educación.</li>
                <li>Personal Técnico en Gestión, Administración Educativa y Universitaria.</li>
                <li>Personal docente y estudiantes de la Facultad de Educación y Máster del Profesorado.</li>
                <li>Entidades sociales y asociaciones vinculadas a la educación y los ámbitos de inclusión educativa, social y laboral.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Objetivos</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-foreground">Fortalecer el pensamiento crítico y la reflexión compartida</strong> sobre los desafíos actuales de la inclusión, desde la formación del profesorado hasta las políticas públicas y la organización escolar.</li>
                <li><strong className="text-foreground">Fomentar la participación activa de la comunidad educativa</strong> mediante espacios de diálogo, debate y construcción colectiva de propuestas.</li>
                <li><strong className="text-foreground">Promover el intercambio profesional</strong> entre docentes, investigadores, estudiantes, equipos directivos, personal técnico y entidades sociales vinculadas a la inclusión educativa.</li>
                <li><strong className="text-foreground">Ofrecer un espacio de difusión científica y profesional</strong> a través de la presentación de pósters evaluados por un comité científico y la posterior publicación de colaboraciones en revistas especializadas en educación.</li>
                <li><strong className="text-foreground">Visibilizar experiencias, investigaciones y prácticas innovadoras</strong> que estén contribuyendo a transformar los centros educativos en espacios más accesibles, equitativos y participativos.</li>
                <li><strong className="text-foreground">Impulsar alianzas estratégicas</strong> entre instituciones educativas, administraciones, universidades y organizaciones sociales para avanzar hacia modelos de inclusión sostenibles.</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 2. Programa */}
        <AccordionItem value="item-2" className="border border-border rounded-lg px-5 bg-card shadow-card">
          <AccordionTrigger className="text-left font-serif text-lg font-bold text-primary hover:no-underline">
            2. Programa
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed space-y-6 pt-2">
            <div>
              <h4 className="font-semibold text-foreground">Viernes, 23 de octubre</h4>
              <p className="text-sm mt-1">Salón de Actos de la Facultad de Educación Universidad de Zaragoza, Campus San Francisco, Calle Pedro Cerbuna, 12, 50009 Zaragoza.</p>
              <ul className="mt-3 space-y-3">
                <li>
                  <p><strong className="text-foreground">09:00</strong> · Bienvenida y recogida de documentación</p>
                </li>
                <li>
                  <p><strong className="text-foreground">09:30</strong> · Acto de inauguración</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>D. Santos Orejudo Hernández, Decano de la Facultad de Educación, Universidad de Zaragoza.</li>
                    <li>Dña. Mónica Domínguez García, Directora General de Evaluación y Cooperación Territorial, Ministerio de Educación, Formación Profesional y Deportes, Gobierno de España.</li>
                    <li>Dirección General de Política Educativa, Ordenación, Equidad y Formación, Consejería de Educación, Ciencia y Universidades, Gobierno de Aragón.</li>
                    <li>Dña. Dolores Pevida Llamazares. Presidenta Estatal de FEAE.</li>
                    <li>D. Jacobo Cano Escoriaza, Director del CIFICE, UNIZAR.</li>
                    <li>Dña. Dorotea Pérez Fernández. Presidenta de FEAE Aragón.</li>
                  </ul>
                </li>
                <li>
                  <p className="italic text-primary/80">Culturas: "Cómo pensamos, sentimos y miramos la educación".</p>
                </li>
                <li>
                  <p><strong className="text-foreground">10:00</strong> · Miradas que acogen: Ponencia. <em>El fin de la educación. ¿Otra educación es posible?</em></p>
                </li>
                <li>
                  <p><strong className="text-foreground">11:00</strong> · Miradas que comparten: Conversatorio "Inclusión, alianzas estratégicas más allá de la escuela y aprendizaje a lo largo de la vida".</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Modera: Emilio Veiga Río, Vicepresidente de FEAE Galicia.</li>
                    <li>Participantes: TEAdir Aragón, Plena Inclusión, Federaciones de Familias FAPAR y FECAPA Aragón, Secretariado Gitano, Programa de Mediación Intercultural de CAREI.</li>
                  </ul>
                </li>
                <li><p><strong className="text-foreground">11:45</strong> · Pausa-café.</p></li>
                <li>
                  <p className="italic text-primary/80">Políticas: "Cómo organizamos, regulamos y garantizamos el derecho a la educación".</p>
                </li>
                <li>
                  <p><strong className="text-foreground">12:15</strong> · Miradas que sostienen la equidad e igualdad de oportunidades. Ponencia: <em>"La inclusión no se improvisa: se diseña"</em>.</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Presenta: FEAE Asturias.</li>
                    <li>Ponente: Coral Elizondo Carmona. Experta en educación inclusiva. Maestra, psicóloga, orientadora y escritora.</li>
                  </ul>
                </li>
                <li>
                  <p><strong className="text-foreground">13:00</strong> · Miradas que garantizan derechos y generan condiciones: Conversatorio "Políticas Educativas, Formación del profesorado y nuevos modelos de inclusión hacia la transformación".</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Modera: FEAE Cantabria (Azucena Gozalo Ausín).</li>
                    <li>Participantes: Subdirección Cooperación Territorial del MEFPD; Carmen Romero Ureña (Inspectora y Profesora colaboradora de la UVA de FEAE CyL); José Sánchez Santamaría (Doctor en Pedagogía, profesor y coordinador del GRIOCE y presidente de FEAE CLM); Mª José Cesena Santiago, Direcció de l'Àrea Educació Inclusiva del Consorci Educació de Barcelona; Paloma Canduela (Jefa de Unidad de Inclusión de la Consejería de Educación, FP y Universidades de Cantabria).</li>
                  </ul>
                </li>
                <li><p><strong className="text-foreground">14:00</strong> · Comida-encuentro para participantes inscritos. Espacio Aula Jardín del CIFICE.</p></li>
                <li>
                  <p className="italic text-primary/80">Prácticas: "Cómo actuamos, evaluamos y acompañamos en el aprendizaje".</p>
                </li>
                <li>
                  <p><strong className="text-foreground">16:00</strong> · Miradas que analizan, innovan e investigan: Pósteres (Innovación e investigación en prácticas y modelos de Educación Inclusiva).</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Presenta: Sandra Vázquez Toledo. Secretaria de CIFICE y co-directora de la Cátedra F. Edelvives del Cuidado.</li>
                    <li>Participantes: encuentro de ponentes con presentación de pósteres.</li>
                  </ul>
                </li>
                <li>
                  <p><strong className="text-foreground">17:00</strong> · Miradas que actúan, transforman y hacen aprender: Talleres sobre experiencias y buenas prácticas inclusivas de éxito en el ámbito educativo.</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Presenta: Asociación Aragonesa de Psicopedagogía.</li>
                    <li>Taller 1. Escuelas en movimiento: cuando la colaboración impulsa el cambio (Carmen López y Concepción Mérida, Equipo Especializado de Orientación Educativa en Espectro Autista, Aragón).</li>
                    <li>Taller 2. Accesibilidad cognitiva. Sistemas Aumentativos y Alternativos de Comunicación (SAAC). ARASAAC.</li>
                    <li>Taller 3. Escuelas abiertas: cuando el centro se abre a la Comunidad. CEIP Pío XII (Huesca).</li>
                    <li>Taller 4. Accesibilidad comunicativa: Acogida a alumnado inmigrante en aulas AILE. IES Mar de Aragón (Caspe).</li>
                    <li>Taller 5. La inclusión da mucho juego. Editorial Edelvives.</li>
                    <li>Taller 6. Innovación educativa contra las desigualdades: Àngels Cadena, Directora professional i presidenta FEAEC, CEIP Mercè Rodoreda de Nou Barris, Barcelona. Premio internacional 2016 convocatoria de Innovación educativa contra las desigualdades (International Symposium: Innovative Pedagogies for Powerful Learning).</li>
                  </ul>
                </li>
                <li><p><strong className="text-foreground">18:00</strong> · Cierre de la Jornada con actuación sorpresa.</p></li>
                <li><p><strong className="text-foreground">19:00</strong> · Visita cultural.</p></li>
                <li><p><strong className="text-foreground">21:30</strong> · Cena de gala para representantes de foros y entidades colaboradoras.</p></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Sábado, 24 de octubre</h4>
              <p className="text-sm mt-1">Espacio Ibercaja Joven, Paseo Fernando el Católico, 1-3, 50006 Zaragoza.</p>
              <p className="italic text-primary/80 mt-2">Prácticas: "Cómo actuamos, evaluamos y acompañamos en el aprendizaje".</p>
              <ul className="mt-3 space-y-3">
                <li><p><strong className="text-foreground">09:30</strong> · Recepción y registro.</p></li>
                <li>
                  <p><strong className="text-foreground">09:45</strong> · Miradas que actúan, transforman y hacen aprender: Ponencia: <em>Estrategia multinivel para una educación inclusiva</em>.</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Presenta: Alicia Echevarría Benito, FEAE Aragón.</li>
                    <li>Ponente: Alberto Quílez Robres. Doctor en Educación, graduado en Magisterio en Educación Primaria y Experto en Neuropsicología y Educación.</li>
                  </ul>
                </li>
                <li>
                  <p><strong className="text-foreground">10:45</strong> · Miradas que analizan, innovan e investigan: Presentación de pósteres (Innovación e investigación en prácticas y modelos de Educación Inclusiva).</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Presenta: Carlos Hué García, Miembro de la Asociación Aragonesa de Psicopedagogía, Doctor en Ciencias de la Educación y Psicólogo. Experto en inteligencia emocional y coaching educativo. Miembro de la Red Internacional de Educación Emocional y Bienestar.</li>
                    <li>Participantes: encuentro de ponentes con presentación de pósteres.</li>
                  </ul>
                </li>
                <li><p><strong className="text-foreground">11:45–12:15</strong> · Pausa-café.</p></li>
                <li>
                  <p><strong className="text-foreground">12:15</strong> · "Miradas que reflexionan, debaten y buscan compromisos". Open Space: Papel de los administradores de la educación ante la educación inclusiva. Dinámica de debate por bloques temáticos.</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Bloques temáticos: Culturas, Políticas y Prácticas.</li>
                    <li>Inspección y administración (FEAE Cataluña).</li>
                    <li>Centros educativos (FEAE Valencia).</li>
                    <li>Papel de entidades (FEAE Galicia).</li>
                    <li>Formación del profesorado (FEAE CyL).</li>
                    <li>Red de Orientación (FEAE Aragón).</li>
                  </ul>
                </li>
                <li><p><strong className="text-foreground">13:15</strong> · Conclusiones y cierre.</p></li>
                <li>
                  <p><strong className="text-foreground">14:00</strong> · Acto de clausura.</p>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Dolores Pevida Llamazares. Presidenta Estatal de FEAE.</li>
                    <li>Dorotea Pérez Fernández. Presidenta de FEAE Aragón.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Domingo, 25 de octubre</h4>
              <p className="text-sm mt-1">Espacio Plaza del Pilar.</p>
              <ul className="mt-3 space-y-3">
                <li><p><strong className="text-foreground">10:00</strong> · Consejo General de FEAE.</p></li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 3. Calendario y sede */}
        <AccordionItem value="item-3" className="border border-border rounded-lg px-5 bg-card shadow-card">
          <AccordionTrigger className="text-left font-serif text-lg font-bold text-primary hover:no-underline">
            3. Calendario y sede
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed space-y-5 pt-2">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Sedes</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-foreground">23 de octubre.</strong> Salón de Actos de la Facultad de Educación, Universidad de Zaragoza. Campus San Francisco, Calle Pedro Cerbuna, 12, 50009 Zaragoza.</li>
                <li><strong className="text-foreground">24 de octubre.</strong> Espacio Ibercaja Joven. Paseo Fernando el Católico, 1-3, 50006 Zaragoza.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Calendario de inscripciones</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>Comienzo del plazo de inscripciones: <strong className="text-foreground">25 de junio al 9 de octubre de 2026</strong>.</li>
                <li>Finalización del plazo de inscripción anticipada: <strong className="text-foreground">31 de julio de 2026, incluido</strong>.</li>
                <li>Plazo para la recepción de pósteres: <strong className="text-foreground">del 25 de junio al 6 de septiembre de 2026, incluido</strong>.</li>
                <li>Comunicación de la aceptación de pósteres: <strong className="text-foreground">entre el 6 y el 30 de septiembre de 2026, incluido</strong>.</li>
                <li>Plazo final de aceptación de comunicaciones (resumen del póster) para publicación: <strong className="text-foreground">hasta el 30 de octubre de 2026</strong>.</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 4. Inscripción */}
        <AccordionItem value="item-4" className="border border-border rounded-lg px-5 bg-card shadow-card">
          <AccordionTrigger className="text-left font-serif text-lg font-bold text-primary hover:no-underline">
            4. Inscripción
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed space-y-5 pt-2">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Cuotas de inscripción</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-foreground">Cuota general:</strong> 125 € (del 1 de agosto al 9 de octubre).</li>
                <li><strong className="text-foreground">Cuota reducida por pago anticipado:</strong> 100 € (hasta el 31 de julio).</li>
                <li><strong className="text-foreground">Cuota especial para ponentes con pósters admitidos:</strong> 100 €.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">La inscripción incluye</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>Asistencia presencial a todas las sesiones de las Jornadas.</li>
                <li>Certificaciones por asistencia presencial y presentación de trabajos.</li>
                <li>Café-pausa de las Jornadas.</li>
                <li>Comida-encuentro del día 23.</li>
              </ul>
              <p className="mt-3 text-sm">
                <strong className="text-foreground">Certificado de asistencia:</strong> a todas las personas inscritas que hayan abonado la tasa de inscripción. Será necesaria la firma en la hoja de asistencia. Se remitirá por correo electrónico.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">No incluye</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>Cena de gala del viernes 23 de octubre: <strong className="text-foreground">45 €/persona</strong>.</li>
                <li>Visita cultural: <strong className="text-foreground">10 €/persona</strong>.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Proceso de inscripción</h4>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Acceso al formulario de inscripción.</li>
                <li>Pago del importe de la inscripción y/o actividades opcionales (visita cultural / cena de gala) mediante transferencia bancaria y posterior descarga del resguardo. <em>(Cuenta de pago: ES17 2085 5241 1403 3157 0227)</em>{"\u00a0"}</li>
                <li>Inscripción o registro: cumplimentando el formulario y adjuntando el resguardo de pago.</li>
              </ol>
              <p className="mt-3 text-sm">
                Para cualquier consulta puedes escribirnos a{" "}
                <a href="mailto:feaeforumaragon@gmail.com" className="font-bold text-primary hover:underline">
                  feaeforumaragon@gmail.com
                </a>
              </p>
              <div className="mt-5">
                <a
                  href="https://forms.gle/tyRLATsYN5tK7DQu9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 transition-colors"
                >
                  Inscripción en las Jornadas →
                </a>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 5. Participación */}
        <AccordionItem value="item-5" className="border border-border rounded-lg px-5 bg-card shadow-card">
          <AccordionTrigger className="text-left font-serif text-lg font-bold text-primary hover:no-underline">
            5. Participación
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed space-y-5 pt-2">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Póster — Normas para la elaboración y envío</h4>
              <p>
                Deberá reflejar el contenido de la contribución de forma visual, coherente y sintética,
                por medio de imágenes, gráficos, diagramas, tablas y cualquier elemento gráfico que se
                considere, evitando la inclusión masiva de texto. El tamaño del contenido debe ser
                adecuado para que pueda visualizarse de forma clara desde una distancia de metro y medio,
                al menos.
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>La organización facilita la <a href="/docs/plantilla-poster1.pptx" download="Plantilla_Poster_FEAE_Aragon.pptx" className="font-bold text-primary hover:underline">descarga opcional de plantilla&nbsp;(click aquí)</a>&nbsp;.</li>
                <li>Dimensiones del póster: <strong className="text-foreground">100 cm (horizontal) × 70 cm (vertical)</strong>.</li>
                <li>La impresión y/o difusión correrá a cargo de la organización.</li>
                <li>Los autores deberán remitir el póster en formato PDF mediante el formulario habilitado, hasta las <strong className="text-foreground">14:00 h del 6 de septiembre de 2026</strong>.</li>
                <li>Formatos admitidos para la elaboración: PDF, PPTX u ODP.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Comité Organizador</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Jacobo Cano Escoriaza, Director del CIFICE.</li>
                <li>Dorotea Pérez Fernández, Presidenta de FEAE Aragón.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Comité Científico</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Sandra Vázquez Toledo, Secretaria de CIFICE y Co-directora de la Cátedra F. Edelvives del Cuidado.</li>
                <li>Susana Vázquez Martínez, Presidenta de FEAE Galicia.</li>
                <li>Begoña Codesal Patiño, FEAE Galicia.</li>
                <li>José Antonio Ortiz López, Presidente de FEAE Cantabria.</li>
                <li>Jara P. Serrano García, FEAE Aragón.</li>
                <li>Juan Salamé Sala, UNED y FEAE Aragón.</li>
                <li>Carlos Hué García, Asociación Aragonesa de Psicopedagogía.</li>
                <li>Mercedes González Sanmamé, Facultad de Ciencias de la Educación da Coruña.</li>
                <li>Nuria Rebollo Quintela, Facultad de Ciencias de la Educación da Coruña.</li>
                <li>Luisa Losada Puente, Facultad de Ciencias de la Educación da Coruña.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Instituciones, unidades y centros participantes</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Centro de Innovación, Formación e Investigación en Ciencias de la Educación (CIFICE) de la Universidad de Zaragoza.</li>
                <li>Foro de Administradores de la Educación de Galicia, Cantabria y Aragón.</li>
                <li>Asociación Aragonesa de Psicopedagogía.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Publicaciones</h4>
              <p>
                Los autores inscritos cuyos pósteres hayan sido admitidos, podrán enviar una contribución
                sobre el contenido de este que será publicado y difundido en el monográfico de la revista{" "}
                <strong className="text-foreground">DyLE</strong>, número trimestral de la revista{" "}
                <strong className="text-foreground">Forum Aragón</strong> y Revista{" "}
                <strong className="text-foreground">ENLACE</strong>.
              </p>
              <p className="mt-3 font-semibold text-foreground">Aceptación de las condiciones de participación y publicación de contribuciones:</p>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li><strong className="text-foreground">Ponencias y artículos:</strong> extensión máxima de 10.000 caracteres con espacios.</li>
                <li><strong className="text-foreground">Experiencias educativas:</strong> extensión máxima de 12.000 caracteres con espacios.</li>
                <li>En ambos casos, se podrán adjuntar hasta tres imágenes en formato JPG, con una resolución mínima recomendada de 300 ppp (dpi) y un tamaño mínimo de 1.500 píxeles en su lado más largo, para garantizar una correcta calidad de reproducción.</li>
                <li>Los textos deberán enviarse en formato Microsoft Word (.doc o .docx) u odt.</li>
                <li>La aceptación y publicación de los trabajos quedará supeditada a la revisión del comité editorial de las revistas.</li>
                <li>Las publicaciones se enviarán antes del <strong className="text-foreground">30 de noviembre de 2026</strong> a la dirección de correo electrónico{" "}
                  <a href="mailto:feaeforumaragon@gmail.com" className="font-bold text-primary hover:underline">feaeforumaragon@gmail.com</a>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section className="container pb-16 max-w-3xl">
      <img
        src={posterAsset}
        alt="Cartel oficial XXXIII Jornadas Estatales FEAE — Miradas de la Educación Inclusiva, 23 y 24 de octubre de 2026, Zaragoza"
        className="w-full h-auto rounded-lg shadow-card"
        loading="lazy"
      />
    </section>
  </>

);

export default Jornadas;
