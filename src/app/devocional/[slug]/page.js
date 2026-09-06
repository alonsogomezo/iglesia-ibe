import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaBookOpen, FaArrowLeft } from "react-icons/fa";

export default async function DevocionalDetalle({ params }) {
  const { slug } = await params;

  const carpeta = path.join(process.cwd(), "content/devocionales");
  const archivo = fs.readFileSync(
    path.join(carpeta, `${slug}.md`),
    "utf-8"
  );

  const { data, content } = matter(archivo);

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
          <div className="max-w-3xl mx-auto text-center">
            {/* Etiqueta / Fecha */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <FaCalendarAlt className="text-xs text-white/80" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/90">
                {new Date(data.fecha).toLocaleDateString("es-CR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              {data.titulo}
            </h1>

            {/* Subtítulo o lema decorativo */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 bg-white/30" />
              <FaBookOpen className="text-white/60 text-sm" />
              <div className="h-px w-12 bg-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTENIDO DEL DEVOCIONAL
      ========================== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Imagen destacada (opcional) */}
          {data.imagen && (
            <div className="relative w-full h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 mb-12">
              <Image
                src={data.imagen}
                alt={data.titulo}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Descripción / Versículo clave */}
          {data.descripcion && (
            <div className="relative border-l-4 border-ibe-celeste bg-gray-50/80 rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <p className="text-gray-700 text-lg md:text-xl italic font-serif leading-relaxed">
                "{data.descripcion}"
              </p>
            </div>
          )}

          {/* Texto principal */}
          <article className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line space-y-4">
            {content}
          </article>

          {/* Botón de retorno */}
          <div className="mt-14 pt-8 border-t border-gray-100 flex justify-start">
            <Link
              href="/devocional"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-xs font-bold text-gray-700 shadow-sm transition-all duration-200 hover:border-ibe-celeste hover:bg-ibe-celeste hover:text-white"
            >
              <FaArrowLeft className="text-xs" />
              <span>Volver a devocionales</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}