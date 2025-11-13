"use client";

import Image from "next/image";
import { MapPin, Building, Calendar, Clock } from "lucide-react";
import { proyectos } from "@/utils/help";
import Link from "next/link";

export default function ProyectosComponent() {
  return (
    <section
      id="proyectos"
      className="relative bg-gradient-to-b from-blue-900 via-blue-950 to-blue-900 py-24 px-6 lg:px-12 text-white overflow-hidden"
    >
      {/* Luces de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Nuestros Proyectos
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Nuestros proyectos son un testimonio de nuestra excelencia, precisión y compromiso en el sector minero.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 fade-up-delay">
          {proyectos.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl 
              hover:shadow-2xl transition-all duration-500 fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Imagen */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Título sobre la imagen */}
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-2xl font-semibold drop-shadow-xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col h-full">

                {/* Ubicación */}
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="w-5 h-5 mr-2 text-red-500" />
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Descripción */}
                <p className="text-gray-200 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Íconos del final — color BLANCO (como pediste) */}
                <div className="mt-auto space-y-3">

                  <div className="flex items-center text-white text-sm">
                    <Building className="w-5 h-5 mr-2 text-white" />
                    {project.category}
                  </div>

                  <div className="flex items-center text-white text-sm">
                    <Calendar className="w-5 h-5 mr-2 text-white" />
                    {project.year}
                  </div>

                  <div className="flex items-center text-white text-sm">
                    <Clock className="w-5 h-5 mr-2 text-white" />
                    {project.duration}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="text-center max-w-3xl mx-auto mt-24 fade-up-slow">
          <h3 className="text-3xl font-bold text-white">
            ¿Tienes un proyecto en mente?
          </h3>

          <p className="text-xl text-gray-300 mt-4">
            Te asesoramos para construir con calidad y eficiencia en cualquier entorno minero.
          </p>

          <div className="mt-10">
            <Link
              href="#contacto"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700
              text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Consulta un Presupuesto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
