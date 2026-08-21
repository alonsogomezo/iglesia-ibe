import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaMicrophone, FaHandshake, FaClock } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-screen flex items-center justify-center text-white">
        <Image
          src="/hero1.png"
          alt="Iglesia IBE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenido a Iglesia Bautista Emanuel
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Una comunidad de fe, esperanza y amor.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-ibe-celeste/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ibe-celeste mb-4">Nuestra Misión</h3>
              <p className="text-ibe-gris leading-relaxed">
                Glorificar a Dios y anunciar Su salvación a todas las naciones.
              </p>
            </div>
            <div className="bg-ibe-celeste/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ibe-celeste mb-4">Nuestra Visión</h3>
              <p className="text-ibe-gris leading-relaxed">
                Reproducir discípulos de Jesús y equiparlos para cumplir la gran comisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-12">
            Explora IBE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Link href="/devocional" className="bg-white border border-gray-100 hover:border-ibe-celeste rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                <FaBookOpen className="text-5xl text-ibe-celeste" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Devocional</h3>
              <p className="text-ibe-gris text-sm">Reflexiones diarias para alimentar tu fe.</p>
            </Link>

            <Link href="/podcast" className="bg-white border border-gray-100 hover:border-ibe-celeste rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                <FaMicrophone className="text-5xl text-ibe-celeste" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Podcast</h3>
              <p className="text-ibe-gris text-sm">Escucha nuestros mensajes y enseñanzas.</p>
            </Link>

            <Link href="/ministerios" className="bg-white border border-gray-100 hover:border-ibe-celeste rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                <FaHandshake className="text-5xl text-ibe-celeste" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Ministerios</h3>
              <p className="text-ibe-gris text-sm">Descubre cómo ser parte de nuestra comunidad.</p>
            </Link>

          </div>
        </div>
      </section>

      {/* Horarios */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-12">
            Horarios de Culto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-ibe-celeste/10 rounded-2xl p-8 flex flex-col items-center gap-4">
              <FaClock className="text-4xl text-ibe-celeste" />
              <h3 className="text-xl font-bold text-gray-700">Casa de Oración</h3>
              <p className="text-ibe-gris">Miércoles</p>
              <p className="text-ibe-celeste font-bold text-2xl">7:00 PM</p>
            </div>

            <div className="bg-ibe-celeste/10 rounded-2xl p-8 flex flex-col items-center gap-4">
              <FaClock className="text-4xl text-ibe-celeste" />
              <h3 className="text-xl font-bold text-gray-700">Culto Dominical</h3>
              <p className="text-ibe-gris">Domingo</p>
              <p className="text-ibe-celeste font-bold text-2xl">10:00 AM</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}