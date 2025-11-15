import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navegacion from "@/components/ui/Navegacion";
import Footer from "@/components/ui/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://construccionesciviles.com"),
  title: {
    default: "Construcciones Civiles | Infraestructura y logística minera en el NOA",
    template: "%s | Construcciones Civiles"
  },
  description:
    "Empresa de Catamarca con 18+ años diseñando campamentos modulares, logística 4x4 y obras civiles para minería en el Noroeste Argentino.",
  keywords: [
    "construcción minera",
    "campamentos modulares",
    "logística para minería",
    "Catamarca",
    "Noroeste Argentino",
    "mantenimiento de maquinaria pesada",
  ],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/",
    languages: { "es-AR": "/", "en-US": "/en" }
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://construccionesciviles.com",
    siteName: "Construcciones Civiles",
    title: "Construcciones Civiles | Obras y logística para minería en Argentina",
    description:
      "Servicios integrales de infraestructura, mantenimiento y transporte para proyectos mineros en Catamarca, Salta y Jujuy.",
    images: [
      {
        url: "/og/construcciones-civiles.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo de Construcciones Civiles en obra minera"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@construccionesciviles",
    title: "Construcciones Civiles | Obras mineras",
    description:
      "18+ años construyendo infraestructura minera, logística y mantenimiento en el NOA.",
    images: ["/og/construcciones-civiles.jpg"]
  },
  icons: {
    icon: "/logo1.webp",
    apple: "/apple-touch-icon.png"
  },
  themeColor: "#0f172a"
};


export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navegacion/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
