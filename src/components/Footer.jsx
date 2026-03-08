export default function Footer() {
    return (
        <footer className="bg-charcoal py-16 md:py-20 px-6 md:px-[8%] pb-12">
            <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16 pb-12 md:pb-16 border-b border-white/10">
                    {/* Brand */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-[10px] mb-6">
                            <div className="w-8 h-8 bg-wood rounded-full flex items-center justify-center">
                                <span className="text-cream text-sm font-serif italic">L</span>
                            </div>
                            <span className="font-serif text-xl font-bold text-cream">Lipi Coffee</span>
                        </div>
                        <p className="font-sans text-sm text-[#F5F1E8]/45 leading-[1.8] max-w-[300px]">
                            A refined urban retreat for solo thinkers, creators, and coffee lovers in the heart of Navrangpura.
                        </p>
                        <div className="flex gap-3 mt-8">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 no-underline text-base transition-all duration-300 hover:border-wood hover:text-wood"
                            >
                                ◈
                            </a>
                        </div>
                    </div>

                    {/* Visit */}
                    <div>
                        <div className="font-sans text-[11px] tracking-[2px] text-wood uppercase mb-6">
                            Visit
                        </div>
                        <div className="font-sans text-sm text-white/50 leading-[1.9]">
                            Indraprasth Complex<br />
                            Vijay Cross Road<br />
                            Navrangpura<br />
                            Ahmedabad – 380009
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <div className="font-sans text-[11px] tracking-[2px] text-wood uppercase mb-6">
                            Hours
                        </div>
                        <div className="font-sans text-sm text-white/50 leading-[1.9]">
                            Monday – Sunday<br />
                            10:00 AM – 12:00 AM<br />
                            <br />
                            <span className="text-wood">★ 4.9 Rated</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
                    <span className="font-sans text-[13px] text-white/25 text-center sm:text-left">
                        © 2025 Lipi Coffee. All rights reserved.
                    </span>
                    <span className="font-sans text-[12px] text-white/20 tracking-[1px] text-center sm:text-right">
                        NAVRANGPURA · AHMEDABAD
                    </span>
                </div>
            </div>
        </footer>
    );
}
