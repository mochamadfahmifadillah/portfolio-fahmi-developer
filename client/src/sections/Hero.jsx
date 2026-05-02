import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sky-400 font-medium mb-4"
        >
          Fullstack JavaScript Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Building Modern
          <br />
          Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg"
        >
          I build responsive, scalable, and modern web applications using React,
          Node.js, and clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-xl font-semibold transition">
            View Projects
          </button>

          <button className="border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-xl transition">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero