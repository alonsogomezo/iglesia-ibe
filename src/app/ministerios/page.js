"use client";

import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaHandshake, FaExpand } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const ministerios = [
  {
    nombre: "Juventud Dinámica",
    descripcion:
      "Un espacio donde jóvenes de 12 a 17 años descubren su identidad en Dios, crecen en fe, construyen comunidad y son equipados para vivir con propósito.",
    imagen: "/ministerios/jd.png",
    instagram: "https://www.instagram.com/jd_ibe",
  },
  {
    nombre: "VID",
    descripcion:
      "Vid es una casa, es una familia, es amor en movimiento. Es gente como vos, unida y transformada por el corazón de Dios. Jóvenes de 18 a 25 años.",
    imagen: "/ministerios/VID.png",
    instagram: "https://www.instagram.com/vid_ibecr",
  },
  {
    nombre: "Kinesis",
    descripcion:
      "Movimiento de esperanza en expansión. Nos movemos para servir a otros guiados por la persona, acción y ejemplo de Jesús. Jóvenes de 26 a 35 años.",
    imagen: "/ministerios/KINESIS.png",
    instagram: "https://www.instagram.com/kinesis_cr",
  },
  {
    nombre: "Ministerio de Niños",
    descripcion:
      "Un lugar seguro y divertido para que los niños conozcan a Dios.",
    imagen: "/ministerios/huella.png",
  },
  {
    nombre: "Grupo Peniel",
    descripcion:
      "Comunidad de mujeres que se apoyan y crecen juntas en la fe.",
    imagen: "/ministerios/penie.png",
  },
  {
    nombre: "Grupo Bernabé",
    descripcion:
      "Hombres comprometidos con Dios, la familia y la iglesia.",
    imagen: "/ministerios/bernabe.png",
  },
  {
    nombre: "Ministerio de Matrimonios",
    descripcion:
      "Fortalecemos las familias desde el amor y los principios bíblicos.",
    imagen: "/ministerios/matrimonio.png",
  },
  {
    nombre: "Años Dorados",
    descripcion:
      "Un espacio de comunidad, fe y compañerismo para nuestros adultos mayores.",
    imagen: "/ministerios/AD.png",
  },
];

export default function Ministerios() {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden bg-ibe-celeste text-white">
        {/* Decoración sutil */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -left-32 bottom-[-120px] h-80 w-80 rounded-full bg-white/5" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            {/* Etiqueta */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <FaHandshake className="text-lg" />
              </div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
                Comunidad y Servicio
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Nuestros <br />
              <span className="italic font-light">Ministerios</span>
            </h1>

            {/* Descripción */}
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/80">
              Descubre las diferentes áreas donde puedes conectarte, crecer en fe
              y servir junto a nosotros.
            </p>

            {/* Línea decorativa */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-16 bg-white/40" />
              <span className="text-sm text-white/60">
                Un espacio para cada etapa de la vida
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LISTA DE MINISTERIOS
      ========================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
              Encuentra Tu Lugar
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Grupos y Ministerios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministerios.map((ministerio) => (
              <div
                key={ministerio.nombre}
                className="group flex flex-col justify-between border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:border-ibe-celeste/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSeleccionado(ministerio)}
              >
                <div>
                  {/* Imagen del ministerio */}
                  <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                    <Image
                      src={ministerio.imagen}
                      alt={ministerio.nombre}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                        <FaExpand className="text-[10px]" /> Ampliar
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-ibe-celeste transition-colors">
                      {ministerio.nombre}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {ministerio.descripcion}
                    </p>
                  </div>
                </div>

                {/* Acciones */}
                {ministerio.instagram && (
                  <div className="px-6 pb-6 pt-0">
                    <a
                      href={ministerio.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full bg-ibe-celeste/10 px-5 py-2.5 text-xs font-bold text-ibe-celeste transition-all duration-200 hover:bg-ibe-celeste hover:text-white"
                    >
                      <FaInstagram className="text-sm" />
                      <span>Instagram</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          MODAL DETALLE
      ========================== */}
      {seleccionado && (
        <div
          className="fixed inset-0 bg-gray-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSeleccionado(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl animate-scale-in border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={() => setSeleccionado(null)}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 z-20 bg-gray-900/60 hover:bg-gray-900 text-white rounded-full p-2.5 backdrop-blur-md transition-colors"
            >
              <HiX className="text-lg" />
            </button>

            {/* Imagen Modal */}
            <div className="relative w-full h-80 sm:h-96 bg-gray-100">
              <Image
                src={seleccionado.imagen}
                alt={seleccionado.nombre}
                fill
                className="object-cover"
              />
            </div>

            {/* Información Modal */}
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {seleccionado.nombre}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {seleccionado.descripcion}
              </p>

              {seleccionado.instagram && (
                <a
                  href={seleccionado.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ibe-celeste px-6 py-3 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-ibe-celeste/90"
                >
                  <FaInstagram className="text-base" />
                  <span>Seguir en Instagram</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Estilos de animación */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}