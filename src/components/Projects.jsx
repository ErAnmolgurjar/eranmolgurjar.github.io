import React from 'react';
import { useData } from '../context/DataContext';

const Projects = () => {
    const { sectionData } = useData();
    const data = sectionData.projects;

    if (!data) return null;

    return (
        <section className="py-20 border-t border-border">
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-text mb-2">Projects</h2>
                <p className="text-muted">Selected works and experiments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.map((project, index) => (
                    <div
                        key={project.projectID || index}
                        className="group block"
                    >
                        <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-4 border border-border">
                            {project.projectIconPath ? (
                                <img
                                    src={project.projectIconPath}
                                    alt={project.projectname}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted font-mono text-sm">
                                    No Preview
                                </div>
                            )}
                        </div>

                        <h3 className="text-lg font-bold text-text mb-1 group-hover:text-accent transition-colors">
                            {project.projectname}
                        </h3>

                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.skills?.map((skill, i) => (
                                <span key={i} className="text-xs text-muted bg-secondary px-2 py-1 rounded">
                                    {skill.skillName}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 text-sm font-medium">
                            {project.projectLink && (
                                <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
                                    Live Demo ↗
                                </a>
                            )}
                            {project.gitHubLink && (
                                <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text transition-colors">
                                    GitHub ↗
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
