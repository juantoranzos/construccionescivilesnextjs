"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactoComponent() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xzzgyvzr");

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Dr. Fernandez, K4139\nSanta María, Catamarca",
      delay: 0,
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+54 3838 602867",
      delay: 150,
    },
    {
      icon: Mail,
      title: "Email",
      content: "luisguaymas@construccionesciviles.com",
      delay: 300,
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Vie: 8:00 - 14:00\nSáb: 8:00 - 12:00",
      delay: 450,
    },
  ];

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 py-24 px-4 sm:px-6 lg:px-12 text-white"
    >
      {/* BACKGROUND LIGHTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contáctanos
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Estamos listos para ayudarte con tu próximo proyecto.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* FORM */}
          <div className="fade-up-delay">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 shadow-xl">

              <div className="mb-8">
                <h3 className="text-3xl font-semibold flex items-center">
                  <MessageSquare className="text-cyan-400 mr-3" size={30} />
                  Envíanos un mensaje
                </h3>
                <p className="text-gray-300 mt-2">
                  Completa tus datos y te responderemos a la brevedad.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tuemail@gmail.com"
                    required
                    className="w-full bg-white/5 border border-white/20 text-white rounded-xl px-4 py-3
                    focus:ring-2 focus:ring-cyan-500 outline-none placeholder-gray-400 shadow-sm"
                    onChange={handleInputChange}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Tu consulta
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Escribe tu consulta..."
                    className="w-full bg-white/5 border border-white/20 text-white rounded-xl px-4 py-3
                    focus:ring-2 focus:ring-cyan-500 outline-none placeholder-gray-400 shadow-sm"
                    onChange={handleInputChange}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 
                    text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    {state.submitting ? "Enviando..." : "Enviar"}
                    <Send className="inline ml-2" size={18} />
                  </button>
                </div>

                {state.succeeded && (
                  <p className="text-green-400 font-semibold text-center mt-3">
                    Tu mensaje fue enviado correctamente. ¡Gracias por contactarte!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* MAP + CONTACT INFO */}
          <div className="fade-up-slow">
            {/* MAP */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl mb-10">
              <h3 className="text-3xl font-semibold flex items-center mb-6">
                <MapPin className="text-cyan-400 mr-3" size={30} />
                Nuestra Ubicación
              </h3>

              <div className="overflow-hidden rounded-xl h-64 shadow-lg mb-6">
                <iframe
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.454588720288!2d-66.0458044163999!3d-26.697920674759345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9421e54ab468302f%3A0xe4606b00557d1010!2sGuaymas%20Construcciones%20Civiles!5e0!3m2!1ses-419!2sar!4v1705972910963!5m2!1ses-419!2sar">
                </iframe>
              </div>

              <Link
                href="https://www.google.com/maps/place/Guaymas+Construcciones+Civiles/@-26.697923,-66.044451,15z/data=!4m6!3m5!1s0x9421e54ab468302f:0xe4606b00557d1010!8m2!3d-26.6979232!4d-66.0444511!16s%2Fg%2F11gm78ghyb?hl=es-419&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 
                text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all"
              >
                Ver en Google Maps
              </Link>
            </div>

            {/* CONTACT INFO */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-semibold flex items-center mb-6">
                <User className="text-cyan-400 mr-3" size={30} />
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all fade-up"
                    style={{ animationDelay: `${info.delay}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md">
                      <info.icon size={26} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 whitespace-pre-line text-sm leading-relaxed">
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

      {/* FLOATING PARTICLES */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-2/3 right-12 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
    </section>
  );
}
