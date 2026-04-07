import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Residential', 'Commercial', 'Civic', 'Healthcare', 'Heritage', 'Industrial', 'Institutional', 'Medical'],
      },
    }),
    defineField({
      name: 'sector',
      title: 'Sector (Filter Key)',
      type: 'string',
      description: 'Used for portfolio filtering. Must match filter keys.',
      options: {
        list: ['residential', 'commercial', 'civic', 'heritage', 'masterplanning', 'industrial'],
      },
    }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['Concept', 'Council Approved', 'Under Construction', 'Completed', 'In Progress'] },
    }),
    defineField({ name: 'badge', title: 'Badge Label', type: 'string', description: 'Short tag shown on the card e.g. "Residential", "Corporate"' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'award', title: 'Award Winner', type: 'boolean', initialValue: false }),
    defineField({ name: 'summary', title: 'Summary (short)', type: 'text', rows: 2 }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'scrollSequence',
      title: 'Scroll Sequence Animation',
      type: 'object',
      fields: [
        { name: 'folder', title: 'Folder Name', type: 'string' },
        { name: 'prefix', title: 'Frame Prefix', type: 'string' },
        { name: 'frameCount', title: 'Frame Count', type: 'number' },
        { name: 'extension', title: 'File Extension', type: 'string' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' },
  },
  orderings: [
    { title: 'Year, Newest', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
  ],
});
