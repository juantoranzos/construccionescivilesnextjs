// app/terminos-y-condiciones/page.tsx
import Script from "next/script";

const SITE_NAME = "ConstruccionesCiviles.com"; // TODO
const LEGAL_NAME = "Construcciones Civiles S.R.L."; // TODO: razón social o nombre del responsable
const CUIT = "30-00000000-0"; // TODO
const CONTACT_EMAIL = "legal@construccionesciviles.com"; // TODO
const CONTACT_PHONE = "+54 381 000 0000"; // TODO
const POSTAL_ADDRESS = "Av. Ejemplo 123, San Miguel de Tucumán, Tucumán, Argentina"; // TODO
const SITE_URL = "https://construccionesciviles.com"; // TODO
const LAST_UPDATED = "23/10/2025"; // actualizar cuando cambie



export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TermsOfService",
    name: "Términos y Condiciones",
    url: `${SITE_URL}/terminos-y-condiciones`,
    publisher: {
      "@type": "Organization",
      name: LEGAL_NAME,
      url: SITE_URL,
      identifier: CUIT,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "legal",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: POSTAL_ADDRESS,
        addressCountry: "AR",
        addressRegion: "Tucumán",
        addressLocality: "San Miguel de Tucumán",
      },
    },
    dateModified: "2025-10-23",
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 my-10 prose prose-neutral dark:prose-invert">
      <h1>Términos y Condiciones de Uso</h1>
      <p><strong>Última actualización:</strong> {LAST_UPDATED}</p>

      <p>
        Bienvenido a <strong>{SITE_NAME}</strong> (el “Sitio”). El acceso y uso del Sitio implican la
        aceptación plena de estos Términos y Condiciones (los “Términos”). Si no estás de acuerdo, por favor no utilices el Sitio.
      </p>

      <h2>1. Identidad del Responsable</h2>
      <p>
        <strong>Responsable:</strong> {LEGAL_NAME} — CUIT {CUIT}<br />
        <strong>Domicilio:</strong> {POSTAL_ADDRESS}<br />
        <strong>Contacto:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> | <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
      </p>

      <h2>2. Objeto del Sitio y Alcance de los Servicios</h2>
      <p>
        El Sitio ofrece información institucional sobre servicios de construcción, obras civiles y proyectos relacionados,
        así como canales de contacto y solicitud de presupuestos. La información es de carácter general y puede actualizarse
        o modificarse sin previo aviso.
      </p>

      <h2>3. Aceptación y Modificación de los Términos</h2>
      <p>
        {LEGAL_NAME} puede modificar estos Términos en cualquier momento publicando una versión actualizada en este apartado.
        Las modificaciones rigen desde su publicación. Te recomendamos revisarlos periódicamente.
      </p>

      <h2>4. Uso Permitido del Sitio</h2>
      <ul>
        <li>Usar el Sitio conforme a la ley, la moral, el orden público y estos Términos.</li>
        <li>No realizar actos que afecten la disponibilidad, integridad o seguridad del Sitio.</li>
        <li>No usar el Sitio para difundir contenido ilícito, engañoso, difamatorio o que infrinja derechos de terceros.</li>
      </ul>

      <h2>5. Cuentas y Autenticación (si aplicara)</h2>
      <p>
        Si se habilitan cuentas de usuario, sos responsable de mantener la confidencialidad de tus credenciales y de toda
        actividad realizada bajo tu cuenta. Debés notificarnos ante usos no autorizados.
      </p>

      <h2>6. Presupuestos, Propuestas y Contrataciones</h2>
      <ul>
        <li>
          Las cotizaciones y propuestas enviadas a través del Sitio son estimativas y no constituyen oferta irrevocable.
        </li>
        <li>
          Todo servicio se rige por su contrato específico (alcances, plazos, costos, garantías), que prevalecerá sobre lo informado en el Sitio.
        </li>
        <li>
          Las imágenes, descripciones y fichas técnicas tienen fines ilustrativos y pueden variar según disponibilidad y condiciones de obra.
        </li>
      </ul>

      <h2>7. Precios, Impuestos y Pagos (si aplicara)</h2>
      <p>
        Los precios, cuando se informen, estarán expresados en la moneda indicada e incluyen o no impuestos según se aclare.
        El pago de servicios se regirá por el contrato y medios acordados con el cliente.
      </p>

      <h2>8. Propiedad Intelectual</h2>
      <p>
        Todo el contenido del Sitio (textos, marcas, logotipos, fotografías, diseños, código y demás elementos)
        pertenece a {LEGAL_NAME} o a sus licenciantes y está protegido por leyes de propiedad intelectual.
        Queda prohibida su reproducción, distribución o modificación sin autorización previa y por escrito.
      </p>

      <h2>9. Contenidos y Enlaces de Terceros</h2>
      <p>
        El Sitio puede enlazar a sitios de terceros. {LEGAL_NAME} no controla ni responde por su contenido o prácticas.
        El acceso a dichos sitios es bajo tu propio riesgo y te sugerimos revisar sus términos y políticas.
      </p>

      <h2>10. Disponibilidad, Mantenimiento y Fuerza Mayor</h2>
      <p>
        No garantizamos disponibilidad ininterrumpida del Sitio. Podemos interrumpir o limitar el acceso por mantenimiento
        o por causas de fuerza mayor (p. ej., fallas de proveedores, cortes de energía, eventos climáticos).
      </p>

      <h2>11. Declaraciones y Limitación de Responsabilidad</h2>
      <ul>
        <li>
          La información del Sitio se provee “tal cual” y “según disponibilidad”. Hacemos esfuerzos razonables por mantenerla actualizada,
          pero puede contener errores u omisiones.
        </li>
        <li>
          En la máxima medida permitida por la ley, {LEGAL_NAME} no será responsable por daños indirectos, incidentales,
          lucro cesante o pérdida de datos derivados del uso o imposibilidad de uso del Sitio.
        </li>
        <li>
          Nada de lo aquí dispuesto limita responsabilidades que no puedan excluirse según la normativa vigente.
        </li>
      </ul>

      <h2>12. Protección de Datos Personales</h2>
      <p>
        El tratamiento de datos se rige por nuestra <a href="/politica-de-privacidad">Política de Privacidad</a>.
        Al usar el Sitio, aceptás esa política y el uso de cookies y tecnologías similares según allí se detalla.
      </p>

      <h2>13. Comunicaciones y Notificaciones</h2>
      <p>
        Podremos contactarte a través de los datos que nos proporciones (email, teléfono). Las notificaciones referidas a estos Términos
        deberán dirigirse a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>14. Ley Aplicable y Jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes de la República Argentina. Para toda controversia, las partes se someten a los
        tribunales ordinarios de la ciudad de San Miguel de Tucumán, Tucumán, con renuncia a cualquier otro fuero o jurisdicción,
        salvo normas de orden público que dispongan lo contrario.
      </p>

      <h2>15. Consumidores (si aplicara)</h2>
      <p>
        Si actuás como consumidor, te asisten los derechos reconocidos por la Ley 24.240 y normas complementarias. Este apartado no limita
        los derechos irrenunciables que te correspondan.
      </p>

      <h2>16. Nulidad Parcial</h2>
      <p>
        Si alguna cláusula resultara inválida o inoponible, las restantes conservarán su validez y vigencia.
      </p>

      <h2>17. Aceptación Electrónica</h2>
      <p>
        Al navegar el Sitio y utilizar sus funcionalidades, declarás haber leído y aceptado estos Términos y la
        <a href="/politica-de-privacidad"> Política de Privacidad</a>.
      </p>

      {/* JSON-LD para SEO */}
      <Script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
