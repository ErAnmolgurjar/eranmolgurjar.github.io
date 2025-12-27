import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

const Languages = () => {
    const { sectionData } = useData();
    const data = sectionData.languages;

    if (!data) return null;

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold mb-6 text-text">Languages</h2>
            <div className="flex flex-wrap gap-4">
                {data.map((lang, index) => (
                    <motion.div
                        key={lang.languageID}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-surface border border-border rounded-lg text-text font-medium"
                    >
                        {lang.language}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Languages;
