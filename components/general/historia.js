"use client";

import {
  Building2,
  Pickaxe,
  Users,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import img from "@/public/img.webp";
import { hitos } from "@/utils/help";

export default function HistoriaComponent() {
  return (
    <section
      id="historia"
      className="bg-gradient-to-br from-blue-900 via-blue-950 to-black py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nuestra Historia
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Más de 18 años liderando la construcción para la industria minera,
            con innovación, solidez y compromiso en cada proyecto.
          </p>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 mb-28">

          {/* IZQUIERDA */}
          <div className="space-y-8">

            {/* CARD 1 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all fade-up">
              <h3 className="text-3xl font-semibold text-white mb-4 flex items-center">
                <Pickaxe className="w-8 h-8 mr-3 text-cyan-400" />
                Nuestros Inicios
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                Fundada en 2006, Construcciones Civiles inició sus operaciones en
                el sector minero con un enfoque claro: calidad, seguridad y
                excelencia. Con el tiempo, nos consolidamos como referentes en el
                Noroeste Argentino.
              </p>

              <p className="text-gray-300 leading-relaxed">
                De proyectos locales a obras de gran escala, nuestro crecimiento
                se sostiene en la especialización y la confianza de nuestros clientes.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all fade-up-delay">
              <h3 className="text-3xl font-semibold text-white mb-4 flex items-center">
                <Users className="w-8 h-8 mr-3 text-cyan-400" />
                Nuestro Crecimiento
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                De un equipo inicial de 12 colaboradores, hoy contamos con más de
                250 profesionales altamente capacitados: ingenieros, técnicos y
                operarios certificados.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Trabajamos junto a las compañías mineras más importantes del país,
                aportando soluciones integrales para sus desarrollos.
              </p>
            </div>

          </div>

          {/* DERECHA */}
          <div className="space-y-8 fade-up">

            {/* IMAGEN */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src={img}
                alt="Proyecto minero"
                className="object-cover w-full h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">
                  Proyecto Minera El Dorado - 2023
                </p>
              </div>
            </div>

            {/* LOGROS */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all">
              <h3 className="text-3xl font-semibold text-white mb-6 flex items-center">
                <Award className="w-8 h-8 mr-3 text-cyan-400" />
                Nuestros Logros
              </h3>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  Presencia en toda la región NOA.
                </div>
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 mr-3 text-cyan-400" />
                  Más de 300 proyectos ejecutados.
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-cyan-400" />
                  250+ empleados especializados.
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-3 text-cyan-400" />
                  Certificaciones ISO 9001, 14001 y 45001.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* TIMELINE */}
        <h2 className="text-4xl text-center text-cyan-300 font-bold mb-16 fade-up">
          Hitos Importantes
        </h2>

        <div className="relative max-w-5xl mx-auto">

          {/* Línea vertical */}
          <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 h-full w-1
            bg-gradient-to-b from-cyan-400/70 to-blue-500/70"></div>

          <div className="space-y-16">

            {hitos.map((hito, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row items-center ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } fade-up`}
              >
                {/* Texto */}
                <div
                  className={`w-full sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition-all">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 mr-2 text-cyan-300" />
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                        {hito.año}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {hito.titulo}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {hito.descripcion}
                    </p>
                  </div>
                </div>

                {/* Punto timeline */}
                <div className="relative z-10 my-6 sm:my-0">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full shadow-2xl ring-4 ring-white/20"></div>
                </div>

                <div className="w-0 sm:w-1/2"></div>
              </div>
            ))}

          </div>
        </div>

        {/* FUTURO */}
        <div className="mt-28 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-14 text-center shadow-xl fade-up">
          <h2 className="text-4xl font-bold text-white mb-6">
            Mirando Hacia el Futuro
          </h2>

          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
            Continuamos innovando y expandiendo nuestros servicios para afrontar
            los desafíos del futuro de la minería. Apostamos por tecnología,
            sostenibilidad y excelencia operativa.
          </p>

          <p className="text-cyan-300 italic text-xl">
            “Construyendo el futuro de la minería, un proyecto a la vez.”
          </p>
        </div>

      </div>
    </section>
  );
}
