const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sky-400 font-medium mb-4">
          Contact
        </p>

        <h2 className="text-4xl font-bold text-white mb-6">
          Let’s Work Together
        </h2>

        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Feel free to reach out for collaboration, freelance work,
          or just to say hello.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-sky-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-sky-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-sky-500"
          />

          <button
            className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact