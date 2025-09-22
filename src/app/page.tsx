import BlogCard from '@/components/BlogCard'
import { client, homePageQuery, postsQuery } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Mail, Phone,Map } from 'lucide-react'
import { PortableText } from 'next-sanity'
import Link from 'next/link'

export const revalidate = 60 // ISR: rebuild every 60 seconds

export async function generateMetadata() {
  const data = await client.fetch(homePageQuery)

  return {
    title: data.seo?.title,
    description: data.seo?.description,
    keywords: data.seo?.keywords,
    openGraph: {
      title: data.seo?.title || data.title,
      description: data.seo?.description,      
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo?.title || data.title,
      description: data.seo?.description,      
    },
  }
}


const page = async () => {
  const data = await client.fetch(homePageQuery)
  const posts = await client.fetch(postsQuery)
  const [hero,about,experience,education,skills,contact] = data.sections
  console.log(posts);

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
          <h1 className='font-bold text-5xl'>{hero.headline}</h1>
          <img 
          className='aspect-square w-90 rounded-md object-cover object-top'
          src={urlFor(hero.mainImage).url()} alt={hero.mainImage.alt} />
          <p className='text-xl text-center'>{hero.subheadline}</p>
        </div>
      </section>

      <main className='lg:w-1/2 p-10'>
        <div className='max-w-5xl mx-auto grid gap-10 py-8 px-4'>
          {/* about */}
          <section id='about' className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>{about.title}</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-1'>
              <PortableText
              value={about.content}
              />              
            </div>
          </section>

           {/* Exp */}
          <section className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>Experience</h2>
              <div className='hr'/>
            </div>
            <div>
              {experience.experiences.map((exp:any) => (
                <div 
                key={exp._key}
                className='grid gap-1'>
                  <h3 className='font-semibold'>{exp.role}</h3>
                  <span className='font-semibold italic text-sm'>{exp.company} | {exp.dateRange}</span>
                  <PortableText
                  value={exp.description}
                  />
                  
                </div>
              ))}
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
              {posts.map((post) => (
                <BlogCard
                key={post._id}
                {...post}
                />
              ))}
            </div>
          </section>

           {/* Education */}
          <section className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>{education.title}</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-1'>
              <PortableText
              value={education.content}
              />
            </div>
          </section>

           {/* Skills */}
          <section className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>{skills.title}</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-2'>
              {skills.skillContent.map((skill) => (
                <div key={skill._key}>
                  <h3 className='font-semibold'>{skill.skill}</h3>
                  <p>{skill.skillContent}</p>
                </div>
              ))}
              
            </div>
          </section>

           {/* Contact */}
          <section id='contact' className='grid gap-2'>
            <div>
              <h2 className='font-semibold uppercase text-2xl'>{contact.title}</h2>
              <div className='hr'/>
            </div>
            <div className='grid gap-3'>
              <p>{contact.description}</p>
              {contact.social.map((social) => (
                <a
                key={social._key}
                className='flex items-center gap-2'
                href={social.url ? social.url : '#'}>
                  <div className='bg-accent-100 text-white h-8 w-8 p-2 flex items-center justify-center rounded-full'>
                    {social.platform == 'Email' ?
                      <Mail />
                      :
                      social.platform == 'Phone'?
                      <Phone/>
                      :
                      <Map/>
                    }
                  </div>
                  <p>{social.name}</p>
                </a>              
              ))}
              
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
          <h1 className='font-bold text-5xl'>{hero.headline}</h1>
          <img 
          className='aspect-square w-90 rounded-md'
          src={urlFor(hero.mainImage).url()} alt={hero.mainImage.alt} />
          <p className='text-xl text-center'>{hero.subheadline}</p>
        </div>
      </section>

      

    </div>
  )
}

export default page