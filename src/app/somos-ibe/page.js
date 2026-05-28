export default function SomosIBE() {
  return (
    <>
      {/* Hero de página */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Somos IBE</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Conoce quiénes somos, de dónde venimos y hacia dónde vamos.
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="bg-white text-ibe-azul py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-bold mb-4 text-ibe-celeste">Nuestra Misión</h2>
            <p className="text-ibe-gris leading-relaxed">
              Texto de la misión de la iglesia. Reemplaza este párrafo con el texto real.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-ibe-celeste">Nuestra Visión</h2>
            <p className="text-ibe-gris leading-relaxed">
              Texto de la visión de la iglesia. Reemplaza este párrafo con el texto real.
            </p>
          </div>

        </div>
      </section>

      {/* Valores */}
      <section className="bg-ibe-azul text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {[
              { icono: "✝️", titulo: "Fe", descripcion: "Texto del valor." },
              { icono: "🤝", titulo: "Comunidad", descripcion: "Texto del valor." },
              { icono: "❤️", titulo: "Amor", descripcion: "Texto del valor." },
              { icono: "📖", titulo: "Palabra", descripcion: "Texto del valor." },
              { icono: "🙏", titulo: "Oración", descripcion: "Texto del valor." },
              { icono: "🌱", titulo: "Crecimiento", descripcion: "Texto del valor." },
            ].map((valor) => (
              <div key={valor.titulo} className="bg-ibe-celeste/20 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{valor.icono}</div>
                <h3 className="text-lg font-bold mb-2">{valor.titulo}</h3>
                <p className="text-ibe-gris text-sm">{valor.descripcion}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-white text-ibe-azul py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestra Historia</h2>
          <p className="text-ibe-gris leading-relaxed text-lg">
            Texto de la historia de la iglesia. Reemplaza este párrafo con el texto real.
            Puedes escribir varios párrafos aquí contando cómo nació la iglesia,
            sus momentos importantes y su crecimiento a lo largo del tiempo.
          </p>
        </div>
      </section>
    </>
  );
}