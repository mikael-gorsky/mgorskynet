import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'newsItem',
  title: 'News Item (What\'s New)',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateLabel',
      title: 'Date Label',
      description: 'Short display label, e.g. "MAY 24"',
      type: 'string',
    }),
  ],
  orderings: [
    { title: 'Date (Newest)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'text', subtitle: 'dateLabel' },
  },
})
