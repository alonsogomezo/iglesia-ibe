import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/hero.png"
          alt="Iglesia IBE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ibe-azul/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenido a Iglesia IBE
          </h1>
          <p className="text-lg md:text-xl text-ibe-gris mb-8">
            Una comunidad de fe, esperanza y amor para toda la familia.
          </p>
          <div className="flex justify-center">
            <Link
              href="/somos-ibe"
              className="bg-ibe-celeste hover:bg-ibe-azul text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Conoce más
            </Link>
            
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="bg-white text-ibe-azul py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quiénes somos?</h2>
          <p className="text-lg text-ibe-gris leading-relaxed">
            Iglesia IBE es una comunidad cristiana comprometida con Dios y las personas.
            Nos reunimos para adorar, crecer en la fe y servir a nuestra comunidad
            con amor y propósito.
          </p>
          <Link
            href="/somos-ibe"
            className="inline-block mt-8 text-ibe-celeste font-semibold hover:underline"
          >
            Conoce nuestra historia →
          </Link>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="bg-ibe-azul text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explora IBE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Link href="/devocional" className="bg-ibe-celeste/20 hover:bg-ibe-celeste/40 rounded-2xl p-8 text-center transition">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-2">Devocional</h3>
              <p className="text-ibe-gris text-sm">Reflexiones diarias para alimentar tu fe.</p>
            </Link>

            <Link href="/podcast" className="bg-ibe-celeste/20 hover:bg-ibe-celeste/40 rounded-2xl p-8 text-center transition">
              <div className="text-5xl mb-4">🎙️</div>
              <h3 className="text-xl font-bold mb-2">Podcast</h3>
              <p className="text-ibe-gris text-sm">Escucha nuestros mensajes y enseñanzas.</p>
            </Link>

            <Link href="/ministerios" className="bg-ibe-celeste/20 hover:bg-ibe-celeste/40 rounded-2xl p-8 text-center transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Ministerios</h3>
              <p className="text-ibe-gris text-sm">Descubre cómo ser parte de nuestra comunidad.</p>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}