"use client";

import { useEffect } from "react";

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

const testimoniosYoutube = [
  { id: "TU_VIDEO_ID_AQUI", titulo: "Testimonio de fe - Familia Pérez" },
  { id: "TU_VIDEO_ID_AQUI_2", titulo: "Testimonio de fe - Juan Martínez" },
];

const testimoniosInstagram = [
  "https://www.instagram.com/reel/TU_REEL_ID_AQUI/",
];

export default function Testimonios() {
  // Carga el script de Instagram para que los reels se vean correctamente
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

      {/* Videos de YouTube */}
      <section className="bg-ibe-azul py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Videos de Testimonios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimoniosYoutube.map((video) => (
              <div key={video.id}>
                <iframe
                  className="w-full aspect-video rounded-2xl"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.titulo}
                  allowFullScreen
                ></iframe>
                <p className="text-white text-sm mt-2 text-center">{video.titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels de Instagram */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ibe-azul text-center mb-12">
            Reels de Instagram
          </h2>
          <div className="flex flex-col gap-8 items-center">
            {testimoniosInstagram.map((link) => (
              <blockquote
                key={link}
                className="instagram-media"
                data-instgrm-permalink={link}
                data-instgrm-version="14"
                style={{ maxWidth: "540px", width: "100%" }}
              ></blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}