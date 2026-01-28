import { ArrowRight, Target, Brain, Zap, TrendingUp, DollarSign, BarChart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const GestaoTrafego = () => {
    const features = [
        {
            icon: Brain,
            title: "Otimização Automática",
            description: "IA que ajusta lances, orçamentos e segmentações em tempo real para maximizar ROI."
        },
        {
            icon: Target,
            title: "Segmentação Inteligente",
            description: "Identifique e alcance seu público ideal com precisão cirúrgica usando machine learning."
        },
        {
            icon: Sparkles,
            title: "Criativos Generativos",
            description: "Gere variações de anúncios automaticamente e teste o que converte mais."
        },
        {
            icon: BarChart,
            title: "Análise Preditiva",
            description: "Antecipe tendências e ajuste estratégias antes da concorrência."
        }
    ];

    const platforms = [
        { name: "Google Ads", color: "from-blue-500 to-blue-600" },
        { name: "Meta Ads", color: "from-blue-600 to-purple-600" },
        { name: "TikTok Ads", color: "from-pink-500 to-purple-500" },
        { name: "LinkedIn Ads", color: "from-blue-700 to-blue-800" }
    ];

    const results = [
        { metric: "-43%", label: "Custo por Aquisição", icon: DollarSign },
        { metric: "+287%", label: "ROAS Médio", icon: TrendingUp },
        { metric: "92%", label: "Precisão de Targeting", icon: Target },
        { metric: "24/7", label: "Otimização Ativa", icon: Zap }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
                        ← Voltar para Home
                    </Link>

                    <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary mx-auto mb-8" />

                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
                        Gestão de Tráfego
                        <br />
                        <span className="text-gradient">com IA</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                        Pare de desperdiçar orçamento. IA que otimiza seus anúncios 24/7 para entregar o máximo ROI em Google Ads, Meta Ads e mais.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                            Auditar Campanhas
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="xl" className="font-mono uppercase tracking-widest border-primary/30 hover:border-primary hover:bg-primary/5">
                            Ver Case Studies
                        </Button>
                    </div>
                </div>
            </section>

            {/* Results Grid */}
            <section className="py-12 px-6 border-y border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {results.map((result, index) => (
                            <div key={index} className="text-center group">
                                <result.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-mono">
                                    {result.metric}
                                </div>
                                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                                    {result.label}
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
                            IA que <span className="text-gradient">Multiplica Resultados</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Tecnologia de machine learning aplicada à performance de anúncios
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

            {/* Platforms Section */}
            <section className="py-24 px-6 bg-secondary/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Todas as <span className="text-gradient">Plataformas</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Gestão unificada de campanhas em múltiplos canais
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {platforms.map((platform, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} mx-auto mb-4 group-hover:shadow-lg transition-shadow`} />
                                <h3 className="text-lg font-bold">{platform.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Como <span className="text-gradient">Funciona</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border-2 border-primary">
                                <span className="text-2xl font-black text-primary font-mono">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Conexão</h3>
                            <p className="text-muted-foreground">
                                Conectamos com suas contas de anúncios em minutos via API segura
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border-2 border-primary">
                                <span className="text-2xl font-black text-primary font-mono">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Análise</h3>
                            <p className="text-muted-foreground">
                                IA analisa histórico, identifica padrões e oportunidades de otimização
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border-2 border-primary">
                                <span className="text-2xl font-black text-primary font-mono">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Otimização</h3>
                            <p className="text-muted-foreground">
                                Ajustes automáticos 24/7 para maximizar conversões e reduzir custos
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proof Section */}
            <section className="py-24 px-6 bg-secondary/30">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card p-12 rounded-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold mb-4">
                                Caso Real: <span className="text-gradient">E-commerce de Moda</span>
                            </h3>
                            <p className="text-muted-foreground">
                                Como reduzimos o CAC em 58% e aumentamos o ROAS em 340% em 90 dias
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center p-6 bg-background/50 rounded-xl">
                                <div className="text-3xl font-black text-primary mb-2 font-mono">R$ 127k</div>
                                <div className="text-sm text-muted-foreground">Faturamento Mensal Anterior</div>
                            </div>
                            <div className="text-center p-6 bg-background/50 rounded-xl">
                                <div className="text-3xl font-black text-accent mb-2 font-mono">R$ 558k</div>
                                <div className="text-sm text-muted-foreground">Faturamento Após IA</div>
                            </div>
                            <div className="text-center p-6 bg-background/50 rounded-xl">
                                <div className="text-3xl font-black text-primary mb-2 font-mono">+340%</div>
                                <div className="text-sm text-muted-foreground">Crescimento em ROAS</div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button variant="outline" size="lg" className="font-mono uppercase tracking-widest border-primary/30 hover:border-primary hover:bg-primary/5">
                                Ler Case Completo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary mx-auto mb-8" />

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Multiplique seu <span className="text-gradient">ROI</span>
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Receba uma auditoria gratuita das suas campanhas e descubra quanto você está deixando na mesa.
                    </p>

                    <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                        Solicitar Auditoria Gratuita
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GestaoTrafego;
