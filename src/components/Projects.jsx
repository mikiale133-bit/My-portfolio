import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SaaS Landing Platform",
    image: "/projects/saas.jpg",
    tech: ["React", "Tailwind"],
    live: "https://example.com",
    source: "https://github.com/username/project",
  },
  {
    title: "E-commerce Web App",
    image: "/projects/ecommerce.jpg",
    tech: ["Next.js", "Stripe"],
    live: "https://example.com",
    source: "https://github.com/username/project",
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.jpg",
    tech: ["HTML", "CSS", "JS"],
    live: "https://example.com",
    source: "https://github.com/username/project",
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.jpg",
    tech: ["HTML", "CSS", "JS"],
    live: "https://example.com",
    source: "https://github.com/username/project",
  },
  // add more projects here
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="text-white bg-black">
      <div className="px-6 mx-auto max-w-7xl py-28">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Selected{" "}
            <span
              className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              projects
            </span>
          </h2>
          <p className="max-w-xl mt-4 text-zinc-400">
            A focused selection of production-ready work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden transition border group rounded-2xl border-white/10 bg-white/5 backdrop-blur hover:border-white/20">
      {/* Image */}
      <div className="relative aspect-[7/4] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-3 text-sm font-semibold">{project.title}</h3>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white"
          >
            Live <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white"
          >
            Code <Github className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
