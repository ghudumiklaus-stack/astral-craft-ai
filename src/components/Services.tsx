import { Bot, Zap, Video, Target, MessageSquare, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Hub de Atendimento Omnichannel (Chatwoot + n8n)",
    description: [
      "Centralize toda a sua operação em um único lugar.",
      "Implemento o seu \"Correio Mágico\" utilizando Chatwoot para unificar mensagens do WhatsApp, Instagram, Direct, E-mail e Chat do site em uma única caixa de entrada inteligente.",
      "Com a integração via n8n, criamos fluxos de automação que organizam, respondem e direcionam seus leads automaticamente.",
      "Garantimos que nenhuma oportunidade seja perdida e que seu suporte funcione com eficiência máxima 24/7."
    ],
    size: "large",
  },
  {
    icon: MessageSquare,
    title: "IA para Instagram & Suporte",
    description: "Assistentes virtuais 24/7 treinados para humanizar o contato no Instagram e converter seguidores em clientes de forma automática.",
    size: "medium",
  },
  {
    icon: Video,
    title: "Influencers & Vídeos com IA",
    description: "Criamos o Influenciador Digital exclusivo da sua marca e produzimos vídeos de alto impacto com IA generativa para dominar as redes sociais.",
    size: "medium",
  },
  {
    icon: Target,
    title: "Tráfego Pago Data-Driven",
    description: "Gestão de anúncios no Meta e Google Ads com análise de dados por IA em tempo real. Escala sem achismos, focada em ROI real.",
    size: "small",
  },
  {
    icon: Bot,
    title: "CRM & Dashboards Customizados",
    description: "Painéis de dados personalizados para o seu nicho. Visualize métricas vitais e tome decisões estratégicas baseadas em inteligência de dados.",
    size: "small",
  },
  {
    icon: Code,
    title: "Presença Digital de Elite",
    description: "Desenvolvimento de sites de alta conversão e configuração estratégica do seu Google Meu Negócio para máxima visibilidade local.",
    size: "small",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Serviços</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Soluções completas em inteligência artificial para escalar seu negócio com tecnologia de ponta.
            </p>
            <Button variant="glass" size="lg">
              Orçamento
            </Button>
          </div>

          {/* Bento Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isLarge = service.size === "large";
              const isMedium = service.size === "medium";
              
              return (
                <div
                  key={index}
                  className={`glass-card rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] hover:glow-effect group
                    ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                    ${isMedium ? "md:col-span-1 md:row-span-1" : ""}
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className={`font-semibold mb-2 ${isLarge ? "text-2xl" : "text-lg"}`}>
                    {service.title}
                  </h3>
                  {Array.isArray(service.description) ? (
                    <div className={`text-muted-foreground ${isLarge ? "text-base space-y-4" : "text-sm"}`}>
                      {service.description.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className={`text-muted-foreground ${isLarge ? "text-base" : "text-sm"}`}>
                      {service.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
