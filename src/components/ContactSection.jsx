import { Facebook, Github, Instagram, Linkedin, Locate, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

export default function ContactSection() {
  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-glow'>
          {" "}
          <span className='text-primary'> Contact </span> Me
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Have a project in mind or want to collaborate? Feel free to reach out. 
          I'm alwayds open to discussing new opportunities.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-bold mb-12 text-primary'> Contact Information </h3>
            <div className='space-y-6 text-left'>
              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/20'>
                  <Mail className='h-6 w-6 text-primary'/> 
                </div>
                <div>
                  <h4 className='font-bold'> Email </h4>
                  <a href='mailto:specterdev05@gmail.com' className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                    specterdev05@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/20'>
                  <Phone className='h-6 w-6 text-primary'/> 
                </div>
                <div>
                  <h4 className='font-bold'> Phone Number </h4>
                  <a href='tel:+639392898357' className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                    +63 939 289 8357  
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/20'>
                  <MapPin className='h-6 w-6 text-primary'/> 
                </div>
                <div>
                  <h4 className='font-bold'> Location </h4>
                  <a className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                    Vancouver, Canada
                  </a>
                </div>
              </div>

            </div>

            <div className='pt-8'> 
              <h4 className='font-bold text-primary text-2xl mb-4'> Connect with Me </h4>
              <div className='flex space-x-4 justify-center'>
                <a className='cursor-pointer' target='_blank' href='https://www.facebook.com/andrei.tinio.5'>
                  <Facebook />
                </a>
                <a className='cursor-pointer' target='_blank' href='https://www.linkedin.com/in/louis-conrad-andrei-tinio-6a092b316/'>
                  <Linkedin />
                </a>
                <a className='cursor-pointer' target='_blank' href='https://github.com/Conrad-Tinio'>
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-bold mb-6'>Send a <span className='text-primary'>Message</span></h3>
            <form className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                <input type='text' id='name' name='name' required 
                       className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                       placeholder='e.g. Conrad Tinio...'/>
              </div>

              <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                <input type='email' id='email' name='email' required 
                       className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                       placeholder='e.g. conradtinio2004@gmail.com'/>
              </div>

              <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                <textarea id='message' name='message' required 
                       className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                       placeholder='Type a message...'/>
              </div>

              <button type='submit' className={cn(
                "cosmic-buttons flex w-full items-center justify-center gap-2", 
                
              )}>
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
