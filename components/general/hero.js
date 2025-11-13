"use client";

import { MapPin, ArrowRight, Building, Users, Award, Calendar } from "lucide-react";
import Link from "next/link";

export default function HeroComponent() {
  const stats = [
    { icon: Calendar, value: "18+", label: "Años de Experiencia" },
    { icon: Building, value: "300+", label: "Proyectos Exitosos" },
    { icon: Users, value: "50+", label: "Profesionales" },
    { icon: Award, value: "100%", label: "Satisfacción" },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white pt-28 lg:pt-36 pb-28"
    >
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="section-shell relative">
        <div className="text-center max-w-5xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-8 fade-up">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Líderes en construcción
            </span>
            <br />
            <span className="text-white">
              para la industria minera
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed fade-up-delay max-w-3xl mx-auto mb-10">
            Más de 18 años construyendo infraestructura crítica en la región del NOA y la zona Precordillerana.
          </p>

          {/* LOCATION */}
          <div className="flex items-center justify-center mb-12 fade-up-delay">
            <MapPin className="text-red-500 mr-2" size={26} />
            <span className="text-gray-300 text-lg lg:text-xl font-medium">
              Santa María, Catamarca — Argentina
            </span>
          </div>

          {/* CTAS */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 fade-up">
            <Link
              href="#contacto"
              className="group flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold 
              rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Solicitar Presupuesto
              <ArrowRight
                size={20}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#proyectos"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 
              px-10 py-4 text-lg font-semibold rounded-xl transition-all hover:scale-105"
            >
              Ver Proyectos
            </Link>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto mt-20 fade-up-slow">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 
                rounded-2xl hover:bg-white/10 transition-all hover:scale-105 shadow-lg fade-up"
                style={{ animationDelay: `${400 + index * 120}ms` }}
              >
                <stat.icon size={34} className="text-cyan-400 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="pointer-events-none absolute top-1/3 right-20 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
      <div className="pointer-events-none absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
    </section>
  );
}
