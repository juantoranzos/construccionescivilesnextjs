import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-950 to-blue-900 text-white">

    <footer className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Información de la empresa */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-balance">
              Construcciones Civiles S.R.L
            </h3>
            <p className="text-sm leading-relaxed ">
              Soluciones integrales en servicios mineros con más de 18 años de
              experiencia en la industria.
            </p>
            {/* Certificaciones */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide">
                Certificaciones
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-secondary px-2 py-1 text-xs font-medium ">
                  ISO 9001
                </span>
                <span className="rounded bg-secondary px-2 py-1 text-xs font-medium ">
                  ISO 14001
                </span>
                <span className="rounded bg-secondary px-2 py-1 text-xs font-medium ">
                  OHSAS 18001
                </span>
              </div>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#servicios"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Construcción Minera
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Logistica y Transporte
                </Link>
              </li>
              <li>
                <Link
                 href="#servicios"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Operaciones en Montañas
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Seguridad y Proteccion
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Mantenimiento de maquinas industriales
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Mantenimiento de edificios
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#servicios"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#historia"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Historia
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="#equipamiento"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Equipamiento
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  Dr Fernandez, K4139 Santa María, Catamarca
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-accent" />
                <a
                  href="tel:+56912345678"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                 +54 3838 602867
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-accent" />
                <a
                  href="mailto:contacto@mineracontratista.cl"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  luisguaymas@construccionesciviles.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  Lun - Vie: 8:00 - 14:00
                  <br />
                  Emergencias 24/7
                </span>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="pt-2">
              <p className="mb-3 text-sm font-semibold">Contactanos tambien por medio de:</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/luis-guaymas-b93a7935/?originalSubdomain=ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded  transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              
                <a
                  href="https://api.whatsapp.com/send?phone=543838602867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded bg-secondary transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="YouTube"
                >
                  <FaWhatsapp className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="my-8 border-t border-primary-foreground/20" />

        {/* Footer inferior */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm  md:flex-row">
          <p>
            © {new Date().getFullYear()} Construcciones Civiles S.R.L. Todos los derechos
            reservados.
          </p>
          <p>Powered By AuraSoft</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/privacidad"
              className="transition-colors hover:text-primary-foreground"
            >
              Política de Privacidad
            </Link>
            <span className="text-primary-foreground/40">|</span>
            <Link
              href="/terminos"
              className="transition-colors hover:text-primary-foreground"
            >
              Términos y Condiciones
            </Link>
           
            
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
