import { useEffect, useRef } from "react";
import gsap from "gsap";
import StarRating from "./StarRating";

export default function Hero() {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const badgeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation
            gsap.from(contentRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5
            });

            gsap.from(badgeRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 1,
                delay: 1.5,
                ease: "back.out(1.7)"
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="h-screen min-h-[600px] md:min-h-[700px] relative flex items-center justify-center md:justify-start overflow-hidden bg-charcoal"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero_bg.png"
                    alt="Lipi Coffee Interior"
                    fetchpriority="high" 
                    className="w-full h-full object-cover opacity-60 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
            </div>

            {/* Texture overlay */}
            <div
                className="absolute inset-0 opacity-40 z-[1] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%220.04%22/%3E%3C/svg%3E')]"
            />

            {/* Content */}
            <div className="relative z-10 px-[8%] max-w-[800px] text-center md:text-left flex flex-col items-center md:items-start" ref={contentRef}>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="hidden md:block w-10 h-px bg-wood" />
                    <span className="font-sans text-[10px] md:text-[12px] tracking-[3px] text-wood uppercase">
                        Navrangpura, Ahmedabad
                    </span>
                    <div className="md:hidden w-10 h-px bg-wood" />
                </div>

                <h1 className="font-serif text-[clamp(48px,12vw,110px)] font-bold text-cream leading-[1.05] mb-4 md:mb-2 tracking-[-2px]">
                    Lipi
                    <br />
                    <em className="text-wood italic">Coffee</em>
                </h1>

                <p className="font-sans text-[clamp(14px,1.8vw,18px)] text-cream/75 leading-[1.7] mb-10 md:mb-12 max-w-[500px]">
                    A refined coffee retreat designed for thinkers, creators, and solo coffee moments — in the heart of Navrangpura.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                        href="#menu"
                        className="font-sans text-sm font-semibold text-charcoal bg-white px-10 py-5 rounded-[2px] no-underline tracking-[1px] transition-all duration-300 hover:bg-wood hover:text-white text-center shadow-xl"
                    >
                        EXPLORE MENU
                    </a>
                    <a
                        href="#visit"
                        className="font-sans text-sm font-medium text-white bg-transparent px-10 py-5 rounded-[2px] no-underline tracking-[1px] border border-white/30 transition-all duration-300 hover:border-wood hover:text-wood text-center"
                    >
                        FIND US
                    </a>
                </div>

                {/* Rating badge */}
                <div className="flex flex-col md:flex-row items-center gap-3 mt-12 md:mt-20" ref={badgeRef}>
                    <StarRating />
                    <span className="font-sans text-[12px] md:text-[14px] text-cream/60 tracking-[0.5px]">
                        4.9 · Rated by 200+ guests
                    </span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-40">
                <div className="w-px h-12 bg-gradient-to-b from-wood to-transparent" />
                <span className="font-sans text-[10px] tracking-[2px] text-wood uppercase vertical-text">Scroll</span>
            </div>
        </section>
    );
}
