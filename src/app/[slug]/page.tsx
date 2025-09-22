import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'

const query = defineQuery(
  `*[_type == "page" && slug.current == $slug][0]{title}`,
)

export default async function Page({
  params
}: {
  params: Promise<{slug: string}>;
}) {

const { data } = await sanityFetch({
      query,
      params,
});

  return <h1>{data.title}</h1>;
}