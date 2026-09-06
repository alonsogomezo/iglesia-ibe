import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { FaBookOpen, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function Devocional() {
  const carpeta = path.join(process.cwd(), "content/devocionales");
  const archivos = fs.readdirSync(carpeta);

  const devocionales = archivos.map((archivo) => {
    const contenido = fs.readFileSync(path.join(carpeta, archivo), "utf-8");
    const { data } = matter(contenido);
    const slug = archivo.replace(".md", "");
    return { ...data, slug };
  });

  devocionales.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

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
                <FaBookOpen className="text-lg" />
              </div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
                Lectura y Fe
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Devocionales <br />
              <span className="italic font-light">Diarios</span>
            </h1>

            {/* Descripción */}
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/80">
              Reflexiones basadas en la Palabra de Dios para alimentar tu fe y
              fortalecer tu andar cotidiano.
            </p>

            {/* Línea decorativa */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-16 bg-white/40" />
              <span className="text-sm text-white/60">
                Alimento para el alma cada día
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LISTA DE DEVOCIONALES
      ========================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
              Publicaciones
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Últimas Reflexiones
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {devocionales.map((devocional) => (
              <Link
                key={devocional.slug}
                href={`/devocional/${devocional.slug}`}
                className="group border border-gray-100 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md hover:border-ibe-celeste/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Fecha */}
                <div className="flex items-center gap-2 text-xs font-semibold text-ibe-celeste uppercase tracking-wider mb-3">
                  <FaCalendarAlt className="text-xs" />
                  <span>
                    {new Date(devocional.fecha).toLocaleDateString("es-CR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* Título */}
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-ibe-celeste transition-colors">
                  {devocional.titulo}
                </h2>

                {/* Descripción */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {devocional.descripcion}
                </p>

                {/* Acción */}
                <div className="inline-flex items-center gap-2 text-xs font-bold text-ibe-celeste group-hover:translate-x-1 transition-transform duration-200">
                  <span>Leer devocional</span>
                  <FaArrowRight className="text-xs" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}