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
          Escucha nuestros mensajes y enseñanzas donde quieras.
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

                {/* Botón play encima de la miniatura */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition">
                  <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
              </a>

              {/* Contenido */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                  {episodio.titulo}
                </h2>

                <p className="text-ibe-gris text-sm mb-6">
                  {episodio.descripcion}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={episodio.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-full transition"
                  >
                    ▶️ Ver en YouTube
                  </a>

                  <a
                    href={episodio.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-full transition"
                  >
                    🎧 Escuchar en Spotify
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