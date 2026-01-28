import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="relative py-16 px-6 overflow-hidden bg-background">
      {/* Background element */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Decorator */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary mx-auto mb-8" />

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 tracking-tighter">
          Ready for
          <br />
          <span className="text-primary">Evolution?</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light border-y border-border py-4">
          Pronto para transformar sua operação com infraestrutura autônoma?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="xl" className="group rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest min-w-[200px]">
            Iniciar Protocolo
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="xl" className="group rounded-none border-primary/30 hover:border-primary hover:bg-primary/5 font-mono uppercase tracking-widest min-w-[200px]">
            <Mail className="w-5 h-5 mr-2" />
            Contato Direto
          </Button>
        </div>
      </div>
    </section>
  );
});

CTA.displayName = "CTA";

export default CTA;
