"use client";

import { useState } from "react";

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
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Peticiones de Oración</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Queremos orar contigo. Comparte tu petición y estaremos intercediendo por ti.
        </p>
      </section>

      {/* Formulario */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className="text-gray-700 font-medium text-sm mb-1 block">
                Nombre *
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium text-sm mb-1 block">
                Correo (opcional)
              </label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste"
                placeholder="tucorreo@gmail.com"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium text-sm mb-1 block">
                Tu petición *
              </label>
              <textarea
                name="peticion"
                value={form.peticion}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste resize-none"
                placeholder="Escribe tu petición de oración aquí..."
              />
            </div>

            <button
              type="submit"
              disabled={estado === "enviando"}
              className="bg-ibe-celeste hover:bg-ibe-celeste/80 text-white font-semibold px-8 py-3 rounded-full transition disabled:opacity-50"
            >
              {estado === "enviando" ? "Enviando..." : "Enviar petición"}
            </button>

            {estado === "enviado" && (
              <p className="text-green-600 font-medium text-center">
                ✅ Tu petición fue recibida. Estaremos orando por ti.
              </p>
            )}
            {estado === "error" && (
              <p className="text-red-500 font-medium text-center">
                ❌ Hubo un error. Por favor intenta de nuevo.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}