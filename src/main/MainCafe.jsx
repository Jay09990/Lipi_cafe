import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import SocialProof from "../components/SocialProof";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Footer from "../components/Footer";
import SEOSchema from '../components/SEOSchema'

export default function LipiCoffee() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="font-sans bg-offwhite min-h-screen overflow-x-hidden">
            <SEOSchema />

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