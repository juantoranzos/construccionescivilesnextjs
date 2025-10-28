"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactoComponent() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  });
  const [state, handleSubmit] = useForm("xzzgyvzr");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Dr Fernandez, K4139 Santa María, Catamarca",
      delay: "0ms",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+54 3838 602867",
      delay: "100ms",
    },
    {
      icon: Mail,
      title: "Email",
      content: "luisguaymas@construccionesciviles.com",
      delay: "200ms",
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Vie: 8:00 - 14:00\nSáb: 8:00 - 12:00",
      delay: "300ms",
    },
  ];

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

        .delay-0 {
          animation-delay: 0ms;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-600 {
          animation-delay: 600ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>

      <section
        className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-blue-800 to-blue-950"
        id="contacto"
      >
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
                  <p className="text-gray-600">
                    Completa el formulario y nos pondremos en contacto contigo
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="block text-[#0b0f2c] font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="contacto@gmail.com"
                      required
                      className="w-full rounded-[10px] shadow-sm border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0b0f2c] focus:outline-none"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="message"
                      className="block text-[#0b0f2c] font-medium mb-2"
                    >
                      Tu consulta
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Escribe aquí tu consulta..."
                      required
                      className="w-full rounded-[10px] shadow-sm border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0b0f2c] focus:outline-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  {/* Campos opcionales, si querés usarlos */}
                  {/* <input type="hidden" name="_subject" value="Nuevo mensaje desde la web" /> */}
                  {/* <input type="text" name="nombre" ... /> etc */}

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-1/2 btn-lg rounded-[10px] bg-[#0b0f2c] text-white font-semibold py-2 shadow hover:bg-[#111846] transition"
                      id="submit-btn"
                    >
                      {state.submitting ? "Enviando..." : "Enviar"}
                      {/* tu icono */}
                    </button>
                  </div>

                  {state.succeeded && (
                    <p className="text-green-600 font-bold text-center mt-3">
                      Tu mensaje fue enviado con éxito. <br />
                      ¡Gracias por contactarte con nosotros!
                    </p>
                  )}
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
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.454588720288!2d-66.0458044163999!3d-26.697920674759345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9421e54ab468302f%3A0xe4606b00557d1010!2sGuaymas%20Construcciones%20Civiles!5e0!3m2!1ses-419!2sar!4v1705972910963!5m2!1ses-419!2sar"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <Link
                  href={
                    "https://www.google.com/maps/place/Guaymas+Construcciones+Civiles/@-26.697923,-66.044451,15z/data=!4m6!3m5!1s0x9421e54ab468302f:0xe4606b00557d1010!8m2!3d-26.6979232!4d-66.0444511!16s%2Fg%2F11gm78ghyb?hl=es-419&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                  }
                  target="_blank"
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Ver en Google Maps
                </Link>
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
                        <info.icon className="text-white" size={30} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 whitespace-pre-line break-words">
                          {info.content}
                        </p>
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
  );
}
