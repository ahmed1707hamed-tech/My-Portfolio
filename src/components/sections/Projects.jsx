import React, { useState } from 'react';
import ProjectModal from '../ui/ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Scalable Telemedicine Platform',
            description: 'A scalable full-stack telemedicine platform built with frontend, backend, and PostgreSQL. Implemented DevOps practices using Docker, Kubernetes, GitHub Actions, Terraform, Ansible, Prometheus, Grafana, and Nginx on AWS.',
            image: '/assets/projects/telemedicine.png',
            repo: 'https://github.com/ahmed1707hamed-tech/telemedicine-devops-project',
            tags: ['AWS', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Ansible']
        },
        {
            title: 'Smart Inventory DevOps Platform',
            description: 'A cloud-native inventory management system (frontend, backend, PostgreSQL) deployed on AWS using Docker, Kubernetes, Jenkins, Terraform, and Nginx. Focus on high availability and automated scaling.',
            image: '/assets/projects/smart_inventory_devops.png',
            repo: 'https://github.com/ahmed1707hamed-tech/smart-inventory-devops',
            tags: ['Docker', 'Jenkins', 'AWS', 'Kubernetes', 'Terraform', 'Nginx']
        },
        {
            title: 'Intelligent Traffic Dashboard',
            description: 'A real-time traffic monitoring system (full-stack with PostgreSQL) with CI/CD and observability using Docker, Kubernetes, Jenkins, Prometheus, Grafana, and Nginx. Features dynamic alerting and performance tracking.',
            image: '/assets/projects/intelligent-traffic-dashboard.png',
            repo: 'https://github.com/ahmed1707hamed-tech/intelligent-traffic-devops',
            tags: ['Prometheus', 'Grafana', 'Kubernetes', 'Jenkins', 'Nginx', 'PostgreSQL']
        },
        {
            title: 'On-Prem to AWS Migration',
            description: 'Successfully migrated a complex Node.js application from legacy on-premise infrastructure to AWS, improving scalability by 300% and reducing downtime using Terraform IaC and automated provisioning.',
            image: '/assets/projects/cicd_pipeline.png',
            repo: 'https://github.com/ahmed1707hamed-tech/Migration-app-aws',
            tags: ['AWS', 'Terraform', 'Node.js', 'Infrastructure Migration', 'Scalability']
        },
        {
            title: 'Serverless Students API (AWS Stack)',
            description: 'Built a highly efficient serverless REST API using AWS Lambda, API Gateway, and DynamoDB for managing high-volume student data with zero server management overhead.',
            image: '/assets/projects/serverless_api.png',
            repo: 'https://github.com/ahmed1707hamed-tech/student-serverless-api',
            tags: ['Lambda', 'API Gateway', 'Serverless', 'DynamoDB', 'AWS']
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container mx-auto px-8">
                <div className="section-header animate-up text-center mb-16">
                    <span className="section-subtitle text-[var(--clr-accent)] font-mono uppercase tracking-widest text-sm mb-2 block">Portfolio</span>
                    <h2 className="section-title text-4xl md:text-5xl font-black mb-4">Featured DevOps Projects</h2>
                </div>

                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-up">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-card-modern group relative overflow-hidden rounded-2xl bg-[var(--clr-card-bg)] border border-[var(--clr-card-border)] hover:border-[var(--clr-accent)] transition-all duration-300 flex flex-col h-full">
                            <div className="project-img-box relative aspect-video overflow-hidden shrink-0">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="project-overlay-modern absolute inset-0 bg-[rgba(10,12,16,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                                    <div className="project-actions flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-repo px-4 py-2 bg-white/10 hover:bg-[var(--clr-accent)] rounded-lg text-sm font-bold transition-all duration-300">
                                            Repo <i className="fab fa-github"></i>
                                        </a>
                                        <button 
                                            onClick={() => setSelectedProject(project)}
                                            className="btn-details px-4 py-2 bg-[var(--clr-accent)] hover:bg-[var(--clr-accent-2)] rounded-lg text-sm font-bold transition-all duration-300"
                                        >
                                            Details <i className="fas fa-info-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content-modern p-6 flex flex-col grow">
                                <h3 className="project-title-modern text-xl font-bold mb-3 group-hover:text-[var(--clr-accent)] transition-colors line-clamp-1">{project.title}</h3>
                                <p className="project-desc-modern text-[var(--clr-text-dim)] text-sm mb-6 line-clamp-2 leading-relaxed h-[40px]">
                                    {project.description}
                                </p>
                                <div className="project-tech-modern flex flex-wrap gap-2 mt-auto pb-2">
                                    {project.tags.slice(0, 3).map((tag, tidx) => (
                                        <span key={tidx} className="tag-modern text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-[rgba(255,255,255,0.05)] text-[var(--clr-accent)] rounded border border-[rgba(0,210,255,0.1)] transition-colors group-hover:bg-[rgba(0,210,255,0.05)]">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-[10px] text-[var(--clr-text-dim)] font-bold self-center">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                         </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};

export default Projects;