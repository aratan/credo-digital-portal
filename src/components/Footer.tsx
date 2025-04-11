
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-catholic-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-serif text-xl font-bold flex items-center">
              <span className="text-catholic-secondary">Credo</span>Digital
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Portal católico dedicado a difundir la fe a través de noticias, artículos y recursos audiovisuales.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Inicio</Link></li>
              <li><Link to="/noticias" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Noticias</Link></li>
              <li><Link to="/articulos" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Artículos</Link></li>
              <li><Link to="/videos" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Videos</Link></li>
              <li><Link to="/buscar" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Buscar</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="https://www.vatican.va" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Vaticano</a></li>
              <li><a href="https://www.conferenciaepiscopal.es" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Conferencia Episcopal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Diócesis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Documentos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-catholic-secondary transition duration-200">Liturgia</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-catholic-secondary transition duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-catholic-secondary transition duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-catholic-secondary transition duration-200">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-catholic-secondary transition duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              Suscríbete a nuestro boletín para recibir actualizaciones semanales.
            </p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Tu email" className="px-4 py-2 text-sm text-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-catholic-secondary" />
              <button className="bg-catholic-secondary px-4 py-2 rounded-r-lg text-catholic-dark font-medium hover:bg-catholic-secondary/90 transition duration-200">
                Suscribir
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Credo Digital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
