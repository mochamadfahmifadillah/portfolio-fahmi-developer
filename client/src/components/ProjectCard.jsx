const ProjectCard = ({ project }) => {
  return (
    <div className="card group">

      {/* IMAGE */}
      <img
        src={project.image}
        alt={project.title}
        className="card__img"
      />

      {/* CONTENT */}
      <div className="card__descr-wrapper">

        <h3 className="card__title">
          {project.title}
        </h3>

        <p className="card__descr">
          {project.description}
        </p>

        {/* STACK */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="
                text-[12px]
                px-3 py-1
                rounded-full
                bg-[#362EED]/10
                text-[#362EED]
                font-semibold
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="card__links">

          {/* LIVE DEMO */}
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Live Demo
          </a>

          {/* GITHUB */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  )
}

export default ProjectCard