"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const enlaces = [
    { nombre: "Inicio", href: "/" },
    { nombre: "Quiénes Somos", href: "/somos-ibe" },
    { nombre: "Ministerios", href: "/ministerios" },
    { nombre: "Devocional", href: "/devocional" },
    { nombre: "Podcast", href: "/podcast" },
    { nombre: "Oración", href: "/oracion" },
    { nombre: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ibe-celeste/95 backdrop-blur-md border-b border-white/15 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group transition-transform duration-200 hover:scale-105">
          <Image
            src="/logo.png"
            alt="Somos IBE"
            width={140}
            height={40}
            className="object-contain h-14 w-auto"
            priority
          />
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="relative text-sm font-medium text-white/90 hover:text-white transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {enlace.nombre}
            </Link>
          ))}
        </nav>

        {/* Botón Menú Móvil */}
        <button
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? (
            <HiXMark className="text-2xl" />
          ) : (
            <HiBars3 className="text-2xl" />
          )}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {menuAbierto && (
        <div className="md:hidden border-t border-white/10 bg-ibe-celeste px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {enlaces.map((enlace) => (
              <Link
                key={enlace.href}
                href={enlace.href}
                onClick={() => setMenuAbierto(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>{enlace.nombre}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}