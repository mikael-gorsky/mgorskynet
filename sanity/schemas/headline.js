import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'headline',
  title: 'Headline',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
    }),
    defineField({
      name: 'featured',
      title: 'Featured (large with image)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
