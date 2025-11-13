"use client";

import Link from "next/link";
import {
  HardHat,
  Truck,
  Mountain,
  Shield,
  Settings,
  Building2,
} from "lucide-react";

export default function ServiciosComponent() {
  const services = [
    {
      icon: HardHat,
      title: "Construcción Minera",
      description: "Infraestructura especializada para proyectos extractivos, exploración y obras de gran porte.",
      delay: 0,
    },
    {
      icon: Truck,
      title: "Logística y Transporte",
      description: "Soluciones de movilidad para zonas remotas, accesos complejos y transporte operativo.",
      delay: 150,
    },
    {
      icon: Mountain,
      title: "Operaciones en Montaña",
      description: "Equipo experto para zonas de altura, terrenos rocosos y condiciones extremas.",
      delay: 300,
    },
    {
      icon: Shield,
      title: "Seguridad Industrial",
      description: "Protocolos operativos alineados a normas ISO y estándares de clase mundial.",
      delay: 450,
    },
    {
      icon: Settings,
      title: "Mantenimiento Industrial",
      description: "Servicios mecánicos y preventivos para mantener tus máquinas al máximo rendimiento.",
      delay: 600,
    },
    {
      icon: Building2,
      title: "Mantenimiento de Edificios",
      description: "Soluciones integrales para operaciones industriales, campamentos y plantas.",
      delay: 750,
    },
  ];

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-black py-24 px-4 sm:px-6 lg:px-12 text-white"
    >
      {/* Background lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-24 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales para la industria minera, logística y obras especializadas.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl 
              hover:bg-white/20 hover:shadow-2xl transition-all duration-500 fade-up"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg mb-8">
                <service.icon size={36} className="text-white" />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <Link
                href="#contacto"
                className="inline-block text-center w-full py-3 rounded-xl font-semibold text-sm
                border border-white/20 text-white 
                hover:border-cyan-400 hover:text-cyan-300 hover:bg-white/10 transition-all"
              >
                Solicitar más información
              </Link>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-24 fade-up-delay">
          <p className="text-gray-300 text-lg mb-6">
            ¿No encontrás el servicio que necesitás?
          </p>
          <Link
            href="#contacto"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700
            text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Consulta Personalizada
          </Link>
        </div>

      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-5 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping opacity-70"></div>
    </section>
  );
}
