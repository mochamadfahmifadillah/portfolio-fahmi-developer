const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
  backend: ['Node.js', 'Express', 'MongoDB', 'REST API'],
  tools: ['Git', 'GitHub', 'Postman', 'Vite'],
}

const Skills = () => {
  return (
    <section className="py-32 px-6 bg-slate-950">
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
        <div className="grid md:grid-cols-3 gap-10">

          <SkillCard title="Frontend" items={skills.frontend} />
          <SkillCard title="Backend" items={skills.backend} />
          <SkillCard title="Tools" items={skills.tools} />

        </div>

      </div>
    </section>
  )
}

const SkillCard = ({ title, items }) => {
  const colors = ['#c7c7ff', '#ffd8be', '#a9ecbf', '#f3bbe1']

  return (
    <div className="text-white">

      {/* TITLE */}
      <h3 className="text-2xl font-semibold mb-6 text-center">
        {title}
      </h3>

      {/* 2x2 GRID CARD STYLE */}
      <div className="grid grid-cols-2 gap-3">

        {items.slice(0, 4).map((item, index) => (
          <div
            key={item}
            className="
              w-full h-[110px]
              rounded-xl
              flex flex-col items-center justify-center
              font-semibold text-black
              transition-all duration-700
              hover:scale-[1.6]
              hover:rotate-180
              cursor-pointer
            "
            style={{
              background: colors[index % colors.length],
            }}
          >
            {item}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Skills