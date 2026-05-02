import { motion } from 'framer-motion'

/* From uiverse.io by @FrM-bot */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 w-full">

      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

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
            className="text-5xl md:text-7xl font-bold leading-tight text-white"
          >
            Building Modern
            <br />
            Web Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-slate-400 mt-6 max-w-xl md:mx-0 mx-auto text-lg"
          >
            I build responsive, scalable, and modern web applications using React,
            Node.js, and clean architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap"
          >
            <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-xl font-semibold transition">
              View Projects
            </button>

            <button className="border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-xl transition">
              Contact Me
            </button>
          </motion.div>

          <p className="text-xs text-slate-600 mt-10">
            From uiverse.io by @FrM-bot
          </p>

        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >

          <div className="
            w-[260px] md:w-[340px]
            relative
            rounded-[0.5rem_2rem]
            shadow-[0_15px_30px_-5px_rgba(0,0,0,0.6)]
            transition-all duration-300
            hover:scale-[1.05]
          ">

            {/* IMAGE */}
            <div className="h-[340px] md:h-[430px] overflow-hidden rounded-[0.5rem_2rem] grid">

              <div className="w-full h-full bg-gradient-to-r from-[#33001b] to-[#ff0084] transition-all duration-300 hover:scale-125" />

            </div>

            {/* DESCRIPTION */}
            <div className="
              absolute bottom-3 left-3
              w-[92%]
              px-4 py-2
              text-left
              backdrop-blur-[3px]
              bg-black/20
              rounded-[0.5rem_2rem]
              transition-all duration-500
              hover:translate-x-2 hover:rotate-[3deg]
            ">
              <h3 className="text-white text-sm font-semibold">
                Kirava Logistics
              </h3>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero