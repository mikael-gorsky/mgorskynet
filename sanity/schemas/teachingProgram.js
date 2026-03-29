import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teachingProgram',
  title: 'Teaching Program',
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
      name: 'label',
      title: 'Label',
      description: 'e.g. "Syllabus v2.0", "Executive Program"',
      type: 'string',
    }),
    defineField({
      name: 'titleDisplay',
      title: 'Display Title (first part)',
      description: 'e.g. "AI for"',
      type: 'string',
    }),
    defineField({
      name: 'titleAccent',
      title: 'Display Title (accent/italic part)',
      description: 'e.g. "Leaders"',
      type: 'string',
    }),
    defineField({
      name: 'homepageTitle',
      title: 'Homepage Link Title',
      description: 'How it appears on the homepage, e.g. "Teaching leaders and students."',
      type: 'string',
    }),
    defineField({
      name: 'homepageSubtitle',
      title: 'Homepage Hover Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cohort',
      title: 'Current Cohort',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
    }),
    defineField({
      name: 'outcomes',
      title: 'Learning Outcomes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: 'modules',
      title: 'Curriculum Modules',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'weeks', title: 'Weeks', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: 'quote',
      title: 'Featured Quote',
      type: 'text',
      rows: 3,
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
