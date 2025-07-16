"use client";
import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo1 from "@/public/logo1.webp";
import Image from "next/image";

const Navegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="bg-blue-950">
      <nav className="mx-[50px] bg-blue-[950] p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* LOGO y TEXTO - Desktop */}
          <div className=" hidden lg:flex items-center gap-2">
            <Image
              src={logo1}
              alt="Picture of the author"
              className="w-[50px] rounded"
            />
            <span className="text-white font-bold text-lg">
              CONSTRUCCIONES CIVILES
            </span>
          </div>

          {/* LOGO - Mobile */}
          <div className="flex lg:hidden items-center gap-2">
             <Image
              src={logo1}
              alt="Picture of the author"
              className="w-[50px] rounded"
            />
          </div>

          {/* Botón Hamburguesa */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="lg:hidden border-0 focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            <FaBars size={28} color="#fff" />
          </button>

          {/* Links - Desktop */}
          <div className="hidden lg:flex gap-6 ml-auto">
            {[
              "servicios",
              "historia",
              "proyectos",
              "equipamiento",
              "contacto",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:text-teal-300 transition duration-200"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Menú Mobile */}
        {menuAbierto && (
          <div className="lg:hidden mt-4 flex flex-col items-start gap-4 px-4">
            {[
              "servicios",
              "historia",
              "proyectos",
              "equipamiento",
              "contacto",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:text-teal-300 transition duration-200"
                onClick={() => setMenuAbierto(false)}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navegacion;
