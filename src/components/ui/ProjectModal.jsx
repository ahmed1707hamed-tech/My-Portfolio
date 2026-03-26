import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div
        className="modal-overlay absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="modal-container relative bg-[var(--clr-terminal-bg)] border border-[var(--clr-card-border)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-[scaleIn_0.3s_ease-out]">
        
        {/* Terminal Header Style for Modal */}
        <div className="terminal-header bg-[var(--clr-terminal-header)] p-4 flex items-center justify-between border-b border-[var(--clr-card-border)]">
            <div className="terminal-controls flex gap-2">
                <span className="dot red w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                <span className="dot yellow w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="dot green w-3 h-3 rounded-full bg-[#27c93f]"></span>
            </div>
            <button
                onClick={onClose}
                className="modal-close-btn text-[var(--clr-text-dim)] hover:text-white transition-colors"
                aria-label="Close Modal"
            >
                <i className="fas fa-times"></i>
            </button>
        </div>

        <div className="modal-body overflow-y-auto max-h-[calc(90vh-60px)] p-0">
          <div className="modal-img-box h-64 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="modal-content p-8">
            <h2 className="text-3xl font-black mb-4 text-white">{project.title}</h2>
            
            <div className="project-tags flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.2)] text-[var(--clr-accent)]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="modal-description mb-8">
              <h3 className="text-sm font-mono text-[var(--clr-accent)] mb-2 uppercase">$ cat description.txt</h3>
              <p className="text-[var(--clr-text-dim)] leading-relaxed italic border-l-2 border-[var(--clr-accent)] pl-4">
                {project.description}
              </p>
            </div>

            <div className="modal-footer flex gap-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium flex-grow md:flex-initial"
                >
                  <i className="fab fa-github"></i> Repository
                </a>
                <button 
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg border border-[var(--clr-card-border)] text-white hover:bg-white/5 transition-all font-bold"
                >
                  Close
                </button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      ` }} />
    </div>
  );
};

export default ProjectModal;