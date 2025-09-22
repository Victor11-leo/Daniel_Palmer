import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = (post) => {
  const {title,excerpt,slug,body,mainImage,publishedAt} = post
  return (
    <Link 
    href={`blogs/${slug.current}`}
    className='flex flex-col items-start lg:flex-row lg:items-center lg:gap-4'
    >
        <img 
        className='aspect-video lg:aspect-square w-full lg:h-[20vh] h-[40vh] rounded-xl object-cover'
        src={urlFor(mainImage).url()} alt={mainImage.alt} />
        <div>
          <h4 className='font-semibold text-lg'>{title}</h4>
          <p>{excerpt}</p>
        </div>
    </Link>
  )
}

export default BlogCard