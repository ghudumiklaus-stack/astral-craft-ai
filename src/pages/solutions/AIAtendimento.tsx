import { ArrowRight, MessageSquare, Zap, Users, Bot, Instagram, MessageCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIAtendimento = () => {
    const features = [
        {
            icon: Bot,
            title: "IA Conversacional Avançada",
            description: "Atendimento humanizado 24/7 com compreensão contextual e aprendizado contínuo."
        },
        {
            icon: MessageCircle,
            title: "WhatsApp Business API",
            description: "Automação completa de vendas e suporte via WhatsApp com integração nativa."
        },
        {
            icon: Instagram,
            title: "Instagram Direct Automation",
            description: "Responda DMs automaticamente e converta seguidores em clientes."
        },
        {
            icon: Users,
            title: "Chatwoot Omnichannel",
            description: "Centralize todos os canais em uma única plataforma de atendimento inteligente."
        }
    ];

    const useCases = [
        {
            title: "E-commerce",
            description: "Automatize pedidos, rastreamento e suporte pós-venda",
            metric: "+340% em conversões"
        },
        {
            title: "Serviços",
            description: "Agendamentos, consultas e follow-ups automáticos",
            metric: "87% de satisfação"
        },
        {
            title: "Vendas B2B",
            description: "Qualificação de leads e nutrição automatizada",
            metric: "5x mais leads qualificados"
        }
    ];

    const stats = [
        { value: "24/7", label: "Disponibilidade" },
        { value: "< 3s", label: "Tempo de Resposta" },
        { value: "94%", label: "Taxa de Resolução" },
        { value: "∞", label: "Escalabilidade" }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px]" />

                <div className="max-w-6xl mx-auto relative z-10 pt-8">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent to-accent mx-auto mb-8" />

                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
                        IA de Atendimento
                        <br />
                        <span className="text-gradient">e Vendas</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                        Escale seu atendimento sem aumentar custos. IA que vende, atende e fideliza clientes no WhatsApp e Instagram.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                            Testar Gratuitamente
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="xl" className="font-mono uppercase tracking-widest border-primary/30 hover:border-primary hover:bg-primary/5">
                            Ver Demo ao Vivo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 px-6 border-y border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-mono">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Tecnologia <span className="text-gradient">de Ponta</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Integração completa com as plataformas que seus clientes já usam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 rounded-2xl group hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                    <feature.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-6 bg-secondary/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Casos de <span className="text-gradient">Sucesso</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Resultados reais em diferentes segmentos
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                                <div className="pt-4 border-t border-border">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-accent" />
                                        <span className="text-accent font-mono font-bold">{useCase.metric}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Showcase */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="glass-card p-12 rounded-2xl text-center">
                        <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Integração com <span className="text-gradient">Chatwoot</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                            Centralize WhatsApp, Instagram, Telegram, Email e mais em uma única plataforma.
                            Atendimento humano quando necessário, IA quando possível.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="glass-card px-6 py-3 rounded-full border-accent/30">
                                <span className="text-sm font-mono">WhatsApp Business</span>
                            </div>
                            <div className="glass-card px-6 py-3 rounded-full border-accent/30">
                                <span className="text-sm font-mono">Instagram Direct</span>
                            </div>
                            <div className="glass-card px-6 py-3 rounded-full border-accent/30">
                                <span className="text-sm font-mono">Telegram</span>
                            </div>
                            <div className="glass-card px-6 py-3 rounded-full border-accent/30">
                                <span className="text-sm font-mono">Email</span>
                            </div>
                            <div className="glass-card px-6 py-3 rounded-full border-accent/30">
                                <span className="text-sm font-mono">Messenger</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary mx-auto mb-8" />

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Comece a Vender <span className="text-gradient">Hoje</span>
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Configure sua IA de atendimento em menos de 24 horas. Sem contratos longos, sem burocracia.
                    </p>

                    <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                        Iniciar Teste Gratuito
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default AIAtendimento;
