import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yq0u3t9a', // Placeholder, user will update
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-11',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
