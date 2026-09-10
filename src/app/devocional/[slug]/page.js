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

  // Separar el contenido en párrafos
  const parrafos = content.trim().split("\n\n");
  
  // Asignamos el 60% a la primera columna para desktop
  const puntoCorte = Math.ceil(parrafos.length * 0.6);
  
  const textoColumna1 = parrafos.slice(0, puntoCorte).join("\n\n");
  const textoColumna2 = parrafos.slice(puntoCorte).join("\n\n");

  return (
    <div className="bg-gray-100 min-h-screen py-6 sm:py-10 px-3 sm:px-8">
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
      <article className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-xl p-5 sm:p-12 md:p-16 text-gray-900 font-serif">
        
        {/* ENCABEZADO SUPERIOR */}
        <header className="mb-6 sm:mb-8 text-center">
          <p className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] text-gray-500 uppercase mb-2 sm:mb-3">
            DEVOCIONAL SOMOS IBE
          </p>

          {/* Título entre líneas dobles */}
          <div className="border-y-2 border-gray-900 py-2 sm:py-2.5 my-2">
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gray-900 font-serif leading-tight sm:leading-none">
              {data.titulo}
            </h1>
          </div>

          {/* Autor y Fecha */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-sans text-gray-700 mt-3 mb-4 sm:mb-6 tracking-wide">
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
        </header>

        {/* ========================================================
            VISTA MÓVIL (block en pantallas pequeñas)
            Orden: Descripción -> Imagen -> Texto Completo Fluido
        ======================================================== */}
        <div className="block md:hidden space-y-4 text-xs sm:text-sm font-serif text-gray-800 leading-relaxed text-justify">
          {/* Descripción en móvil */}
          {data.descripcion && (
            <div className="border border-gray-900 p-4 bg-white shadow-sm text-center">
              <p className="font-semibold italic text-gray-900 text-xs leading-snug">
                "{data.descripcion}"
              </p>
            </div>
          )}

          {/* Imagen en móvil */}
          {data.imagen && (
            <div className="border border-gray-300 p-1 bg-white shadow-sm my-4">
              <div className="relative w-full h-52">
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

          {/* Todo el texto de seguido sin cortes artificiales */}
          <div className="whitespace-pre-line space-y-4 pt-2">
            {content}
          </div>
        </div>

        {/* ========================================================
            VISTA DESKTOP (grid 2 columnas idéntico al periódico)
        ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 font-serif text-gray-800 text-sm leading-relaxed text-justify items-start">
          
          {/* COLUMNA IZQUIERDA (1) */}
          <div className="flex flex-col gap-4">
            {data.descripcion && (
              <div className="border border-gray-900 p-4 bg-white shadow-sm text-center">
                <p className="font-semibold italic text-gray-900 text-sm leading-snug">
                  "{data.descripcion}"
                </p>
              </div>
            )}

            <div className="whitespace-pre-line space-y-4">
              {textoColumna1}
            </div>
          </div>

          {/* COLUMNA DERECHA (2) */}
          <div className="flex flex-col gap-4">
            {data.imagen && (
              <div className="border border-gray-300 p-1 bg-white shadow-sm">
                <div className="relative w-full h-56">
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

            <div className="whitespace-pre-line space-y-4">
              {textoColumna2}
            </div>
          </div>

        </div>

        {/* Pie de la Hoja Editorial */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-sans text-gray-500 gap-2">
          <span>Iglesia Bautista Emanuel</span>
          <span className="italic">San José, Costa Rica</span>
        </div>
      </article>
    </div>
  );
}