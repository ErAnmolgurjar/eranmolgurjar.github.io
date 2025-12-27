import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

const SoftSkills = () => {
    const { sectionData } = useData();
    const data = sectionData.softSkills;

    if (!data) return null;

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold mb-6 text-text">Soft Skills</h2>
            <div className="flex flex-wrap gap-4">
                {data.map((skill, index) => (
                    <motion.div
                        key={skill.softSkillID}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-accent font-medium"
                    >
                        {skill.softSkill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SoftSkills;
