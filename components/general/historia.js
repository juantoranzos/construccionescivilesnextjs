import React from 'react'
  import { Building2, Pickaxe, Users, Award, MapPin, Calendar } from "lucide-react"
import Image from 'next/image'
import img from "@/public/img.webp"
import { hitos } from "@/utils/help";

const HistoriaComponent = () => {
   
  return (
   <div className="bg-gradient-to-br from-blue-800 to-blue-950 " id='historia'>
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-16 ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-orange-200 text-blue-90 mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Nuestra Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Nuestra Historia
              </span>
            </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Más de 10 años construyendo el futuro de la industria minera con excelencia, innovación y un compromiso
            inquebrantable con nuestros clientes.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border-l-4 border-l-orange-500">
              <div className="p-6 hover:shadow-xl transition-shadow duration-300 ">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                  <Pickaxe className="w-6 h-6 mr-3 text-orange-600" />
                  Nuestros Inicios
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                 Fundada en 2006, Construcciones Civiles ha emergido como líder en la industria de la construcción para el sector minero. Con más de 18 años de experiencia, hemos completado más de 300 proyectos exitosos en el Noroeste argentino y la zona Precordillerana, consolidando nuestra posición como expertos en construcciones especializadas para la minería.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Desde nuestros comienzos, hemos crecido hasta convertirnos en una de las
                  empresas de construcción minera más respetadas de la región, siempre manteniendo nuestros valores
                  fundamentales de calidad, seguridad y compromiso.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm  hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Nuestro Crecimiento
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A lo largo de los años, hemos expandido nuestras operaciones desde proyectos locales hasta
                  convertirmos en socios estratégicos de las principales compañías mineras de Argentina.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Nuestro equipo ha crecido de 12 empleados a más de 250 profesionales altamente capacitados,
                  incluyendo ingenieros, técnicos especializados y operarios certificados en las más altas normas de
                  seguridad industrial.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative hover:focus transition-shadow duration-300 ">
              <Image src={img} className="w-full h-64 object-cover rounded-lg shadow-lg" alt='img'></Image>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Proyecto Minera El Dorado - 2023</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-green-500 hover:shadow-xl transition-shadow duration-300 border border-slate-200">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-green-600" />
                  Nuestros Logros
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-4 h-4 mr-2 text-green-500" />
                    <span>Presencia en todo el Noroeste Argentino</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Building2 className="w-4 h-4 mr-2 text-green-500" />
                    <span>Más de 300 proyectos completados exitosamente</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Users className="w-4 h-4 mr-2 text-green-500" />
                    <span>250+ empleados especializados</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Award className="w-4 h-4 mr-2 text-green-500" />
                    <span>Certificaciones ISO 9001, 14001 y 45001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-300 text-center mb-12">Hitos Importantes</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-400 to-blue-400"></div>

            <div className="space-y-12">
              {hitos.map((hito, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                            {hito.año}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{hito.titulo}</h3>
                        <p className="text-slate-600 leading-relaxed">{hito.descripcion}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-orange-00 rounded-full shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-lg shadow-sm ">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Mirando Hacia el Futuro</h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              Continuamos innovando y expandiendo nuestros servicios para enfrentar los desafíos del futuro de la
              minería. Nuestro compromiso con la sostenibilidad, la tecnología de vanguardia y la excelencia operacional
              nos posiciona para liderar la próxima generación de construcción minera.
            </p>
            <div className="my-6 h-px bg-slate-600"></div>
            <p className="text-slate-300 italic">"Construyendo el futuro de la minería, un proyecto a la vez."</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default HistoriaComponent