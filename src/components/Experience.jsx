import React from 'react';
import { useData } from '../context/DataContext';

const Experience = () => {
    const { sectionData } = useData();
    const data = sectionData.experience;

    if (!data) return null;

    // Sort by start date descending
    const sortedData = [...data].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    const formatDate = (dateString) => {
        if (!dateString) return 'Present';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    return (
        <section className="py-20 border-t border-border">
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-text mb-2">Experience</h2>
                <p className="text-muted">My professional journey.</p>
            </div>

            <div className="space-y-12">
                {sortedData.map((exp) => (
                    <div key={exp.experienceID} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                        <div className="text-sm text-muted font-mono pt-1">
                            {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 flex-shrink-0 bg-secondary rounded-lg p-2 border border-border flex items-center justify-center">
                                {exp.companyIconPath ? (
                                    <img
                                        src={exp.companyIconPath}
                                        alt={exp.companyName}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <span className="font-bold text-muted text-lg">{exp.companyName?.[0]}</span>
                                )}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-text">{exp.designation}</h3>
                                <div className="text-accent mb-2">{exp.companyName}</div>
                                <div className="mb-2 text-xs text-muted font-medium flex items-center gap-2">
                                    <span>{exp.location}</span>
                                    <span>•</span>
                                    <span>{exp.locationType}</span>
                                </div>
                                <p className="text-muted text-sm leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
