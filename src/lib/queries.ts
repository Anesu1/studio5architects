import { client } from './sanity';

// ── Types ────────────────────────────────────────────────────────────────────

export interface SanityProject {
  _id: string;
  slug: string;
  title: string;
  category: string;
  sector: string;
  location: string | null;
  year: string | null;
  status: string | null;
  summary: string | null;
  description: string;
  image: string;           // Resolved URL
  gallery: string[];       // Resolved URLs
  featured?: boolean;
  award?: boolean;
  badge?: string;
  body?: any;
  scrollSequence?: {
    extension: string;
    folder: string;
    frameCount: number;
    prefix: string;
  } | null;
}

export interface SanityPost {
  _id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;           // Resolved URL
  publishedAt: string;
  readTime: string;
  content: string[];
  gallery?: string[];
}

export interface SanityTeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  qualifications?: string;
  image: string;           // Resolved URL
  order: number;
}

export interface SanityService {
  _id: string;
  title: string;
  body: string;
  benefits: string;
  process: string;
  valueAdd: string;
  image?: string;
  order: number;
}

export interface SanitySiteSettings {
  studioName: string;
  tagline: string;
  address: string;
  city: string;
  phone1: string;
  phone2?: string;
  email: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  aboutText: string;
  missionStatement: string;
  stats: { value: string; label: string; sub: string }[];
}

// ── Projects ─────────────────────────────────────────────────────────────────

const PROJECT_FIELDS = `
  _id,
  "slug": slug.current,
  title,
  category,
  sector,
  location,
  year,
  status,
  summary,
  description,
  "image": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  featured,
  award,
  badge,
  body,
  scrollSequence
`;

export async function getAllProjects(): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project"] | order(year desc) { ${PROJECT_FIELDS} }`
  );
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] { ${PROJECT_FIELDS} }`,
    { slug }
  );
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project" && featured == true] | order(year desc) [0...6] { ${PROJECT_FIELDS} }`
  );
}

// ── Blog Posts ────────────────────────────────────────────────────────────────

const POST_FIELDS = `
  _id,
  "slug": slug.current,
  title,
  category,
  excerpt,
  "image": mainImage.asset->url,
  "publishedAt": publishedAt,
  readTime,
  content,
  "gallery": gallery[].asset->url
`;

export async function getAllPosts(): Promise<SanityPost[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`
  );
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] { ${POST_FIELDS} }`,
    { slug }
  );
}

// ── Team Members ──────────────────────────────────────────────────────────────

export async function getAllTeamMembers(): Promise<SanityTeamMember[]> {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, bio, qualifications,
      "image": photo.asset->url,
      order
    }`
  );
}

// ── Services ──────────────────────────────────────────────────────────────────

export async function getAllServices(): Promise<SanityService[]> {
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, title, body, benefits, process, valueAdd,
      "image": image.asset->url,
      order
    }`
  );
}

// ── Site Settings ─────────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      studioName, tagline, address, city, phone1, phone2,
      email, linkedin, instagram, facebook,
      aboutText, missionStatement, stats
    }`
  );
}
