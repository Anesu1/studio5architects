export type Project = {
    id: number;
    slug: string;
    title: string;
    category: "Commercial" | "Industrial" | "Institutional" | "Medical" | "Residential";
    image: string;
    location: string;
    year: string;
    summary: string;
};

export const projects: Project[] = [
    {
        id: 1,
        slug: "hyundai-showroom",
        title: "Hyundai Showroom",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        location: "Harare",
        year: "2024",
        summary: "A contemporary automotive showroom balancing brand visibility, customer flow, and sales operations.",
    },
    {
        id: 2,
        slug: "cell-insurance-hq",
        title: "Cell Insurance HQ",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        location: "Harare",
        year: "2023",
        summary: "Corporate headquarters design with flexible office zones and strong street-front presence.",
    },
    {
        id: 3,
        slug: "mss-factory",
        title: "MSS Factory",
        category: "Industrial",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        location: "Zimbabwe",
        year: "2023",
        summary: "Industrial facility planned for operational efficiency, safe circulation, and future expansion.",
    },
    {
        id: 4,
        slug: "twic-warehouse",
        title: "Twic Warehouse",
        category: "Industrial",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        location: "Zimbabwe",
        year: "2022",
        summary: "Warehouse architecture focused on logistics clarity, durability, and cost-aware delivery.",
    },
    {
        id: 5,
        slug: "nuttie-college",
        title: "Nuttie College",
        category: "Institutional",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        location: "Zimbabwe",
        year: "2024",
        summary: "Education-focused development designed for learning comfort, supervision, and campus growth.",
    },
    {
        id: 6,
        slug: "uz-quinary-hospital",
        title: "UZ Quinary Hospital",
        category: "Medical",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        location: "Harare",
        year: "2024",
        summary: "Healthcare project emphasizing patient dignity, efficient planning, and clinical functionality.",
    },
    {
        id: 7,
        slug: "vfm-medical-center",
        title: "VFM Medical Center",
        category: "Medical",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        location: "Harare",
        year: "2023",
        summary: "Medical center designed to streamline operations while maintaining calm, welcoming spaces.",
    },
    {
        id: 8,
        slug: "house-madondo",
        title: "House Madondo",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        location: "Harare",
        year: "2022",
        summary: "Custom residential home blending privacy, daylight, and family-oriented spatial planning.",
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
