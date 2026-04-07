import { defineField, defineType } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'body', title: 'Short Description', type: 'text', rows: 3 }),
    defineField({ name: 'benefits', title: 'Benefits', type: 'text', rows: 3, description: 'What the client gains from this service' }),
    defineField({ name: 'process', title: 'Process Steps', type: 'text', rows: 2, description: 'e.g. "Research > Design > Documentation > Approval"' }),
    defineField({ name: 'valueAdd', title: 'Value Add', type: 'text', rows: 3, description: 'Our unique differentiator for this service' }),
    defineField({ name: 'image', title: 'Service Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'body', media: 'image' },
  },
  orderings: [
    { title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
});
