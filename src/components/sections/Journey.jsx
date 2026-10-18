
import React, { useEffect, useRef, useState } from 'react';

const experiences = [
    {
        id: '01',
        company: 'Chemical Seed',
        role: 'IT Engineer',
        period: '2026 – Present',
        status: 'Currently Working',
        description:
            'Providing IT support and maintaining the company’s IT infrastructure.',
        responsibilities: [
            'Provide IT support and troubleshoot hardware, software, Windows, and network issues.',
            'Maintain servers, network infrastructure, IP addressing, and CCTV/NVR systems.',
            'Perform system configuration, preventive maintenance, and technical troubleshooting.',
        ],
        tags: ['IT Support', 'Windows', 'Networking', 'Servers', 'CCTV/NVR'],
        current: true,
    },
    {
        id: '02',
        company: 'Progree',
        role: 'DevOps Intern',
        period: 'Internship',
        description:
            'Working with containerization, CI/CD automation, Infrastructure as Code, and Kubernetes deployments.',
        responsibilities: [
            'Containerized applications using Docker and optimized multi-stage builds.',
            'Built automated CI/CD pipelines for testing, linting, and integration.',
            'Provisioned infrastructure using Terraform (Infrastructure as Code).',
            'Deployed applications on Kubernetes using Ingress, Persistent Volumes, and HPA.',
        ],
        tags: ['Docker', 'CI/CD', 'Terraform', 'Kubernetes', 'HPA'],
    },
    {
        id: '03',
        company: 'CodeAlpha',
        role: 'Cloud & DevOps Intern',
        period: 'Internship',
        description:
            'Developed cloud and DevOps solutions with an emphasis on automation, security, and reliability.',
        responsibilities: [
            'Designed and implemented cloud-based systems focusing on scalability, security, and performance.',
            'Developed secure systems against SQL Injection using AES-256 encryption.',
            'Built CI/CD pipelines using Jenkins and GitHub Actions.',
            'Deployed containerized applications using Docker on Linux environments.',
            'Improved system reliability and reduced manual deployment through automation.',
        ],
        tags: [
            'Cloud',
            'Jenkins',
            'GitHub Actions',
            'Docker',
            'Linux',
            'Security',
        ],
    },
];

const journeyPhases = [
    {
        phase: '01',
        title: 'Networking Foundations',
        desc: 'Building a strong foundation in networking, connectivity, and network design.',
        tags: ['Routing', 'Switching', 'TCP/IP', 'Network Design', 'CCNA'],
    },
    {
        phase: '02',
        title: 'System Administration',
        desc: 'Managing Linux and Windows Server environments, Active Directory, and core system services.',
        tags: ['Linux', 'Windows Server', 'Active Directory', 'System Admin'],
    },
    {
        phase: '03',
        title: 'Cloud Engineering',
        desc: 'Designing and deploying cloud infrastructure on AWS using EC2, S3, IAM, and VPC networking.',
        tags: ['AWS', 'EC2', 'S3', 'IAM', 'VPC'],
    },
    {
        phase: '04',
        title: 'DevOps Foundations',
        desc: 'Building CI/CD pipelines, containerizing applications with Docker, and automating delivery.',
        tags: ['Docker', 'Containers', 'CI/CD', 'Jenkins', 'GitHub Actions'],
    },
    {
        phase: '05',
        title: 'Infrastructure as Code',
        desc: 'Automating infrastructure provisioning with Terraform to build scalable, repeatable environments.',
        tags: ['Terraform', 'IaC', 'Automation', 'Scalability'],
    },
    {
        phase: '06',
        title: 'Kubernetes & Observability',
        desc: 'Running workloads on Kubernetes with observability using Prometheus, Grafana, and monitoring tools.',
        tags: ['Kubernetes', 'Prometheus', 'Grafana', 'Logging', 'Monitoring'],
    },
];

const ExperienceCard = ({ experience, index }) => (
    <article
        className={`experience-card card p-6 sm:p-8 border border-[var(--clr-card-border)] bg-[var(--clr-card-bg)] rounded-3xl group relative overflow-hidden h-full ${
            index % 2 === 0
                ? 'experience-reveal-left'
                : 'experience-reveal-right'
        }`}
    >
        <div className="absolute top-0 right-0 w-36 h-36 bg-[var(--clr-accent)] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity" />

        <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                    <span className="text-[var(--clr-accent)] font-mono font-bold text-xs uppercase tracking-widest">
                        {experience.role}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-black mt-2 group-hover:text-white transition-colors">
                        {experience.company}
                    </h3>
                </div>

                {experience.current && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {experience.status}
                    </span>
                )}
            </div>

            <p className="text-sm text-[var(--clr-text-dim)] mb-6">
                {experience.period}
            </p>

            <p className="text-sm leading-relaxed text-[var(--clr-text-dim)] mb-6">
                {experience.description}
            </p>

            <ul className="space-y-3 mb-8">
                {experience.responsibilities.map((item, itemIndex) => (
                    <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[var(--clr-text-dim)]"
                    >
                        <span className="text-[var(--clr-accent)] mt-1 shrink-0">
                            ▹
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[var(--clr-text-dim)] group-hover:border-[rgba(0,210,255,0.2)] transition-all"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </article>
);

const Journey = () => {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        const handleScroll = () => {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const start = viewportHeight;
            const end = -rect.height;

            let progress = (start - rect.top) / (start - end);
            progress = Math.max(0, Math.min(1, progress));

            setScrollProgress(progress);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        const items = element.querySelectorAll(
            '.timeline-item, .experience-card'
        );

        items.forEach((item) => observer.observe(item));

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* PROFESSIONAL EXPERIENCE */}
            <section
                id="experience"
                className="section bg-transparent"
            >
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="section-header animate-up text-center mb-16">
                        <span className="section-subtitle text-[var(--clr-accent)] font-mono uppercase tracking-widest text-sm mb-2 block">
                            Career & Experience
                        </span>

                        <h2 className="section-title text-2xl sm:text-3xl md:text-5xl font-black mb-4">
                            Professional Experience
                        </h2>

                        <p className="text-[var(--clr-text-dim)] max-w-2xl mx-auto">
                            My experience in IT support, cloud engineering,
                            and DevOps automation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* DEVOPS ENGINEERING JOURNEY */}
            <section
                id="journey"
                className="section bg-transparent"
                ref={sectionRef}
            >
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="section-header animate-up text-center mb-20">
                        <span className="section-subtitle text-[var(--clr-accent)] font-mono uppercase tracking-widest text-sm mb-2 block">
                            Roadmap
                        </span>

                        <h2 className="section-title text-2xl sm:text-3xl md:text-5xl font-black mb-4">
                            DevOps Engineering Journey
                        </h2>

                        <p className="text-[var(--clr-text-dim)] max-w-xl mx-auto">
                            Tracing the evolution from network packets to
                            automated cloud ecosystems.
                        </p>
                    </div>

                    <div className="timeline relative max-w-5xl mx-auto px-0 sm:px-4">
                        <div className="timeline-track absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[rgba(255,255,255,0.05)]">
                            <div
                                className="timeline-track-progress absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--clr-accent)] to-[var(--clr-accent-2)] shadow-[0_0_15px_var(--clr-accent)] transition-all duration-300 ease-out"
                                style={{
                                    height: `${scrollProgress * 100}%`,
                                }}
                            />
                        </div>

                        <div className="timeline-items space-y-24 md:space-y-32">
                            {journeyPhases.map((phase, idx) => (
                                <div
                                    key={phase.phase}
                                    className={`timeline-item relative flex items-start md:items-center gap-12 md:gap-0 ${
                                        idx % 2 === 0
                                            ? 'md:flex-row'
                                            : 'md:flex-row-reverse'
                                    }`}
                                >
                                    <div
                                        className={`timeline-node absolute left-[20px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10 transition-all duration-700 ${
                                            scrollProgress * 100 > idx * 16
                                                ? 'bg-[var(--clr-accent)] shadow-[0_0_20px_var(--clr-accent)] scale-125'
                                                : 'bg-[#1a1c23] border-2 border-[rgba(255,255,255,0.1)]'
                                        }`}
                                    >
                                        {scrollProgress * 100 > idx * 16 && (
                                            <div className="absolute inset-0 rounded-full animate-ping bg-[var(--clr-accent)] opacity-40" />
                                        )}
                                    </div>

                                    <div
                                        className={`timeline-card-wrapper w-full md:w-[45%] pl-10 md:pl-0 ${
                                            idx % 2 === 0
                                                ? 'timeline-reveal-left'
                                                : 'timeline-reveal-right'
                                        }`}
                                    >
                                        <div className="timeline-card card p-6 sm:p-8 border border-[var(--clr-card-border)] bg-[var(--clr-card-bg)] hover:border-[var(--clr-accent)] transition-all duration-500 rounded-3xl group relative overflow-hidden h-full">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--clr-accent)] opacity-[0.02] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity" />

                                            <span className="timeline-phase-label text-[var(--clr-accent)] font-black text-[10px] uppercase tracking-[0.2em] mb-3 block">
                                                PHASE {phase.phase}
                                            </span>

                                            <h3 className="timeline-title text-2xl font-black mb-4 group-hover:text-white transition-colors">
                                                {phase.title}
                                            </h3>

                                            <p className="timeline-description text-sm text-[var(--clr-text-dim)] leading-relaxed mb-8">
                                                {phase.desc}
                                            </p>

                                            <div className="timeline-tags flex flex-wrap gap-2">
                                                {phase.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="tag px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[var(--clr-text-dim)] group-hover:border-[rgba(0,210,255,0.2)] group-hover:text-white transition-all"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:block md:w-[45%]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style>
                {`
                    .experience-card,
                    .timeline-reveal-left,
                    .timeline-reveal-right {
                        opacity: 0;
                        transform: translateY(20px);
                        transition:
                            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                            border-color 0.3s ease,
                            box-shadow 0.3s ease;
                    }

                    @media (min-width: 768px) {
                        .experience-reveal-left {
                            transform: translateX(-35px);
                        }

                        .experience-reveal-right {
                            transform: translateX(35px);
                        }

                        .timeline-reveal-left {
                            transform: translateX(-60px);
                        }

                        .timeline-reveal-right {
                            transform: translateX(60px);
                        }
                    }

                    .experience-card.animate-in,
                    .timeline-item.animate-in .timeline-reveal-left,
                    .timeline-item.animate-in .timeline-reveal-right {
                        opacity: 1;
                        transform: translate(0, 0);
                    }

                    .experience-card:hover,
                    .timeline-card {
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    }

                    .experience-card:hover,
                    .timeline-card:hover {
                        border-color: var(--clr-accent);
                        box-shadow: 0 20px 50px rgba(0, 210, 255, 0.1);
                        transform: translateY(-5px);
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .experience-card,
                        .timeline-reveal-left,
                        .timeline-reveal-right {
                            opacity: 1;
                            transform: none;
                            transition: none;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Journey;
