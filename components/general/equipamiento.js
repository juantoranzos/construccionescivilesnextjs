"use client";

import Link from "next/link";
import { equipment } from "@/utils/help";

export default function EquipamientoComponent() {
  return (
    <section
      id="equipamiento"
      className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-black py-24 px-4 sm:px-6 lg:px-12 text-white"
    >
      {/* 🌌 BACKGROUND DECORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nuestro Equipamiento
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Maquinaria de alta performance para garantizar precisión, eficiencia y seguridad en cada proyecto.
          </p>
        </div>

        {/* GRID DE EQUIPOS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 fade-up-delay">
          {equipment.map((item, i) => (
            <div
              key={item.name}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl 
              hover:bg-white/20 hover:shadow-2xl transition-all duration-500 fade-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* ICON + CAPACIÓN */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <item.icon size={34} className="text-white" />
                </div>

                <span className="text-sm font-medium bg-white/10 text-cyan-300 px-4 py-1 rounded-full">
                  {item.capacity}
                </span>
              </div>

              {/* NOMBRE */}
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                {item.name}
              </h3>

              {/* DESCRIPCIÓN */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* ESPECIFICACIONES */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-300 mb-3">
                  Especificaciones
                </h4>

                <ul className="space-y-2">
                  {item.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="#contacto"
                className="block text-center w-full py-3 rounded-xl font-semibold text-sm
                border border-white/20 text-white 
                hover:border-cyan-400 hover:text-cyan-300 hover:bg-white/10 transition-all"
              >
                Solicitar Información
              </Link>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-24 fade-up-slow">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Equipos Disponibles" },
              { value: "24/7", label: "Soporte Técnico" },
              { value: "18+", label: "Años de Experiencia" },
              { value: "100%", label: "Mantenimiento Garantizado" },
            ].map((s, index) => (
              <div
                key={s.label}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center 
                hover:bg-white/10 hover:scale-105 transition-all duration-300 fade-up"
                style={{ animationDelay: `${500 + index * 150}ms` }}
              >
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-gray-400 mt-1 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-24 fade-up">
          <p className="text-gray-300 text-lg mb-6">
            ¿Necesitás equipamiento especializado para tu proyecto minero?
          </p>
          <Link
            href="#contacto"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700
            text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Consultar Disponibilidad
          </Link>
        </div>
      </div>

      {/* DECORACIONES */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-ping opacity-70"></div>
    </section>
  );
}
