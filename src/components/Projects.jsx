const projects = [
    {
        href: 'https://github.com/ashutosh-swami30/Voithos-VA',
        label: 'Voithos',
        title: 'Voithos',
        stack: 'Flask • Python • Electron.js • React.js'
    },

    {
        href: '#',
        label: 'SafeSound',
        title: 'In Active Development',
        stack: 'Kotlin • Jetpack Compose • RoomDB'
    }
]

function Projects() {

    return (
        <>
            <section id="projects" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">Featured Projects</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <a key={project.href} href={project.href} target="_blank" rel="noopener noreferrer"
                            className="group block bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#111111] hover:border-[#aaaaaa] transition-all duration-300 hover:-translate-y-2">

                            <div className="h-48 flex items-start justify-start p-4"
                            style={{background: 'linear-gradient(135deg, #F0F2F0 0%, #000C40 100%)'}}>
                                <span className="text-5xl font-bold opacity-45 text-black">{project.label}</span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                                <p className="text-[#aaaaaa] mb-4">{project.stack}</p>
                                <span className="text-sm font-medium text-white group-hover:text-[#aaaaaa]">View Project →</span>
                            </div>
                            </a>
                        ))}

                    </div>

                </div>
                
            </section>
        </>
    )
}

export default Projects;