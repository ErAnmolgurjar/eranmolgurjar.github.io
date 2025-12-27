import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

const Awards = () => {
    const { sectionData } = useData();
    const data = sectionData.awards;

    if (!data) return null;

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">Honors & Awards</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full opacity-20" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.map((award, index) => (
                        <motion.div
                            key={award.awardID}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-surface p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-transparent hover:border-border/50 flex gap-6 items-start group"
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a2.25 2.25 0 11-4.5 0v7.125M12 3.75v-1.5" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-heading mb-1 group-hover:text-accent transition-colors">{award.awardName}</h3>
                                <p className="text-accent font-medium mb-2">{award.awardOrganization}</p>
                                <p className="text-sm text-muted font-mono mb-3">{formatDate(award.date)}</p>
                                <p className="text-muted text-sm leading-relaxed">
                                    {award.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
