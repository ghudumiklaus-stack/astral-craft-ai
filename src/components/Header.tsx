import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl px-6 py-3 flex items-center justify-between border-white/5 shadow-2xl backdrop-blur-xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src={logoAlavancaAI} 
            alt="Alavanca AI" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-mono"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Empty div to maintain spacing if needed, or just let nav center if preferred */}
        <div className="w-10 md:w-auto" />
      </div>
    </header>
  );
};

export default Header;
