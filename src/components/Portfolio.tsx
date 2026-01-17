import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import portfolioEcommerce from "@/assets/portfolio-ecommerce-v2.jpg";
import portfolioUnderpin from "@/assets/portfolio-underpin.jpg";
import portfolioTropical from "@/assets/portfolio-tropical.jpg";
import portfolioKlowns from "@/assets/portfolio-klowns.jpg";
import portfolioEdicao from "@/assets/portfolio-edicao.jpg";
import portfolioAlavancaAds from "@/assets/alavanca-ads-hero.jpg";

const projects = [
  {
    title: "E-commerce Automático",
    category: "Eficiência Operacional",
    description: "Implementação de infraestrutura técnica e fluxos automáticos de vendas para lojas virtuais.",
    image: portfolioEcommerce,
  },
  {
    title: "Tráfego Data-Driven",
    category: "Gestão de Anúncios com IA",
    description: "Otimização estratégica de campanhas no Google e Meta Ads utilizando leitura de dados em tempo real.",
    image: portfolioUnderpin,
  },
  {
    title: "WhatsApp Automation",
    category: "Funis de Conversão",
    description: "Desenvolvimento de sistemas de atendimento automático para otimizar pedidos e fidelizar clientes.",
    image: portfolioTropical,
  },
  {
    title: "Central Omnichannel",
    category: "Integração Chatwoot & n8n",
    description: "Automação de atendimento centralizando múltiplos canais em uma única caixa de entrada inteligente.",
    image: portfolioKlowns,
  },
  {
    title: "Edição Generativa",
    category: "Vídeos em Escala",
    description: "Case de estudo em automação de conteúdo, produzindo vídeos virais com tecnologia de IA avançada.",
    image: portfolioEdicao,
  },
];

const Portfolio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section id="portfolio" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projetos que transformaram negócios com soluções de IA
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Card - Alavanca Ads (Destaque) */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <img
              src={portfolioAlavancaAds}
              alt="Alavanca Ads"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
            />
            <video
              ref={videoRef}
              src="https://i.imgur.com/v42mNAF.mp4"
              poster={portfolioAlavancaAds}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
              onEnded={handleVideoEnded}
              playsInline
              muted
              crossOrigin="anonymous"
            />
            
            {/* Overlay gradient for legibility */}
            <div className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />
            
            {/* Play button */}
            <button
              onClick={toggleVideo}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-primary/30">
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-primary-foreground" />
                ) : (
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                )}
              </div>
            </button>

            {/* Content overlay */}
            <div className={`absolute inset-0 flex items-end p-6 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">Alavanca Ads</h3>
                <p className="text-sm text-white/80 mb-2">UGC & Comerciais com IA</p>
                <p className="text-xs text-white/70 leading-relaxed max-w-xs">
                  Minha metodologia de criação de anúncios e comerciais de alta conversão usando IA generativa para escalar marcas.
                </p>
              </div>
            </div>
          </div>

          {/* Regular project cards with images */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Background image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/20" />
              
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <span className="text-sm text-white/80 glass-card px-3 py-1 rounded-full mb-3 inline-block">
                    {project.category}
                  </span>
                  <p className="text-xs text-white/70 leading-relaxed max-w-xs mx-auto mt-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Default content */}
              <div className="absolute inset-0 flex items-end p-6 group-hover:opacity-0 transition-opacity duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;