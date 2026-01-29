import { ArrowRight, BarChart3, TrendingUp, Zap, Eye, Database, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboards = () => {
    const features = [
        {
            icon: BarChart3,
            title: "Visualização em Tempo Real",
            description: "Monitore KPIs críticos com atualização automática e alertas inteligentes."
        },
        {
            icon: TrendingUp,
            title: "Análise Preditiva",
            description: "IA que identifica tendências e antecipa oportunidades de crescimento."
        },
        {
            icon: Database,
            title: "Integração Total",
            description: "Conecte todas as suas fontes de dados em uma única interface unificada."
        },
        {
            icon: Eye,
            title: "Insights Acionáveis",
            description: "Transforme dados complexos em decisões estratégicas claras."
        }
    ];

    const benefits = [
        "Redução de 70% no tempo de análise de dados",
        "Decisões baseadas em dados em tempo real",
        "ROI mensurável em cada métrica",
        "Escalabilidade conforme seu negócio cresce"
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px]" />

                <div className="max-w-6xl mx-auto relative z-10 pt-8">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary mx-auto mb-8" />

                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
                        Dashboards
                        <br />
                        <span className="text-gradient">Personalizados</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                        Transforme dados brutos em inteligência estratégica. Visualize, analise e escale seu negócio com dashboards que pensam por você.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                            Solicitar Demo
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="xl" className="font-mono uppercase tracking-widest border-primary/30 hover:border-primary hover:bg-primary/5">
                            Ver Casos de Uso
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Recursos <span className="text-gradient">Avançados</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Tecnologia de ponta para decisões de alto impacto
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-6 bg-secondary/30">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Resultados <span className="text-gradient">Mensuráveis</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Nossos dashboards não são apenas bonitos — eles geram resultados concretos para seu negócio.
                            </p>

                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Zap className="w-3 h-3 text-primary" />
                                        </div>
                                        <p className="text-foreground">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-card p-8 rounded-2xl">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold">Performance Overview</h3>
                                    <LineChart className="w-5 h-5 text-primary" />
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-muted-foreground">Conversão</span>
                                            <span className="text-accent font-mono">+127%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-primary to-accent w-[85%]" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-muted-foreground">ROI</span>
                                            <span className="text-accent font-mono">+94%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-primary to-accent w-[70%]" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-muted-foreground">Eficiência</span>
                                            <span className="text-accent font-mono">+156%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-primary to-accent w-[95%]" />
                                        </div>
                                    </div>
                                </div>
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
                        Pronto para <span className="text-gradient">Escalar</span>?
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Agende uma demonstração personalizada e descubra como nossos dashboards podem transformar sua operação.
                    </p>

                    <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                        Agendar Demonstração
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Dashboards;
