"use client";

import { HardHat, Truck, Mountain, Shield, Settings, Building2 } from "lucide-react";
import Link from "next/link";

export default function ServiciosComponent() {
  const services = [
    { icon: HardHat,  title: "Construcción Minera",            description: "Infraestructura especializada para la industria Minera", delay: "0ms" },
    { icon: Truck,    title: "Logística y Transporte",         description: "Soluciones de transporte en terrenos difíciles.",        delay: "100ms" },
    { icon: Mountain, title: "Operaciones en Montaña",         description: "Especialistas en construcción en zonas montañosas.",     delay: "200ms" },
    { icon: Shield,   title: "Seguridad y Protección",         description: "Utilizamos las más altas normas de seguridad.",          delay: "300ms" },
    { icon: Settings, title: "Mantenimiento de máquinas industriales", description: "Aseguramos la máxima eficiencia y productividad de tus máquinas.", delay: "400ms" },
    { icon: Building2,title: "Mantenimiento de edificios",     description: "Mantenimiento integral para garantizar la continuidad operativa.", delay: "500ms" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.8s ease-out forwards; }
        .delay-0 { animation-delay: 0ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>

      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-blue-800 to-blue-950 text-white">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" id="servicios">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Nuestros Servicios
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Soluciones integrales para la industria minera y construcción especializada
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white group animate-scale-in border border-white/20"
                style={{ animationDelay: service.delay }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href="#contacto"
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:from-cyan-600 group-hover:to-blue-700"
                >
                  Solicitar más información
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 lg:mt-20">
            <div className="animate-fade-in-up delay-600">
              <p className="text-gray-300 text-lg mb-6">¿No encuentras el servicio que necesitas?</p>
              <Link
                href="#contacto"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Consulta Personalizada
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-5 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-10 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
      </section>
    </>
  );
}
