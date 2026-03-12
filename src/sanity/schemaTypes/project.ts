import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Industrial', value: 'Industrial' },
          { title: 'Institutional', value: 'Institutional' },
          { title: 'Medical', value: 'Medical' },
          { title: 'Residential', value: 'Residential' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'Completed' },
          { title: 'In Progress', value: 'In Progress' },
          { title: 'Council Approved', value: 'Council Approved' },
          { title: 'Concept', value: 'Concept' },
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'scrollSequence',
      title: 'Scroll Sequence',
      type: 'object',
      fields: [
        { name: 'folder', title: 'Folder Name', type: 'string' },
        { name: 'frameCount', title: 'Frame Count', type: 'number' },
        { name: 'prefix', title: 'Prefix', type: 'string' },
        { name: 'extension', title: 'Extension', type: 'string' }
      ]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
