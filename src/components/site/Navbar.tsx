import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/feae-logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/conocenos", label: "Conócenos" },
  { to: "/noticias", label: "Noticias" },
  { to: "/jornadas", label: "Jornadas" },
  { to: "/revistas", label: "Revistas" },
  { to: "/contacto", label: "Contacto" },
];

const SOCIO_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGo1XZ1Qv4YVD9763wx75xZOLuTE8tsjfeg4yd9GcFpYmGPA/viewform";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="FEAE Aragón" className="h-10 w-auto" width={48} height={40} />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold text-primary">FEAE Aragón</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Fórum Europeo de Administradores</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive ? "text-primary bg-secondary" : "text-foreground/70 hover:text-primary hover:bg-secondary/60"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <a href={SOCIO_URL} target="_blank" rel="noopener noreferrer">Hazte Socio</a>
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container flex flex-col py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md ${
                    isActive ? "text-primary bg-secondary" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2">
              <a href={SOCIO_URL} target="_blank" rel="noopener noreferrer">Hazte Socio</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
