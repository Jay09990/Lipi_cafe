import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MENU_ITEMS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("Classic Coffee");
    const categories = Object.keys(MENU_ITEMS);

    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation - only on mount/scroll
            gsap.fromTo(headerRef.current.children,
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out",
                    clearProps: "all"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Separate effect for category changes (including first render)
    useEffect(() => {
        const items = gridRef.current.children;

        const tl = gsap.timeline();

        // Ensure starting opacity is 0 for a clean fade-in
        gsap.set(items, { opacity: 0, y: 20 });

        tl.to(items, {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "all"
        });

    }, [activeCategory]);

    return (
        <section
            id="menu"
            ref={sectionRef}
            className="bg-offwhite py-20 md:py-[120px] px-6 md:px-[8%]"
        >
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-16 gap-8" ref={headerRef}>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-wood" />
                            <span className="font-sans text-[11px] tracking-[3px] text-wood uppercase">
                                Our Menu
                            </span>
                        </div>
                        <h2 className="font-serif text-[clamp(28px,6vw,56px)] font-bold text-brown leading-tight md:leading-[1.1]">
                            Crafted With
                            <br />
                            <em className="text-wood font-style-normal non-italic non-italic non-italic">Intention</em>
                        </h2>
                    </div>

                    {/* Category tabs - Scrollable on mobile with hidden scrollbar */}
                    <div className="flex gap-[4px] w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`font-sans text-[11px] md:text-[13px] font-bold px-5 md:px-7 py-3 md:py-4 border-none cursor-pointer tracking-[1px] transition-all duration-300 whitespace-nowrap uppercase rounded-sm ${activeCategory === cat ? "bg-brown text-cream" : "bg-cream text-muted hover:bg-light"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu items - Key ensures clean re-mount for animation */}
                <div
                    key={activeCategory}
                    ref={gridRef}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4"
                >
                    {MENU_ITEMS[activeCategory].map((item, i) => (
                        <div
                            key={`${activeCategory}-${i}`}
                            className="p-6 md:p-8 flex gap-6 items-start transition-all duration-500 hover:bg-white rounded-sm group relative"
                        >
                            {/* Icon Placeholder */}
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full shrink-0 bg-light flex items-center justify-center transition-transform group-hover:scale-110">
                                <span className="text-xl md:text-2xl opacity-60">☕</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-baseline mb-2 gap-4">
                                    <h3 className="font-serif text-[17px] md:text-[19px] font-semibold text-brown group-hover:text-muted transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="flex-1 border-b border-dotted border-muted/30 mb-1" />
                                    <span className="font-sans font-bold text-[15px] md:text-[17px] text-wood shrink-0">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="font-sans text-[13px] text-muted/80 leading-[1.6]">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
