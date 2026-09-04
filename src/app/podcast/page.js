import { FaYoutube, FaSpotify, FaPodcast } from "react-icons/fa";

const episodios = [
  {
    numero: "01",
    titulo: "Episodio 1: Mauricio Bustamante",
    descripcion:
      "Tras un atentado contra su vida, don Mauricio Bustamante nos cuenta cómo lo que comenzó como tragedia, se convirtió en una oportunidad para nacer de nuevo.",
    youtubeId: "YBmMEKw_y6I",
    youtube:
      "https://www.youtube.com/watch?v=YBmMEKw_y6I&list=PL2jiqUSjnxtTj31nKBKcACMgGI0yi9QZh",
    spotify: "https://open.spotify.com/episode/4354RGVqbI5cR8wC60V2C2",
  },
  {
    numero: "02",
    titulo: "Episodio 2: Abel Pereira / Andrea Arcia",
    descripcion:
      "Abigail Pereira es una niña que desde el día 2 de su vida enfrentó una serie de complicaciones de salud que la llevaron al borde de la muerte. Sus padres, Abel Pereira y Andrea Arcia, nos cuentan cómo Dios les permitió salir adelante, manteniendo una fe intacta en medio de la prueba.",
    youtubeId: "R_PEb3-uvEc",
    youtube:
      "https://www.youtube.com/watch?v=R_PEb3-uvEc&list=PL2jiqUSjnxtTj31nKBKcACMgGI0yi9QZh&index=1",
    spotify: "https://open.spotify.com/episode/23uWVZNdlhcwfY4u81AEih",
  },
];

export default function Podcast() {
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
                <FaPodcast className="text-lg" />
              </div>

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
                Podcast IBE
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Más Allá de lo
              <span className="block italic font-light">Imposible</span>
            </h1>

            {/* Descripción */}
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/80">
              Historias reales de personas que atravesaron momentos
              extraordinarios y descubrieron a un Dios extraordinario.
            </p>

            {/* Línea */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-16 bg-white/40" />
              <span className="text-sm text-white/60">
                Nuevos episodios cada mes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRO
      ========================== */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
                Historias que inspiran
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Últimos episodios
              </h2>
            </div>

            <p className="max-w-md text-sm md:text-base leading-relaxed text-gray-500">
              Escucha testimonios de fe, esperanza y transformación de nuestra
              comunidad.
            </p>
          </div>

          <div className="mt-8 h-px bg-gray-100" />
        </div>
      </section>

      {/* =========================
          EPISODIOS
      ========================== */}
      <section className="bg-white pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {episodios.map((episodio) => (
              <article
                key={episodio.titulo}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Imagen */}
                <a
                  href={episodio.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden"
                >
                  <img
                    src={`https://img.youtube.com/vi/${episodio.youtubeId}/maxresdefault.jpg`}
                    alt={episodio.titulo}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Número */}
                  <div className="absolute top-4 left-4 flex items-center justify-center h-10 w-10 rounded-full bg-white/95 text-ibe-celeste text-sm font-bold shadow-sm">
                    {episodio.numero}
                  </div>
                </a>

                {/* Contenido */}
                <div className="flex flex-col flex-1 p-7">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ibe-celeste mb-3">
                    Episodio {episodio.numero}
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug mb-4">
                    {episodio.titulo.replace(
                      `Episodio ${episodio.numero}: `,
                      ""
                    )}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-gray-500 mb-7">
                    {episodio.descripcion}
                  </p>

                  {/* Botones */}
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href={episodio.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-ibe-celeste px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-ibe-celeste/85 hover:shadow-md"
                    >
                      <FaYoutube className="text-base" />
                      YouTube
                    </a>

                    <a
                      href={episodio.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all duration-200 hover:border-ibe-celeste hover:text-ibe-celeste"
                    >
                      <FaSpotify className="text-base" />
                      Spotify
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA FINAL
      ========================== */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-4">
            Más historias próximamente
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Una historia puede cambiar una vida.
          </h2>

          <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-gray-500">
            Acompáñanos en cada nuevo episodio mientras conocemos historias
            reales de fe, perseverancia y esperanza.
          </p>
        </div>
      </section>
    </>
  );
}