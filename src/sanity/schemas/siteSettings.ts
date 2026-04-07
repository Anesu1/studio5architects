import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'studioName', title: 'Studio Name', type: 'string', initialValue: 'Studio5 Architects' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', description: 'Main hero headline used in the homepage' }),
    defineField({ name: 'aboutText', title: 'About Text (short)', type: 'text', rows: 4, description: 'Shown in the about section on the homepage' }),
    defineField({ name: 'missionStatement', title: 'Mission Statement', type: 'text', rows: 3 }),

    defineField({
      name: 'stats',
      title: 'Studio Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string', description: 'e.g. "180+"' },
            { name: 'label', title: 'Label', type: 'string', description: 'e.g. "Projects Completed"' },
            { name: 'sub', title: 'Sub-label', type: 'string', description: 'e.g. "Across all sectors"' },
          ],
          preview: { select: { title: 'label', subtitle: 'value' } },
        },
      ],
    }),

    defineField({ name: 'address', title: 'Street Address', type: 'string' }),
    defineField({ name: 'city', title: 'City', type: 'string', initialValue: 'Harare, Zimbabwe' }),
    defineField({ name: 'phone1', title: 'Primary Phone', type: 'string' }),
    defineField({ name: 'phone2', title: 'Secondary Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Studio Email', type: 'string' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),

    defineField({ name: 'heroImage', title: 'Homepage Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ogImage', title: 'Default OG / Social Share Image', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
