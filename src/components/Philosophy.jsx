import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const philosophyRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image animation
            gsap.fromTo(imageRef.current,
                { x: -100, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: philosophyRef.current,
                        start: "top 85%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out"
                }
            );

            // Text content animation
            gsap.fromTo(textRef.current.children,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: philosophyRef.current,
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out"
                }
            );
        }, philosophyRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="our-story"
            ref={philosophyRef}
            className="bg-cream py-20 md:py-[140px] px-6 md:px-[8%] overflow-hidden"
        >
            <div className="max-w-[1100px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    {/* Left side — Image */}
                    <div className="w-full lg:w-1/2 relative" ref={imageRef}>
                        <div className="aspect-[4/5] bg-light relative rounded-sm overflow-hidden">
                            <img
                                src="/images/gallery_nook.png"
                                alt="Lipi Coffee Philosophy"
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 border border-brown/10 hidden sm:block" />
                        </div>
                        {/* Quote tag */}
                        <div className="absolute -bottom-4 left-6 md:left-10 bg-brown p-6 md:p-8 max-w-[240px] md:max-w-[280px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-sm">
                            <p className="font-serif text-cream italic text-sm md:text-base leading-relaxed m-0">
                                "Coffee is not just a drink; it's the punctuation in a long day of thought."
                            </p>
                        </div>
                    </div>

                    {/* Right side — Content */}
                    <div className="w-full lg:w-1/2 pt-8 lg:pt-0 flex flex-col items-start" ref={textRef}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-wood" />
                            <span className="font-sans text-[11px] tracking-[3px] text-wood uppercase">
                                Our Philosophy
                            </span>
                        </div>

                        <h2 className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-brown leading-tight mb-8 md:mb-10">
                            A Space for the
                            <br />
                            <em className="text-wood font-style-normal non-italic block md:inline mt-2 md:md:mt-0">Solo Thinker</em>
                        </h2>

                        <div className="font-sans text-sm md:text-base text-brown/70 leading-[1.8] flex flex-col gap-6">
                            <p>
                                At Lipi, we believe the best ideas often come when you're alone with your thoughts. We've designed every corner to be a sanctuary for focus, creativity, and calm.
                            </p>
                            <p>
                                Unlike bustling communal hubs, Lipi prioritizes the individual. From our seating geometry to our acoustic balance, everything is tuned for the solo-friendly experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 w-full">
                            <div className="p-6 border-l-2 border-wood/20 bg-brown/[0.02] hover:bg-brown/[0.04] transition-colors rounded-r-sm">
                                <h4 className="font-serif text-[18px] text-brown mb-3 underline decoration-wood decoration-2 underline-offset-4">
                                    DIY Intent
                                </h4>
                                <p className="font-sans text-[13px] text-brown/60 leading-[1.6]">
                                    Our self-service model ensures you remain undisturbed in your workflow.
                                </p>
                            </div>
                            <div className="p-6 border-l-2 border-wood/20 bg-brown/[0.02] hover:bg-brown/[0.04] transition-colors rounded-r-sm">
                                <h4 className="font-serif text-[18px] text-brown mb-3 underline decoration-wood decoration-2 underline-offset-4">
                                    Quiet Corner
                                </h4>
                                <p className="font-sans text-[13px] text-brown/60 leading-[1.6]">
                                    No loud music, no frantic pace—just the sound of beans and brilliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
