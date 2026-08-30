import { FaYoutube, FaSpotify } from "react-icons/fa";

const episodios = [
  {
    titulo: "Episodio 1: Mauricio Bustamante",
    descripcion:
      "Tras un atentado contra su vida, don Mauricio Bustamante nos cuenta cómo lo que comenzó como tragedia, se convirtió en una oportunidad para nacer de nuevo.",
    youtubeId: "YBmMEKw_y6I",
    youtube:
      "https://www.youtube.com/watch?v=YBmMEKw_y6I&list=PL2jiqUSjnxtTj31nKBKcACMgGI0yi9QZh",
    spotify: "https://open.spotify.com/episode/4354RGVqbI5cR8wC60V2C2",
  },
  {
    titulo: "Episodio 2: Abel Pereira / Andrea Arcia",
    descripcion:
      "Abigail Pereira es una niña que desde el día 2 de su vida, enfrentó una serie de complicaciones de salud que la llevaron al borde de la muerte. Sus padres, Abel Pereira y Andrea Arcia, nos cuentan cómo Dios les permitió salir adelante, manteniendo una fe intacta en medio de la prueba.",
    youtubeId: "R_PEb3-uvEc",
    youtube:
      "https://www.youtube.com/watch?v=R_PEb3-uvEc&list=PL2jiqUSjnxtTj31nKBKcACMgGI0yi9QZh&index=1",
    spotify: "https://open.spotify.com/episode/23uWVZNdlhcwfY4u81AEih",
  },
];

export default function Podcast() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Más Allá de lo Imposible
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Este podcast reúne historias de personas comunes que atravesaron momentos difíciles (crisis físicas, económicas y situaciones inesperadas) y descubrieron a un Dios extraordinario que transformó su perspectiva y su vida.

          ¡Espera un nuevo episodio cada mes!
        </p>
      </section>

      {/* Lista de episodios */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {episodios.map((episodio) => (
            <div
              key={episodio.titulo}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Miniatura de YouTube */}
              <a
                href={episodio.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  src={`https://img.youtube.com/vi/${episodio.youtubeId}/maxresdefault.jpg`}
                  alt={episodio.titulo}
                  className="w-full object-cover"
                />

              </a>

              {/* Contenido */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                  {episodio.titulo}
                </h2>

                <p className="text-ibe-gris text-sm mb-6">
                  {episodio.descripcion}
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href={episodio.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-ibe-celeste hover:bg-ibe-celeste/80 hover:scale-105 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm"
                  >
                    <FaYoutube className="text-base" />
                    Ver en YouTube
                  </a>

                  <a
                    href={episodio.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-ibe-celeste hover:bg-ibe-celeste text-ibe-celeste hover:text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200"
                  >
                    <FaSpotify className="text-base" />
                    Escuchar en Spotify
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
