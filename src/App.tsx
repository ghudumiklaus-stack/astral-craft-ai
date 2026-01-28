import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";
import Dashboards from "./pages/solutions/Dashboards";
import AIAtendimento from "./pages/solutions/AIAtendimento";
import GestaoTrafego from "./pages/solutions/GestaoTrafego";
import AutomacaoProcessos from "./pages/solutions/AutomacaoProcessos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsOfUse />} />
            <Route path="/solucoes/dashboards" element={<Dashboards />} />
            <Route path="/solucoes/ia-atendimento" element={<AIAtendimento />} />
            <Route path="/solucoes/gestao-trafego" element={<GestaoTrafego />} />
            <Route path="/solucoes/automacao-processos" element={<AutomacaoProcessos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
