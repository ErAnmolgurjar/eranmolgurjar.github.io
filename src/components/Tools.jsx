import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

const Tools = () => {
    const { sectionData } = useData();
    const data = sectionData.tools;

    if (!data) return null;

    return (
        <section className="py-20 relative bg-secondary/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">Tools & Technologies</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full opacity-20" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {data.map((tool, index) => (
                        <motion.div
                            key={tool.toolID}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-surface p-6 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-transparent hover:border-border/50 flex flex-col items-center justify-center gap-4 group"
                        >
                            <div className="w-14 h-14 p-2 bg-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {tool.toolIconPath ? (
                                    <img src={tool.toolIconPath} alt={tool.toolName} className="w-full h-full object-contain" />
                                ) : (
                                    <span className="text-xl font-bold text-accent">{tool.toolName[0]}</span>
                                )}
                            </div>
                            <h3 className="font-medium text-heading text-center text-sm group-hover:text-accent transition-colors">{tool.toolName}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
