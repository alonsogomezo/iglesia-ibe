export default function SomosIBE() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Conoce quiénes somos, de dónde venimos y hacia dónde vamos.
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-ibe-celeste/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-ibe-celeste">Nuestra Misión</h2>
            <p className="text-ibe-gris leading-relaxed">
              Glorificar a Dios y anunciar Su salvación a todas las naciones.
            </p>
          </div>
          <div className="bg-ibe-celeste/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-ibe-celeste">Nuestra Visión</h2>
            <p className="text-ibe-gris leading-relaxed">
              Reproducir discípulos de Jesús y equiparlos para cumplir la Gran Comisión.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestros Propósitos */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Nuestros Propósitos</h2>
          <div className="flex flex-col gap-6">
            {[
              "Queremos ser una iglesia donde las personas puedan encontrar el plan y propósito de Dios para sus vidas.",
              "Un lugar donde se predique las Buenas Nuevas de Jesucristo.",
              "Ser fieles a las Escrituras, y comprometidos con exponer su mensaje sin diluirlo.",
              "Deseamos contribuir con el crecimiento espiritual de las personas, para que puedan descubrir los dones y talentos que Dios les ha dado y lo pongan a su disposición con el fin de extender su reino en el mundo.",
              "Procuramos ser una iglesia saludable donde las personas puedan encontrar un ambiente de compañerismo, aliento, consejo y respaldo.",
            ].map((proposito, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                <span className="text-ibe-celeste font-bold text-xl mt-1">✓</span>
                <p className="text-ibe-gris leading-relaxed">{proposito}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { titulo: "Intimidad con Dios", descripcion: "No hay programa, ni persona más importante que Dios." },
              { titulo: "Autoridad de las Escrituras", descripcion: "La Biblia es nuestra norma de fe. Es la fuente de nuestras creencias, de todo lo que pensamos, somos y hacemos." },
              { titulo: "Amor", descripcion: "El amor a Dios y al prójimo son los mandamientos en los que Jesús definió el carácter cristiano." },
              { titulo: "La Gente", descripcion: "Nuestra razón de ser es servir a la gente, porque todas las personas son valiosas para Dios." },
              { titulo: "Excelencia", descripcion: "Dios es digno de nuestro mejor esfuerzo en todo lo que somos y hacemos." },
              { titulo: "Integridad y Honestidad", descripcion: "Dios nos llama a vivir vidas santas como reflejo de su naturaleza y carácter." },
              { titulo: "Trabajo en Equipo", descripcion: "Creemos que hacer iglesia en equipo es el diseño de Dios para un servicio efectivo que lleve gloria a Su Nombre." },
            ].map((valor) => (
              <div key={valor.titulo} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-bold text-ibe-celeste mb-2">{valor.titulo}</h3>
                <p className="text-ibe-gris text-sm leading-relaxed">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestras Creencias */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Nuestras Creencias</h2>
          <div className="flex flex-col gap-6">
            {[
              { texto: "Creemos que toda la Biblia es la palabra de Dios, sin errores ni contradicciones, inspirada por Dios.", referencia: "2 Timoteo 3:16-17" },
              { texto: "Creemos que a través de la Biblia Dios revela su voluntad para los seres humanos.", referencia: "Juan 8:40" },
              { texto: "Creemos en un solo Dios, creador de los cielos y la tierra, que se manifiesta en tres personas, el Padre, el Hijo y el Espíritu Santo, iguales en poder y gloria.", referencia: "1 Juan 5:7" },
              { texto: "Creemos en la necesidad de una fe personal y genuina en Jesucristo para obtener la salvación. Él es el único medio por el cual podemos ser salvos.", referencia: "Hechos 4:11-12" },
              { texto: "Creemos en la soberanía de Dios y el libre albedrío del hombre, ambas son verdades bíblicas.", referencia: "Romanos 11:33-36, 2 Pedro 3:9" },
              { texto: "Creemos que la iglesia es una asamblea local de personas que han sido salvas por la sangre de Jesucristo.", referencia: "Hechos 2:46-47" },
              { texto: "Creemos en el retorno literal y físico de Jesucristo a la tierra con poder y gran Gloria.", referencia: "Hechos 1:10-11, 1 Tesalonicenses 4" },
            ].map((creencia, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                <span className="text-ibe-celeste font-bold text-xl mt-1">✝</span>
                <div>
                  <p className="text-ibe-gris leading-relaxed">{creencia.texto}</p>
                  <p className="text-ibe-celeste text-sm font-medium mt-2">{creencia.referencia}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}