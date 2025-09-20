
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ConsultoriaEstrategica from "./pages/ConsultoriaEstrategica";
import PlataformaVendas from "./pages/PlataformaVendas";
import TreinamentoEquipe from "./pages/TreinamentoEquipe";
import Palestras from "./pages/Palestras";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultoria-estrategica" element={<ConsultoriaEstrategica />} />
          <Route path="/plataforma-vendas" element={<PlataformaVendas />} />
          <Route path="/treinamento-equipe" element={<TreinamentoEquipe />} />
          <Route path="/palestras" element={<Palestras />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
