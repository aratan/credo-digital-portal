
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/buscar?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <nav className="bg-catholic-primary text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-serif text-xl md:text-2xl font-bold flex items-center">
            <span className="text-catholic-secondary">Credo</span>Digital
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-catholic-secondary transition duration-200">Inicio</Link>
            <Link to="/noticias" className="hover:text-catholic-secondary transition duration-200">Noticias</Link>
            <Link to="/articulos" className="hover:text-catholic-secondary transition duration-200">Artículos</Link>
            <Link to="/videos" className="hover:text-catholic-secondary transition duration-200">Videos</Link>
            
            <form onSubmit={handleSearch} className="relative ml-4">
              <Input
                type="search"
                placeholder="Buscar..."
                className="pl-8 pr-2 py-1 rounded-full bg-white/10 text-white placeholder:text-white/70 border-none focus-visible:ring-catholic-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute top-1/2 left-2 -translate-y-1/2 h-4 w-4 text-white/70" />
            </form>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-white hover:bg-catholic-primary/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="hover:text-catholic-secondary transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/noticias" 
                className="hover:text-catholic-secondary transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Noticias
              </Link>
              <Link 
                to="/articulos" 
                className="hover:text-catholic-secondary transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Artículos
              </Link>
              <Link 
                to="/videos" 
                className="hover:text-catholic-secondary transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Videos
              </Link>
              
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="pl-8 pr-2 py-1 rounded-full bg-white/10 text-white placeholder:text-white/70 border-none w-full focus-visible:ring-catholic-secondary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute top-1/2 left-2 -translate-y-1/2 h-4 w-4 text-white/70" />
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
