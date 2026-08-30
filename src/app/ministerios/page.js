"use client";

import Image from "next/image";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

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
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ministerios
        </h1>

        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Descubre los ministerios de la Iglesia Bautista Emanuel y encuentra tu lugar en la
          comunidad.
        </p>
      </section>

      {/* Lista de ministerios */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministerios.map((ministerio) => (
            <div
              key={ministerio.nombre}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => setSeleccionado(ministerio)}
            >
              {/* Imagen */}
              <div className="relative w-full h-48">
                <Image
                  src={ministerio.imagen}
                  alt={ministerio.nombre}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {ministerio.nombre}
                </h3>

                <p className="text-ibe-gris text-sm mb-4">
                  {ministerio.descripcion}
                </p>

                {ministerio.instagram && (
                  <a
                    href={ministerio.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 border-2 border-ibe-celeste hover:bg-ibe-celeste text-ibe-celeste hover:text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200"
                  >
                    <FaInstagram className="text-base" />
                    Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {seleccionado && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSeleccionado(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-96">
              <Image
                src={seleccionado.imagen}
                alt={seleccionado.nombre}
                fill
                className="object-cover"
              />

              <button
                type="button"
                onClick={() => setSeleccionado(null)}
                aria-label="Cerrar"
                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center font-bold shadow transition"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animaciones */}
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
