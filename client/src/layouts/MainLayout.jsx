import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout