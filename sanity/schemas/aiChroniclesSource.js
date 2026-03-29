import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aiChroniclesSource',
  title: 'AI Chronicles Source',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Academic', value: 'Academic' },
          { title: 'Newsletter', value: 'Newsletter' },
          { title: 'Technical', value: 'Technical' },
          { title: 'Policy', value: 'Policy' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'url',
      title: 'Source URL',
      type: 'url',
    }),
    defineField({
      name: 'updated',
      title: 'Last Updated Label',
      description: 'e.g. "Oct 2024" or "Legacy Archive"',
      type: 'string',
    }),
    defineField({
      name: 'sourceType',
      title: 'Source Type Label',
      description: 'e.g. "Open Source", "Substack", "Enterprise"',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
})
