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
          { title: 'Religious', value: 'Religious' },
          { title: 'Recreational', value: 'Recreational' },
          { title: 'Adaptive Reuse', value: 'Adaptive Reuse' },
          { title: 'Hospitality', value: 'Hospitality' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Conceptualization', value: 'Conceptualization' },
          { title: 'Under Construction', value: 'Under Construction' },
          { title: 'Completed', value: 'Completed' },
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
