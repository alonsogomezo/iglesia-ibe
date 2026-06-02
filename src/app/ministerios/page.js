import Image from "next/image";

const ministerios = [
  {
    nombre: "Ministerio de Jóvenes",
    descripcion: "Espacio para que los jóvenes crezcan en fe y comunidad.",
    encargado: "Nombre del encargado",
    imagen: "/ministerios/jd.png",
    instagram: "https://instagram.com/ministerio_jovenes_ibe",
  },
  {
    nombre: "Ministerio de Niños",
    descripcion: "Un lugar seguro y divertido para que los niños conozcan a Dios.",
    encargado: "Nombre del encargado",
    imagen: "/ministerios/huella.png",
    instagram: "https://instagram.com/ministerio_ninos_ibe",
  },
  {
    nombre: "Ministerio de Alabanza",
    descripcion:
      "Llevamos la presencia de Dios a través de la música y la adoración.",
    encargado: "Nombre del encargado",
    imagen: "/ministerios/alabanza1.png",
    instagram: "https://instagram.com/ministerio_alabanza_ibe",
  },
  {
    nombre: "Grupo Peniel",
    descripcion:
      "Comunidad de mujeres que se apoyan y crecen juntas en la fe.",
    encargado: "Nombre del encargado",
    imagen: "/ministerios/penie.png",
    instagram: "https://instagram.com/ministerio_damas_ibe",
  },
  {
    nombre: "Grupo Bernabé",
    descripcion:
      "Hombres comprometidos con Dios, la familia y la iglesia.",
    encargado: "Nombre del encargado",
    imagen: "/ministerios/bernabe.png",
    instagram: "https://instagram.com/ministerio_caballeros_ibe",
  },
  {
    nombre: "Ministerio de Matrimonios",
    descripcion:
      "Fortalecemos las familias desde el amor y los principios bíblicos.",
    encargado: "Nombre del encargado",
    imagen: "/ministerios/matrimonio.png",
    instagram: "https://instagram.com/ministerio_matrimonios_ibe",
  },
];

export default function Ministerios() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ministerios
        </h1>

        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Descubre los ministerios de Iglesia IBE y encuentra tu lugar en la
          comunidad.
        </p>
      </section>

      {/* Lista de ministerios */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministerios.map((ministerio) => (
            <div
              key={ministerio.nombre}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
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
                <h3 className="text-xl font-bold text-ibe-azul mb-2">
                  {ministerio.nombre}
                </h3>

                <p className="text-ibe-gris text-sm mb-4">
                  {ministerio.descripcion}
                </p>

                <p className="text-ibe-celeste text-sm font-medium mb-4">
                  👤 {ministerio.encargado}
                </p>

                {/* Instagram */}
                <a
                  href={ministerio.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}