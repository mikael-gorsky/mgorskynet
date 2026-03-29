import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aiPravdaIssue',
  title: 'AI Pravda Issue',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'volume',
      title: 'Volume & Number',
      description: 'e.g. "Vol. 04 — No. 12"',
      type: 'string',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Newsletter URL',
      type: 'url',
    }),
    defineField({
      name: 'body',
      title: 'Full Article Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  orderings: [
    { title: 'Publish Date (Newest)', name: 'dateDesc', by: [{ field: 'publishDate', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'volume', date: 'publishDate' },
    prepare({ title, subtitle, date }) {
      return { title, subtitle: `${subtitle || ''} — ${date || ''}` }
    },
  },
})
