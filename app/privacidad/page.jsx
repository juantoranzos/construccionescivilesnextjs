// app/politica-de-privacidad/page.tsx
import Script from "next/script";

const SITE_NAME = "ConstruccionesCiviles.com"; // TODO: ajustar si corresponde
const LEGAL_NAME = "Construcciones Civiles S.R.L."; // TODO: razón social
const CONTACT_EMAIL = "privacidad@construccionesciviles.com"; // TODO
const CONTACT_PHONE = "+54 3838 602867"; // TODO
const POSTAL_ADDRESS = "Dr Fernandez, K4139 Santa María, Catamarca"; // TODO
const LAST_UPDATED = "23/10/2025"; // actualizar cuando cambie la política
const SITE_URL = "https://construccionesciviles.com";



export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "Política de Privacidad",
    url: `${SITE_URL}/politica-de-privacidad`,
    publisher: {
      "@type": "Organization",
      name: LEGAL_NAME,
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "privacy",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: POSTAL_ADDRESS,
        addressCountry: "AR",
      },
    },
    dateModified: "2025-10-23",
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-10 my-10 prose prose-neutral dark:prose-invert ">
      <h1>Política de Privacidad</h1>
      <p><strong>Última actualización:</strong> {LAST_UPDATED}</p>
      <p>
        En <strong>{SITE_NAME}</strong> (en adelante, “<strong>{LEGAL_NAME}</strong>” o “nosotros”)
        respetamos y protegemos la privacidad de las personas que interactúan con nuestros sitios, productos y servicios.
        Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos personales.
      </p>

      <h2>1. ¿Quién es el responsable del tratamiento?</h2>
      <p>
        <strong>Responsable:</strong> {LEGAL_NAME}<br />
        <strong>Domicilio:</strong> {POSTAL_ADDRESS}<br />
        <strong>Email de contacto:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />
        <strong>Teléfono:</strong> <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
      </p>

      <h2>2. ¿Qué datos recopilamos?</h2>
      <ul>
        <li><strong>Datos de contacto:</strong> nombre, email, teléfono, empresa y cargo cuando completás formularios o nos contactás.</li>
        <li><strong>Datos comerciales:</strong> información de consultas, pedidos de presupuesto, contratos y facturación.</li>
        <li><strong>Datos de uso y técnicos:</strong> dirección IP, identificadores de dispositivo, navegador, páginas visitadas, tiempo de visita, cookies o tecnologías similares.</li>
        <li><strong>Currículum y selección:</strong> datos que nos enviás para postularte a una oportunidad laboral.</li>
        <li><strong>Comunicación:</strong> registros de soporte, emails, y mensajes.</li>
      </ul>

      <h2>3. ¿Para qué usamos tus datos? (Finalidades)</h2>
      <ul>
        <li>Responder consultas, enviar presupuestos y brindar soporte.</li>
        <li>Gestionar relaciones contractuales y comerciales.</li>
        <li>Mejorar el sitio web, la seguridad y la experiencia de usuario.</li>
        <li>Realizar analítica web y estadísticas de rendimiento.</li>
        <li>Enviar comunicaciones informativas o comerciales relacionadas a nuestros servicios (podés darte de baja en cualquier momento).</li>
        <li>Procesos de reclutamiento y selección.</li>
      </ul>

      <h2>4. Base legal</h2>
      <p>
        Tratamos datos conforme a la <strong>Ley 25.326 de Protección de Datos Personales (Argentina)</strong> y normas complementarias.
        Las bases incluyen: (a) tu <strong>consentimiento</strong>; (b) la <strong>ejecución de un contrato</strong> o medidas precontractuales;
        (c) <strong>interés legítimo</strong> (por ejemplo, mejorar el servicio o prevenir fraudes); y (d) <strong>cumplimientos legales</strong>.
        Si operás desde la UE/EEE, también cumplimos con principios del <strong>RGPD</strong> cuando corresponda.
      </p>

      <h2>5. ¿Con quién compartimos datos?</h2>
      <p>
        Podemos compartir datos con <strong>proveedores</strong> que prestan servicios de hosting, analítica, emailing, soporte y herramientas
        de gestión (todos obligados por acuerdos de confidencialidad y tratamiento).
        También podremos compartir información si una autoridad competente lo requiere o para ejercer/defender derechos legales.
      </p>

      <h2>6. Transferencias internacionales</h2>
      <p>
        Si algunos proveedores se encuentran fuera de tu país, adoptaremos medidas adecuadas para proteger tus datos (por ejemplo,
        cláusulas contractuales tipo o mecanismos equivalentes).
      </p>

      <h2>7. Cookies y tecnologías similares</h2>
      <p>
        Utilizamos cookies propias y de terceros para recordar preferencias, realizar mediciones y mejorar el rendimiento del sitio.
        Podés configurar tu navegador para bloquearlas o eliminarlas. Al continuar navegando, aceptás su uso. Para más detalles,
        consultá nuestra <a href="/politica-de-cookies">Política de Cookies</a> (si existiera).
      </p>

      <h2>8. ¿Por cuánto tiempo conservamos los datos?</h2>
      <p>
        Conservamos los datos únicamente el tiempo necesario para cumplir las finalidades informadas y las obligaciones legales.
        Luego los eliminamos o los anonimamos de forma segura.
      </p>

      <h2>9. Tus derechos</h2>
      <p>
        Podés ejercer los derechos de <strong>acceso, rectificación, actualización y supresión</strong> de tu información, así como
        solicitar la <strong>confidencialidad</strong> y <strong>retiro</strong> o <strong>bloqueo</strong> de tu nombre de bases promocionales.
        También podés oponerte a ciertos tratamientos y revocar tu consentimiento.
      </p>
      <p>
        Para ejercerlos, escribinos a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> con el asunto “Derechos de privacidad”,
        acreditando tu identidad e indicando el derecho que querés ejercer.
      </p>
      <p className="text-sm">
        En Argentina, la autoridad de control es la <strong>Agencia de Acceso a la Información Pública (AAIP)</strong>.
        Tené en cuenta que la AAIP puede atender reclamos relacionados con la Ley 25.326.
      </p>

      <h2>10. Seguridad</h2>
      <p>
        Implementamos medidas técnicas y organizativas razonables para proteger los datos contra accesos no autorizados, pérdida, uso
        indebido o divulgación. Sin embargo, ningún sistema es 100% seguro.
      </p>

      <h2>11. Menores de edad</h2>
      <p>
        Nuestros servicios no están dirigidos a menores de 13 años. Si sos padre/madre/tutor y creés que un menor nos proporcionó datos,
        contactanos para eliminarlos.
      </p>

      <h2>12. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta Política para reflejar cambios legales o de negocio. Publicaremos la versión vigente en este mismo
        apartado con su fecha de última actualización. Te recomendamos revisarla periódicamente.
      </p>

      <h2>13. Contacto</h2>
      <p>
        Si tenés preguntas o querés ejercer tus derechos, escribí a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> o
        envianos una nota a {POSTAL_ADDRESS}.
      </p>

      {/* JSON-LD para enriquecer SEO */}
      <Script
        id="privacy-policy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
