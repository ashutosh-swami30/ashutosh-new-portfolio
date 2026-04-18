

function About() {
    return (
        <>
            <section id="about" className="section-dark py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg leading-relaxed text-[#e5e5e5] mb-6">
                                I'm a Software Developer, based in India, passionate about building software and tools that serves the user by improving their QoL. 
                            </p>

                            <p className="text-lg leading-relaxed text-[#e5e5e5]">
                                Simplicity, accessibility and a tad bit of curiosity in exploring different tools and technologies.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <img src="/Ashutosh_pfp.jpeg" alt="The Guy" className="w-72 h-72 rounded-full object-cover border-4 border-[#aaaaaa] shadow-lg"></img>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}
export default About;