import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

const Education = () => {
    const { sectionData } = useData();
    const data = sectionData.education;

    if (!data) return null;

    // Sort by date descending (newest first)
    const sortedData = [...data].sort((a, b) => b.startDate - a.startDate);

    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-12 text-text">Education Journey</h2>
            <div className="relative border-l border-border ml-4 md:ml-8 space-y-12">
                {sortedData.map((edu, index) => (
                    <motion.div
                        key={edu.educationID}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-primary" />

                        <div className="bg-surface rounded-xl p-6 border border-border hover:border-accent/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg p-1 flex-shrink-0 overflow-hidden">
                                        <img
                                            src={edu.collageIconPath}
                                            alt={edu.collageName}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-text">{edu.courceName}</h3>
                                        <p className="text-accent font-medium">{edu.collageName}</p>
                                    </div>
                                </div>
                                <div className="text-muted font-mono text-sm whitespace-nowrap bg-surface px-3 py-1 rounded-full self-start">
                                    {edu.startDate} - {edu.endDate}
                                </div>
                            </div>

                            <div className="text-muted text-sm">
                                <span className="text-muted">Board/University:</span> {edu.boardOfEducation}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
