import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SplineScene } from "@/components/ui/spline-scene";
import PartnerMarquee from "@/components/PartnerMarquee";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-start pt-24 overflow-hidden px-6">
      {/* Background gradient effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="hero-glow top-1/4" />

      {/* 3D Robot Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Badge */}
      <div className="relative z-10 animate-fade-up pointer-events-none">
        <div className="glass-card px-4 py-1 border-l-2 border-l-primary mb-8 inline-flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">System v2.0 // Alavanca AI</span>
          <span className="text-accent animate-pulse">●</span>
        </div>
      </div>

      {/* Main heading */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pointer-events-none">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8 animate-fade-up animation-delay-100 uppercase">
          AUTOMATION
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">INFRASTRUCTURE</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200 font-light border-l-2 border-primary/20 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
          Transformamos processos manuais em máquinas de escala através de
          automações inteligentes e engenharia de dados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300 pointer-events-auto relative z-20">
          <Button variant="default" size="xl" className="group rounded-none border border-primary bg-primary/10 hover:bg-primary/20 text-primary-foreground font-mono uppercase tracking-wider backdrop-blur-sm">
            Deploy Project
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="xl" className="rounded-none font-mono uppercase tracking-wider hover:bg-white/5 border-border">
            View Capabilities
          </Button>
        </div>



        {/* Partner logos - now using Marquee */}
        <div className="mt-20 w-full max-w-6xl mx-auto animate-fade-up animation-delay-400 pointer-events-auto">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4 opacity-50">Authorized Integrations</p>
          <PartnerMarquee />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up animation-delay-500 z-10">
        <a href="#services" className="w-6 h-10 border-2 border-muted-foreground/30 flex justify-center pt-2 cursor-pointer hover:border-primary transition-colors pointer-events-auto">
          <div className="w-1 h-3 bg-primary animate-float rounded-none" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
