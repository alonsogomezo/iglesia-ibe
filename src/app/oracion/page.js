"use client";

import { useState } from "react";
import { FaHands, FaHeart } from "react-icons/fa";

export default function Oracion() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    peticion: "",
  });
  const [estado, setEstado] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado("enviando");

    const res = await fetch("/api/oracion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.ok) {
      setEstado("enviado");
      setForm({ nombre: "", correo: "", peticion: "" });
    } else {
      setEstado("error");
    }
  };

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
                <FaHands className="text-lg" />
              </div>

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
                Oración IBE
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Peticiones de
              <span className="block italic font-light">Oración</span>
            </h1>

            {/* Descripción */}
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/80">
              Queremos orar contigo. Comparte tu petición y estaremos orando por ti.
            </p>

            {/* Línea decorativa */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-16 bg-white/40" />
              <span className="text-sm text-white/60">
                «La oración eficaz del justo puede mucho» — Santiago 5:16
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRO Y FORMULARIO
      ========================== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Encabezado previo */}
            <div className="text-center mb-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
                Intercesión
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                ¿En qué podemos orar por ti?
              </h2>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                Completa el siguiente formulario con tus datos y el motivo de
                tu oración.
              </p>
            </div>

            {/* Tarjeta de Formulario */}
            <div className="border border-gray-100 rounded-2xl p-8 md:p-10 bg-white shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Correo electrónico (opcional)
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Tu petición de oración *
                  </label>
                  <textarea
                    name="peticion"
                    value={form.peticion}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste resize-none"
                    placeholder="Cuéntanos brevemente tu necesidad o motivo de agradecimiento..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={estado === "enviando"}
                  className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-ibe-celeste px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-ibe-celeste/85 hover:shadow-md disabled:opacity-50"
                >
                  {estado === "enviando"
                    ? "Enviando..."
                    : "Enviar petición de oración"}
                </button>

                {estado === "enviado" && (
                  <p className="text-sm text-emerald-600 font-medium text-center bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                    ✅ Tu petición fue recibida. Estaremos orando por ti.
                  </p>
                )}
                {estado === "error" && (
                  <p className="text-sm text-red-600 font-medium text-center bg-red-50 p-3 rounded-xl border border-red-200">
                    ❌ Hubo un error. Por favor intenta de nuevo.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA FINAL
      ========================== */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ibe-celeste/10 text-ibe-celeste">
              <FaHeart className="text-xl" />
            </div>
          </div>

          <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
            Comunidad y Fe
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            No estás solo en tu camino
          </h2>

          <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-gray-500">
            Creemos firmemente en el poder de la oración unida. Cada petición
            recibida es tratada con cuidado, respeto y respaldada en oración por
            nuestro ministerio.
          </p>
        </div>
      </section>
    </>
  );
}