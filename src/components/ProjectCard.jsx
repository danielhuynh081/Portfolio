import { ExternalLink, Code } from "lucide-react";

const ProjectCard = ({ title, description, tags, github, demo }) => {
  return (
    <div className="group bg-surface rounded-lg overflow-hidden shadow-md border border-border transition-transform duration-300 hover:scale-105">
      {/* Project Preview and links */}
      <div className="relative aspect-video bg-surface overflow-hidden border border-border mb-6">
        <div className="absolute inset-0 bg-slate-200 transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 backdrop-blur-sm">
          <div className="flex space-x-4">
            <a
              href={github}
              className="p-3 bg-white text-primary hover:text-accent transition-colors shadow-sm"
              title="View Code"
            >
              <Code size={20} />
            </a>
            <a
              href={demo}
              className="p-3 bg-white text-primary hover:text-accent transition-colors shadow-sm"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
      {/* Project Details */}
      <div className="mx-2 px-2">
        <h3 className="text-xl mb-2 font-bold text-primary tracking-tight group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[8px] rounded-lg font-bold uppercase tracking-widest text-slate-400 border border-bg-surface rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
