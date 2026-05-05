import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import profile from '../assets/profile-fahmi.png' // ✅ FIX IMPORT
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
/* From uiverse.io by @FrM-bot */

const Hero = () => {
  const roles = [
    'Front End Developer',
    'Fullstack Developer',
    'Dicoding Asah x Accenture Graduate',
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

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
            Hello, I'm Fahmi
          </motion.p>

          {/* 🔥 DYNAMIC TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-white h-[80px] md:h-[120px]"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
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
  className="mt-10 flex justify-center md:justify-start gap-8"
>

  {/* LINKEDIN */}
  <a
    href="https://linkedin.com/"
    target="_blank"
    className="
      w-[70px] h-[70px]
      bg-white
      rounded-full
      flex items-center justify-center
      shadow-[0_0_20px_rgba(0,0,0,0.5)]
      transition-all duration-500
      hover:scale-[1.3] hover:-rotate-[360deg] hover:-translate-y-3
    "
    style={{ animation: "sway 2s infinite alternate" }}
  >
    <img
      src={linkedin}
      alt="LinkedIn"
      className="w-8 h-8 transition-all duration-500 hover:scale-125"
    />
  </a>

  {/* GITHUB */}
  <a
    href="https://github.com/"
    target="_blank"
    className="
      w-[70px] h-[70px]
      bg-white
      rounded-full
      flex items-center justify-center
      shadow-[0_0_20px_rgba(0,0,0,0.5)]
      transition-all duration-500
      hover:scale-[1.3] hover:-rotate-[360deg] hover:-translate-y-3
    "
    style={{ animation: "sway 2s infinite alternate" }}
  >
    <img
      src={github}
      alt="GitHub"
      className="w-8 h-8 transition-all duration-500 hover:scale-125"
    />
  </a>

</motion.div>

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
            <div className="h-[340px] md:h-[430px] overflow-hidden rounded-[0.5rem_2rem]">
              <img
                src={profile}
                alt="Fahmi"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-125"
              />
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
                Mochamad Fahmi Fadillah
              </h3>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero