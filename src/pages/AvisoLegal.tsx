import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";

const AvisoLegal = () => (
  <>
    <Seo
      title="Aviso Legal — FEAE Aragón"
      description="Información legal de la asociación FEAE Aragón: titularidad, NIF, registro y domicilio social."
      path="/aviso-legal"
    />
    <PageHeader eyebrow="Información legal" title="Aviso Legal" />
    <section className="container py-12 max-w-3xl prose prose-slate">
      <h2 className="font-serif text-2xl font-bold text-primary mt-0">1. Datos identificativos</h2>
      <p className="text-muted-foreground">
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
      </p>
      <ul className="text-muted-foreground list-disc pl-6 space-y-1">
        <li><strong>Titular:</strong> Fórum Europeo de Administradores de la Educación de Aragón (FEAE Aragón)</li>
        <li><strong>NIF:</strong> G50564780</li>
        <li><strong>Registro de Asociaciones:</strong> 01-Z-3228-1993</li>
        <li><strong>Domicilio social:</strong> Plaza San Francisco 17, 5D, Zaragoza</li>
        <li><strong>Correo electrónico:</strong> feaeforumaragon@gmail.com</li>
      </ul>

      <h2 className="font-serif text-2xl font-bold text-primary mt-8">2. Objeto</h2>
      <p className="text-muted-foreground">
        El presente sitio web tiene por finalidad informar sobre las actividades, jornadas, publicaciones y
        recursos de FEAE Aragón, así como facilitar el contacto con personas e instituciones interesadas en la
        mejora de la educación.
      </p>

      <h2 className="font-serif text-2xl font-bold text-primary mt-8">3. Propiedad intelectual</h2>
      <p className="text-muted-foreground">
        Todos los contenidos del sitio (textos, imágenes, logotipos, diseños) son titularidad de FEAE Aragón o
        de terceros que han autorizado su uso. Queda prohibida su reproducción total o parcial sin autorización
        expresa.
      </p>

      <h2 className="font-serif text-2xl font-bold text-primary mt-8">4. Responsabilidad</h2>
      <p className="text-muted-foreground">
        FEAE Aragón no se responsabiliza de los contenidos de sitios externos enlazados desde esta web ni de los
        posibles daños derivados del uso de la información publicada.
      </p>

      <h2 className="font-serif text-2xl font-bold text-primary mt-8">5. Legislación aplicable</h2>
      <p className="text-muted-foreground">
        Las presentes condiciones se rigen por la legislación española vigente.
      </p>
    </section>
  </>
);

export default AvisoLegal;
