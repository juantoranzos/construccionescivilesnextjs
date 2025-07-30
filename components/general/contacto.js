"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from "lucide-react"

export default function ContactoComponent() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    // Aquí iría la lógica de envío del formulario
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Principal 1234, Santa María, Catamarca, Argentina",
      delay: "0ms",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+54 3838 123-456",
      delay: "100ms",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@construccionesciviles.com",
      delay: "200ms",
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Vie: 8:00 - 18:00\nSáb: 8:00 - 12:00",
      delay: "300ms",
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
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
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

      <section className="py-16 lg:py-24 relative bg-gradient-to-br from-blue-800 to-blue-950" id="contacto">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Contáctanos
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Estamos listos para hacer realidad tu próximo proyecto
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-scale-in delay-300">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center">
                    <MessageSquare className="mr-3 text-cyan-600" size={28} />
                    Envíanos un Mensaje
                  </h3>
                  <p className="text-gray-600">Completa el formulario y nos pondremos en contacto contigo</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre y Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {/* Teléfono y Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="+54 123 456-789"
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-semibold text-slate-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  {/* Servicio */}
                  <div>
                    <label htmlFor="servicio" className="block text-sm font-semibold text-slate-700 mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="construccion-minera">Construcción Minera</option>
                      <option value="logistica-transporte">Logística y Transporte</option>
                      <option value="operaciones-montana">Operaciones en Montaña</option>
                      <option value="seguridad-proteccion">Seguridad y Protección</option>
                      <option value="mantenimiento-maquinas">Mantenimiento de Máquinas</option>
                      <option value="mantenimiento-edificios">Mantenimiento de Edificios</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Contact Info */}
            <div className="animate-scale-in delay-500">
              {/* Map */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <MapPin className="mr-3 text-cyan-600" size={28} />
                  Nuestra Ubicación
                </h3>

                {/* Map Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-2 text-cyan-600" size={48} />
                      <p className="text-slate-600 font-medium">Santa María, Catamarca</p>
                      <p className="text-slate-500 text-sm">Av. Principal 1234</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-1000"></div>
                </div>

                <button className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  Ver en Google Maps
                </button>
              </div>

              {/* Contact Information */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <User className="mr-3 text-cyan-600" size={28} />
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 animate-fade-in-up"
                      style={{ animationDelay: info.delay }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-5 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-3/4 right-8 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-1000"></div>
      </section>
    </>
  )
}
