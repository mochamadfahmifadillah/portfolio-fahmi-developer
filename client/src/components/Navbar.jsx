import {
  FaUser,
  FaCode,
  FaCertificate,
  FaEnvelope,
} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#362EED]/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="font-bold text-xl text-white">
          Personal Portfolio
        </h1>

        {/* RIGHT SIDE (MENU + SWITCH) */}
        <div className="flex items-center gap-6">

          {/* MENU */}
    <div className="navigation-card">

  {/* ABOUT */}
  <a href="#about" className="tab about-tab">
    <FaUser className="text-[22px]" />
  </a>

  {/* PROJECTS */}
  <a href="#projects" className="tab projects-tab">
    <FaCode className="text-[22px]" />
  </a>

  {/* CERTIFICATES */}
  <a href="#certificate" className="tab certificates-tab">
    <FaCertificate className="text-[22px]" />
  </a>

  {/* CONTACT */}
  <a href="#contact" className="tab contact-tab">
    <FaEnvelope className="text-[22px]" />
  </a>

</div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar