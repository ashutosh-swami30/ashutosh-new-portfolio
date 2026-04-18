const experiences = [
  {
    date: 'March 2025 – June 2025',
    title: 'Full Stack Developer Intern',
    company: 'Anannt Education Pvt. Ltd. • Pune, India',
    bullets: [
      'GMAT Test App',
      'Developed a Full-Stack web application using React, Node.js, and PostgreSQL, enabling educators to analyze candidate performance and generate personalized study plans.',
      'Engineered JWT-based authentication with role-based scopes (admin/user) in the Node.js backend, securing 5+ sensitive RESTful API endpoints.',
      'Optimized PostgreSQL queries and schema design using Prisma ORM, reducing average API latency from 420ms to 270ms, a 36% improvement.',
      'Collaborated and led a team of interns in the SDLC of the web application.'
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-dark py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0 h-full w-0.5 bg-[#1a1a1a]" />
          <div className="space-y-16 relative">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 group">
                <div className="w-40 md:w-32 shrink-0 text-right md:text-left">
                  <span className="text-lg font-semibold text-[#aaaaaa]">{exp.date}</span>
                </div>
                <div className="relative flex-1 bg-[#1a1a1a] rounded-xl p-6 border border-[#111111] group-hover:border-[#aaaaaa] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
                  <div className="absolute -left-3 md:left-auto md:-right-3 top-8 w-6 h-6 bg-[#aaaaaa] rounded-full border-4 border-[#0a0a0a]" />
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-[#aaaaaa] mb-4">{exp.company}</p>
                  <ul className="space-y-2 text-[#e5e5e5] list-disc list-inside">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}