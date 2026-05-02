const About = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <p className="text-sky-400 font-medium mb-4">
            About Me
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Passionate Fullstack Developer
          </h2>

          <p className="text-slate-400 leading-relaxed">
            I focus on building scalable and modern web applications
            using React, Node.js, REST API, and clean architecture.
          </p>

          <p className="text-slate-400 leading-relaxed mt-4">
            I enjoy crafting responsive UI, solving backend problems,
            and creating seamless user experiences.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-sky-400">3+</h3>
              <p className="text-slate-400">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-sky-400">10+</h3>
              <p className="text-slate-400">Projects Built</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-sky-400">Fullstack</h3>
              <p className="text-slate-400">React & Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About