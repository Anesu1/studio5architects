import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: 'studio5-architects',
  title: 'Studio5 Architects — CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.listItem()
              .title('Projects')
              .child(S.documentTypeList('project').title('All Projects')),
            S.listItem()
              .title('Blog Posts')
              .child(S.documentTypeList('post').title('All Posts')),
            S.listItem()
              .title('Team Members')
              .child(S.documentTypeList('teamMember').title('All Team Members')),
            S.listItem()
              .title('Services')
              .child(S.documentTypeList('service').title('All Services')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
