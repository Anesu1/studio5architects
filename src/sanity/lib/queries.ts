import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"] | order(year desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  status,
  "image": mainImage.asset->url,
  location,
  year,
  summary,
  body
}`

export const servicesQuery = groq`*[_type == "service"] {
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  description,
  body
}`

export const insightsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "author": author->name,
  "image": mainImage.asset->url,
  "categories": categories[]->title,
  publishedAt,
  excerpt,
  body
}`
