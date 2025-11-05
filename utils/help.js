import proyecto1 from "@/public/proyecto1.webp"
import proyecto12 from "@/public/proyecto12.png";
import proyecto3 from "@/public/proyecto3.webp";
import proyecto4 from "@/public/proyecto4.png";
import proyecto5 from "@/public/proyecto5.png";
import proyecto6 from "@/public/proyecto6.png";
import proyecto44 from "@/public/proyecto44.png";
import retro from "@/public/retro.png";


import { MapPin, Building2, Calendar, Hourglass, Bus, HardHat } from 'lucide-react';
import { LiaTruckMonsterSolid } from "react-icons/lia";
import { TbCarCrane } from "react-icons/tb";
import { LuTruck } from "react-icons/lu";


import { Truck, ConeIcon as Crane, Drill, Hammer, Wrench, Zap } from "lucide-react"

export const equipment = [
    {
      icon: LiaTruckMonsterSolid,
      name: "Camionetas 4x4",
      capacity: "1-2 Toneladas",
      description: "Grúas de alta capacidad para construcción en altura y montaje de estructuras pesadas.",
      specs: ["Alcance: 40-60m", "Rotación 360°", "Cabina climatizada"],
      delay: "0ms",
    },
    {
      icon: LuTruck,
      name: "Camiones de Carga",
      capacity: "15-40 Toneladas",
      description: "Flota de camiones especializados para transporte de materiales en terrenos difíciles.",
      specs: ["Tracción 6x4", "Volquete hidráulico", "Sistema GPS"],
      delay: "100ms",
    },
    {
      icon: HardHat,
      name: "Retroexcavadoras",
      capacity: "Hasta 30m profundidad",
      description: "Máquina versátil de construcción que excava, carga y nivela terrenos con gran precisión y eficiencia.",
      specs: ["Peso operativo: entre 6.000 y 9.000 kg.", "Profundidad de excavación: de 4 a 6 metros.", "Tracción: 4x2 o 4x4 según el terreno."],
      delay: "200ms",
    },
    {
      icon: Hammer,
      name: "Excavadoras",
      capacity: "20-45 Toneladas",
      description: "Excavadoras de alta potencia para movimiento de tierra y demoliciones.",
      specs: ["Motor 300HP", "Brazo extensible", "Cabina ROPS/FOPS"],
      delay: "300ms",
    },
    {
      icon: TbCarCrane,
      name: "Grua Hidraulica",
      capacity: "1200 Toneladas",
      description: "Equipos de compactación para preparación de terrenos y pavimentación.",
      specs: ["Alcance Horizontal", "Ángulo de Giro", "Estabilizadores (Outriggers)"],
      delay: "400ms",
    },
    {
      icon: Zap,
      name: "Generadores",
      capacity: "50-500 KVA",
      description: "Grupos electrógenos para suministro de energía en obras remotas.",
      specs: ["Motor Diesel", "Arranque automático", "Panel de control"],
      delay: "500ms",
    },
    {
      icon: Bus,
      name: "Trafic",
      capacity: " 15 Pasajeros",
      description: "Transporte de personal para movilización en obra.",
      specs: ["Capacidad 15 personas", "Peso 2800kg", "Asistencia a la conducción"],
      delay: "500ms",
    },
  ]
export const iconos = {
    ubicacion: MapPin,
    construccion: Building2,
    calendar: Calendar,
    tiempo: Hourglass,
  };
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
  },
  {
    id: 2,
    title: "Campamento Modular Salar del Hombre Muerto",
    location: "Salar del Hombre Muerto, Catamarca Argentina",
    description:
      "Montaje de campamento modular para personal de operación minera en zona remota de alta altitud, con módulos habitacionales, comedor y servicios logísticos.",
    image: proyecto3,
    category: "Montaje de Edificios",
    year: "2024",
    duration: "12 meses",
  },
  {
    id: 3,
    title: "Infraestructura de Vías de Acceso – Proyecto Litio Antofalla",
    location: "Antofalla, Catamarca Argentina",
    description:
      "Construcción de caminos internos y plataformas de circulación para transporte de cargas pesadas y maquinaria en proyecto de litio.",
    image: proyecto1,
    category: "Obra Vial Minera",
    year: "2023",
    duration: "15 meses",
  },
  {
    id: 4,
    title: "Centro de Mantenimiento de Maquinaria Pesada – Belen Catamarca",
    location: "Belén, Catamarca Argentina",
    description:
      "Construcción de taller especializado para mantenimiento de maquinaria minera pesada, con zonas de reparación, almacenaje y soporte técnico.",
    image: proyecto44,
    category: "Construcción Industrial",
    year: "2022",
    duration: "10 meses",
  },
  {
    id: 5,
    title: "Expansión Base de Operaciones Mina de Metales – NOA",
    location: "Tinogasta, Catamarca Argentina",
    description:
      "Expansión de base operativa, obras civiles complementarias, plataformas y habilitación de instalaciones para operaciones de metalurgia.",
    image: proyecto5,
    category: "Construcción Minera",
    year: "2023",
    duration: "18 meses",
  },
  {
    id: 6,
    title: "Construcción de Campamento de Apoyo y Logística – Proyecto Piloto Litio",
    location: "Salinas Grandes, Jujuy Argentina",
    description:
      "Construcción y equipamiento de campamento y centro logístico para proyecto piloto de litio con infraestructura de alojamiento, oficinas y servicios auxiliares.",
    image: proyecto6,
    category: "Montaje de Edificios",
    year: "2024",
    duration: "14 meses",
  },
];

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