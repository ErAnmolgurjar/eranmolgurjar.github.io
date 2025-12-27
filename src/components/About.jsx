import React from 'react';
import { useData } from '../context/DataContext';

const About = () => {
    const { sectionData } = useData();
    const data = sectionData.about;

    if (!data || !data[0]) return null;
    const content = data[0].about;

    return (
        <section className="py-12">
            <div className="bg-surface backdrop-blur-lg rounded-2xl p-8 border border-border transition-colors duration-300">
                <h2 className="text-3xl font-bold mb-6 text-accent">About Me</h2>
                <div className="text-lg text-muted leading-relaxed whitespace-pre-line">
                    {content}
                </div>
            </div>
        </section>
    );
};

export default About;
