import { client } from './sanity';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  sector: string;
  location: string | null;
  year: string | null;
  status: string | null;
  summary: string | null;
  description: string;
  image: string;
  gallery: (string | null)[];
  featured?: boolean;
  award?: boolean;
  badge?: string;
  scrollSequence?: {
    extension: string;
    folder: string;
    frameCount: number;
    prefix: string;
  } | null;
  body?: any;
}

const PROJECT_FIELDS = `
  "id": _id,
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

export async function getAllProjects(): Promise<Project[]> {
  try {
    const results = await client.fetch<Project[]>(
      `*[_type == "project"] | order(year desc) { ${PROJECT_FIELDS} }`
    );
    if (results && results.length > 0) return results;
  } catch {
    // Fall through to static data
  }
  return STATIC_PROJECTS;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const result = await client.fetch<Project | null>(
      `*[_type == "project" && slug.current == $slug][0] { ${PROJECT_FIELDS} }`,
      { slug }
    );
    if (result) return result;
  } catch {
    // Fall through to static data
  }
  return STATIC_PROJECTS.find((p) => p.slug === slug) ?? null;
}

// ── Static fallback data (mirrors Sanity content) ─────────────────────────────

export const STATIC_PROJECTS: Project[] = [
  {
    id: '20a8b259-9e94-47e1-952d-b3423f854b9f',
    slug: 'pams-clusters',
    title: 'Pams Clusters',
    category: 'Residential',
    sector: 'residential',
    location: 'Harare',
    year: '2023',
    status: 'Completed',
    summary: 'Modern residential cluster development emphasizing community and shared green spaces.',
    description: 'Modern residential cluster development emphasizing community and shared green spaces.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/15bd116af479f83876ba6ff31759abf28a5d1139-1600x900.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/2fbd893ee7d965dc16b327f59c105baa0f1ae0a9-1600x900.webp',
      'https://cdn.sanity.io/images/1v6lhwc8/production/ca995e4ae14e62725333d934700b698a1af8d1a3-1600x1333.webp',
      'https://cdn.sanity.io/images/1v6lhwc8/production/37f3fa7bfbf68f082dcef729481d55054483cf86-1600x900.webp',
    ],
    badge: 'Residential',
    body: null,
    scrollSequence: null,
  },
  {
    id: '3303fc2f-5607-44d0-8e29-827c4f337ab2',
    slug: 'cell-insurance-hq',
    title: 'Cell Insurance HQ',
    category: 'Commercial',
    sector: 'commercial',
    location: 'Greendale, Harare',
    year: '2020',
    status: 'Completed',
    summary: "The client's ever growing business required new offices, renovating an existing building and linking it to a new structure.",
    description: "The client's ever growing business required new offices. The task involved renovating an existing building and also building a new structure which would be linked as one.",
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/d0883538a686b4ee50056a5a9657faa7701fb626-1600x900.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/6bc6d88442d8c44ef368528d8531725cdb1e4c1c-1600x900.webp',
      'https://cdn.sanity.io/images/1v6lhwc8/production/bc87500235cad3c84a00ab758bb7a5de76befc14-1600x900.webp',
      'https://cdn.sanity.io/images/1v6lhwc8/production/78aa5025e27fa6a24608dfe3876d4957402d25cc-1600x900.webp',
      'https://cdn.sanity.io/images/1v6lhwc8/production/dfe0d323ec360b5c27580594cb0d8e814fbc2e3e-1600x778.webp',
    ],
    badge: 'Corporate',
    award: true,
    scrollSequence: { extension: 'webp', folder: 'cell-insurance', frameCount: 200, prefix: 'ezgif-frame-' },
    body: null,
  },
  {
    id: '3e3f3f11-d8bf-4c53-a60c-30c1b5a34fbe',
    slug: 'house-quinnington',
    title: 'House Quinnington',
    category: 'Residential',
    sector: 'residential',
    location: 'Quinnington, Harare',
    year: '2021',
    status: 'Completed',
    summary: 'High-end residential project exploring transparency and seamless indoor-outdoor transition.',
    description: 'High-end residential project exploring transparency and seamless indoor-outdoor transition.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/d61bf29b743f83b91e630d83e3763b89fe9db85d-768x392.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/1a688132487c1728d3698da53cc7bb98e4ca7e07-2560x1532.webp',
      'https://cdn.sanity.io/images/1v6lhwc8/production/2e448304c48ff380123785e0ea8733c38cd7ce75-768x466.webp',
    ],
    badge: 'Residential',
    body: null,
    scrollSequence: null,
  },
  {
    id: '47f5fa80-ea09-44f8-ae3b-cd9ebe6972f6',
    slug: 'gweru-mall',
    title: 'Gweru Mall',
    category: 'Commercial',
    sector: 'commercial',
    location: 'Gweru',
    year: '2022',
    status: 'Completed',
    summary: 'Large scale retail mall designed to become a regional commercial hub.',
    description: 'Large scale retail mall designed to become a regional commercial hub.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/a1a725003e6a0caabe3fbc8ad8fc0bdd71a29f02-1920x1080.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/0537dc54c154f4b1f0aa5e8a4d5698579c06a9c0-1600x1428.webp',
      'https://cdn.sanity.io/images/1v6lhwc8/production/9bea4dfb29de6e6e6d6a53251e501ab961c1f969-1415x903.webp',
      'https://cdn.sanity.io/images/1v6lhwc8/production/4763310214bdbf2d17604b7d77a20334d21e9e3f-1600x900.webp',
    ],
    badge: 'Retail',
    featured: true,
    body: null,
    scrollSequence: null,
  },
  {
    id: '483ad052-92e9-49ba-9001-5bfc8e1fd4b9',
    slug: 'house-tokwe',
    title: 'House Tokwe',
    category: 'Residential',
    sector: 'residential',
    location: 'Harare',
    year: '2021',
    status: 'Completed',
    summary: 'Modern residential architecture blending privacy with striking geometric forms.',
    description: 'Modern residential architecture blending privacy with striking geometric forms.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/195038f21ae937f584cacc730e7374ec7cc0273c-1600x1019.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/dbeb8e539627008fb49d5b5ed1391bfb8c95e975-1600x1077.webp',
      'https://cdn.sanity.io/images/1v6lhwc8/production/7de4668d80fd9a17d48138fe7024e0c51befd260-1600x1003.webp',
    ],
    badge: 'Residential',
    body: null,
    scrollSequence: null,
  },
  {
    id: '57b565ff-19ba-4e47-8caa-d7ee0f527171',
    slug: 'mazambani-house',
    title: 'Mazambani House',
    category: 'Residential',
    sector: 'residential',
    location: 'Mabelreign, Harare',
    year: '2023',
    status: 'Under Construction',
    summary: 'Contemporary family home emphasizing volume and natural light.',
    description: 'Contemporary family home emphasizing volume and natural light.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/b651d34703c43b07b81ec2506215ad6cd734888b-1600x900.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/3a88f07035149b8e64457a8685a816ad01ce5317-1600x900.webp',
    ],
    badge: 'Residential',
    body: null,
    scrollSequence: null,
  },
  {
    id: '5d90558e-ec35-4923-b94f-6969bf44d212',
    slug: 'marondera-university',
    title: 'Marondera University',
    category: 'Institutional',
    sector: 'civic',
    location: 'Marondera',
    year: '2022',
    status: 'Council Approved',
    summary: 'State-of-the-art educational facility focusing on sustainable agricultural research.',
    description: 'State-of-the-art educational facility focusing on sustainable agricultural research.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/725c855178486d5ee72beeb180b13e6ea1d04cb8-768x432.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/4b1c3cf9985a484dab1b5a30f7f947c529c0e47b-1600x900.webp',
    ],
    badge: 'University',
    body: null,
    scrollSequence: null,
  },
  {
    id: '68a80680-2753-4109-a11d-971e93105d62',
    slug: 'glow-petroleum-westgate',
    title: 'Glow Petroleum Westgate',
    category: 'Commercial',
    sector: 'commercial',
    location: 'Westgate',
    year: '2022',
    status: 'Completed',
    summary: 'Contemporary service station featuring a forecourt, convenience store, and signature steel framework.',
    description: 'Contemporary service station featuring a forecourt, convenience store, and signature steel framework.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/578b0187e88f1658b6c84796cec97fcb5be47e9b-1600x900.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/e69aeaccc1fc83f94af8f0378db85552de110ca0-1600x900.webp',
    ],
    badge: 'Industrial',
    body: null,
    scrollSequence: null,
  },
  {
    id: '7494903d-72c5-456f-a699-bdb43964a889',
    slug: 'hyundai-showroom',
    title: 'Hyundai Showroom',
    category: 'Commercial',
    sector: 'commercial',
    location: 'Westgate Shopping Complex',
    year: '2022',
    status: 'Council Approved',
    summary: 'Modern car showroom with aluminum cladding featuring a novel architectural pattern.',
    description: 'Modern approach for car showrooms with aluminum cladding featuring a novel architectural pattern.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/4c9c9f99fd2370aceb8a64edb75bb8edcdd54eed-1600x900.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/96f901c261c9ae7d508b422d8f0a8bc5583d561f-1600x900.webp',
    ],
    badge: 'Retail',
    scrollSequence: { extension: 'webp', folder: 'hyndai', frameCount: 200, prefix: 'ezgif-frame-' },
    body: null,
  },
  {
    id: 'b8f97cb2-d61e-40a2-8ddf-9976e589b388',
    slug: 'uz-quinary-hospital',
    title: 'UZ Quinary Hospital',
    category: 'Medical',
    sector: 'civic',
    location: 'Harare',
    year: '2022',
    status: 'Under Construction',
    summary: 'Healing-focused environment utilizing natural daylighting and advanced ventilation.',
    description: 'Healing-focused environment utilizing natural daylighting and advanced ventilation.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/6d9da3bf22dfde62e294373507b646ea98b4d432-1920x1080.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/d46d548d43019344b8e87785d92110c4e0c75915-1920x1080.webp',
    ],
    badge: 'Hospital',
    body: null,
    scrollSequence: null,
  },
  {
    id: 'e22015a9-d85a-4d46-a3f3-6f51a1662199',
    slug: 'house-sakupwanya',
    title: 'House Sakupwanya',
    category: 'Residential',
    sector: 'residential',
    location: 'Greendale, Harare',
    year: '2020',
    status: 'Completed',
    summary: 'Private residence designed with expansive spatial flow and luxury finishes.',
    description: 'Private residence designed with an focus on expansive spatial flow and luxury finishes.',
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/714fd6ded6cc8e95bc5501d90139d4b9f1beb124-1600x981.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/957ea468b47089d71c4b8e108c9e90aa7273fefb-1600x1067.webp',
    ],
    badge: 'Residential',
    body: null,
    scrollSequence: null,
  },
  {
    id: 'f499f41e-f9e8-42d9-9623-a4370758857f',
    slug: 'mmc-capital-hq',
    title: 'MMC Capital HQ',
    category: 'Commercial',
    sector: 'commercial',
    location: 'Borrowdale, Harare',
    year: '2020',
    status: 'In Progress',
    summary: 'Conversion of an existing residential property into modern corporate offices.',
    description: "The client acquired a stand with an already existing house. The task was to convert the existing residential property into offices.",
    image: 'https://cdn.sanity.io/images/1v6lhwc8/production/930e2749b42638ad4cd30c339a21e780519886f0-1600x900.webp',
    gallery: [
      'https://cdn.sanity.io/images/1v6lhwc8/production/9ae62fb8ad02cd01a1ea809e3e4bf25b0cc524f9-1600x900.webp',
    ],
    badge: 'Office',
    body: null,
    scrollSequence: null,
  },
];

// Keep named export for backwards compat with existing pages
export const PROJECTS = STATIC_PROJECTS;
