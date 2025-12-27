import React from 'react';
import { useData } from '../context/DataContext';

const Skills = () => {
    const { sectionData } = useData();
    const data = sectionData.skills;

    if (!data) return null;

    return (
        <section className="py-20 border-t border-border">
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-text mb-2">Skills</h2>
                <p className="text-muted">Technologies and tools I work with.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data.map((skill, index) => (
                    <div
                        key={skill.skillId || index}
                        className="flex items-center gap-3 p-4 bg-secondary rounded-lg border border-transparent hover:border-border transition-colors"
                    >
                        <div className="w-8 h-8 flex-shrink-0">
                            {skill.iconPath ? (
                                <img src={skill.iconPath} alt={skill.skillName} className="w-full h-full object-contain opacity-80" />
                            ) : (
                                <div className="w-full h-full bg-border rounded-full flex items-center justify-center text-xs font-bold text-muted">
                                    {skill.skillName?.[0]}
                                </div>
                            )}
                        </div>
                        <span className="text-sm font-medium text-text">{skill.skillName}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
