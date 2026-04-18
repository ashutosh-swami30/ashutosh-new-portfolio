const techs = [
  { icon: 'devicon-react-original colored',        label: 'React'      },
  { icon: 'devicon-tailwindcss-original colored',  label: 'Tailwind'   },
  { icon: 'devicon-typescript-original colored',   label: 'TypeScript' },
  { icon: 'devicon-javascript-plain colored',        label: 'JavaScript'  },
  { icon: 'devicon-nodejs-plain-wordmark',         label: 'Node.js'    },
  { icon: 'devicon-python-plain-wordmark colored', label: 'Python'     },
  { icon: 'devicon-django-plain-wordmark',         label: 'Django'     },
  { icon: 'devicon-mongodb-plain-wordmark',        label: 'MongoDB'    },
]

export default function TechStack() {
  return (
    <section id="tech" className="section-dark py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center">
          {techs.map((tech) => (
            <div key={tech.label} className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <i className={`${tech.icon} text-5xl md:text-6xl mb-3`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}