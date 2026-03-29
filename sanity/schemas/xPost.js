import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'xPost',
  title: 'X Post',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Post Text',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isQuote',
      title: 'Is Quote / Italic Style',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'timeLabel',
      title: 'Time Label',
      description: 'e.g. "2h ago", "1d ago"',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'url',
      title: 'Link to Post',
      type: 'url',
    }),
  ],
  orderings: [
    { title: 'Date (Newest)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'text', subtitle: 'timeLabel' },
  },
})
