import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

const Certificates = () => {
    const { sectionData } = useData();
    const data = sectionData.certificates;

    if (!data) return null;

    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-text">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((cert, index) => (
                    <motion.div
                        key={cert.certificationID || index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-surface rounded-xl p-6 border border-border hover:border-accent/30 transition-all group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg p-1 flex-shrink-0 overflow-hidden">
                                {cert.organizationIconPath ? (
                                    <img
                                        src={cert.organizationIconPath}
                                        alt={cert.organizationName}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-secondary flex items-center justify-center text-muted font-bold">
                                        {cert.organizationName?.[0] || 'C'}
                                    </div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors">
                                    {cert.certificateName}
                                </h3>
                                <p className="text-muted text-sm mb-2">{cert.organizationName}</p>
                                <div className="text-xs text-muted font-mono bg-surface inline-block px-2 py-1 rounded">
                                    Issued: {cert.issueDate}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
