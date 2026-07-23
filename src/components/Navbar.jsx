"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="bg-ibe-celeste shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logoibe.png"
            alt="Somos IBE"
            width={140}
            height={40}
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><Link href="/" className="hover:text-ibe-amarillo transition">Inicio</Link></li>
          <li><Link href="/somos-ibe" className="hover:text-ibe-amarillo transition">Somos IBE</Link></li>
          <li><Link href="/ministerios" className="hover:text-ibe-amarillo transition">Ministerios</Link></li>
          <li><Link href="/devocional" className="hover:text-ibe-amarillo transition">Devocional</Link></li>
          <li><Link href="/podcast" className="hover:text-ibe-amarillo transition">Podcast</Link></li>
          <li><Link href="/testimonios" className="hover:text-ibe-amarillo transition">Testimonios</Link></li>
          <li><Link href="/oracion" className="hover:text-ibe-amarillo transition">Oración</Link></li>
          <li><Link href="/contacto" className="hover:text-ibe-amarillo transition">Contacto</Link></li>
        </ul>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <ul className="md:hidden bg-ibe-celeste px-4 pb-4 flex flex-col gap-4 text-white font-medium">
          <li><Link href="/" onClick={() => setMenuAbierto(false)}>Inicio</Link></li>
          <li><Link href="/somos-ibe" onClick={() => setMenuAbierto(false)}>Somos IBE</Link></li>
          <li><Link href="/ministerios" onClick={() => setMenuAbierto(false)}>Ministerios</Link></li>
          <li><Link href="/devocional" onClick={() => setMenuAbierto(false)}>Devocional</Link></li>
          <li><Link href="/podcast" onClick={() => setMenuAbierto(false)}>Podcast</Link></li>
          <li><Link href="/testimonios" className="hover:text-ibe-amarillo transition">Testimonios</Link></li>
          <li><Link href="/contacto" onClick={() => setMenuAbierto(false)}>Contacto</Link></li>
        </ul>
      )}
    </nav>
  );
}