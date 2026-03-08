import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import SocialProof from "../components/SocialProof";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function LipiCoffee() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Inject Google Fonts
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=DM+Sans:wght@400;500;600&display=swap";
        document.head.appendChild(link);

        // SEO meta
        document.title = "Lipi Coffee – Best Café in Navrangpura Ahmedabad";
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = "Lipi Coffee is a refined coffee retreat in Navrangpura Ahmedabad known for its solo-friendly atmosphere, DIY service model, and 4.9-star rated coffee experience.";
        document.head.appendChild(meta);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div className="font-sans bg-offwhite min-h-screen overflow-x-hidden">
            <Header scrolled={scrolled} />
            <main>
                <Hero />
                <Philosophy />
                <SocialProof />
                <Menu />
                <Gallery />
                <Location />
            </main>
            <Footer />
        </div>
    );
}