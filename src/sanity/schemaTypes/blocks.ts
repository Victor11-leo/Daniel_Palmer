// schemas/blocks.js

export const heroBlock = {
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    { name: 'headline', title: 'Headline', type: 'string' },
    { name: 'subheadline', title: 'Subheadline', type: 'text' },
    { name: 'ctaText', title: 'CTA Text', type: 'string' },
    { name: 'ctaLink', title: 'CTA Link', type: 'url' }
  ]
}

export const textBlock = {
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'content', title: 'Content', type: 'blockContent' }
  ]
}

export const experienceBlock = {
  name: 'experienceBlock',
  title: 'Experience Block',
  type: 'object',
  fields: [
    {
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'company', title: 'Company', type: 'string' },
            { name: 'dateRange', title: 'Date Range', type: 'string' },
            { name: 'description', title: 'Description', type: 'blockContent' }
          ]
        }
      ]
    }
  ]
}

export const skillsBlock = {
  name: 'skillsBlock',
  title: 'Skills Block',
  type: 'object',
  fields: [
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
