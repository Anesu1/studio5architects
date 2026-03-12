import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

export type Project = {
    id: number;
    slug: string;
    title: string;
    category: "Commercial" | "Industrial" | "Institutional" | "Medical" | "Residential";
    status: "Completed" | "In Progress" | "Council Approved";
    image: string;
    gallery?: string[];
    location: string;
    year: string;
    summary: string;
    scrollSequence?: {
        folder: string;
        frameCount: number;
        prefix: string;
        extension: string;
    };
};

export const projects: Project[] = [
    {
        id: 1,
        slug: "hyundai-showroom",
        title: "Hyundai Showroom",
        category: "Commercial",
        status: "Completed",
        image: "/images/hyundai (1).webp",
        gallery: [
            "/images/hyundai (2).webp",
            "/images/hyundai (3).webp",
            "/images/hyundai (4).webp",
            "/images/hyundai (5).webp",
            "/images/hyundai (6).webp",
            "/images/hyundai (7).webp",
        ],
        location: "Westgate, Harare",
        year: "2022",
        summary: "Modern approach for car showrooms with aluminum cladding featuring a novel architectural pattern.",
        scrollSequence: {
            folder: "hyndai",
            frameCount: 200,
            prefix: "ezgif-frame-",
            extension: "webp"
        }
    },
    {
        id: 2,
        slug: "cell-insurance-hq",
        title: "Cell Insurance HQ",
        category: "Commercial",
        status: "Completed",
        image: "/images/cell-insurance (4).webp",
        gallery: [
            "/images/cell-insurance (2).webp",
            "/images/cell-insurance (3).webp",
            "/images/cell-insurance (1).webp",
            "/images/cell-insurance (5).webp",
            "/images/cell-insurance (6).webp",
        ],
        location: "Greendale, Harare",
        year: "2020",
        summary: "Renovation and expansion project blending new structures with existing residential-zone architecture.",
        scrollSequence: {
            folder: "cell-insurance",
            frameCount: 200,
            prefix: "ezgif-frame-",
            extension: "webp"
        }
    },
    {
        id: 3,
        slug: "gweru-mall",
        title: "Gweru Mall",
        category: "Commercial",
        status: "Completed",
        image: "/images/gweru-mall (3).webp",
        gallery: [
            "/images/gweru-mall (2).webp",
            "/images/gweru-mall (1).webp",
            "/images/gweru-mall (4).webp",
            "/images/gweru-mall (5).webp",
            "/images/gweru-mall (6).webp",
        ],
        location: "Gweru",
        year: "2021",
        summary: "A major retail development designed to serve as a central commercial hub for the Gweru region.",
    },
    {
        id: 4,
        slug: "glow-petroleum-westgate",
        title: "Glow Petroleum Westgate",
        category: "Commercial",
        status: "Completed",
        image: "/images/glow-petroleum (1).webp",
        gallery: [
            "/images/glow-petroleum (2).webp",
            "/images/glow-petroleum (3).webp",
            "/images/glow-petroleum (4).webp",
        ],
        location: "Westgate, Harare",
        year: "2020",
        summary: "Contemporary service station featuring a forecourt, convenience store, and signature steel framework.",
    },
    {
        id: 5,
        slug: "mss-factory",
        title: "MSS Factory",
        category: "Industrial",
        status: "Completed",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/07/MSS-scaled.jpg",
        location: "Ngezi",
        year: "2020",
        summary: "Expressive industrial facade with flexible layouts designed for heavy industrial hardware operations.",
    },
    {
        id: 6,
        slug: "btf-factory",
        title: "BTF Factory",
        category: "Industrial",
        status: "Completed",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/07/BTF-scaled.jpg",
        location: "Ngezi",
        year: "2020",
        summary: "Modern warehouse and manufacturing facility integrated with front-end administrative offices.",
    },
    {
        id: 7,
        slug: "nuttie-college",
        title: "Nuttie College",
        category: "Institutional",
        status: "Completed",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/07/Nutti-scaled.jpg",
        location: "Harare",
        year: "2020",
        summary: "Modern educational facility designed to foster an engaging learning environment through architecture.",
    },
    {
        id: 8,
        slug: "vfm-medical-center",
        title: "VFM Medical Center",
        category: "Medical",
        status: "Completed",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/07/VFM-scaled.jpg",
        location: "Victoria Falls",
        year: "2020",
        summary: "Specialized healthcare facility focused on patient accessibility and high international medical standards.",
    },
    {
        id: 9,
        slug: "uz-quinary-hospital",
        title: "UZ Quinary Hospital",
        category: "Medical",
        status: "In Progress",
        image: "https://www.studio5architects.com/wp-content/uploads/2022/01/B-scaled.jpg",
        location: "Harare",
        year: "2022",
        summary: "Healing-focused environment utilizing natural daylighting and advanced ventilation through open volumes.",
    },
    {
        id: 10,
        slug: "house-madondo",
        title: "House Madondo",
        category: "Residential",
        status: "Completed",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/04/Front-scaled.jpg",
        location: "Harare",
        year: "2021",
        summary: "A bespoke residential project emphasizing modern clean lines and seamless indoor-outdoor living.",
    },
    {
        id: 11,
        slug: "mmc-capital-hq",
        title: "MMC Capital HQ",
        category: "Commercial",
        status: "Completed",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/07/03.jpg",
        location: "Borrowdale, Harare",
        year: "2020",
        summary: "Sophisticated conversion of a residential property into a high-end, modern architectural office space.",
    },
    {
        id: 12,
        slug: "bj-southgate-mall",
        title: "BJ Southgate Mall",
        category: "Commercial",
        status: "Completed",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/07/image-215.jpg",
        location: "Chiremba Road, Harare",
        year: "2020",
        summary: "Full refurbishment and modernization of an existing supermarket into a vibrant community shopping mall.",
    },
    {
        id: 13,
        slug: "u-z-mall",
        title: "U.Z Mall",
        category: "Commercial",
        status: "In Progress",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/09/UZ-Shopping-Mall-1-scaled.jpg",
        location: "University of Zimbabwe",
        year: "2020",
        summary: "Modern student-centric retail development designed to serve the University of Zimbabwe campus.",
    },
    {
        id: 14,
        slug: "house-sakupwanya",
        title: "House Sakupwanya",
        category: "Residential",
        status: "Completed",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/07/E1-scaled.jpg",
        location: "Greendale, Harare",
        year: "2020",
        summary: "Private residence designed with an focus on expansive spatial flow and luxury finishes.",
    },
    {
        id: 15,
        slug: "house-tokwe",
        title: "House Tokwe",
        category: "Residential",
        status: "Completed",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/11/MAIN-scaled.jpg",
        location: "Harare",
        year: "2021",
        summary: "Modern residential architecture blending privacy with striking geometric forms.",
    },
];

export async function getProjects(): Promise<Project[]> {
    try {
        const sanityProjects = await client.fetch(projectsQuery);
        // If Sanity returns projects, use them, otherwise fallback to local data
        return sanityProjects.length > 0 ? sanityProjects : projects;
    } catch (error) {
        console.error("Error fetching projects from Sanity:", error);
        return projects;
    }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
    try {
        const query = `*[_type == "project" && slug.current == $slug][0] {
            _id,
            title,
            "slug": slug.current,
            category,
            status,
            "image": mainImage.asset->url,
            location,
            year,
            summary,
            "gallery": gallery[].asset->url,
            scrollSequence {
                folder,
                frameCount,
                prefix,
                extension
            },
            body
        }`;
        const sanityProject = await client.fetch(query, { slug });
        if (sanityProject) return sanityProject;
        return projects.find((project) => project.slug === slug);
    } catch (error) {
        console.error(`Error fetching project with slug ${slug}:`, error);
        return projects.find((project) => project.slug === slug);
    }
}
