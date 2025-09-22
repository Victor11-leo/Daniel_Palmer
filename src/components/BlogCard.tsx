import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
  return (
    <Link 
    href='/blogs/1'
    className='flex flex-col items-start lg:flex-row lg:items-center lg:gap-4'
    >
        <img 
        className='aspect-video lg:aspect-square w-full lg:h-[20vh] h-[40vh] rounded-xl object-cover'
        src="https://framerusercontent.com/images/KOBK8KKe96vsUV9PlHUkG6k8.jpeg?scale-down-to=1024" alt="" />
        <div>
          <h4 className='font-semibold text-lg'>Acco Campaign</h4>
          <p>Revamped Acco’s brand with a bold, engaging campaign for global impact.</p>
        </div>
    </Link>
  )
}

export default BlogCard