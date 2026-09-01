"use client";

import { useState, useRef, useEffect } from "react";
import { FaHandsHelping, FaBookOpen } from "react-icons/fa";
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
      {/* Hero */}
      <section className="bg-ibe-celeste text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Estamos aquí para ti. Selecciona la opción que mejor se adapte a lo
          que necesitas.
        </p>
      </section>

      {/* Tarjetas */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Tres opciones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <button
              onClick={() =>
                setSeccionActiva(seccionActiva === "visita" ? null : "visita")
              }
              className={`rounded-2xl p-8 text-center border-2 transition-all duration-200 ${seccionActiva === "visita" ? "border-ibe-celeste bg-ibe-celeste/10" : "border-gray-100 hover:border-ibe-celeste"}`}
            >
              <div className="flex justify-center mb-4">
                <MdPersonAdd className="text-5xl text-ibe-celeste" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Registra tu visita
              </h3>
              <p className="text-ibe-gris text-sm">
                ¿Es tu primera vez? Déjanos tus datos y te contactamos.
              </p>
            </button>

            <button
              onClick={() =>
                setSeccionActiva(
                  seccionActiva === "consejeria" ? null : "consejeria",
                )
              }
              className={`rounded-2xl p-8 text-center border-2 transition-all duration-200 ${seccionActiva === "consejeria" ? "border-ibe-celeste bg-ibe-celeste/10" : "border-gray-100 hover:border-ibe-celeste"}`}
            >
              <div className="flex justify-center mb-4">
                <FaHandsHelping className="text-5xl text-ibe-celeste" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Solicitar consejería
              </h3>
              <p className="text-ibe-gris text-sm">
                Habla con nuestro pastor de forma confidencial.
              </p>
            </button>

            <button
              onClick={() =>
                setSeccionActiva(
                  seccionActiva === "seminario" ? null : "seminario",
                )
              }
              className={`rounded-2xl p-8 text-center border-2 transition-all duration-200 ${seccionActiva === "seminario" ? "border-ibe-celeste bg-ibe-celeste/10" : "border-gray-100 hover:border-ibe-celeste"}`}
            >
              <div className="flex justify-center mb-4">
                <FaBookOpen className="text-5xl text-ibe-celeste" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Seminario Bíblico
              </h3>
              <p className="text-ibe-gris text-sm">
                Inscríbete y crece en el conocimiento de la Palabra.
              </p>
            </button>
          </div>

          {/* Formulario Visita */}
          {seccionActiva === "visita" && (
            <div
              ref={formRef}
              className="max-w-lg mx-auto border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-6">
                Registra tu visita
              </h2>
              <form onSubmit={handleVisita} className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-700 font-medium text-sm mb-1 block">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={formVisita.nombre}
                    onChange={(e) =>
                      setFormVisita({ ...formVisita, nombre: e.target.value })
                    }
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
                    value={formVisita.correo}
                    onChange={(e) =>
                      setFormVisita({ ...formVisita, correo: e.target.value })
                    }
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
                    value={formVisita.telefono}
                    onChange={(e) =>
                      setFormVisita({ ...formVisita, telefono: e.target.value })
                    }
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste"
                    placeholder="8888-8888"
                  />
                </div>
                <button
                  type="submit"
                  disabled={estadoVisita === "enviando"}
                  className="bg-ibe-celeste hover:bg-ibe-celeste/80 text-white font-semibold px-8 py-3 rounded-full transition disabled:opacity-50"
                >
                  {estadoVisita === "enviando" ? "Enviando..." : "Enviar"}
                </button>
                {estadoVisita === "enviado" && (
                  <p className="text-green-600 font-medium text-center">
                    ✅ ¡Gracias! Pronto nos pondremos en contacto contigo.
                  </p>
                )}
                {estadoVisita === "error" && (
                  <p className="text-red-500 font-medium text-center">
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
              className="max-w-lg mx-auto border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-6">
                Solicitar consejería
              </h2>
              <form onSubmit={handleConsejeria} className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-700 font-medium text-sm mb-1 block">
                    Nombre *
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
                    value={formConsejeria.correo}
                    onChange={(e) =>
                      setFormConsejeria({
                        ...formConsejeria,
                        correo: e.target.value,
                      })
                    }
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
                    value={formConsejeria.telefono}
                    onChange={(e) =>
                      setFormConsejeria({
                        ...formConsejeria,
                        telefono: e.target.value,
                      })
                    }
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
                    value={formConsejeria.mensaje}
                    onChange={(e) =>
                      setFormConsejeria({
                        ...formConsejeria,
                        mensaje: e.target.value,
                      })
                    }
                    required
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste resize-none"
                    placeholder="Cuéntanos brevemente tu situación..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={estadoConsejeria === "enviando"}
                  className="bg-ibe-celeste hover:bg-ibe-celeste/80 text-white font-semibold px-8 py-3 rounded-full transition disabled:opacity-50"
                >
                  {estadoConsejeria === "enviando"
                    ? "Enviando..."
                    : "Enviar solicitud"}
                </button>
                {estadoConsejeria === "enviado" && (
                  <p className="text-green-600 font-medium text-center">
                    ✅ Tu solicitud fue enviada. Pronto nos pondremos en
                    contacto contigo.
                  </p>
                )}
                {estadoConsejeria === "error" && (
                  <p className="text-red-500 font-medium text-center">
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
              className="max-w-lg mx-auto border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-6">
                Inscripción al Seminario Bíblico
              </h2>
              <form onSubmit={handleSeminario} className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-700 font-medium text-sm mb-1 block">
                    Nombre *
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
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium text-sm mb-1 block">
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
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-ibe-celeste"
                    placeholder="8888-8888"
                  />
                </div>
                <button
                  type="submit"
                  disabled={estadoSeminario === "enviando"}
                  className="bg-ibe-celeste hover:bg-ibe-celeste/80 text-white font-semibold px-8 py-3 rounded-full transition disabled:opacity-50"
                >
                  {estadoSeminario === "enviando"
                    ? "Enviando..."
                    : "Inscribirme"}
                </button>
                {estadoSeminario === "enviado" && (
                  <p className="text-green-600 font-medium text-center">
                    ✅ ¡Inscripción recibida! Pronto te contactaremos.
                  </p>
                )}
                {estadoSeminario === "error" && (
                  <p className="text-red-500 font-medium text-center">
                    ❌ Hubo un error. Por favor intenta de nuevo.
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
