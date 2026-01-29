
import { useRef, useEffect } from "react";

const logos = [
    { name: "n8n", url: "https://n8n.io/brandguidelines/logo-white.svg", size: "h-8 md:h-10" },
    { name: "Supabase", url: "https://companieslogo.com/img/orig/supabase_BIG.D-94f7cfaf.png?t=1720244494", size: "h-8 md:h-10" },
    { name: "CrewAI", url: "https://cdn.prod.website-files.com/68de1ee6d7c127849807d7a6/68de1ee6d7c127849807d7ef_Logo.svg", size: "h-8 md:h-10" },
    { name: "Lovable", url: "https://lovable.dev/img/logo/lovable-logo-bg-dark.png", size: "h-10 md:h-14" },
    { name: "LiveKit", url: "https://identitydesigned.com/wp-content/uploads/2024/02/00-livekit-wordmark-01-scaled.jpg", size: "h-32 md:h-40" },
    { name: "Wordpress", url: "https://s.w.org/style/images/about/WordPress-logotype-standard-white.png", size: "h-10 md:h-14" },
];

const PartnerMarquee = () => {
    return (
        <div className="w-full relative overflow-hidden py-16 md:py-24 fade-mask">
            <div className="flex animate-scroll hover:pause gap-16 min-w-full items-center">
                {/* Double the list to ensure seamless looping */}
                {[...logos, ...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 group relative flex items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer"
                    >
                        <img
                            src={logo.url}
                            alt={`${logo.name} logo`}
                            className={`${logo.size} w-auto object-contain transition-all duration-500 ${logo.name === "LiveKit" ? "invert brightness-0 contrast-200 sepia-[.2] opacity-80 mix-blend-screen" : ""
                                }`}
                            onError={(e) => {
                                // Fallback to text if image fails
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = `<span class="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase group-hover:text-primary transition-colors">${logo.name}</span>`;
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Side fades for better aesthetic */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default PartnerMarquee;
