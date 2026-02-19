export type BlogPost = {
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    image: string;
    publishedAt: string;
    readTime: string;
    content: string[];
};

export const blogPosts: BlogPost[] = [
    {
        slug: "house-tokwe",
        title: "House Tokwe",
        category: "Residential",
        excerpt: "A contemporary home concept balancing privacy, daylight, and practical family circulation.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        publishedAt: "February 2, 2026",
        readTime: "4 min read",
        content: [
            "House Tokwe explores a clean residential language with clear zoning between social and private areas.",
            "The concept prioritizes natural ventilation, controlled solar gain, and durable materials suitable for Zimbabwe's climate.",
            "Living areas are oriented to improve indoor-outdoor flow while maintaining privacy from surrounding plots.",
            "The project demonstrates Studio 5 Architects' approach to practical, client-specific residential design.",
        ],
    },
    {
        slug: "building-investment-checklist",
        title: "Checklist When Considering to Invest in Building",
        category: "Guides",
        excerpt: "A practical pre-construction checklist covering land, approvals, feasibility, and budgeting.",
        image: "https://images.unsplash.com/photo-1465800872432-8ee5a2b0f7a9?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        publishedAt: "January 24, 2026",
        readTime: "6 min read",
        content: [
            "Start with land due diligence: title status, zoning, and service availability can fundamentally affect project viability.",
            "Define a realistic budget range that includes design, approvals, contingencies, and construction inflation.",
            "Engage design and engineering teams early to test options before committing to a final build strategy.",
            "Establish delivery milestones and decision gates so scope and quality stay aligned from start to completion.",
        ],
    },
    {
        slug: "cost-of-construction-and-design",
        title: "Cost of Construction & Design",
        category: "Cost Planning",
        excerpt: "Understanding what drives design and construction costs helps reduce risk and improve outcomes.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        publishedAt: "January 10, 2026",
        readTime: "5 min read",
        content: [
            "Construction costs depend on scope, complexity, site constraints, and material specifications.",
            "Design fees reflect project size, required documentation depth, and coordination effort.",
            "Early feasibility studies provide realistic baseline budgets and reduce redesign driven by late cost surprises.",
            "Continuous cost checks during concept and development stages protect value without compromising function.",
        ],
    },
    {
        slug: "urban-regeneration-repurpose",
        title: "Urban Regeneration / Repurpose",
        category: "Urban Design",
        excerpt: "How adaptive reuse can reactivate underutilized properties and strengthen city districts.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        publishedAt: "December 14, 2025",
        readTime: "5 min read",
        content: [
            "Repurposing existing buildings can preserve urban memory while reducing embodied carbon.",
            "A successful regeneration strategy aligns planning controls, mobility, public realm quality, and market demand.",
            "Design interventions should improve safety, access, and street-level activity to support long-term value.",
            "Studio 5 applies phased planning approaches that keep projects feasible while improving community outcomes.",
        ],
    },
    {
        slug: "vr-enhancer-for-architectural-visualization",
        title: "VR Enhancer For Architectural Visualization",
        category: "Technology",
        excerpt: "Virtual reality helps clients evaluate space, proportion, and flow before construction begins.",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        publishedAt: "November 28, 2025",
        readTime: "4 min read",
        content: [
            "VR walkthroughs support faster design decisions by making scale and adjacency easier to understand.",
            "Design teams can test lighting, furniture layouts, and circulation scenarios with clients in real time.",
            "Using VR early reduces late-stage changes and improves confidence before construction documentation.",
            "Studio 5 integrates visualization into client reviews to strengthen collaboration and design clarity.",
        ],
    },
    {
        slug: "green-design-fictional-or-not",
        title: "Green Design - Fictional or Not?",
        category: "Sustainability",
        excerpt: "Green design is practical when sustainability goals are tied to climate, materials, and lifecycle cost.",
        image: "https://images.unsplash.com/photo-1518531933037-9a847e0d3886?fm=jpg&q=80&w=1400&auto=format&fit=crop",
        publishedAt: "November 10, 2025",
        readTime: "6 min read",
        content: [
            "Sustainable architecture is not a trend label; it is a performance strategy grounded in measurable outcomes.",
            "Climate-responsive orientation, shading, and natural ventilation can reduce operational energy demand.",
            "Material decisions should consider availability, durability, maintenance, and environmental impact.",
            "For Studio 5, green design means responsible choices that are buildable, cost-aware, and context-specific.",
        ],
    },
];

export function getBlogPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}
