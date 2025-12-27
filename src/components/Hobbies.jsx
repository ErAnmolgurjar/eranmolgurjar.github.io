import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

const Hobbies = () => {
    const { sectionData } = useData();
    const data = sectionData.hobbies;

    if (!data) return null;

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold mb-6 text-text">Hobbies & Interests</h2>
            <div className="flex flex-wrap gap-4">
                {data.map((hobbie, index) => (
                    <motion.div
                        key={hobbie.hobbieID}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-600 dark:text-purple-300 font-medium"
                    >
                        {hobbie.hobbie}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hobbies;
