import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <nav className='
        bg-white/60 backdrop-blur-md text-black flex items-center justify-between p-4 fixed top-0 left-0 right-0 
         z-40
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
      <section className='h-[80vh] relative'>
        <img 
        className='w-full h-full object-cover'
        src="https://framerusercontent.com/images/KOBK8KKe96vsUV9PlHUkG6k8.jpeg?scale-down-to=1024" alt="" />
        <div className='absolute top-0 bottom-0 right-0 left-0 flex items-end p-8 bg-gradient-to-b from-transparent to-slate-900 text-white'>
          <p className='font-bold text-4xl'>Acco Campaign</p>
        </div>
      </section>
      <main className='py-8 px-4 max-w-5xl mx-auto'>
        <h2 className='capitalize font-semibold text-lg'>about project</h2>
        <p>Led the Acco Campaign Project, transforming the brand’s identity through a comprehensive, multi-channel strategy that emphasized bold visuals, cohesive storytelling, and audience engagement. Delivered a suite of modern, dynamic designs spanning print, digital, and social media, resulting in a 40% increase in brand awareness and a measurable boost in customer interaction. Oversaw the creative direction, collaborating closely with marketing teams and stakeholders to ensure alignment with business goals while maintaining innovative, forward-thinking aesthetics.</p>
      </main>

      <footer className='py-8'>
        <div className='max-w-5xl mx-auto px-4 flex items-center justify-between'>
          <p>© 2025 Daniel Palmer. All rights reserved.</p>
          <p>Finance Content Writer & Ghostwriter | Culver City, CA</p>
        </div>
      </footer>
    </>
  )
}

export default page