const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sky-400 font-medium mb-4">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-white mb-4">
            Let’s Work Together
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Feel free to reach out for collaboration, freelance work,
            or just to say hello.
          </p>
        </div>

        {/* Form Container */}
        <div className="flex justify-center items-center">

          <div
            className="
              w-full max-w-xl
              rounded-3xl
              bg-slate-950
              border border-slate-800
              p-10
              shadow-[inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.06)]
            "
          >

            <form className="flex flex-col gap-6">

              <h3 className="text-2xl font-semibold text-white text-center mb-4">
                Send Message
              </h3>

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  min-h-[52px]
                  bg-[#212121]
                  border-2 border-[#212121]
                  rounded-xl
                  px-4
                  text-white
                  outline-none
                  transition-all duration-300
                  shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.08)]
                  focus:scale-[1.02]
                  focus:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.08),inset_2px_2px_10px_rgba(0,0,0,1)]
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  min-h-[52px]
                  bg-[#212121]
                  border-2 border-[#212121]
                  rounded-xl
                  px-4
                  text-white
                  outline-none
                  transition-all duration-300
                  shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.08)]
                  focus:scale-[1.02]
                  focus:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.08),inset_2px_2px_10px_rgba(0,0,0,1)]
                "
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="
                  w-full
                  bg-[#212121]
                  border-2 border-[#212121]
                  rounded-xl
                  px-4
                  py-4
                  text-white
                  resize-none
                  outline-none
                  transition-all duration-300
                  shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.08)]
                  focus:scale-[1.02]
                  focus:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.08),inset_2px_2px_10px_rgba(0,0,0,1)]
                "
              />

              <button
                className="
                  py-4
                  rounded-xl
                  bg-[#212121]
                  border-2 border-[#212121]
                  text-white
                  font-semibold
                  cursor-pointer
                  transition-all duration-300
                  shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.08)]
                  hover:scale-[1.03]
                  hover:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.08),inset_2px_2px_10px_rgba(0,0,0,1)]
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact