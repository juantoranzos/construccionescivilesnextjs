import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navegacion from "@/components/ui/Navegacion";
import Footer from "@/components/ui/Footer";

const SITE_URL = "https://www.construccionesciviles.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Construcciones Civiles Guaymas | Empresa de servicios mineros en Santa María, Catamarca",
    template: "%s | Construcciones Civiles Guaymas"
  },
  description:
    "Empresa minera de servicios en Santa María, Catamarca. Más de 20 años en construcción minera, campamentos modulares, logística 4x4, transporte y mantenimiento industrial en el NOA.",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Construcciones Civiles Guaymas",
    title: "Construcciones Civiles Guaymas | Servicios mineros en Santa María, Catamarca",
    description:
      "Construcción minera, campamentos modulares, logística y mantenimiento para proyectos mineros en Catamarca, Salta y Jujuy.",
    images: [
      {
        url: "/proyecto1.webp",
        alt: "Obra de infraestructura minera de Construcciones Civiles en Catamarca"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Construcciones Civiles Guaymas | Servicios mineros en Catamarca",
    description:
      "Más de 20 años construyendo infraestructura minera, logística y mantenimiento en Santa María, Catamarca y el NOA.",
    images: ["/proyecto1.webp"]
  },
  icons: {
    icon: "/logo1.webp"
  }
};

export const viewport = {
  themeColor: "#172554",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Construcciones Civiles",
  alternateName: "Guaymas Construcciones Civiles",
  description:
    "Empresa de servicios mineros en Santa María, Catamarca: construcción minera, campamentos modulares, logística, transporte y mantenimiento industrial.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo1.webp`,
  image: `${SITE_URL}/proyecto1.webp`,
  telephone: "+543838602867",
  email: "luisguaymas@construccionesciviles.com",
  foundingDate: "2006",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dr. Fernandez",
    postalCode: "K4139",
    addressLocality: "Santa María",
    addressRegion: "Catamarca",
    addressCountry: "AR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.6979232,
    longitude: -66.0444511
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00"
    }
  ],
  hasMap: "https://maps.google.com/?cid=16456270687590223888",
  areaServed: ["Santa María", "Catamarca", "Salta", "Jujuy", "Noroeste Argentino"],
  knowsAbout: [
    "Construcción minera",
    "Campamentos modulares",
    "Logística minera",
    "Transporte de personal",
    "Mantenimiento industrial"
  ],
  sameAs: ["https://www.linkedin.com/in/luis-guaymas-b93a7935/"]
};

export default function RootLayout({ children }) {

  return (
    <html lang="es-AR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-950 text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navegacion />
        {children}
        <Footer />
      </body>
    </html>
  );
}
