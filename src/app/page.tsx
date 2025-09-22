import BlogCard from '@/components/BlogCard'
import { Mail, Phone,Map } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' lg:flex relative'>

      <nav className='
      bg-white/60 backdrop-blur-md text-black flex items-center justify-between p-4 fixed top-0 left-0 right-0 
      lg:w-1/2 
      '>
        <Link href='/'>
            <p className='font-semibold text-lg'>Daniel Palmer</p>
        </Link>

        <div className='flex items-center gap-4'>
          <Link href='/#about'>About</Link>
          <Link href='/#portfolio'>Portfolio</Link>
          <Link href='/#contact'>Contact</Link>
        </div>
      </nav>

      <section className='min-h-screen lg:hidden bg-accent-100 text-white flex items-center justify-center'>
        <div className='flex flex-col items-center pt-20  gap-8'>
          <h1 className='font-bold text-5xl'>Daniel Palmer</h1>
          <img 
          className='aspect-square w-90 rounded-md'
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZSUyMGd1eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <p className='text-xl text-center'>Finance Content Writer & Ghostwriter | SEO-Optimized Finance Content</p>
        </div>
      </section>

      <main className='lg:w-1/2 p-10'>
        <div className='max-w-5xl mx-auto grid gap-10 py-8 px-4'>
          {/* about */}
          <section id='about' className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>About</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-1'>
              <p>I’m a creative finance content writer and ghostwriter with over five years of experience helping startups, consulting firms, and small businesses grow their online authority through SEO-driven finance content.</p>
              <p>I specialize in making complex financial topics—like U.S. taxes, retirement planning, budgeting, and financial regulations—clear and engaging. After years of ghostwriting for top clients, I’m now focused on building a bylined portfolio that showcases my expertise.</p>
            </div>
          </section>

           {/* Exp */}
          <section className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>Experience</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Freelance Finance Ghostwriter</h3>
              <span className='font-semibold italic text-sm'>Remote | 2015-Present</span>
              <ul className='list-disc pl-4 grid gap-0.5'>
                <li>Delivered high-quality finance content for boutique consulting firms, digital publications, and small businesses.</li>
                <li>Wrote on U.S. tax regulations, small business finance, employee benefits, and personal finance topics.</li>
                <li>Produced blogs, whitepapers, and website copy optimized for SEO, keywords, and reader engagement.</li>
                <li>Collaborated with editors, marketers, and founders to ensure accurate, impactful content.</li>
                <li>Helped companies grow online authority and organic traffic through consistent, well-researched content.</li>
              </ul>
            </div>
          </section>

           {/* Blogs */}
          <section id='portfolio' className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>Featured Work</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-2'>
              {/* blog card */}              
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
            </div>
          </section>

           {/* Education */}
          <section className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>Education</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Associate Degree in Business Administration</h3>
              <p>Santa Monica College, CA | Graduated: 2014</p>
            </div>
          </section>

           {/* Skills */}
          <section className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>Skills</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-2'>
              <div>
                <h3 className='font-semibold'>Finance & Tax Writing</h3>
                <p>U.S. tax regulations, retirement planning, employee benefits, and small business finance.</p>
              </div>
              <div>
                <h3 className='font-semibold'>Content Strategy & Ghostwriting</h3>
                <p>Blog articles, whitepapers, website content, and bylined/ghostwritten thought leadership pieces.</p>
              </div>
              <div>
                <h3 className='font-semibold'>SEO & Digital Publishing</h3>
                <p>Keyword research, metadata optimization, titles/headings, and publishing with WordPress, Ghost, and HubSpot.</p>
              </div>
              <div>
                <h3 className='font-semibold'>Research & Accuracy</h3>
                <p>Fact-checking, financial compliance, and translating complex topics into approachable insights</p>
              </div>
              <div>
                <h3 className='font-semibold'>Collaboration & Tools</h3>
                <p>Google Workspace (Docs, Sheets, Slides), content calendars, remote teamwork, and project management under tight deadlines.</p>
              </div>
            </div>
          </section>

           {/* Contact */}
          <section id='contact' className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>Let’s Work Together</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-3'>
              <p>Looking for a reliable finance content writer to turn complex topics into clear, SEO-friendly content? I’d love to help.</p>
              <Link 
              className='flex items-center gap-2'
              href=' href="mailto:palmer18daniel@gmail.com"'>
                <div className='bg-accent-100 text-white h-8 w-8 p-2 flex items-center justify-center rounded-full'>
                  <Mail />
                </div>
                <p>palmer18daniel@gmail.com</p>
              </Link>              
              <Link 
              className='flex items-center gap-2'
              href='tel:+13107298461'>
                <div className='bg-accent-100 text-white h-8 w-8 p-2 flex items-center justify-center rounded-full'>
                  <Phone />
                </div>
                <p>(310) 729-8461</p>
              </Link>
              <Link 
              className='flex items-center gap-2'
              href='#'>
                <div className='bg-accent-100 text-white h-8 w-8 p-2 flex items-center justify-center rounded-full'>
                  <Map/>
                </div>
                <p>Culver City, CA</p>
              </Link>
              
            </div>
          </section>
        </div>
        <footer className='py-8'>
          <div className='max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-between'>
            <p>© 2025 Daniel Palmer. All rights reserved.</p>
            <p>Finance Content Writer & Ghostwriter | Culver City, CA</p>
          </div>
        </footer>
      </main>

      <section className='h-screen hidden lg:sticky lg:flex top-0 right-0 lg:w-1/2 bg-accent-100 text-white  items-center justify-center'>
        <div className='flex flex-col items-center  gap-8'>
          <h1 className='font-bold text-5xl'>Daniel Palmer</h1>
          <img 
          className='aspect-square w-90 rounded-md'
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZSUyMGd1eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <p className='text-xl text-center'>Finance Content Writer & Ghostwriter | SEO-Optimized Finance Content</p>
        </div>
      </section>

      

    </div>
  )
}

export default page