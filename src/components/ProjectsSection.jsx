import { ArrowRight, ExternalLink, Github, GithubIcon } from 'lucide-react'
import React from 'react'

const projects = [
  {
    id: 1, 
    title: "Quine-McCluskey App", 
    description: "A project that is an implementation of the Quine-McCluskey Algorithm in the Product of Sums (POS) Form.", 
    image: "./projects/qmapp.png", 
    tags: ["React", "HTML/CSS", "Github Pages"], 
    website: "https://conrad-tinio.github.io/CS130-MP1-JAYME-TINIO/", 
    github: "https://github.com/Conrad-Tinio/CS130-MP1-JAYME-TINIO", 
  },

  {
    id: 2, 
    title: "Sudoku", 
    description: "A project that solves any 9x9 Sudoku puzzle using backtracking and generates new puzzles with adjustable difficulty. Features an interactive UI with real-time validation and a clean design.", 
    image: "./projects/sudoku.png", 
    tags: ["React", "HTML/CSS"], 
    website: "https://conrad-tinio.github.io/Sudoku/", 
    github: "https://github.com/Conrad-Tinio/Sudoku", 
  },

  {
    id: 3, 
    title: "Login and Signup", 
    description: "A clean and intuitive authentication system built with React and Django, featuring form validation, password hashing, and error handling for a seamless user experience.", 
    image: "./projects/login-and-signup.png", 
    tags: ["React", "HTML/CSS", "DjangoDB", "Render"], 
    website: "https://conrad-tinio.github.io/USER-LOGIN-AND-REGISTRATION/", 
    github: "https://github.com/Conrad-Tinio/USER-LOGIN-AND-REGISTRATION", 
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-glow'>
          {" "}
          My <span className='text-primary'> Projects </span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each project was carefully crafted with 
          attention to detail, performance, and user experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full'>
            <div className='h-48 overflow-hidden'>
              <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
            </div>
          
            <div className='p-6 flex flex-col flex-grow'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tags.map((tag) => (
                  <span key={tag} className='px-3 py-1 text-s font-medium rounded-full border bg-primary/20 text-secondary-foreground text-primary'>
                    {tag}
                  </span>
                ))}
              </div>
          
              <h3 className='text-xl font-bold mb-4 text-left text-muted-foreground'> {project.title} </h3>
              <p className='text-justify flex-grow mb-7'> {project.description} </p>
          
              <div className='flex justify-between items-center mt-auto'>
                <div className='flex space-x-3'>
                  <a href={project.website} target='_blank' 
                     className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <ExternalLink size={20}/>
                  </a>
                  <a href={project.github} target='_blank' 
                     className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <Github size={20}/>
                  </a>
                </div>
              </div>
            </div>

          </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a className='cosmic-buttons w-fit flex items-center mx-auto gap-2' href='https://github.com/Conrad-Tinio' target='_blank'>
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
