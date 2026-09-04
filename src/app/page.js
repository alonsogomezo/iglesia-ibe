import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaMicrophone,
  FaHandshake,
  FaClock,
  FaChurch,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/hero1.png"
          alt="Iglesia IBE"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-900/50 to-gray-900/30" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          {/* Etiqueta */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <FaChurch className="text-ibe-celeste text-xs" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/90">
              Iglesia Bautista Emanuel
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Bienvenido a <br className="hidden sm:block" />
            <span className="italic font-light text-white/90">nuestra comunidad</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Un lugar donde se predican las Buenas Nuevas de Jesucristo.
          </p>
        </div>
      </section>

      {/* =========================
          MISIÓN Y VISIÓN
      ========================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Encabezado previo */}
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
              Nuestro Propósito
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Guiados por la Palabra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 p-8 md:p-10 transition-all duration-300 hover:border-ibe-celeste/40 hover:shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Glorificar a Dios y anunciar Su salvación a todas las naciones,
                compartiendo la esperanza transformadora del Evangelio.
              </p>
            </div>

            {/* Visión */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 p-8 md:p-10 transition-all duration-300 hover:border-ibe-celeste/40 hover:shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Nuestra Visión
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Reproducir discípulos de Jesús y equiparlos integralmente para
                cumplir la Gran Comisión en su vida cotidiana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ACCESOS RÁPIDOS (EXPLORA)
      ========================== */}
      <section className="bg-gray-50/60 border-y border-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
                Recursos y Comunidad
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Explora IBE
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-gray-500 leading-relaxed">
              Descubre las diferentes áreas de enseñanza y comunión que tenemos
              preparadas para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Devocional */}
            <Link
              href="/devocional"
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-ibe-celeste/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ibe-celeste/10 text-ibe-celeste mb-6 transition-colors duration-300 group-hover:bg-ibe-celeste group-hover:text-white">
                <FaBookOpen className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Devocional
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Reflexiones diarias para alimentar tu fe y fortalecer tu andar
                con Dios.
              </p>
            </Link>

            {/* Podcast */}
            <Link
              href="/podcast"
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-ibe-celeste/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ibe-celeste/10 text-ibe-celeste mb-6 transition-colors duration-300 group-hover:bg-ibe-celeste group-hover:text-white">
                <FaMicrophone className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Podcast</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Escucha nuestras prédicas, enseñanzas e historias inspiradoras.
              </p>
            </Link>

            {/* Ministerios */}
            <Link
              href="/ministerios"
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-ibe-celeste/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ibe-celeste/10 text-ibe-celeste mb-6 transition-colors duration-300 group-hover:bg-ibe-celeste group-hover:text-white">
                <FaHandshake className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Ministerios
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Encuentra tu lugar y descubre cómo involucrarte en nuestra
                comunidad.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          HORARIOS DE CULTO
      ========================== */}
      <section className="relative py-24 px-6 overflow-hidden bg-gray-900 text-white">
        <Image
          src="/home_culto.jpg"
          alt="Horarios de culto"
          fill
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-900/50 to-gray-950/60" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
            Reuniones
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Horarios de Culto
          </h2>

          <p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto mb-12">
            Te invitamos a acompañarnos en nuestras reuniones presenciales. ¡Eres
            siempre bienvenido!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Casa de Oración */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-900/80 backdrop-blur-md border border-white/20 transition-transform duration-300 hover:-translate-y-1 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4 border border-white/20">
                <FaClock className="text-xl text-ibe-celeste" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                Casa de Oración
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-300 mb-3">
                Miércoles
              </p>
              <p className="text-3xl font-bold text-ibe-celeste">7:00 PM</p>
            </div>

            {/* Culto Dominical */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-900/80 backdrop-blur-md border border-white/20 transition-transform duration-300 hover:-translate-y-1 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4 border border-white/20">
                <FaClock className="text-xl text-ibe-celeste" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                Culto Dominical
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-300 mb-3">
                Domingo
              </p>
              <p className="text-3xl font-bold text-ibe-celeste">10:00 AM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}