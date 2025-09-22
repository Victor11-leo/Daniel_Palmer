import { RichText } from '@/components/PortableText'
import { client, postsBySlugQuery } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: {
    slug: string
  }
}

const page = async ({params}:Props) => {
  const {slug} = params
  const post = await client.fetch(postsBySlugQuery, { slug })  
  const {body,excerpt,mainImage,publishedAt,title} = post[0]
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
        src={urlFor(mainImage).url()} alt={mainImage.alt} />
        <div className='absolute top-0 bottom-0 right-0 left-0 flex items-end p-8 bg-gradient-to-b from-transparent to-slate-900 text-white'>
          <p className='font-bold text-4xl'>{title}</p>
        </div>
      </section>
      <main className='py-8 px-4 max-w-5xl mx-auto'>
        <RichText
        value={body}
        />
      </main>

      <footer className='py-8'>
        <div className='max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-between'>
          <p>© 2025 Daniel Palmer. All rights reserved.</p>
          <p>Finance Content Writer & Ghostwriter | Culver City, CA</p>
        </div>
      </footer>
    </>
  )
}

export default page