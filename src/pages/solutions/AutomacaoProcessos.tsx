import { ArrowRight, Workflow, Zap, Clock, RefreshCw, Database, GitBranch, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const AutomacaoProcessos = () => {
    const features = [
        {
            icon: Workflow,
            title: "Fluxos Visuais Intuitivos",
            description: "Crie automações complexas com interface drag-and-drop. Sem código necessário."
        },
        {
            icon: Database,
            title: "Integração Universal",
            description: "Conecte 400+ aplicações e APIs. Se tem API, conectamos com n8n."
        },
        {
            icon: RefreshCw,
            title: "Sincronização em Tempo Real",
            description: "Dados sempre atualizados entre todos os seus sistemas automaticamente."
        },
        {
            icon: Cpu,
            title: "IA Embarcada",
            description: "Adicione inteligência artificial em qualquer etapa do seu fluxo de trabalho."
        }
    ];

    const useCases = [
        {
            title: "Onboarding Automático",
            description: "Do cadastro ao primeiro uso, sem intervenção manual",
            time: "De 3 dias para 5 minutos"
        },
        {
            title: "Sincronização de Dados",
            description: "CRM, ERP, E-commerce sempre sincronizados",
            time: "Atualização em tempo real"
        },
        {
            title: "Relatórios Inteligentes",
            description: "Geração e envio automático de dashboards",
            time: "Diário, semanal ou sob demanda"
        },
        {
            title: "Gestão de Estoque",
            description: "Reposição automática baseada em vendas e previsões",
            time: "Zero rupturas de estoque"
        },
        {
            title: "Cobrança Recorrente",
            description: "Faturamento, envio e follow-up automatizados",
            time: "99.7% de taxa de sucesso"
        },
        {
            title: "Suporte Tier 1",
            description: "Triagem e resolução automática de tickets",
            time: "87% resolvidos sem humano"
        }
    ];

    const integrations = [
        "Google Sheets", "Slack", "Notion", "Airtable",
        "Shopify", "WooCommerce", "Stripe", "PayPal",
        "Gmail", "Outlook", "Telegram", "Discord",
        "MySQL", "PostgreSQL", "MongoDB", "Redis"
    ];

    const stats = [
        { value: "400+", label: "Integrações Nativas" },
        { value: "∞", label: "Possibilidades" },
        { value: "< 1h", label: "Setup Inicial" },
        { value: "24/7", label: "Execução Automática" }
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
                        Automação de
                        <br />
                        <span className="text-gradient">Processos</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                        Elimine trabalho manual. Conecte seus sistemas e deixe a tecnologia trabalhar por você com n8n — a plataforma de automação mais poderosa do mercado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                            Mapear Processos
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="xl" className="font-mono uppercase tracking-widest border-primary/30 hover:border-primary hover:bg-primary/5">
                            Ver Automações Prontas
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
                                <div className="text-4xl md:text-5xl font-black text-accent mb-2 font-mono">
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
                            Poder do <span className="text-gradient">n8n</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A plataforma de automação escolhida por empresas que escalam
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

            {/* Use Cases Grid */}
            <section className="py-24 px-6 bg-secondary/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Casos de <span className="text-gradient">Uso</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Automações que transformam operações
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <GitBranch className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                                    </div>
                                </div>
                                <div className="pt-3 border-t border-border">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-accent" />
                                        <span className="text-sm text-accent font-mono">{useCase.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations Showcase */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Conecte <span className="text-gradient">Tudo</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Mais de 400 integrações nativas. Se tem API, conectamos.
                        </p>
                    </div>

                    <div className="glass-card p-12 rounded-2xl">
                        <div className="flex flex-wrap justify-center gap-3">
                            {integrations.map((integration, index) => (
                                <div
                                    key={index}
                                    className="glass-card px-6 py-3 rounded-full border-accent/30 hover:border-accent hover:scale-105 transition-all duration-300 cursor-pointer"
                                >
                                    <span className="text-sm font-mono">{integration}</span>
                                </div>
                            ))}
                            <div className="glass-card px-6 py-3 rounded-full border-primary/30">
                                <span className="text-sm font-mono text-primary">+ 380 outras</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Calculator Teaser */}
            <section className="py-24 px-6 bg-secondary/30">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card p-12 rounded-2xl text-center">
                        <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Calcule seu <span className="text-gradient">ROI</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Em média, empresas economizam <span className="text-accent font-bold">120 horas/mês</span> e reduzem custos operacionais em <span className="text-accent font-bold">40%</span> com automação.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="p-6 bg-background/50 rounded-xl">
                                <div className="text-3xl font-black text-primary mb-2 font-mono">120h</div>
                                <div className="text-sm text-muted-foreground">Economizadas/Mês</div>
                            </div>
                            <div className="p-6 bg-background/50 rounded-xl">
                                <div className="text-3xl font-black text-accent mb-2 font-mono">-40%</div>
                                <div className="text-sm text-muted-foreground">Custos Operacionais</div>
                            </div>
                            <div className="p-6 bg-background/50 rounded-xl">
                                <div className="text-3xl font-black text-primary mb-2 font-mono">3-6x</div>
                                <div className="text-sm text-muted-foreground">ROI em 12 meses</div>
                            </div>
                        </div>

                        <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                            Calcular Meu ROI
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary mx-auto mb-8" />

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Automatize <span className="text-gradient">Agora</span>
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Mapeamos seus processos gratuitamente e mostramos exatamente quanto tempo e dinheiro você pode economizar.
                    </p>

                    <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                        Agendar Mapeamento Gratuito
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default AutomacaoProcessos;
