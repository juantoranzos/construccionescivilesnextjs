import proyecto1 from "@/public/proyecto1.webp";
import proyecto12 from "@/public/proyecto12.png";
import proyecto3 from "@/public/proyecto3.webp";
import proyecto4 from "@/public/proyecto4.png";
import proyecto5 from "@/public/proyecto5.png";
import proyecto6 from "@/public/proyecto6.png";
import proyecto44 from "@/public/proyecto44.png";
import retro from "@/public/retro.png";

import {
  MapPin,
  Building,
  Building2,
  Calendar,
  Hourglass,
  Clock,
  Bus,
  HardHat,
  Hammer,
  Zap,
} from "lucide-react";

import { LiaTruckMonsterSolid } from "react-icons/lia";
import { TbCarCrane } from "react-icons/tb";
import { LuTruck } from "react-icons/lu";

// ---------------- EQUIPMENT ------------------

export const equipment = [
  {
    icon: LiaTruckMonsterSolid,
    name: "Camionetas 4x4",
    capacity: "1 tonelada",
    description:
      "Vehículos todoterreno ideales para operaciones mineras y logísticas, capaces de desplazarse en terrenos difíciles.",
    specs: [
      "Internet Satelital (Starlink)",
      "Monitoreo mediante dashcam integrada: Grabacion interior y exterior las 24hs",
      "Sistema de deteccion de distraccion y alertas por voz",
      "Sistema GPS integrado",
    ],
  },
  {
    icon: LuTruck,
    name: "Camiones de Carga",
    capacity: "15-40 Toneladas",
    description:
      "Flota de camiones especializados para transporte de materiales en terrenos difíciles.",
    specs: [
      "Tracción 6x4",
      "Internet Satelital (Starlink)",
      "Monitoreo mediante dashcam integrada: Grabacion interior y exterior las 24hs",
      "Sistema de deteccion de distraccion y alertas por voz",
      "Sistema GPS integrado",
    ],
    delay: "100ms",
  },
  {
    icon: HardHat,
    name: "Equipos Viales",
    capacity: "Hasta 30m profundidad",
    description:
      "Maquinaria pesada para movimiento de suelos, apertura de caminos y compactación, diseñada para obras viales, proyectos mineros y trabajos en terrenos exigentes.",
    specs: [
      "Profundidad de excavación: todas las magnitudes.",
      "Tracción: 4x2 o 4x4 según el terreno.",
      "Capacidad operativa: trabajos continuos en faena",
    ],
    delay: "200ms",
  },
  {
    icon: Hammer,
    name: "Equipos de Izaje",
    capacity: "20-45 Toneladas",
    description:
      "Soluciones seguras y certificadas para elevar y trasladar cargas y personal en operaciones mineras",
    specs: ["Hidrogruas", "Autoelevadores", "Brazo Extensible", "Plataformas Tijera"],
    delay: "300ms",
  },
  {
    icon: Zap,
    name: "Generadores",
    capacity: "15-60 KVA",
    description: "Grupos electrógenos para suministro de energía en zonas remotas.",
    specs: ["Motor Diesel", "Arranque automático", "Panel de control"],
    delay: "500ms",
  },
  {
    icon: Bus,
    name: "Transporte de personal",
    capacity: "15 Pasajeros",
    description: "Transporte de personal para movilización en obra.",
    specs: ["Trafic con capacidad para 15 personas", "Camionetas 4x4", "Internet satelital (Starlink)"],
    delay: "500ms",
  },
];

// ---------------- PROYECTOS ------------------

export const proyectos = [
  {
    id: 1,
    title: "Planta Procesadora Tres Quebradas – Fase 1",
    location: "Fiambalá, Catamarca Argentina",
    description:
      "Construcción de planta de procesamiento de litio con capacidad inicial de 20.000 tys de carbonato, en zona de altura complejo logístico.",
    image: proyecto12,
    category: "Construcción Minera",
    year: "2025",
    duration: "24 meses",
    icons: {
      category: Building,
      year: Calendar,
      duration: Clock,
    },
  },
  {
    id: 2,
    title: "Campamento Modular Salar del Hombre Muerto",
    location: "Salar del Hombre Muerto, Catamarca Argentina",
    description:
      "Montaje de campamento modular para personal de operación minera en zona remota de alta altitud.",
    image: proyecto3,
    category: "Montaje de Edificios",
    year: "2024",
    duration: "12 meses",
    icons: {
      category: Building2,
      year: Calendar,
      duration: Clock,
    },
  },
  {
    id: 3,
    title: "Infraestructura de Vías de Acceso – Proyecto Litio Antofalla",
    location: "Antofalla, Catamarca Argentina",
    description:
      "Construcción de caminos internos y plataformas de circulación para transporte de cargas pesadas y maquinaria.",
    image: proyecto1,
    category: "Obra Vial Minera",
    year: "2023",
    duration: "15 meses",
    icons: {
      category: Building,
      year: Calendar,
      duration: Clock,
    },
  },
  {
    id: 4,
    title: "Centro de Mantenimiento de Maquinaria Pesada – Belén Catamarca",
    location: "Belén, Catamarca Argentina",
    description:
      "Construcción de taller especializado para mantenimiento de maquinaria minera pesada.",
    image: proyecto44,
    category: "Construcción Industrial",
    year: "2022",
    duration: "10 meses",
    icons: {
      category: Building2,
      year: Calendar,
      duration: Clock,
    },
  },
  {
    id: 5,
    title: "Expansión Base Operativa Mina de Metales – NOA",
    location: "Tinogasta, Catamarca Argentina",
    description:
      "Obras civiles complementarias, plataformas y habilitación de instalaciones para operaciones metalúrgicas.",
    image: proyecto5,
    category: "Construcción Minera",
    year: "2023",
    duration: "18 meses",
    icons: {
      category: Building,
      year: Calendar,
      duration: Clock,
    },
  },
  {
    id: 6,
    title: "Campamento de Apoyo y Logística – Proyecto Piloto Litio",
    location: "Salinas Grandes, Jujuy Argentina",
    description:
      "Construcción y equipamiento de campamento completo con oficinas y servicios auxiliares.",
    image: proyecto6,
    category: "Montaje de Edificios",
    year: "2024",
    duration: "14 meses",
    icons: {
      category: Building2,
      year: Calendar,
      duration: Clock,
    },
  },
];

// -------- HITOS Y STATS (sin cambios) -------------

export const hitos = [
  {
    año: "2006",
    titulo: "Fundación de la Empresa",
    descripcion:
      "Iniciamos operaciones como una pequeña empresa familiar especializada en construcción.",
  },
  {
    año: "2008",
    titulo: "Primera Gran Expansión",
    descripcion:
      "Obtuvimos nuestro primer contrato mayor con Minera Alumbrera.",
  },
  {
    año: "2012",
    titulo: "Diversificación de Servicios",
    descripcion:
      "Ampliamos nuestros servicios incorporando nuevas áreas.",
  },
  {
    año: "2018",
    titulo: "Tecnología e Innovación",
    descripcion:
      "Integramos maquinaria especializada y tecnología avanzada.",
  },
  {
    año: "2025",
    titulo: "Presente",
    descripcion:
      "Empresa consolidada con más de 150 empleados y presencia en todo el NOA.",
  },
];

export const stats = [
  { value: 300, suffix: "+", label: "Proyectos Completados" },
  { value: 10, suffix: "+", label: "Años de Experiencia" },
  { value: 50, suffix: "+", label: "Clientes Satisfechos" },
  { value: 100, suffix: "%", label: "Proyectos Exitosos" },
];
