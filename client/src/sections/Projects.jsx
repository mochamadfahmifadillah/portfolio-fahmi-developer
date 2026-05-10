import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Kirava Logistics',
    description:
      'Logistics management website focused on shipment tracking, responsive UI, and business workflow optimization.',
    image: '/Kirava-LandingPage.png',
    stack: ['React', 'Tailwind CSS', 'API'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Education Learning',
    description:
      'Learning platform website designed for online education experience with responsive layout and interactive UI.',
    image: '/images/education-learning.png',
    stack: ['React', 'JavaScript', 'CSS'],
    github: '#',
    demo: '#',
  },
]

const Projects = () => {
  return (
    <section className="py-32 px-6 bg-[#362EED]/80">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects
          </h2>
        </div>

        {/* PROJECT LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2  place-items-center">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects