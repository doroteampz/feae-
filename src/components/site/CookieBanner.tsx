import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "feae-cookie-consent";

export const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const save = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, date: new Date().toISOString() })
      );
    } catch {
      // ignore
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-5xl rounded-xl border border-border bg-background/95 backdrop-blur shadow-elegant p-4 sm:p-5">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="hidden sm:grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-primary">
            <Settings className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground/90 leading-relaxed">
              Utilizamos cookies técnicas de Netlify para el funcionamiento del sitio y herramientas de Google
              Search Console para optimizar nuestra presencia en la web. Al hacer clic en{" "}
              <strong>"Aceptar"</strong>, permites el uso de estas tecnologías para mejorar tu experiencia.
              Puedes configurar tus preferencias o rechazarlas. Más información en nuestra{" "}
              <Link to="/privacidad" className="text-primary hover:underline">
                Política de Privacidad
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link to="/privacidad">Preferencias</Link>
              </Button>
              <Button variant="outline" size="sm" onClick={() => save("rejected")}>
                Rechazar
              </Button>
              <Button size="sm" onClick={() => save("accepted")}>
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
