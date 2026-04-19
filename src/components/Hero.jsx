import BlurText from "./ui/BlurText";


const sociallinks = [
    {href: "mailto:ashutoshswami2003@gmail.com", icon: 'fas fa-envelope', className: 'text-gray-300 group-hover:text-white', label:'Email'},
    {href: "https://github.com/ashutosh-swami30", icon: 'devicon-github-original', className: 'text-gray-300 group-hover:text-white', label:'GitHub', external: true},
    {href: "https://www.linkedin.com/in/ashutoshswami30/", icon: 'devicon-linkedin-plain', className: 'text-blue-500 group-hover:text-white', label:'LinkedIn', external: true},
    {href: "https://leetcode.com/u/ashutoshswami2003/", icon: 'devicon-leetcode-plain', className: 'text-yellow-500 group-hover:text-white', label:'LeetCode', external: true},
]


function Hero() {
    
    return (
        <>
            <section className='min-h-screen flex items-center justify-center px-5 sm:px-6 pt-20 pb-12'>
                <div className="max-w-5xl w-full text-center">
                    <BlurText
                        text="Hello, I'm Ashutosh Swami"
                        delay={80}
                        animateBy="words"
                        direction="top"
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-[#e5e5e5] to-white bg-clip-text text-transparent justify-center"
                    />

                    <BlurText
                        text="Software Developer (Full-Stack), based in India, skilled in Python, Flask, React.js, Node.js, PostgreSQL."
                        delay={40}
                        animateBy="words"
                        direction="top"
                        className="text-lg sm:text-2xl text-[#aaaaaa] max-w-3xl mx-auto mb-10 justify-center"
                    />

                    <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-10">
                        {sociallinks.map((link) => (
                            <a key={link.label} href={link.href}
                            {...(link.external ? { target: '_blank', rel: 'noopener noreferer'} : {})}
                            className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
                            aria-label={link.label}>
                                <i className={`${link.icon} text-4xl ${link.className}`}></i>
                            </a>
                        ))}
                    </div>

                    <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8">
                        <a href="#projects" 
                            style={{minWidth: '180px'}}
                            className="px-8 py-4 bg-black text-white font-semibold rounded-full border border-white/30 text-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl w-full sm:w-auto text-center">

                            View Projects

                        </a>

                        <a href="https://drive.google.com/file/d/1-7NA4X_r3reJlJ_eK28LJ79WX2UC6O0V/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                        style={{minWidth: '180px'}} className="px-8 py-4 bg-black text-white font-semibold rounded-full border border-white/30 text-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl w-full sm:w-auto text-center">
                            
                            Resume
                            
                        </a>

                    </div>
                
                </div>

            </section>
        </>
    )
    
}

export default Hero;
