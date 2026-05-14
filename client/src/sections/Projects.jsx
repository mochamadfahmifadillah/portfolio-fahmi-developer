import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Kirava Logistics',
    description:
      'Logistics management website focused on shipment tracking, responsive UI, and business workflow optimization.',
    image: '/Kirava-LandingPage.png',
    stack: ['React', 'Tailwind CSS', 'API'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Education Learning',
    description:
      'Learning platform website designed for online education experience with responsive layout and interactive UI.',
    image: '/images/education-learning.png',
    stack: ['React', 'JavaScript', 'CSS'],
    github: '#',
    demo: '#',
  },
]

const Projects = () => {
  return (
    <section className="py-32 px-6 bg-[#362EED]/80 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div
          className="
            text-center
            mb-20

            opacity-0
            animate-[fadeUp_1s_ease_forwards]
          "
        >

          <h2
            className="
              text-5xl md:text-6xl
              font-extrabold

              text-transparent
              bg-clip-text

              bg-gradient-to-r
              from-white
              via-sky-300
              to-purple-300

              animate-gradient

              drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]
            "
          >
            Projects
          </h2>

          <div
            className="
              w-32 h-1.5
              bg-white/70

              mx-auto
              mt-7

              rounded-full

              shadow-[0_0_20px_rgba(255,255,255,0.5)]
            "
          />

        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="
                group
                relative

                w-full
                max-w-[520px]

                rounded-[30px]

                overflow-hidden

                bg-white/10
                backdrop-blur-xl

                border border-white/10

                shadow-[0_0_35px_rgba(0,0,0,0.25)]

                transition-all duration-500

                hover:-translate-y-4
                hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]

                opacity-0
                animate-[fadeUp_1s_ease_forwards]
              "
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >

              {/* GLOW EFFECT */}
              <div
                className="
                  absolute
                  w-60 h-60

                  bg-sky-400/20
                  blur-3xl
                  rounded-full

                  -top-20
                  -left-16
                "
              />

              <div
                className="
                  absolute
                  w-60 h-60

                  bg-purple-500/20
                  blur-3xl
                  rounded-full

                  -bottom-20
                  -right-16
                "
              />

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[280px]

                    object-cover

                    transition-all duration-700

                    group-hover:scale-110
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-8">

                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white

                    mb-4
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-slate-200
                    leading-relaxed

                    mb-6
                  "
                >
                  {project.description}
                </p>

                {/* STACK */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="
                        px-4 py-2

                        rounded-full

                        bg-white/10
                        border border-white/10

                        text-sm
                        text-white

                        backdrop-blur-md

                        transition duration-300

                        hover:bg-white/20
                        hover:scale-105
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex items-center justify-center gap-2

                      py-3

                      rounded-2xl

                      bg-white/10
                      border border-white/10

                      text-white
                      font-semibold

                      transition-all duration-300

                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex items-center justify-center gap-2

                      py-3

                      rounded-2xl

                      bg-gradient-to-r
                      from-sky-400
                      to-purple-500

                      text-white
                      font-semibold

                      transition-all duration-300

                      hover:scale-105
                      hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                    "
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects