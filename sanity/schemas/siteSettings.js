import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Homepage Tagline',
      description: 'The large headline on the homepage, e.g. "Strategic Development. AI Research. Education."',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'taglineAccent',
      title: 'Tagline Accent Text',
      description: 'The italicized/highlighted part of the tagline, e.g. "AI Research."',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location Label',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'xUrl',
      title: 'X (Twitter) URL',
      type: 'url',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
  ],
})
