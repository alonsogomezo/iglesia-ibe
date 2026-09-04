import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-ibe-celeste text-white border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Columna 1: Información / Eslogan */}
        <div className="flex flex-col items-start">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-3">
            Comunidad
          </p>
          <h3 className="font-bold text-xl mb-3 tracking-tight">
            Somos IBE
          </h3>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs">
            Un lugar donde se predican las Buenas Nuevas de Jesucristo.
          </p>
        </div>

        {/* Columna 2: Información de Contacto */}
        <div className="flex flex-col items-start">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-3">
            Ubicación y Contacto
          </p>
          <h3 className="font-bold text-xl mb-4 tracking-tight">
            Información
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20 mt-0.5">
                <HiLocationMarker className="text-sm" />
              </div>
              <span className="leading-relaxed">
                Hatillo centro, contiguo al Liceo Edgar Cervantes.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <HiPhone className="text-sm" />
              </div>
              <span>2254-7326</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <HiMail className="text-sm" />
              </div>
              <a
                href="mailto:somosibe72@gmail.com"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
              >
                somosibe72@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div className="flex flex-col items-start">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-3">
            Conéctate
          </p>
          <h3 className="font-bold text-xl mb-4 tracking-tight">Síguenos</h3>
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            <a
              href="https://www.facebook.com/p/Somos-IBE-100064621812401/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-white/90 hover:bg-white hover:text-ibe-celeste transition-all duration-200"
            >
              <FaFacebook className="text-base" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/somosibe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-white/90 hover:bg-white hover:text-ibe-celeste transition-all duration-200"
            >
              <FaInstagram className="text-base" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.youtube.com/@SomosIBECR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-white/90 hover:bg-white hover:text-ibe-celeste transition-all duration-200"
            >
              <FaYoutube className="text-base" />
              <span>YouTube</span>
            </a>

            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-white/90 hover:bg-white hover:text-ibe-celeste transition-all duration-200"
            >
              <FaSpotify className="text-base" />
              <span>Spotify</span>
            </a>
          </div>
        </div>
      </div>

      {/* Pie inferior con divisor */}
      <div className="border-t border-white/15 bg-black/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-white/70 text-xs">
          <p>
            © {new Date().getFullYear()} Iglesia Bautista Emanuel. Todos los derechos reservados.
          </p>
          <p className="text-white/50">
            San José, Costa Rica
          </p>
        </div>
      </div>
    </footer>
  );
}