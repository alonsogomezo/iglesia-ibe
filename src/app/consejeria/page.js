"use client";

import { useState } from "react";

export default function Consejeria() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });
  const [estado, setEstado] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado("enviando");

    const res = await fetch("/api/consejeria", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.ok) {
      setEstado("enviado");
      setForm({ nombre: "", correo: "", telefono: "", mensaje: "" });
    } else {
      setEstado("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Solicitar Consejería</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Estamos aquí para escucharte. Tu solicitud es confidencial.
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
                Correo *
              </label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste"
                placeholder="tucorreo@gmail.com"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium text-sm mb-1 block">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste"
                placeholder="8888-8888"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium text-sm mb-1 block">
                ¿En qué podemos ayudarte? *
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste resize-none"
                placeholder="Cuéntanos brevemente tu situación..."
              />
            </div>

            <button
              type="submit"
              disabled={estado === "enviando"}
              className="bg-ibe-celeste hover:bg-ibe-celeste/80 text-white font-semibold px-8 py-3 rounded-full transition disabled:opacity-50"
            >
              {estado === "enviando" ? "Enviando..." : "Enviar solicitud"}
            </button>

            {estado === "enviado" && (
              <p className="text-green-600 font-medium text-center">
                ✅ Tu solicitud fue enviada. Pronto nos pondremos en contacto contigo.
              </p>
            )}
            {estado === "error" && (
              <p className="text-red-500 font-medium text-center">
                ❌ Hubo un error. Por favor intenta de nuevo.
              </p>
            )}

            <a
              href="/contacto"
              className="text-center text-ibe-gris text-sm hover:text-ibe-celeste transition"
            >
              ← Volver a Contacto
            </a>
          </form>
        </div>
      </section>
    </>
  );
}