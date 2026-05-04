const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        <h1 className="font-bold text-xl text-white">
          Portfolio Fahmi
        </h1>

        {/* NEUMORPH CARD */}
        <div className="
          flex
          bg-[#e4e4e4]
          rounded-xl
          p-1
        ">

          {/* ABOUT */}
          <button className="
            flex items-center gap-2
            px-4 py-2 rounded-lg text-sm font-bold uppercase
            text-[#3035cb]
            bg-[#e4e4e4]
            shadow-[inset_5px_5px_5px_#c4c4c4,inset_-5px_-5px_5px_#ffffff]
            transition
            hover:bg-[#3035cb] hover:text-white hover:shadow-none
          ">
            About
          </button>

          {/* PROJECTS */}
          <button className="
            flex items-center gap-2
            px-4 py-2 rounded-lg text-sm font-bold uppercase
            text-[#333]
            bg-[#e4e4e4]
            shadow-[inset_5px_5px_5px_#c4c4c4,inset_-5px_-5px_5px_#ffffff]
            transition
            hover:bg-[#333] hover:text-white hover:shadow-none
          ">
            Projects
          </button>

          {/* CONTACT */}
          <button className="
            flex items-center gap-2
            px-4 py-2 rounded-lg text-sm font-bold uppercase
            text-[#b82323]
            bg-[#e4e4e4]
            shadow-[inset_5px_5px_5px_#c4c4c4,inset_-5px_-5px_5px_#ffffff]
            transition
            hover:bg-[#b82323] hover:text-white hover:shadow-none
          ">
            Contact
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar