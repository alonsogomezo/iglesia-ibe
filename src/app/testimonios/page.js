const testimoniosTexto = [
  {
    nombre: "María G.",
    texto: "Encontré una familia en Iglesia IBE. Mi vida cambió por completo desde que empecé a asistir.",
  },
  {
    nombre: "Carlos R.",
    texto: "Dios ha sido fiel en cada etapa de mi vida, y esta iglesia ha sido clave en mi crecimiento espiritual.",
  },
  {
    nombre: "Ana P.",
    texto: "Gracias a los ministerios pude conectar con personas increíbles y servir con propósito.",
  },
];

export default function Testimonios() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonios</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Historias reales de personas cuya vida ha sido transformada.
        </p>
      </section>

      {/* Testimonios escritos */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimoniosTexto.map((testimonio) => (
            <div
              key={testimonio.nombre}
              className="border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              <p className="text-ibe-gris italic mb-4">
                "{testimonio.texto}"
              </p>
              <p className="text-ibe-celeste font-semibold">
                — {testimonio.nombre}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}