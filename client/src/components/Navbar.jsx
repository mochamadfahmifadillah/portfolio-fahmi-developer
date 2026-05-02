const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <h1 className="font-bold text-xl text-white">
          Fahmi.dev
        </h1>

        <ul className="flex gap-6 text-slate-300">
          <li className="hover:text-white transition cursor-pointer">
            About
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Projects
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar