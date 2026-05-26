import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ibe-azul text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Columna 1: Nombre */}
        <div>
          <h3 className="text-ibe-celeste font-bold text-lg mb-2">Somos IBE</h3>
          <p className="text-ibe-gris text-sm">
            Una comunidad de fe comprometida con Dios y las personas.
          </p>
        </div>

        {/* Columna 2: Links */}
        <div>
          <h3 className="text-ibe-celeste font-bold text-lg mb-2">Enlaces</h3>
          <ul className="flex flex-col gap-2 text-sm text-ibe-gris">
            <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="/somos-ibe" className="hover:text-white transition">Somos IBE</Link></li>
            <li><Link href="/ministerios" className="hover:text-white transition">Ministerios</Link></li>
            <li><Link href="/devocional" className="hover:text-white transition">Devocional</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-ibe-celeste font-bold text-lg mb-2">Contacto</h3>
          <ul className="flex flex-col gap-2 text-sm text-ibe-gris">
            <li>📍 Dirección de la iglesia</li>
            <li>📞 Teléfono de la iglesia</li>
            <li>✉️ correo@iglesia.com</li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="text-center text-ibe-gris text-xs mt-8">
        © {new Date().getFullYear()} Iglesia IBE. Todos los derechos reservados.
      </div>
    </footer>
  );
}