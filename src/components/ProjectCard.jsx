import { Code } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  tags,
  github,
  image,
  imagePosition = "center",
}) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-surface shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: imagePosition }}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:group-hover:opacity-100">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-primary shadow-lg transition-colors hover:text-accent"
            >
              <Code size={18} />
              View Source
            </a>
          ) : (
            <div className="rounded-lg bg-white px-5 py-3 text-slate-600 italic shadow-lg">
              Code available upon request
            </div>
          )}
        </div>

        {/* Mobile View Source Link */}
        <div className="absolute bottom-2 right-2 md:hidden">
            {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur-sm"
                  aria-label="View Source"
                >
                  <Code size={20} />
                </a>
            )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-primary transition-colors group-hover:text-accent">
          {title}
        </h3>

        <p className="mb-5 text-sm leading-7 text-slate-500">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
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
