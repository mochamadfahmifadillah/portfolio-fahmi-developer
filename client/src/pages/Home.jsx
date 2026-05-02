import MainLayout from '../layouts/MainLayout'
import Hero from '../sections/Hero'
import About from '../sections/About'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  )
}

export default Home