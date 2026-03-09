import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY_IMAGES } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const galleryRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });

            // Grid items animation
            const items = gridRef.current.children;
            gsap.from(items, {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, galleryRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="gallery"
            ref={galleryRef}
            className="bg-offwhite py-20 md:py-[140px] px-6 md:px-[8%] relative overflow-hidden"
        >
            {/* Header Content */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                <div ref={titleRef}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-wood" />
                        <span className="font-sans text-[11px] tracking-[3px] text-wood uppercase">
                            Atmosphere
                        </span>
                    </div>
                    <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold text-brown leading-tight md:leading-[1.1]">
                        Feel the
                        <br />
                        <em className="text-wood font-style-normal non-italic">Space</em>
                    </h2>
                </div>
                <p className="font-sans text-muted text-sm md:text-base max-w-[320px] leading-relaxed mb-4">
                    Every texture and beam of light is curated to provide a sanctuary for your best thoughts.
                </p>
            </div>

            {/* Responsive Grid */}
            <div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] grid-rows-none md:grid-rows-[380px_380px] gap-2 lg:gap-4 w-full"
            >
                {GALLERY_IMAGES.map((img, i) => (
                    <div
                        key={i}
                        style={{ gridColumn: img.col, gridRow: img.row }}
                        className="relative group overflow-hidden bg-light cursor-pointer rounded-sm min-h-[200px]"
                    >
                        {/* Image Layer */}
                        <img
                            src={img.src}
                            alt={img.label}
                            loading="lazy" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                            <span className="font-sans text-[10px] tracking-[2px] text-wood uppercase mb-2">
                                0{i + 1}
                            </span>
                            <h3 className="font-serif text-xl text-cream font-medium">
                                {img.label}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative background text */}
            <div className="absolute -right-20 bottom-10 font-serif text-[18vw] text-brown/[0.03] pointer-events-none select-none">
                Lipi
            </div>
        </section>
    );
}
