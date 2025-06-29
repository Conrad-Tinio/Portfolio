import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-glow'>
                About <span className='text-primary'>Me</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'> 
                    <h3 className='text-2xl font-semibold text-primary'>Passionate Web Developer & Tech Creator</h3>
                    <p className='text-muted-foreground'>
                        With over 5 years of experience in web development, I specialize in creating responsive, 
                        accessible, and performant web applications using modern technologies.
                    </p>
                    <p className='text-muted-foreground'>
                        I'm passionate about creating elegant solutions to complex problems, and I'm constantly 
                        learning new technologies and techniques to stay at the forefront of the ever-evolving 
                        web landscape.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 pt-2 justify-center'>
                        <a href='#contact' className='cosmic-buttons'>
                            {" "}
                            Contact Me
                        </a>
                        <a href='#contact' className='cosmic-buttons'>
                            {" "}
                            Download My CV
                        </a>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-6'> 
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Code className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-bold text-primary text-lg'>Web Development</h4>
                                <p>
                                    {" "}
                                    Creating responsive websites and web applications with 
                                    modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <User className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-bold text-primary text-lg'>UI/UX Design</h4>
                                <p>
                                    {" "}
                                    Designing intuitive user interface and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Briefcase className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-bold text-primary text-lg'>DevOps Engineer</h4>
                                <p>
                                    {" "}
                                    I automate and optimize development pipelines to deliver scalable, secure, 
                                    and high-performance infrastructure through CI/CD, cloud technologies, and 
                                    infrastructure-as-code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
