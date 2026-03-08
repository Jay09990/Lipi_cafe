export default function Gallery() {
    return (
        <section
            id="gallery"
            className="bg-charcoal pt-[120px] w-full overflow-hidden"
        >
            {/* Header - Moved to top left outside the box */}
            <div className="px-[8%] mb-12 md:mb-16 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <div className="w-8 h-px bg-wood" />
                    <span className="font-sans text-[11px] tracking-[3px] text-wood uppercase">
                        Ambience
                    </span>
                </div>
                <h2 className="font-serif text-[clamp(32px,6vw,64px)] font-bold text-cream leading-tight md:leading-none m-0">
                    Feel the
                    <em className="text-wood md:ml-4 font-style-italic non-italic block md:inline mt-2 md:mt-0">Space</em>
                </h2>
            </div>

            {/* Asymmetric grid - Responsive column configuration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] grid-rows-none md:grid-rows-[380px_380px] gap-[2px] w-full">
                {/* Large left - spans 2 rows on desktop */}
                <div className="h-[400px] md:h-auto md:row-span-2 relative overflow-hidden group bg-[linear-gradient(135deg,#3D2B1F_0%,#6B4226_60%,#4A3428_100%)]">
                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 opacity-100 md:opacity-0 transition-opacity duration-300 z-10 group-hover:opacity-100">
                        <span className="font-sans text-[13px] text-cream tracking-[3px] uppercase">The Counter</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <span className="text-[80px] md:text-[120px]">☕</span>
                    </div>
                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-transparent" />
                </div>

                {/* Pour Over Station */}
                <div className="h-[250px] md:h-auto relative overflow-hidden group bg-[linear-gradient(135deg,#C9A27E_0%,#A07850_100%)]">
                    <div className="absolute bottom-6 left-6 opacity-100 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="font-sans text-[11px] text-charcoal tracking-[2px] uppercase">Pour Over Station</span>
                    </div>
                </div>

                {/* Corner Nook */}
                <div className="h-[250px] md:h-auto relative overflow-hidden group bg-[linear-gradient(135deg,#2C1810_0%,#4A3428_100%)]">
                    <div className="absolute bottom-6 left-6 opacity-100 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="font-sans text-[11px] text-cream tracking-[2px] uppercase">Corner Nook</span>
                    </div>
                </div>

                {/* Latte Art */}
                <div className="h-[250px] md:h-auto relative overflow-hidden group bg-[linear-gradient(135deg,#D4B896_0%,#B89060_100%)]">
                    <div className="absolute bottom-6 left-6 opacity-100 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="font-sans text-[11px] text-charcoal tracking-[2px] uppercase">Latte Art</span>
                    </div>
                </div>

                {/* Late Hours */}
                <div className="h-[250px] md:h-auto relative overflow-hidden group bg-[linear-gradient(135deg,#1E1E1E_0%,#3D2B1F_100%)]">
                    <div className="absolute bottom-6 left-6 opacity-100 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="font-sans text-[11px] text-cream tracking-[2px] uppercase">Late Hours</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
