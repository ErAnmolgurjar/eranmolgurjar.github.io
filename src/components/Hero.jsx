import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

const Hero = () => {
    const { sectionData } = useData();
    const rawData = sectionData.about;
    const data = Array.isArray(rawData) ? rawData[0] : rawData;

    const heroName = data?.name || "Anmol";
    const heroTitle = data?.title || "Software Developer";
    const heroLocation = data?.location || "India";

    if (!data && !rawData) return null;

    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start relative overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-10"
            >
                <h2 className="text-accent font-medium tracking-wider mb-4 uppercase text-sm">
                    Based in {heroLocation}
                </h2>
                <h1 className="text-6xl md:text-8xl font-bold text-text mb-6 tracking-tight">
                    {heroName}
                </h1>
                <p className="text-2xl md:text-3xl text-muted max-w-2xl leading-relaxed font-light">
                    {heroTitle}. <br />
                    <span className="text-text">Building digital products with purpose.</span>
                </p>

                <div className="mt-12 flex gap-6">
                    <a
                        href="#projects"
                        className="text-text border-b-2 border-text pb-1 hover:text-accent hover:border-accent transition-colors font-medium"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-muted border-b-2 border-transparent pb-1 hover:text-text hover:border-text transition-colors font-medium"
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
