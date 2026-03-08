export default function Philosophy() {
    return (
        <section
            id="our-story"
            className="bg-cream py-20 md:py-[140px] px-6 md:px-[8%] overflow-hidden"
        >
            <div className="max-w-[1100px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    {/* Left side — Image/Visual placeholder */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-[4/5] bg-[linear-gradient(135deg,#D4B896_0%,#A07850_100%)] relative">
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 border border-brown/10 hidden sm:block" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl md:text-6xl opacity-20">🍃</span>
                            </div>
                        </div>
                        {/* Quote tag */}
                        <div className="absolute -bottom-4 left-6 md:left-10 bg-brown p-6 md:p-8 max-w-[240px] md:max-w-[280px] shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                            <p className="font-serif text-cream italic text-sm md:text-base leading-relaxed m-0">
                                "Coffee is not just a drink; it's the punctuation in a long day of thought."
                            </p>
                        </div>
                    </div>

                    {/* Right side — Content */}
                    <div className="w-full lg:w-1/2 pt-8 lg:pt-0">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-wood" />
                            <span className="font-sans text-[11px] tracking-[3px] text-wood uppercase">
                                Our Philosophy
                            </span>
                        </div>

                        <h2 className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-brown leading-tight mb-8 md:mb-10">
                            A Space for the
                            <br />
                            <em className="text-wood font-style-normal non-italic block md:inline mt-2 md:mt-0">Solo Thinker</em>
                        </h2>

                        <div className="font-sans text-sm md:text-base text-brown/70 leading-[1.8] flex flex-col gap-6">
                            <p>
                                At Lipi, we believe the best ideas often come when you're alone with your thoughts. We've designed every corner to be a sanctuary for focus, creativity, and calm.
                            </p>
                            <p>
                                Unlike bustling communal hubs, Lipi prioritizes the individual. From our seating geometry to our acoustic balance, everything is tuned for the solo-friendly experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
                            <div>
                                <h4 className="font-serif text-[18px] text-brown mb-3 underline decoration-wood decoration-2 underline-offset-4">
                                    DIY Intent
                                </h4>
                                <p className="font-sans text-[13px] text-brown/60 leading-[1.6]">
                                    Our self-service model ensures you remain undisturbed in your workflow.
                                </p>
                            </div>
                            <div>
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
