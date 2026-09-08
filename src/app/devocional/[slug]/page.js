import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function DevocionalDetalle({ params }) {
  const { slug } = await params;

  const carpeta = path.join(process.cwd(), "content/devocionales");
  const archivo = fs.readFileSync(path.join(carpeta, `${slug}.md`), "utf-8");

  const { data, content } = matter(archivo);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-8">
      {/* Botón de retorno superior */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/devocional"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-ibe-celeste transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          <span>Volver a devocionales</span>
        </Link>
      </div>

      {/* HOJA ESTILO PERIÓDICO */}
      <article className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-xl p-6 sm:p-12 md:p-16 text-gray-900 font-serif">
        {/* Encabezado Superior */}
        <div className="text-center mb-6">
          <p className="text-xs font-sans font-bold tracking-[0.25em] text-gray-500 uppercase mb-4">
            DEVOCIONAL SOMOS IBE
          </p>

          {/* Título entre líneas horizontales dobles */}
          <div className="border-y-2 border-gray-900 py-3 my-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gray-900 font-serif leading-none">
              {data.titulo}
            </h1>
          </div>

          {/* Metadatos (Autor y Fecha) */}
          <div className="flex items-center justify-center gap-4 text-sm font-sans text-gray-700 mt-4 tracking-wide">
            <span>Por {data.pastor || "Francisco Arroyo"}</span>
            <span>—</span>
            <span>
              {new Date(data.fecha).toLocaleDateString("es-CR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* CONTENIDO FLUIDO (ESTILO PERIODÍSTICO) */}
        <div className="mt-8 text-gray-800 leading-relaxed text-sm sm:text-base text-justify font-serif">
          
          {/* Cita Flotante a la Izquierda */}
          {data.descripcion && (
            <div className="float-left w-full sm:w-[48%] mr-6 mb-4 border border-gray-900 p-4 bg-gray-50/50 shadow-sm text-center">
              <p className="font-semibold italic text-gray-900 text-xs sm:text-sm leading-snug">
                "{data.descripcion}"
              </p>
            </div>
          )}

          {/* Imagen Flotante a la Derecha */}
          {data.imagen && (
            <div className="float-right w-full sm:w-[48%] ml-6 mb-4 border border-gray-300 p-1 bg-white shadow-sm">
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={data.imagen}
                  alt={data.titulo}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Texto Principal (Fluye alrededor de la cita e imagen y luego se expande abajo) */}
          <div className="whitespace-pre-line space-y-4">
            {content}
          </div>

          {/* Limpiador de floats para el pie de página */}
          <div className="clear-both" />
        </div>

        {/* Pie de la Hoja Editorial */}
        <div className="mt-16 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-gray-500 gap-2">
          <span>Iglesia Bautista Emanuel</span>
          <span className="italic">San José, Costa Rica</span>
        </div>
      </article>
    </div>
  );
}