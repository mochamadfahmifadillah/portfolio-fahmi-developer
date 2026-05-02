import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Kirava Logistics',
    description:
      'Logistics management website focused on shipment tracking, responsive UI, and business workflow optimization.',
    image: '/images/kirava-logistics.png',
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
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects