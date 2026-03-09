import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const mapRef = useRef(null);

    const isOpen = () => {
        const hour = new Date().getHours()
        return hour >= 10 // open 10am–midnight (hour 0–23, midnight = 0)
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Content animation
            gsap.from(contentRef.current.children, {
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 75%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out"
            });

            // Map animation
            gsap.from(mapRef.current, {
                scrollTrigger: {
                    trigger: mapRef.current,
                    start: "top 80%",
                },
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="visit"
            ref={sectionRef}
            className="bg-cream py-20 md:py-[120px] px-6 md:px-[8%]"
        >
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left info */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start" ref={contentRef}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-wood" />
                            <span className="font-sans text-[11px] tracking-[3px] text-wood uppercase">
                                Visit Us
                            </span>
                            <div className="lg:hidden w-8 h-px bg-wood" />
                        </div>
                        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-bold text-brown leading-tight mb-12">
                            Come Find
                            <br />
                            <em className="text-wood font-style-normal non-italic block lg:inline mt-2 lg:mt-0">Your Corner</em>
                        </h2>

                        <div className="flex flex-col gap-10 w-full items-center lg:items-start">
                            {/* Address */}
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="font-sans text-[11px] tracking-[2px] text-wood uppercase mb-3">
                                    Address
                                </div>
                                <div className="font-serif text-base md:text-[18px] text-brown leading-[1.8]">
                                    Indraprasth Complex<br />
                                    Vijay Cross Road<br />
                                    Navrangpura<br />
                                    Ahmedabad – 380009
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="font-sans text-[11px] tracking-[2px] text-wood uppercase mb-3">
                                    Opening Hours
                                </div>
                                <div className="flex flex-col sm:flex-row items-center lg:items-baseline gap-2 sm:gap-6">
                                    <div className="font-serif text-base md:text-[18px] text-brown">
                                        Monday – Sunday
                                    </div>
                                    <div className="font-sans text-xs md:text-sm text-muted uppercase tracking-[1px]">
                                        10:00 AM – 12:00 AM
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-3 mt-6 px-6 py-2 bg-brown/5 border border-brown/10 rounded-full">
                                    <div className="w-2 h-2 rounded-full animate-pulse"
                                        style={{ background: isOpen() ? '#4CAF50' : '#ef4444' }} />
                                    <span className="font-sans text-[12px] md:text-[13px] text-brown font-medium">{isOpen() ? 'Open Now' : 'Opens at 10 AM'} · 14 hours a day</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href="https://maps.google.com/?q=Lipi+Coffee+Navrangpura+Ahmedabad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-4 font-sans text-sm font-bold text-cream bg-brown px-10 py-5 no-underline tracking-[1px] w-full sm:w-fit transition-all duration-300 hover:bg-[#3A2418] hover:shadow-2xl hover:-translate-y-1 rounded-sm uppercase"
                            >
                                <span className="text-lg">⦿</span> Open in Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Right — Map placeholder */}
                    <div className="relative w-full overflow-hidden rounded-sm shadow-2xl" ref={mapRef}>
                        <div className="w-full h-[300px] sm:h-[400px] md:h-[520px] bg-charcoal relative">
                            {/* Styled Map Image Placeholder */}
                            <img
                                src="/images/hero_bg.png"
                                alt="Map Location"
                                className="w-full h-full object-cover opacity-50 contrast-125 saturate-0"
                            />

                            {/* Stylized Pin */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative z-1 flex flex-col items-center animate-bounce-slow">
                                    <div className="w-14 h-14 rounded-[50%_50%_50%_0] bg-wood -rotate-45 shadow-[0_12px_24px_rgba(201,162,126,0.3)] border-2 border-cream/20" />
                                    <div className="mt-6 bg-cream px-6 py-3 font-sans text-[14px] font-bold text-brown shadow-2xl text-center rounded-sm">
                                        Lipi Coffee
                                    </div>
                                    <div className="w-1 h-8 bg-gradient-to-t from-transparent to-wood/50 -mt-2 opacity-50" />
                                </div>
                            </div>

                            {/* Vignette */}
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
