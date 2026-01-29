import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import MainLayout from "@/components/MainLayout";
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
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos" element={<TermsOfUse />} />
              <Route path="/solucoes/dashboards" element={<Dashboards />} />
              <Route path="/solucoes/ia-atendimento" element={<AIAtendimento />} />
              <Route path="/solucoes/gestao-trafego" element={<GestaoTrafego />} />
              <Route path="/solucoes/automacao-processos" element={<AutomacaoProcessos />} />
            </Route>
            
            {/* Admin and NotFound usually don't have the main layout or have their own */}
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
