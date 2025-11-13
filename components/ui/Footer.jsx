"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white pt-20 pb-10 px-6 lg:px-12 overflow-hidden">

      {/* Luces de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Columna 1 – Info Empresa */}
        <div className="space-y-5 fade-up">
          <h3 className="text-2xl font-bold tracking-tight">
            Construcciones Civiles S.R.L.
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm">
            Soluciones integrales en servicios mineros.  
            Más de 18 años liderando infraestructura en el NOA.
          </p>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
              Certificaciones
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {["ISO 9001", "ISO 14001", "OHSAS 18001"].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 text-xs rounded-lg bg-white/10 border border-white/20 shadow-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna 2 – Servicios */}
        <div className="space-y-4 fade-up-delay">
          <h4 className="text-lg font-semibold">Servicios</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "Construcción Minera",
              "Logística y Transporte",
              "Operaciones en Montaña",
              "Seguridad y Protección",
              "Mantenimiento de máquinas industriales",
              "Mantenimiento de edificios",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#servicios"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 – Empresa */}
        <div className="space-y-4 fade-up-delay">
          <h4 className="text-lg font-semibold">Empresa</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="#servicios" className="hover:text-cyan-400">Servicios</Link></li>
            <li><Link href="#historia" className="hover:text-cyan-400">Historia</Link></li>
            <li><Link href="#proyectos" className="hover:text-cyan-400">Proyectos</Link></li>
            <li><Link href="#equipamiento" className="hover:text-cyan-400">Equipamiento</Link></li>
            <li><Link href="#contacto" className="hover:text-cyan-400">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 4 – Contacto */}
        <div className="space-y-6 fade-up-slow">
          <h4 className="text-lg font-semibold">Contacto</h4>

          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="text-cyan-400 shrink-0" size={20} />
              Dr. Fernandez, K4139  
              Santa María, Catamarca
            </li>

            <li className="flex items-center gap-3">
              <Phone className="text-cyan-400 shrink-0" size={20} />
              <a href="tel:+543838602867" className="hover:text-cyan-400">
                +54 3838 602867
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-cyan-400 shrink-0" size={20} />
              <a
                href="mailto:luisguaymas@construccionesciviles.com"
                className="hover:text-cyan-400"
              >
                luisguaymas@construccionesciviles.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Clock className="text-cyan-400 shrink-0" size={20} />
              Lun - Vie: 8:00 - 14:00  
              <br />
              Emergencias 24/7
            </li>
          </ul>

          {/* Redes */}
          <div>
            <p className="text-sm font-semibold mb-3">También por:</p>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/luis-guaymas-b93a7935/"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500 transition shadow-md"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M19 0h-14c-2.761..."></path>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=543838602867"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500 hover:bg-green-600 transition shadow-md text-white"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DIVISOR */}
      <div className="mt-16 mb-8 border-t border-white/20" />

      {/* LOWER FOOTER */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between text-sm text-gray-400 max-w-7xl mx-auto fade-up">
        <p>
          © {new Date().getFullYear()} Construcciones Civiles S.R.L. Todos los
          derechos reservados.
        </p>

        <p className="text-gray-300">Powered by AuraSoft</p>

        <div className="flex gap-4">
          <Link href="/privacidad" className="hover:text-cyan-400">
            Política de Privacidad
          </Link>
          <span className="opacity-50">|</span>
          <Link href="/terminos" className="hover:text-cyan-400">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
