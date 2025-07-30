import proyecto1 from "@/public/proyecto1.webp"
import proyecto2 from "@/public/proyecto2.webp";
import proyecto3 from "@/public/proyecto3.webp";
import { MapPin, Building2, Calendar, Hourglass } from 'lucide-react';
export const iconos = {
    ubicacion: MapPin,
    construccion: Building2,
    calendar: Calendar,
    tiempo: Hourglass,
  };
 export const proyectos = [
  {
    id: 1,
    title: "Expansión mina el teniente",
    location: "Rancagua Chile",
    description:
      "Construcción de infraestructura para expansión de operaciones mineras, incluyendo túneles de acceso y plataformas",
    image: proyecto1,
    category: "Construcción Minera",
    year: "2023",
    duration: "18 meses",
  },
  {
    id: 2,
    title: "Expansión mina el teniente",
    location: "Rancagua Chile",
    description:
      "Construcción de infraestructura para expansión de operaciones mineras, incluyendo túneles de acceso y plataformas",
    image: proyecto2,
    category: "Construcción Minera",
    year: "2023",
    duration: "18 meses",
  },
  {
    id: 3,
    title: "Expansión mina el teniente",
    location: "Rancagua Chile",
    description:
      "Construcción de infraestructura para expansión de operaciones mineras, incluyendo túneles de acceso y plataformas",
    image: proyecto3,
    category: "Construcción Minera",
    year: "2023",
    duration: "18 meses",
  },
  {
    id: 4,
    title: "Expansión mina el teniente",
    location: "Rancagua Chile",
    description:
      "Construcción de infraestructura para expansión de operaciones mineras, incluyendo túneles de acceso y plataformas",
    image: proyecto1,
    category: "Construcción Minera",
    year: "2023",
    duration: "18 meses",
  },
  {
    id: 5,
    title: "Expansión mina el teniente",
    location: "Rancagua Chile",
    description:
      "Construcción de infraestructura para expansión de operaciones mineras, incluyendo túneles de acceso y plataformas",
    image: proyecto2,
    category: "Construcción Minera",
    year: "2023",
    duration: "18 meses",
  },
  {
    id: 6,
    title: "Expansión mina el teniente",
    location: "Rancagua Chile",
    description:
      "Construcción de infraestructura para expansión de operaciones mineras, incluyendo túneles de acceso y plataformas",
    image:proyecto3,
    category: "Construcción Minera",
    year: "2023",
    duration: "18 meses",
  },
]
   export const hitos = [
    {
      año: "2006",
      titulo: "Fundación de la Empresa",
      descripcion:
        "Iniciamos operaciones como una pequeña empresa familiar especializada en servicios de construcción.",
    },
    {
      año: "2008",
      titulo: "Primera Gran Expansión",
      descripcion:
        "Obtuvimos nuestro primer contrato mayor con Minera Almumbrera, marcando el inicio de nuestra expansión regional.",
    },
    {
      año: "2008",
      titulo: "Certificaciones Internacionales",
      descripcion:
        "Logramos las certificaciones ISO 9001 y OHSAS 18001, consolidando nuestro compromiso con la calidad y seguridad.",
    },
    {
      año: "2012",
      titulo: "Diversificación de Servicios",
      descripcion:
        "Ampliamos nuestros servicios incluyendo construcción de infraestructura, construcción minera, logística y transporte.",
    },
    {
      año: "2018",
      titulo: "Tecnología e Innovación",
      descripcion:
        "Incorporamos tecnología de punta y maquinaria especializada, posicionándonos como líderes en innovación.",
    },
    {
      año: "2025",
      titulo: "Presente",
      descripcion:
        "Hoy somos una empresa consolidada con más de 250 empleados y presencia en todo el Noroeste Argentino y las minas mas importantes del país.",
    },
  ]
   export const stats = [
    { value: 300, suffix: "+", label: "Proyectos Completados" },
    { value: 10, suffix: "+", label: "Años de Experiencia" },
    { value: 50, suffix: "+", label: "Clientes Satisfechos" },
    { value: 100, suffix: "%", label: "Proyectos Exitosos" },
  ];