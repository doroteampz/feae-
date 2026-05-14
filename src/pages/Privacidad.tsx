import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";

const Privacidad = () => (
  <>
    <Seo
      title="Política de Privacidad y Cookies — FEAE Aragón"
      description="Política de privacidad y uso de cookies de FEAE Aragón. Información sobre el tratamiento de datos, hosting en Netlify y uso de Google Search Console."
      path="/privacidad"
    />
    <PageHeader eyebrow="Privacidad" title="Política de Privacidad y Cookies" />
    <section className="container py-12 max-w-3xl">
      <h2 className="font-serif text-2xl font-bold text-primary">1. Responsable del tratamiento</h2>
      <p className="mt-2 text-muted-foreground">
        El responsable del tratamiento de los datos es <strong>FEAE Aragón</strong> (NIF G50564780, Registro
        01-Z-3228-1993), con domicilio en Plaza San Francisco 17, 5D, Zaragoza. Para cualquier consulta puede
        escribir a <a href="mailto:feaeforumaragon@gmail.com" className="text-primary hover:underline">feaeforumaragon@gmail.com</a>.
      </p>

      <h2 className="font-serif text-2xl font-bold text-primary mt-8">2. Finalidad y base legítima</h2>
      <p className="mt-2 text-muted-foreground">
        Los datos que pueda facilitar a través del correo electrónico o de los formularios externos enlazados
        (por ejemplo, alta como socio/a) se utilizarán únicamente para gestionar su solicitud, mantener el
        contacto asociativo y enviarle información relacionada con FEAE Aragón. La base jurídica es el
        consentimiento del interesado y, en su caso, la relación asociativa.
      </p>

      <h2 className="font-serif text-2xl font-bold text-primary mt-8">3. Conservación y destinatarios</h2>
      <p className="mt-2 text-muted-foreground">
        Los datos se conservarán mientras se mantenga la relación o no se solicite su supresión. No se cederán
        datos a terceros salvo obligación legal.
      </p>

      <h2 className="font-serif text-2xl font-bold text-primary mt-8">4. Derechos</h2>
      <p className="mt-2 text-muted-foreground">
        Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad
        escribiendo a feaeforumaragon@gmail.com. También puede presentar una reclamación ante la Agencia
        Española de Protección de Datos (www.aepd.es).
      </p>

      <h2 className="font-serif text-2xl font-bold text-primary mt-8">5. Cookies y servicios de terceros</h2>
      <p className="mt-2 text-muted-foreground">
        Este sitio utiliza únicamente cookies y tecnologías estrictamente necesarias para su funcionamiento, así
        como herramientas de optimización descritas a continuación:
      </p>

      <h3 className="font-serif text-xl font-bold text-primary mt-6">5.1. Hosting — Netlify</h3>
      <p className="mt-2 text-muted-foreground">
        El sitio está alojado en <strong>Netlify (Netlify, Inc.)</strong>, que utiliza cookies técnicas
        imprescindibles para la seguridad, el balanceo de carga y el correcto rendimiento del sitio. Estas
        cookies no requieren consentimiento previo, pero se informa de su existencia por transparencia. Más
        información en la política de privacidad de Netlify.
      </p>

      <h3 className="font-serif text-xl font-bold text-primary mt-6">5.2. Optimización — Google Search Console</h3>
      <p className="mt-2 text-muted-foreground">
        Utilizamos <strong>Google Search Console</strong>, prestado por <strong>Google Ireland Limited</strong>,
        para monitorizar y mantener la presencia del sitio en los resultados de búsqueda de Google. Esta
        herramienta procesa datos agregados sobre las búsquedas y el rendimiento del sitio, garantizando la
        transparencia en el tratamiento. Más información en la política de privacidad de Google.
      </p>

      <h3 className="font-serif text-xl font-bold text-primary mt-6">5.3. Gestión de preferencias</h3>
      <p className="mt-2 text-muted-foreground">
        Puede aceptar, rechazar o configurar el uso de cookies a través del banner que aparece al acceder por
        primera vez al sitio. Si rechaza las cookies, sólo se mantendrán las técnicas estrictamente necesarias.
        Puede revocar su consentimiento en cualquier momento borrando los datos del navegador.
      </p>
    </section>
  </>
);

export default Privacidad;
