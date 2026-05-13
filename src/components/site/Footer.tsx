import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/feae-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-20">
      <div className="container py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="FEAE Aragón" className="h-12 w-auto" width={48} height={48} loading="lazy" />
            <div>
              <p className="font-serif font-bold text-primary">FEAE Aragón</p>
              <p className="text-xs text-muted-foreground">Fórum Europeo de Administradores de la Educación</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Organización plural e independiente al servicio de la educación.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold text-primary mb-3">Navegación</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Inicio</Link></li>
            <li><Link to="/conocenos" className="text-muted-foreground hover:text-primary">Conócenos</Link></li>
            <li><Link to="/noticias" className="text-muted-foreground hover:text-primary">Noticias</Link></li>
            <li><Link to="/jornadas" className="text-muted-foreground hover:text-primary">Jornadas</Link></li>
            <li><Link to="/revistas" className="text-muted-foreground hover:text-primary">Revistas</Link></li>
            <li><Link to="/contacto" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold text-primary mb-3">Contacto</h3>
          <a
            href="mailto:feaeforumaragon@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <Mail className="h-4 w-4" /> feaeforumaragon@gmail.com
          </a>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://www.instagram.com/feaearagon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/people/FEAE-Arag%C3%B3n/100049209576116/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
               className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 text-center text-xs text-muted-foreground">
          FEAE Aragón 2026 — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
