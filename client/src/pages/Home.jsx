import MainLayout from '../layouts/MainLayout'
import Hero from '../sections/Hero'
import About from '../sections/About'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
    </MainLayout>
  )
}

export default Home