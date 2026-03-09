import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { NAV_LINKS } from "../constants";

export default function Header({ scrolled }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation
            gsap.fromTo(headerRef.current,
                { y: -80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.2,
                    clearProps: "all" // Clear GSAP styles after animation to let CSS take over
                }
            );
        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 h-[80px] transition-all duration-500 ${scrolled
                ? "bg-cream/95 backdrop-blur-lg border-b border-light shadow-sm"
                : "bg-transparent backdrop-blur-none"
                }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-[12px] z-50 group cursor-pointer">
                <div className="w-10 h-10 bg-brown rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                    <span className="text-cream text-base font-serif italic font-bold">L</span>
                </div>
                <span className={`font-serif text-xl md:text-[24px] font-bold tracking-[0.5px] transition-colors duration-500 ${scrolled || isMenuOpen ? "text-brown" : "text-cream"
                    }`}>
                    Lipi Coffee
                </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-12">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`font-sans text-[13px] font-bold uppercase tracking-[1.5px] no-underline transition-all duration-300 relative group ${scrolled ? "text-charcoal" : "text-white/90"
                            } hover:text-wood`}
                    >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wood transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
            </nav>

            {/* Right side Actions */}
            <div className="flex items-center gap-6 z-50">
                <a
                    href="#visit"
                    className={`hidden sm:flex font-sans text-[12px] font-bold uppercase px-8 py-3 rounded-sm no-underline tracking-[1px] transition-all duration-500 border-2 ${isMenuOpen || scrolled
                        ? "text-cream bg-brown border-brown hover:bg-transparent hover:text-brown"
                        : "text-white bg-transparent border-white/30 hover:bg-white hover:text-brown hover:border-white"
                        }`}
                >
                    Find Us
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 focus:outline-none bg-brown/10 rounded-full"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`w-full h-0.5 ${scrolled ? "bg-brown" : "bg-cream"}`} />
                        <span className={`w-full h-0.5 ${scrolled ? "bg-brown" : "bg-cream"}`} />
                        <span className={`w-full h-0.5 ${scrolled ? "bg-brown" : "bg-cream"}`} />
                    </div>
                </button>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] transition-opacity duration-500 lg:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar Mobile Nav */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-cream z-[110] flex flex-col p-10 pt-[100px] gap-8 transition-transform duration-500 ease-out h-screen shadow-2xl lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >

                <button
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-brown/10 rounded-full hover:bg-brown/20 transition-colors z-[120]"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <span className="block w-5 h-0.5 bg-brown rotate-45 absolute" />
                    <span className="block w-5 h-0.5 bg-brown -rotate-45 absolute" />
                </button>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%220.04%22/%3E%3C/svg%3E')]" />

                {NAV_LINKS.map((link, i) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`font-serif text-2xl font-bold text-brown transition-all duration-500 transform ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link}
                    </a>
                ))}

                <a
                    href="#visit"
                    className={`mt-auto font-sans text-sm font-bold uppercase px-8 py-4 bg-brown text-cream tracking-[2px] text-center rounded-sm transition-all duration-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${NAV_LINKS.length * 100}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Find Us
                </a>
            </div>
        </header>
    );
}
