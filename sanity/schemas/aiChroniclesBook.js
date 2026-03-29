import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aiChroniclesBook',
  title: 'AI Chronicles Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'premiseText',
      title: 'Premise Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'pullQuote',
      title: 'Pull Quote',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pullQuoteCitation',
      title: 'Pull Quote Citation',
      type: 'string',
    }),
    defineField({
      name: 'theses',
      title: 'Core Theses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'category', title: 'Category', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
    }),
    defineField({
      name: 'targetRelease',
      title: 'Target Release',
      type: 'string',
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
    }),
    defineField({
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Selected Excerpt',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'timeline',
      title: 'Development Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'date', title: 'Date Label', type: 'string' }),
            defineField({ name: 'event', title: 'Event Description', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Concept Image',
      type: 'image',
    }),
  ],
})
