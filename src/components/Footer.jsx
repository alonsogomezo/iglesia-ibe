import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-ibe-celeste text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Columna 1: Información / Eslogan */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-lg mb-3 tracking-wide">
            Somos IBE
          </h3>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs">
            Un lugar donde se predican las Buenas Nuevas de Jesucristo.
          </p>
        </div>

        {/* Columna 2: informacion */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-lg mb-3 tracking-wide">
            Información
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <HiLocationMarker className="text-lg shrink-0 mt-0.5" />
              <span>Hatillo centro, contiguo al Liceo Edgar Cervantes.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <HiPhone className="text-lg shrink-0" />
              <span>2254-7326</span>
            </li>
            <li className="flex items-center gap-2.5">
              <HiMail className="text-lg shrink-0" />
              <a
                href="mailto:somosibe72@gmail.com"
                className="hover:text-white transition-colors"
              >
                somosibe72@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-lg mb-3 tracking-wide">Síguenos</h3>
          <div className="flex flex-col gap-2.5">
            <a
              href="https://www.facebook.com/p/Somos-IBE-100064621812401/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
            >
              <FaFacebook className="text-lg" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/somosibe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
            >
              <FaInstagram className="text-lg" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.youtube.com/@SomosIBECR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
            >
              <FaYoutube className="text-lg" />
              <span>YouTube</span>
            </a>

            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
            >
              <FaSpotify className="text-lg" />
              <span>Spotify</span>
            </a>
          </div>
        </div>
      </div>

      {/* Pie inferior con divisor */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-center text-white/60 text-xs">
        © {new Date().getFullYear()} Iglesia Bautista Emanuel. Todos los derechos reservados.
      </div>
    </footer>
  );
}
