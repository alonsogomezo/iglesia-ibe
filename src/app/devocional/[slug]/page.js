import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

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
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <p className="text-white/70 text-sm mb-3">
          {new Date(data.fecha).toLocaleDateString("es-CR")}
        </p>

        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
          {data.titulo}
        </h1>
      </section>

      {/* Imagen opcional */}
      {data.imagen && (
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={data.imagen}
            alt={data.titulo}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Contenido */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-ibe-gris text-lg italic mb-8">
            {data.descripcion}
          </p>

          <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {content}
          </div>

          <a
            href="/devocional"
            className="inline-block mt-12 text-ibe-celeste font-medium hover:underline"
          >
            ← Volver a devocionales
          </a>
        </div>
      </section>
    </>
  );
}
