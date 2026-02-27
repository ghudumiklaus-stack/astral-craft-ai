import { Link, useLocation } from "react-router-dom";
import logoAlavancaAI from "@/assets/logo-alavanca-ai-new.png";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Início", href: isHome ? "#hero" : "/" },
    { label: "Serviços", href: isHome ? "#services" : "/#services" },
    { label: "Portfólio", href: isHome ? "#portfolio" : "/#portfolio" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src={logoAlavancaAI} 
            alt="Alavanca AI" 
            className="h-10 md:h-14 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-white/70 hover:text-primary transition-all uppercase tracking-[0.2em] font-mono"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Espaçador para manter o equilíbrio visual */}
        <div className="hidden md:block w-[120px]" /> 

        {/* Menu Mobile (Placeholder para manter estrutura se precisar adicionar depois) */}
        <div className="md:hidden">
          <div className="w-6 h-1 bg-white/50 rounded-full mb-1"></div>
          <div className="w-6 h-1 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;