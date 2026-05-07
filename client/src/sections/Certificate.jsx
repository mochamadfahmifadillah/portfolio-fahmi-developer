const certificates = [
  {
    id: 1,
    title: 'Frontend Developer',
    issuer: 'Dicoding',
    image: '/images/certificate-1.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Fullstack JavaScript',
    issuer: 'Dicoding',
    image: '/images/certificate-2.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Asah x Accenture Graduate',
    issuer: 'Dicoding x Accenture',
    image: '/images/certificate-3.png',
    link: '#',
  },
]

const Certificates = () => {
  return (
    <section className="py-32 px-6 bg-[#362EED]/80 ">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sky-400 font-medium mb-4">
            Certificates
          </p>

          <h2 className="text-4xl font-bold text-white">
            My Certifications
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>

      </div>
    </section>
  )
}

const CertificateCard = ({ cert }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-slate-800">

      {/* IMAGE */}
      <div className="h-[220px] overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* OVERLAY */}
      <div className="
        absolute inset-0
        bg-black/60
        opacity-0
        group-hover:opacity-100
        transition duration-300
        flex flex-col items-center justify-center text-center px-4
      ">
        <h3 className="text-white font-semibold text-lg">
          {cert.title}
        </h3>

        <p className="text-slate-300 text-sm mt-1">
          {cert.issuer}
        </p>

        <a
          href={cert.link}
          target="_blank"
          className="mt-4 bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
          View Certificate
        </a>
      </div>

    </div>
  )
}

export default Certificates