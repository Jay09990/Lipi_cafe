import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TESTIMONIALS } from "../constants";
import StarRating from "./StarRating";

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(headerRef.current.children,
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power2.out"
                }
            );

            // Cards animation
            gsap.fromTo(cardsRef.current.children,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 90%",
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-brown py-20 md:py-[120px] px-6 md:px-[8%] relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="hidden sm:block absolute -right-[100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-wood/10 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20 flex flex-col items-center" ref={headerRef}>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-wood/40" />
                        <StarRating />
                        <div className="w-12 h-px bg-wood/40" />
                    </div>
                    <h2 className="font-serif text-[clamp(28px,5vw,56px)] font-bold text-cream mb-6 leading-tight">
                        Rated 4.9 by Coffee Lovers
                    </h2>
                    <p className="font-sans text-sm md:text-base text-cream/50 max-w-[480px] leading-[1.8]">
                        Consistently one of the highest-rated cafés in Navrangpura, beloved for our focus and craft.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-[2px]" ref={cardsRef}>
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className={`p-10 sm:p-12 md:p-14 transition-all duration-500 group relative ${i === 1 ? "bg-wood" : "bg-white/5 hover:bg-white/8"
                                }`}
                        >
                            <div className="mb-8">
                                <StarRating count={t.stars} />
                            </div>
                            <p
                                className={`font-serif text-[17px] md:text-[19px] leading-[1.8] mb-10 italic relative z-10 ${i === 1 ? "text-brown" : "text-cream"
                                    }`}
                            >
                                "{t.text}"
                            </p>

                            {/* Decorative quote icon */}
                            <div className={`absolute top-10 right-10 text-4xl opacity-[0.05] pointer-events-none ${i === 1 ? "text-brown" : "text-cream"
                                }`}>
                                ❝
                            </div>

                            <div className={`border-t pt-8 ${i === 1 ? "border-brown/15" : "border-cream/10"
                                }`}>
                                <div className={`font-sans font-bold text-sm md:text-base ${i === 1 ? "text-brown" : "text-cream"
                                    }`}>
                                    {t.name}
                                </div>
                                <div className={`font-sans text-[11px] md:text-[12px] mt-2 tracking-[1px] uppercase ${i === 1 ? "text-brown/70" : "text-cream/40"
                                    }`}>
                                    {t.role}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
