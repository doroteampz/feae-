import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/site/Layout";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Noticias from "./pages/Noticias";
import Jornadas from "./pages/Jornadas";
import Revistas from "./pages/Revistas";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/jornadas" element={<Jornadas />} />
            <Route path="/revistas" element={<Revistas />} />
            <Route path="/contacto" element={<Contacto />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
