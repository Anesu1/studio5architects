import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Residential', 'Commercial', 'Sustainability', 'Technology', 'Guides', 'Cost Planning', 'Heritage', 'Research'],
      },
    }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: (R) => R.required() }),
    defineField({ name: 'mainImage', title: 'Featured Image', type: 'image', options: { hotspot: true }, validation: (R) => R.required() }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'date', validation: (R) => R.required() }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string', description: 'e.g. "5 min read"' }),
    defineField({
      name: 'content',
      title: 'Body Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
      description: 'Full article body — use paragraph blocks for main text',
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' },
  },
  orderings: [
    { title: 'Published, Newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
});
