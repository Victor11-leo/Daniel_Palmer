import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


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