import jsLogo from '../assets/javascript.svg'
import reactLogo from '../assets/react.svg'
import reduxLogo from '../assets/redux.svg'
import nodeLogo from '../assets/nodejs.svg'
import expressLogo from '../assets/express-js.svg'
import mongoLogo from '../assets/mongo.svg'
import gitLogo from '../assets/git.svg'
import githubLogo from '../assets/github.svg'
import postmanLogo from '../assets/postman.svg'

const skills = [
  { name: 'JavaScript', image: jsLogo },
  { name: 'React', image: reactLogo },
  { name: 'Redux', image: reduxLogo },
  { name: 'Node.js', image: nodeLogo },
  { name: 'Express', image: expressLogo },
  { name: 'MongoDB', image: mongoLogo },
  { name: 'Git', image: gitLogo },
  { name: 'GitHub', image: githubLogo },
  { name: 'Postman', image: postmanLogo },
]

const Skills = () => {
  return (
    <section className="py-32 px-6 bg-[#362EED]/80">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sky-400 font-medium mb-4">
            Tech Stack
          </p>

          <h2 className="text-4xl font-bold text-white">
            Technologies I Work With
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

      </div>
    </section>
  )
}

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500">

      <div className="
        group relative overflow-hidden
        flex justify-center items-center
        h-56 w-72
        bg-[#000]/80
        rounded-2xl
        outline outline-slate-400 -outline-offset-8
        origin-bottom-right
        transition-all duration-500
        hover:rotate-12

        before:absolute before:w-12 before:h-12 before:bg-sky-400
        before:rounded-full before:blur-xl
        before:top-20 before:right-16

        after:absolute after:w-12 after:h-12 after:bg-sky-700
        after:rounded-full after:blur-xl
        after:bottom-32 after:right-16

        hover:before:translate-y-12 hover:before:-translate-x-32
        hover:after:translate-x-24
      ">

        <div className="z-10 flex flex-col items-center gap-3">

          {/* LOGO */}
          <img
            src={skill.image}
            alt={skill.name}
            className="w-16 h-16 object-contain transition duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
          />

          {/* NAME */}
          <p className="text-gray-50 text-sm">
            {skill.name}
          </p>

        </div>

      </div>
    </div>
  )
}

export default Skills