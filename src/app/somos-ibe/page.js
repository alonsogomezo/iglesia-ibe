import Image from "next/image";
import { FaChurch, FaCheckCircle, FaCross, FaHeart } from "react-icons/fa";

export default function SomosIBE() {
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
                <FaChurch className="text-lg" />
              </div>

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
                Nuestra Identidad
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Quiénes
              <span className="block italic font-light">Somos</span>
            </h1>

            {/* Descripción */}
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/80">
              Conoce quiénes somos, de dónde venimos y hacia dónde vamos como
              familia en fe.
            </p>

            {/* Línea decorativa */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-16 bg-white/40" />
              <span className="text-sm text-white/60">
                Fundamentados en la fe, la esperanza y el amor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          MISIÓN Y VISIÓN
      ========================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
              Nuestro Propósito
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              La Esencia de IBE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 p-8 md:p-10 transition-all duration-300 hover:border-ibe-celeste/40 hover:shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Nuestra Misión
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Glorificar a Dios y anunciar Su salvación a todas las naciones,
                compartiendo la esperanza transformadora del Evangelio.
              </p>
            </div>

            {/* Visión */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 p-8 md:p-10 transition-all duration-300 hover:border-ibe-celeste/40 hover:shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Nuestra Visión
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Reproducir discípulos de Jesús y equiparlos integralmente para
                cumplir la Gran Comisión en su vida cotidiana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          NUESTROS PROPÓSITOS
      ========================== */}
      <section className="relative py-24 px-6 overflow-hidden bg-gray-900 text-white">
        <Image
          src="/propositos.jpeg"
          alt="Nuestros Propósitos"
          fill
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-900/60 to-gray-950/70" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
              Compromiso
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestros Propósitos
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto">
              Lo que nos motiva como iglesia a servir a Dios y a nuestra comunidad.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              "Queremos ser una iglesia donde las personas puedan encontrar el plan y propósito de Dios para sus vidas.",
              "Un lugar donde se predique las Buenas Nuevas de Jesucristo.",
              "Ser fieles a las Escrituras, y comprometidos con exponer su mensaje sin diluirlo.",
              "Deseamos contribuir con el crecimiento espiritual de las personas, para que puedan descubrir los dones y talentos que Dios les ha dado y lo pongan a su disposición con el fin de extender su reino en el mundo.",
              "Procuramos ser una iglesia saludable donde las personas puedan encontrar un ambiente de compañerismo, aliento, consejo y respaldo.",
            ].map((proposito, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-900/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-0.5 shadow-lg"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ibe-celeste/20 text-ibe-celeste mt-0.5 border border-ibe-celeste/40">
                  <FaCheckCircle className="text-base" />
                </div>
                <p className="text-gray-100 text-sm md:text-base leading-relaxed">
                  {proposito}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          NUESTROS VALORES
      ========================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
              Fundamento
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Intimidad con Dios",
                descripcion:
                  "No hay programa, ni persona más importante que Dios.",
              },
              {
                titulo: "Autoridad de las Escrituras",
                descripcion:
                  "La Biblia es nuestra norma de fe. Es la fuente de nuestras creencias, de todo lo que pensamos, somos y hacemos.",
              },
              {
                titulo: "Amor",
                descripcion:
                  "El amor a Dios y al prójimo son los mandamientos en los que Jesús definió el carácter cristiano.",
              },
              {
                titulo: "La Gente",
                descripcion:
                  "Nuestra razón de ser es servir a la gente, porque todas las personas son valiosas para Dios.",
              },
              {
                titulo: "Excelencia",
                descripcion:
                  "Dios es digno de nuestro mejor esfuerzo en todo lo que somos y hacemos.",
              },
              {
                titulo: "Integridad y Honestidad",
                descripcion:
                  "Dios nos llama a vivir vidas santas como reflejo de su naturaleza y carácter.",
              },
              {
                titulo: "Trabajo en Equipo",
                descripcion:
                  "Creemos que hacer iglesia en equipo es el diseño de Dios para un servicio efectivo que lleve gloria a Su Nombre.",
              },
            ].map((valor) => (
              <div
                key={valor.titulo}
                className="group border border-gray-100 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md hover:border-ibe-celeste/40 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-ibe-celeste transition-colors">
                  {valor.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          NUESTRAS CREENCIAS
      ========================== */}
      <section className="relative py-24 px-6 overflow-hidden bg-gray-900 text-white">
        <Image
          src="/creencias2.jpg"
          alt="Nuestras Creencias"
          fill
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-900/60 to-gray-950/70" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
              Doctrina
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestras Creencias
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto">
              Las verdades bíblicas que sustentan nuestra fe e iglesia.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                texto:
                  "Creemos que toda la Biblia es la palabra de Dios, sin errores ni contradicciones, inspirada por Dios.",
                referencia: "2 Timoteo 3:16-17",
              },
              {
                texto:
                  "Creemos que a través de la Biblia Dios revela su voluntad para los seres humanos.",
                referencia: "Juan 8:40",
              },
              {
                texto:
                  "Creemos en un solo Dios, creador de los cielos y la tierra, que se manifiesta en tres personas, el Padre, el Hijo y el Espíritu Santo, iguales en poder y gloria.",
                referencia: "1 Juan 5:7",
              },
              {
                texto:
                  "Creemos en la necesidad de una fe personal y genuina en Jesucristo para obtener la salvación. Él es el único medio por el cual podemos ser salvos.",
                referencia: "Hechos 4:11-12",
              },
              {
                texto:
                  "Creemos en la soberanía de Dios y el libre albedrío del hombre, ambas son verdades bíblicas.",
                referencia: "Romanos 11:33-36, 2 Pedro 3:9",
              },
              {
                texto:
                  "Creemos que la iglesia es una asamblea local de personas que han sido salvas por la sangre de Jesucristo.",
                referencia: "Hechos 2:46-47",
              },
              {
                texto:
                  "Creemos en el retorno literal y físico de Jesucristo a la tierra con poder y gran Gloria.",
                referencia: "Hechos 1:10-11, 1 Tesalonicenses 4",
              },
            ].map((creencia, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-900/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-0.5 shadow-lg"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ibe-celeste/20 text-ibe-celeste mt-0.5 border border-ibe-celeste/40">
                  <FaCross className="text-sm" />
                </div>
                <div>
                  <p className="text-gray-100 text-sm md:text-base leading-relaxed">
                    {creencia.texto}
                  </p>
                  <p className="text-ibe-celeste text-xs font-semibold uppercase tracking-wider mt-3">
                    — {creencia.referencia}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}