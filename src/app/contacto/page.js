"use client";

import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
  });
  const [estado, setEstado] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado("enviando");

    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.ok) {
      setEstado("enviado");
      setForm({ nombre: "", correo: "", telefono: "" });
    } else {
      setEstado("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Visítanos</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Nos alegra que quieras conocernos. Déjanos tus datos y pronto nos pondremos en contacto contigo.
        </p>
      </section>

      {/* Contenido */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Información */}
          <div className="flex flex-col gap-6 text-ibe-azul">
            <h2 className="text-2xl font-bold">Encuéntranos</h2>
            <div>
              <p className="font-semibold">📍 Dirección</p>
              <p className="text-ibe-gris">Dirección de la iglesia</p>
            </div>
            <div>
              <p className="font-semibold">📞 Teléfono</p>
              <p className="text-ibe-gris">Teléfono de la iglesia</p>
            </div>
            <div>
              <p className="font-semibold">✉️ Correo</p>
              <p className="text-ibe-gris">correo@iglesia.com</p>
            </div>
            <div>
              <p className="font-semibold">🕐 Horarios de culto</p>
              <p className="text-ibe-gris">Domingo 10:00 AM</p>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-ibe-azul">Registra tu visita</h2>

            <div>
              <label className="text-ibe-azul font-medium text-sm mb-1 block">
                Nombre *
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-ibe-azul focus:outline-none focus:border-ibe-celeste"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label className="text-ibe-azul font-medium text-sm mb-1 block">
                Correo *
              </label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-ibe-azul focus:outline-none focus:border-ibe-celeste"
                placeholder="tucorreo@gmail.com"
              />
            </div>

            <div>
              <label className="text-ibe-azul font-medium text-sm mb-1 block">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-ibe-azul focus:outline-none focus:border-ibe-celeste"
                placeholder="8888-8888"
              />
            </div>

            <button
              type="submit"
              disabled={estado === "enviando"}
              className="bg-ibe-celeste hover:bg-ibe-azul text-white font-semibold px-8 py-3 rounded-full transition disabled:opacity-50"
            >
              {estado === "enviando" ? "Enviando..." : "Enviar"}
            </button>

            {estado === "enviado" && (
              <p className="text-green-600 font-medium text-center">
                ✅ ¡Gracias! Pronto nos pondremos en contacto contigo.
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