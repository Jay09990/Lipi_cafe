import { useState } from "react";
import { MENU_ITEMS } from "../constants";

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("Classic Coffee");
    const categories = Object.keys(MENU_ITEMS);

    return (
        <section
            id="menu"
            className="bg-offwhite py-20 md:py-[120px] px-6 md:px-[8%]"
        >
            <div className="max-w-[1100px] mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-wood" />
                            <span className="font-sans text-[11px] tracking-[3px] text-wood uppercase">
                                Our Menu
                            </span>
                        </div>
                        <h2 className="font-serif text-[clamp(28px,6vw,52px)] font-bold text-brown leading-tight md:leading-[1.1]">
                            Crafted With
                            <br />
                            <em className="text-wood font-style-normal non-italic">Intention</em>
                        </h2>
                    </div>

                    {/* Category tabs - Scrollable on mobile */}
                    <div className="flex gap-[2px] w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`font-sans text-[12px] md:text-[13px] font-medium px-4 md:px-5 py-3 border-none cursor-pointer tracking-[0.3px] transition-all duration-300 whitespace-nowrap ${activeCategory === cat ? "bg-brown text-cream" : "bg-cream text-muted"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu items */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
                    {MENU_ITEMS[activeCategory].map((item, i) => (
                        <div
                            key={i}
                            className={`p-6 md:p-10 flex gap-4 md:gap-6 items-start transition-all duration-300 hover:bg-cream group ${i % 3 === 0 ? "bg-cream" : "bg-offwhite"
                                }`}
                        >
                            {/* Color swatch as image placeholder */}
                            <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-sm shrink-0 bg-[radial-gradient(circle_at_40%_35%,theme(colors.wood)_0%,theme(colors.brown)_100%)] flex items-center justify-center">
                                <span className="text-xl md:text-2xl">☕</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif text-base md:text-[17px] font-semibold text-brown">
                                        {item.name}
                                    </h3>
                                    <span className="font-sans font-semibold text-sm md:text-[15px] text-wood shrink-0 ml-4">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="font-sans text-[12px] md:text-[13px] text-muted leading-[1.6]">
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
