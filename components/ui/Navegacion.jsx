"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/public/logo1.webp";

export default function Navegacion() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "SERVICIOS", href: "#servicios" },
    { name: "PROYECTOS", href: "#proyectos" },
    { name: "HISTORIA", href: "#historia" },
    { name: "EQUIPAMIENTO", href: "#equipamiento" },
    { name: "CONTACTO", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-cyan-400 to-blue-600">
            <Image src={logo} alt="logo" className="rounded-xl object-cover" />
          </div>
          <h1
            className={`hidden sm:block text-lg lg:text-2xl font-bold transition-colors ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            CONSTRUCCIONES CIVILES
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all relative 
                ${isScrolled ? "text-white" : "text-gray-300"} 
                hover:text-cyan-400`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`lg:hidden p-2 rounded-lg transition-all ${
            isScrolled ? "text-gray-800 hover:bg-gray-200/40" : "text-white hover:bg-white/10"
          }`}
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-50
        transition-transform duration-500 p-6 flex flex-col gap-6 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BTN */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="self-end text-gray-300 hover:text-white transition"
        >
          <X size={28} />
        </button>

        {/* LINKS */}
        <nav className="mt-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 text-lg py-2 px-1 hover:text-cyan-400 transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
