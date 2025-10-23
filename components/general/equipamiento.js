"use client"

import { Truck, ConeIcon as Crane, Drill, Hammer, Wrench, Zap } from "lucide-react"
import Link from "next/link";
import { FaTruckPickup } from "react-icons/fa";

export default function EquipamientoComponent() {
  const equipment = [
    {
      icon: FaTruckPickup,
      name: "Camionetas 4x4",
      capacity: "1-2 Toneladas",
      description: "Grúas de alta capacidad para construcción en altura y montaje de estructuras pesadas.",
      specs: ["Alcance: 40-60m", "Rotación 360°", "Cabina climatizada"],
      delay: "0ms",
    },
    {
      icon: Truck,
      name: "Camiones de Carga",
      capacity: "15-40 Toneladas",
      description: "Flota de camiones especializados para transporte de materiales en terrenos difíciles.",
      specs: ["Tracción 6x4", "Volquete hidráulico", "Sistema GPS"],
      delay: "100ms",
    },
    {
      icon: Drill,
      name: "Perforadoras",
      capacity: "Hasta 30m profundidad",
      description: "Equipos de perforación para cimentaciones y exploraciones geotécnicas.",
      specs: ["Diámetro: 0.5-2m", "Sistema rotativo", "Control automático"],
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
      icon: Wrench,
      name: "Compactadoras",
      capacity: "10-25 Toneladas",
      description: "Equipos de compactación para preparación de terrenos y pavimentación.",
      specs: ["Rodillo vibratorio", "Sistema de riego", "Control remoto"],
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
  ]

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-0 { animation-delay: 0ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-2000 { animation-delay: 2000ms; }
      `}</style>

      <section className="py-16 lg:py-24 relative bg-gradient-to-br from-blue-800 to-blue-950 text-white" id="equipamiento">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Nuestro Equipamiento
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Maquinaria de última generación para garantizar la excelencia en cada proyecto
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {equipment.map((item, index) => (
              <div
                key={item.name}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white group animate-scale-in border border-white/20 relative overflow-hidden"
                style={{ animationDelay: item.delay }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Capacity */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float">
                      <item.icon className="text-white" size={32} />
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                        {item.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Equipment Name */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                    {item.description}
                  </p>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                      Especificaciones:
                    </h4>
                    <ul className="space-y-2">
                      {item.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:from-cyan-600 group-hover:to-blue-700 text-sm">
                      Ver Detalles
                    </button>
                    <button className="flex-1 border-2 border-slate-300 text-slate-700 hover:border-cyan-400 hover:text-cyan-600 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-transparent text-sm" href="contacto">
                      Solicitar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {[
                { value: "50+", label: "Equipos Disponibles" },
                { value: "24/7", label: "Soporte Técnico" },
                { value: "15+", label: "Años de Experiencia" },
                { value: "100%", label: "Mantenimiento Garantizado" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 lg:mt-20">
            <div className="animate-fade-in-up delay-1000">
              <p className="text-gray-300 text-lg mb-6">¿Necesitas equipamiento especializado para tu proyecto?</p>
              <Link href="#/contacto" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Consultar Disponibilidad
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-2/3 right-12 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-2000"></div>
      </section>
    </>
  )
}
