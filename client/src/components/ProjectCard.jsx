const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-sky-500/30 transition-all duration-300 shadow-lg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-xl text-sm font-medium transition"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-xl text-sm transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard