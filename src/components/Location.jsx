export default function Location() {
    return (
        <section
            id="visit"
            className="bg-cream py-20 md:py-[120px] px-6 md:px-[8%]"
        >
            <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left info */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
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

                        <div className="flex flex-col gap-10 w-full">
                            {/* Address */}
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="font-sans text-[11px] tracking-[2px] text-wood uppercase mb-3">
                                    Address
                                </div>
                                <div className="font-serif text-base md:text-[17px] text-brown leading-[1.7]">
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
                                <div className="flex flex-col sm:flex-row items-center lg:items-baseline gap-2 sm:gap-4">
                                    <div className="font-serif text-base md:text-[17px] text-brown">
                                        Monday – Sunday
                                    </div>
                                    <div className="font-sans text-xs md:text-sm text-muted">
                                        10:00 AM – 12:00 AM
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-brown/10">
                                    <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                                    <span className="font-sans text-[12px] md:text-[13px] text-brown">Open Now · 14 hours a day</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href="https://maps.google.com/?q=Lipi+Coffee+Navrangpura+Ahmedabad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 font-sans text-sm font-semibold text-cream bg-brown px-8 py-4 no-underline tracking-[0.5px] w-full sm:w-fit transition-colors duration-300 hover:bg-[#3A2418]"
                            >
                                <span>◉</span> Open in Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Right — Map placeholder */}
                    <div className="relative w-full">
                        <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] bg-[linear-gradient(135deg,#E8E0D4_0%,#D4C8B8_100%)] relative overflow-hidden">
                            {/* Stylized map placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 scale-75 sm:scale-100">
                                {/* Grid lines to mimic map */}
                                {[...Array(8)].map((_, i) => (
                                    <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-muted/20" style={{ top: `${(i + 1) * 12}%` }} />
                                ))}
                                {[...Array(6)].map((_, i) => (
                                    <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-muted/20" style={{ left: `${(i + 1) * 15}%` }} />
                                ))}

                                {/* Roads */}
                                <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-muted/30" />
                                <div className="absolute left-[40%] top-0 bottom-0 w-[3px] bg-muted/30" />

                                {/* Pin */}
                                <div className="relative z-1 flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-[50%_50%_50%_0] bg-brown -rotate-45 shadow-[0_8px_24px_rgba(74,52,40,0.3)]" />
                                    <div className="mt-2 bg-white px-4 py-2 font-sans text-[13px] font-semibold text-brown shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-center">
                                        Lipi Coffee
                                    </div>
                                    <div className="font-sans text-[11px] text-muted mt-1 text-center">Navrangpura, Ahmedabad</div>
                                </div>
                            </div>
                        </div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d72.5600!3d23.0300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAwLjAiTiA3MsKwMzMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin"
                            className="hidden w-full h-0 border-0"
                            allowFullScreen=""
                            loading="lazy"
                            title="Lipi Coffee Location"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
