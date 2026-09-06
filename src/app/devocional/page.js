import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

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
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Devocional</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Reflexiones diarias para alimentar tu fe y acercarte a Dios.
        </p>
      </section>

      {/* Lista de devocionales */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {devocionales.map((devocional) => (
            <Link
              key={devocional.slug}
              href={`/devocional/${devocional.slug}`}
              className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <p className="text-ibe-gris text-sm mb-2">
                {new Date(devocional.fecha).toLocaleDateString("es-CR")}
              </p>
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {devocional.titulo}
              </h2>
              <p className="text-ibe-gris">{devocional.descripcion}</p>
              <span className="inline-block mt-4 text-ibe-celeste font-medium text-sm">
                Leer devocional →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
