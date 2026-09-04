"use client";

import { useState, useRef, useEffect } from "react";
import { FaHandsHelping, FaBookOpen, FaEnvelope } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";

export default function Contacto() {
  const [seccionActiva, setSeccionActiva] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (seccionActiva && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [seccionActiva]);

  const [formVisita, setFormVisita] = useState({
    nombre: "",
    correo: "",
    telefono: "",
  });
  const [estadoVisita, setEstadoVisita] = useState(null);

  const [formConsejeria, setFormConsejeria] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });
  const [estadoConsejeria, setEstadoConsejeria] = useState(null);

  const [formSeminario, setFormSeminario] = useState({
    nombre: "",
    telefono: "",
  });
  const [estadoSeminario, setEstadoSeminario] = useState(null);

  const handleVisita = async (e) => {
    e.preventDefault();
    setEstadoVisita("enviando");
    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formVisita),
    });
    const data = await res.json();
    if (data.ok) {
      setEstadoVisita("enviado");
      setFormVisita({ nombre: "", correo: "", telefono: "" });
    } else {
      setEstadoVisita("error");
    }
  };

  const handleConsejeria = async (e) => {
    e.preventDefault();
    setEstadoConsejeria("enviando");
    const res = await fetch("/api/consejeria", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formConsejeria),
    });
    const data = await res.json();
    if (data.ok) {
      setEstadoConsejeria("enviado");
      setFormConsejeria({ nombre: "", correo: "", telefono: "", mensaje: "" });
    } else {
      setEstadoConsejeria("error");
    }
  };

  const handleSeminario = async (e) => {
    e.preventDefault();
    setEstadoSeminario("enviando");
    const res = await fetch("/api/seminario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formSeminario),
    });
    const data = await res.json();
    if (data.ok) {
      setEstadoSeminario("enviado");
      setFormSeminario({ nombre: "", telefono: "" });
    } else {
      setEstadoSeminario("error");
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
                <FaEnvelope className="text-lg" />
              </div>

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
                Contacto IBE
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Estamos aquí
              <span className="block italic font-light">para ti</span>
            </h1>

            {/* Descripción */}
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/80">
              Selecciona la opción que mejor se adapte a lo que necesitas y nos
              pondremos en contacto contigo lo antes posible.
            </p>

            {/* Línea decorativa */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-16 bg-white/40" />
              <span className="text-sm text-white/60">
                Atención personalizada y confidencial
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRO
      ========================== */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-3">
                ¿Cómo podemos ayudarte?
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Opciones de contacto
              </h2>
            </div>

            <p className="max-w-md text-sm md:text-base leading-relaxed text-gray-500">
              Haz clic en cualquier tarjeta para desplegar el formulario de
              solicitud correspondiente.
            </p>
          </div>

          <div className="mt-8 h-px bg-gray-100" />
        </div>
      </section>

      {/* =========================
          OPCIONES (TARJETAS)
      ========================== */}
      <section className="bg-white pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Opción 1: Visita */}
            <button
              onClick={() =>
                setSeccionActiva(seccionActiva === "visita" ? null : "visita")
              }
              className={`group flex flex-col items-center text-center p-8 rounded-2xl border transition-all duration-300 ${
                seccionActiva === "visita"
                  ? "border-ibe-celeste bg-ibe-celeste/5 shadow-md -translate-y-1"
                  : "border-gray-100 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-ibe-celeste/40"
              }`}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl mb-6 transition-colors duration-300 ${
                  seccionActiva === "visita"
                    ? "bg-ibe-celeste text-white"
                    : "bg-ibe-celeste/10 text-ibe-celeste group-hover:bg-ibe-celeste group-hover:text-white"
                }`}
              >
                <MdPersonAdd className="text-3xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Registra tu visita
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                ¿Es tu primera vez? Déjanos tus datos para darte la bienvenida y
                contactarte.
              </p>
            </button>

            {/* Opción 2: Consejería */}
            <button
              onClick={() =>
                setSeccionActiva(
                  seccionActiva === "consejeria" ? null : "consejeria"
                )
              }
              className={`group flex flex-col items-center text-center p-8 rounded-2xl border transition-all duration-300 ${
                seccionActiva === "consejeria"
                  ? "border-ibe-celeste bg-ibe-celeste/5 shadow-md -translate-y-1"
                  : "border-gray-100 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-ibe-celeste/40"
              }`}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl mb-6 transition-colors duration-300 ${
                  seccionActiva === "consejeria"
                    ? "bg-ibe-celeste text-white"
                    : "bg-ibe-celeste/10 text-ibe-celeste group-hover:bg-ibe-celeste group-hover:text-white"
                }`}
              >
                <FaHandsHelping className="text-3xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Solicitar consejería
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Habla con nuestro pastor de forma totalmente confidencial cuando
                lo necesites.
              </p>
            </button>

            {/* Opción 3: Seminario */}
            <button
              onClick={() =>
                setSeccionActiva(
                  seccionActiva === "seminario" ? null : "seminario"
                )
              }
              className={`group flex flex-col items-center text-center p-8 rounded-2xl border transition-all duration-300 ${
                seccionActiva === "seminario"
                  ? "border-ibe-celeste bg-ibe-celeste/5 shadow-md -translate-y-1"
                  : "border-gray-100 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-ibe-celeste/40"
              }`}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl mb-6 transition-colors duration-300 ${
                  seccionActiva === "seminario"
                    ? "bg-ibe-celeste text-white"
                    : "bg-ibe-celeste/10 text-ibe-celeste group-hover:bg-ibe-celeste group-hover:text-white"
                }`}
              >
                <FaBookOpen className="text-3xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Seminario Bíblico
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Inscríbete y profundiza en el conocimiento y estudio de la
                Palabra.
              </p>
            </button>
          </div>

          {/* =========================
              FORMULARIOS
          ========================== */}
          {/* Formulario Visita */}
          {seccionActiva === "visita" && (
            <div
              ref={formRef}
              className="max-w-xl mx-auto border border-gray-100 rounded-2xl p-8 md:p-10 bg-white shadow-md transition-all"
            >
              <div className="mb-6">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-ibe-celeste mb-1">
                  Formulario
                </p>
                <h2 className="text-2xl font-bold text-gray-800">
                  Registra tu visita
                </h2>
              </div>

              <form onSubmit={handleVisita} className="flex flex-col gap-5">
                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    value={formVisita.nombre}
                    onChange={(e) =>
                      setFormVisita({ ...formVisita, nombre: e.target.value })
                    }
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    value={formVisita.correo}
                    onChange={(e) =>
                      setFormVisita({ ...formVisita, correo: e.target.value })
                    }
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={formVisita.telefono}
                    onChange={(e) =>
                      setFormVisita({ ...formVisita, telefono: e.target.value })
                    }
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="8888-8888"
                  />
                </div>

                <button
                  type="submit"
                  disabled={estadoVisita === "enviando"}
                  className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-ibe-celeste px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-ibe-celeste/85 hover:shadow-md disabled:opacity-50"
                >
                  {estadoVisita === "enviando"
                    ? "Enviando..."
                    : "Enviar registro"}
                </button>

                {estadoVisita === "enviado" && (
                  <p className="text-sm text-emerald-600 font-medium text-center bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                    ✅ ¡Gracias! Pronto nos pondremos en contacto contigo.
                  </p>
                )}
                {estadoVisita === "error" && (
                  <p className="text-sm text-red-600 font-medium text-center bg-red-50 p-3 rounded-xl border border-red-200">
                    ❌ Hubo un error. Por favor intenta de nuevo.
                  </p>
                )}
              </form>
            </div>
          )}

          {/* Formulario Consejería */}
          {seccionActiva === "consejeria" && (
            <div
              ref={formRef}
              className="max-w-xl mx-auto border border-gray-100 rounded-2xl p-8 md:p-10 bg-white shadow-md transition-all"
            >
              <div className="mb-6">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-ibe-celeste mb-1">
                  Formulario
                </p>
                <h2 className="text-2xl font-bold text-gray-800">
                  Solicitar consejería
                </h2>
              </div>

              <form onSubmit={handleConsejeria} className="flex flex-col gap-5">
                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    value={formConsejeria.nombre}
                    onChange={(e) =>
                      setFormConsejeria({
                        ...formConsejeria,
                        nombre: e.target.value,
                      })
                    }
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    value={formConsejeria.correo}
                    onChange={(e) =>
                      setFormConsejeria({
                        ...formConsejeria,
                        correo: e.target.value,
                      })
                    }
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={formConsejeria.telefono}
                    onChange={(e) =>
                      setFormConsejeria({
                        ...formConsejeria,
                        telefono: e.target.value,
                      })
                    }
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="8888-8888"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    ¿En qué podemos ayudarte? *
                  </label>
                  <textarea
                    value={formConsejeria.mensaje}
                    onChange={(e) =>
                      setFormConsejeria({
                        ...formConsejeria,
                        mensaje: e.target.value,
                      })
                    }
                    required
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste resize-none"
                    placeholder="Cuéntanos brevemente tu situación..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={estadoConsejeria === "enviando"}
                  className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-ibe-celeste px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-ibe-celeste/85 hover:shadow-md disabled:opacity-50"
                >
                  {estadoConsejeria === "enviando"
                    ? "Enviando..."
                    : "Enviar solicitud"}
                </button>

                {estadoConsejeria === "enviado" && (
                  <p className="text-sm text-emerald-600 font-medium text-center bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                    ✅ Tu solicitud fue enviada. Pronto nos pondremos en
                    contacto contigo.
                  </p>
                )}
                {estadoConsejeria === "error" && (
                  <p className="text-sm text-red-600 font-medium text-center bg-red-50 p-3 rounded-xl border border-red-200">
                    ❌ Hubo un error. Por favor intenta de nuevo.
                  </p>
                )}
              </form>
            </div>
          )}

          {/* Formulario Seminario */}
          {seccionActiva === "seminario" && (
            <div
              ref={formRef}
              className="max-w-xl mx-auto border border-gray-100 rounded-2xl p-8 md:p-10 bg-white shadow-md transition-all"
            >
              <div className="mb-6">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-ibe-celeste mb-1">
                  Formulario
                </p>
                <h2 className="text-2xl font-bold text-gray-800">
                  Inscripción al Seminario Bíblico
                </h2>
              </div>

              <form onSubmit={handleSeminario} className="flex flex-col gap-5">
                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    value={formSeminario.nombre}
                    onChange={(e) =>
                      setFormSeminario({
                        ...formSeminario,
                        nombre: e.target.value,
                      })
                    }
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold text-sm mb-2 block">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={formSeminario.telefono}
                    onChange={(e) =>
                      setFormSeminario({
                        ...formSeminario,
                        telefono: e.target.value,
                      })
                    }
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 transition-colors focus:outline-none focus:border-ibe-celeste focus:ring-1 focus:ring-ibe-celeste"
                    placeholder="8888-8888"
                  />
                </div>

                <button
                  type="submit"
                  disabled={estadoSeminario === "enviando"}
                  className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-ibe-celeste px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-ibe-celeste/85 hover:shadow-md disabled:opacity-50"
                >
                  {estadoSeminario === "enviando"
                    ? "Enviando..."
                    : "Inscribirme"}
                </button>

                {estadoSeminario === "enviado" && (
                  <p className="text-sm text-emerald-600 font-medium text-center bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                    ✅ ¡Inscripción recibida! Pronto te contactaremos.
                  </p>
                )}
                {estadoSeminario === "error" && (
                  <p className="text-sm text-red-600 font-medium text-center bg-red-50 p-3 rounded-xl border border-red-200">
                    ❌ Hubo un error. Por favor intenta de nuevo.
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </section>

      {/* =========================
          CTA FINAL
      ========================== */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-ibe-celeste mb-4">
            Estamos para servirte
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¿Tienes alguna otra consulta?
          </h2>

          <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-gray-500">
            Puedes visitarnos directamente en nuestras instalaciones o
            escribirnos a nuestros medios oficiales.
          </p>
        </div>
      </section>
    </>
  );
}