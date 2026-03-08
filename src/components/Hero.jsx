import StarRating from "./StarRating";

export default function Hero() {
    return (
        <section
            id="home"
            className="h-screen min-h-[600px] md:min-h-[700px] relative flex items-center justify-center md:justify-start overflow-hidden bg-[radial-gradient(ellipse_at_70%_50%,#6B4226_0%,transparent_50%),radial-gradient(ellipse_at_20%_80%,#2C1810_0%,transparent_40%),linear-gradient(135deg,#1A0F0A_0%,#3D2B1F_40%,#5C3D28_100%)]"
        >
            {/* Texture overlay */}
            <div
                className="absolute inset-0 opacity-60 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%220.04%22/%3E%3C/svg%3E')]"
            />

            {/* Coffee ring decorative - Hidden on mobile to prevent overlap */}
            <div className="hidden lg:flex absolute right-[8%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-wood/20 items-center justify-center">
                <div className="w-[320px] h-[320px] rounded-full border border-wood/15 flex items-center justify-center bg-[radial-gradient(circle,rgba(106,66,38,0.3)_0%,transparent_70%)]">
                    <div className="w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,#4A3428_0%,#2C1810_100%)] border border-wood/30 flex items-center justify-center flex-col">
                        <span className="text-wood text-[11px] tracking-[3px] font-sans">EST.</span>
                        <span className="text-cream text-[28px] font-serif font-bold">Lipi</span>
                        <span className="text-wood text-[11px] tracking-[3px] font-sans">COFFEE</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-[8%] max-w-[680px] text-center md:text-left flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="hidden md:block w-10 h-px bg-wood" />
                    <span className="font-sans text-[10px] md:text-[12px] tracking-[3px] text-wood uppercase">
                        Navrangpura, Ahmedabad
                    </span>
                    <div className="md:hidden w-10 h-px bg-wood" />
                </div>

                <h1 className="font-serif text-[clamp(40px,10vw,88px)] font-bold text-cream leading-[1.05] mb-4 md:mb-2 tracking-[-1px]">
                    Lipi
                    <br />
                    <em className="text-wood italic">Coffee</em>
                </h1>

                <p className="font-sans text-[clamp(14px,1.8vw,17px)] text-cream/65 leading-[1.7] mb-10 md:mb-12 max-w-[440px]">
                    A refined coffee retreat designed for thinkers, creators, and solo coffee moments — in the heart of Navrangpura.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                        href="#menu"
                        className="font-sans text-sm font-semibold text-charcoal bg-cream px-9 py-4 rounded-[2px] no-underline tracking-[0.5px] transition-all duration-300 hover:bg-wood hover:text-white text-center"
                    >
                        Explore Menu
                    </a>
                    <a
                        href="#visit"
                        className="font-sans text-sm font-medium text-cream bg-transparent px-9 py-4 rounded-[2px] no-underline tracking-[0.5px] border border-cream/30 transition-all duration-300 hover:border-wood hover:text-wood text-center"
                    >
                        Find Us
                    </a>
                </div>

                {/* Rating badge */}
                <div className="flex flex-col md:flex-row items-center gap-3 mt-12 md:mt-16">
                    <StarRating />
                    <span className="font-sans text-[12px] md:text-[13px] text-cream/50 tracking-[0.5px]">
                        4.9 · Rated by 200+ guests
                    </span>
                </div>
            </div>
        </section>
    );
}
