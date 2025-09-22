// schemas/homePage.js
import { heroBlock, textBlock, experienceBlock, skillsBlock } from '../blocks'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main title for SEO and internal reference'
    },
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [heroBlock, textBlock, experienceBlock, skillsBlock],
      description: 'Reorderable content blocks for the home page'
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'title', title: 'SEO Title', type: 'string' },
        { name: 'description', title: 'SEO Description', type: 'text' },
        { name: 'keywords', title: 'SEO Keywords', type: 'array', of: [{ type: 'string' }] }
      ]
    }
  ]
}
