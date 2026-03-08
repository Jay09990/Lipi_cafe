import { TESTIMONIALS } from "../constants";
import StarRating from "./StarRating";

export default function SocialProof() {
    return (
        <section
            className="bg-brown py-20 md:py-[120px] px-6 md:px-[8%] relative overflow-hidden"
        >
            {/* Background decoration - Hidden on smallest screens */}
            <div className="hidden sm:block absolute -right-[100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-wood/15 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="hidden sm:block w-12 h-px bg-wood/50" />
                        <StarRating />
                        <div className="hidden sm:block w-12 h-px bg-wood/50" />
                    </div>
                    <h2 className="font-serif text-[clamp(28px,5vw,52px)] font-bold text-cream mb-4">
                        Rated 4.9 by Coffee Lovers
                    </h2>
                    <p className="font-sans text-sm md:text-base text-cream/55 max-w-[440px] mx-auto leading-[1.7]">
                        Consistently one of the highest-rated cafés in Navrangpura, Ahmedabad.
                    </p>
                </div>

                {/* Cards - Fixed grid for intermediate screens */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-[2px]">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className={`p-8 sm:p-10 md:p-12 transition-all duration-300 group ${i === 1 ? "bg-wood" : "bg-white/5 hover:bg-white/8"
                                }`}
                        >
                            <div className="mb-6">
                                <StarRating count={t.stars} />
                            </div>
                            <p
                                className={`font-serif text-[16px] md:text-[17px] leading-[1.7] mb-8 italic ${i === 1 ? "text-brown" : "text-cream"
                                    }`}
                            >
                                "{t.text}"
                            </p>
                            <div className={`border-t pt-6 ${i === 1 ? "border-brown/20" : "border-cream/10"
                                }`}>
                                <div className={`font-sans font-semibold text-sm ${i === 1 ? "text-brown" : "text-cream"
                                    }`}>
                                    {t.name}
                                </div>
                                <div className={`font-sans text-[11px] mt-1 tracking-[0.5px] ${i === 1 ? "text-brown/60" : "text-cream/45"
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
