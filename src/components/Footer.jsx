import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-ibe-celeste text-white py-10 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">

        {/* Columna 1: Nombre */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-2">Somos IBE</h3>

          <p className="text-white/70 text-sm text-center md:text-left">
            Una comunidad de fe comprometida con Dios y las personas.
          </p>
        </div>

        {/* Columna 2: Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-2">Enlaces</h3>

          <ul className="flex flex-col gap-2 text-sm text-white/70 items-center md:items-start">
            <li>
              <Link
                href="/"
                className="hover:text-white transition"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                href="/somos-ibe"
                className="hover:text-white transition"
              >
                Quiénes Somos
              </Link>
            </li>

            <li>
              <Link
                href="/ministerios"
                className="hover:text-white transition"
              >
                Ministerios
              </Link>
            </li>

            <li>
              <Link
                href="/devocional"
                className="hover:text-white transition"
              >
                Devocional
              </Link>
            </li>

            <li>
              <Link
                href="/contacto"
                className="hover:text-white transition"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-4">Síguenos</h3>

          <div className="flex flex-col gap-3">

            <a
              href="https://www.facebook.com/p/Somos-IBE-100064621812401/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition"
            >
              <FaFacebook className="text-2xl" />
              <span className="text-sm">Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/somosibe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition"
            >
              <FaInstagram className="text-2xl" />
              <span className="text-sm">Instagram</span>
            </a>

            <a
              href="https://www.youtube.com/@SomosIBECR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition"
            >
              <FaYoutube className="text-2xl" />
              <span className="text-sm">YouTube</span>
            </a>

            <a
              href="https://open.spotify.com/show/033ob90gJEYOJFEsuOJAeh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition"
            >
              <FaSpotify className="text-2xl" />
              <span className="text-sm">Spotify</span>
            </a>

          </div>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="text-center text-white/50 text-xs mt-8">
        © {new Date().getFullYear()} Iglesia IBE. Todos los derechos reservados.
      </div>
    </footer>
  );
}
