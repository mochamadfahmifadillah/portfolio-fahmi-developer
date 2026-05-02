const skills = {
  frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Redux',
  ],
  backend: [
    'Node.js',
    'Express',
    'REST API',
    'MongoDB',
    'JWT',
  ],
  tools: [
    'Git',
    'GitHub',
    'Postman',
    'Webpack',
    'Vite',
  ],
}

const Skills = () => {
  return (
    <section className="py-32 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-medium mb-4">
            Tech Stack
          </p>

          <h2 className="text-4xl font-bold">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard title="Frontend" items={skills.frontend} />
          <SkillCard title="Backend" items={skills.backend} />
          <SkillCard title="Tools" items={skills.tools} />
        </div>
      </div>
    </section>
  )
}

const SkillCard = ({ title, items }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="bg-slate-800 px-4 py-2 rounded-xl text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills