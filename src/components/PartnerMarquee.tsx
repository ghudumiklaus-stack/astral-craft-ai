
import { useRef, useEffect } from "react";

const logos = [
    { name: "n8n", url: "https://n8n.io/brandguidelines/logo-white.svg", size: "h-8 md:h-10" },
    { name: "Supabase", url: "https://companieslogo.com/img/orig/supabase_BIG.D-94f7cfaf.png?t=1720244494", size: "h-8 md:h-10" },
    { name: "CrewAI", url: "https://cdn.prod.website-files.com/68de1ee6d7c127849807d7a6/68de1ee6d7c127849807d7ef_Logo.svg", size: "h-8 md:h-10" },
    { name: "Lovable", url: "https://lovable.dev/img/logo/lovable-light-png.png", size: "h-6 md:h-8" },
    { name: "Nvidia", url: "https://www.pngarts.com/files/10/Nvidia-Logo-Transparent-Image.png", size: "h-16 md:h-24" },
    { name: "Wordpress", url: "https://s.w.org/style/images/about/WordPress-logotype-standard-white.png", size: "h-16 md:h-20" },
];

const PartnerMarquee = () => {
    return (
        <div className="w-full relative overflow-hidden py-8 md:py-12 fade-mask">
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
