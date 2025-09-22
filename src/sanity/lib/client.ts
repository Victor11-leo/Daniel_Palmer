import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-12-01",
  useCdn: true,  
});

export const homePageQuery = `*[_type == "homePage"][0]{
  title,
  sections[]{
    ...,           // include all fields in each block
    "type": _type  // identify which block type it is (heroBlock, textBlock, etc.)
  },
  seo{
    title,
    description,
    keywords
  }
}`

export const postsQuery = `*[_type == "post"]`
export const postsBySlugQuery = `*[_type == "post" && slug.current match $slug]`