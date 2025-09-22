// schemas/blocks.js

export const heroBlock = {
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    { name: 'headline', title: 'Headline', type: 'string' },
    { name: 'subheadline', title: 'Subheadline', type: 'string' },
    { name: 'mainImage', title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative string',
        }
      ]
    },
    
  ]
}

export const textBlock = {
  name: 'textBlock',
  title: 'string Block',
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
      name: 'title',
      title: 'Title',
      type: 'string',      
    },
    {
      name: 'skillContent',
      title: 'Skill Content',
      type: 'array',      
      of:[{
        type:'object',
        fields:[
          {
            name: 'skill',
            title: 'Skill',
            type: 'string',      
          },
          {
            name: 'skillContent',
            title: 'Skill Content',
            type: 'string',      
          },
        ]
      }]
    },
  ]
}



export const contactBlock = {
  name: 'contactBlock',
  title: 'Contact Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',      
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',      
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',      
      of:[{
        type:'object',
        fields:[
           {
              name: 'platform',
              title: 'Platform',
              type: 'string',      
            },
            {
              name: 'url',
              title: 'Url',
              type: 'string',      
            },    
            {
              name: 'name',
              title: 'Name',
              type: 'string',      
            },    
        ]
      }]
    },
  ]
}

export const portfolioBlock = {
  name: 'portfolioBlock',
  title: 'Portfolio Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',      
    },    
    {
      name: 'social',
      title: 'Social',
      type: 'array',      
      of:[{
        type:'reference',to:[{type:'post'}]
      }]
    },
  ]
}
