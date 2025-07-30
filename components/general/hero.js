"use client"

import { MapPin, ArrowRight, Building, Users, Award, Calendar } from "lucide-react"

export default function HeroComponent() {
  const stats = [
    { icon: Calendar, value: "18+", label: "Años de Experiencia" },
    { icon: Building, value: "300+", label: "Proyectos Exitosos" },
    { icon: Users, value: "50+", label: "Profesionales" },
    { icon: Award, value: "100%", label: "Satisfacción" },
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
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-2000 { animation-delay: 2000ms; }
        .delay-3000 { animation-delay: 3000ms; }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 lg:pt-24 pb-16 lg:pb-24 bg-gradient-to-br from-blue-950 to-blue-800 text-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Líderes en construcción
              </span>
              <br />
              <span className="text-white">para la minería</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Más de 18 años de experiencia y 300 proyectos exitosos en el Noroeste Argentino y zona Precordillerona.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center mb-8 lg:mb-12 animate-fade-in-up delay-300">
              <MapPin className="text-red-500 mr-2" size={24} />
              <span className="text-gray-300 text-lg lg:text-xl font-medium">Santa María, Catamarca</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 lg:mb-20 animate-fade-in-up delay-400">
              <button
                type="button"
                className="flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 grou "
              >
                Solicitar Presupuesto
                <ArrowRight className=" ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                type="button"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Ver Proyectos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <stat.icon className="text-cyan-400 mx-auto mb-3" size={32} />
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-3000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-1000"></div>
      </div>
    </>
  )
}
