export default function Podcast() {
    return (
      <>
        {/* Hero */}
        <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Podcast</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Escucha nuestros mensajes y enseñanzas donde quieras.
          </p>
        </section>
  
        {/* Links */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
  
            {/* Spotify */}
            <a
              href="https://open.spotify.com/show/033ob90gJEYOJFEsuOJAeh?si=Fex-533kToKhSvdEBlnF7Q&nd=1&dlsi=893088e4f7b54286"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <span className="text-5xl">🎧</span>
              <div>
                <h2 className="text-xl font-bold text-ibe-azul mb-1">Spotify</h2>
                <p className="text-ibe-gris text-sm">Este podcast reúne historias de personas comunes que atravesaron momentos difíciles (crisis físicas, económicas y situaciones inesperadas) y descubrieron a un Dios extraordinario que transformó su perspectiva y su vida.
                🎙️ ¡Espera un nuevo episodio cada mes!</p>
              </div>
            </a>
  
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@somosibecr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <span className="text-5xl">▶️</span>
              <div>
                <h2 className="text-xl font-bold text-ibe-azul mb-1">YouTube</h2>
                <p className="text-ibe-gris text-sm">Este podcast reúne historias de personas comunes que atravesaron momentos difíciles (crisis físicas, económicas y situaciones inesperadas) y descubrieron a un Dios extraordinario que transformó su perspectiva y su vida.
                🎙️ ¡Espera un nuevo episodio cada mes!
                </p>
              </div>
            </a>
  
          </div>
        </section>
      </>
    );
  }