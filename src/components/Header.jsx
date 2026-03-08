import { useState } from "react";
import { NAV_LINKS } from "../constants";

export default function Header({ scrolled }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-400 ${scrolled
                ? "bg-cream/95 backdrop-blur-md border-b border-light"
                : "bg-transparent backdrop-blur-none"
                }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-[10px] z-50">
                <div className="w-8 h-8 bg-brown rounded-full flex items-center justify-center">
                    <span className="text-cream text-sm font-serif italic">L</span>
                </div>
                <span className={`font-serif text-xl md:text-[22px] font-bold tracking-[0.5px] transition-colors duration-400 ${scrolled || isMenuOpen ? "text-brown" : "text-cream"
                    }`}>
                    Lipi Coffee
                </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className={`font-sans text-sm font-medium tracking-[0.5px] no-underline transition-colors duration-300 ${scrolled ? "text-charcoal" : "text-white/85"
                            } hover:text-wood`}
                    >
                        {link}
                    </a>
                ))}
            </nav>

            {/* Right side Actions */}
            <div className="flex items-center gap-4 z-50">
                {/* Find Us - visible on all screens, but styled specifically for mobile */}
                <a
                    href="#visit"
                    className={`font-sans text-[12px] md:text-[13px] font-semibold px-4 md:px-6 py-[8px] md:py-[10px] rounded-[2px] no-underline tracking-[0.5px] transition-all duration-300 ${isMenuOpen || scrolled
                            ? "text-cream bg-brown"
                            : "text-charcoal bg-cream md:text-cream md:bg-brown"
                        } hover:opacity-90`}
                >
                    Find Us
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                        <span className={`w-full h-0.5 transition-all duration-300 transform ${isMenuOpen ? "rotate-45 translate-y-2 bg-brown" : scrolled ? "bg-brown" : "bg-cream"}`} />
                        <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? "-translate-x-full opacity-0" : scrolled ? "bg-brown" : "bg-cream"}`} />
                        <span className={`w-full h-0.5 transition-all duration-300 transform ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-brown" : scrolled ? "bg-brown" : "bg-cream"}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {NAV_LINKS.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="font-serif text-2xl font-bold text-brown"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </header>
    );
}
