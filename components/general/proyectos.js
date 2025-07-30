import Image from "next/image"
import { MapPin, Building, Calendar, Clock } from "lucide-react"
import { proyectos } from "@/utils/help"


export default function ProyectosComponent() {
  return (
  <div className="bg-gradient-to-br from-blue-800 to-blue-950  ">

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-fade-in-up text-center  mb-8 pt-[65px]">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"  id="proyectos">
                Nuestros Proyectos
              </span>
            </h2>
            <p className="text-center text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200 mb-12">
             Nustros Proyectos son un testimonio de nuestra dedicación a la excelencia y la innovación en el sector minero.
            </p>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {proyectos.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2 text-red-500" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.category}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.year}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-center text-3xl text-slate-200 mt-[30px]"><span>Tienes un proyecto en mente?</span></h2>
        <p className="text-center text-2xl text-slate-100 mt-[30px]">Contáctanos para una consulta gratuita y descubre cómo podemos hacer realidad tu proyecto minero con la más alta calidad y eficiencia</p>
         <div className="text-center mt-[30px] lg:mt-20">
            <div className="animate-fade-in-up delay-600">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Consulta un Presupuesto
              </button>
            </div>
          </div>
      </div>
    </section>
  </div>
  )
}
