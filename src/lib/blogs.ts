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
        slug: "house-tokwe-modern-residential-excellence",
        title: "House Tokwe: Modern Residential Excellence",
        category: "Residential",
        excerpt: "A deep dive into the design philosophy behind House Tokwe, focusing on privacy and geometric forms.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/11/MAIN-scaled.jpg",
        publishedAt: "February 15, 2026",
        readTime: "4 min read",
        content: [
            "House Tokwe represents a shift towards modern residential architecture in Harare, blending strict privacy requirements with striking contemporary geometric forms. The project was conceived as a sanctuary that doesn't compromise on bold aesthetic statements.",
            "Our design team focused on the play of light and shadow, using recessed windows and cantilevered roofs to provide natural cooling while creating dynamic visual patterns throughout the day.",
            "The spatial organization prioritizes family flow, with open-plan living areas that transition seamlessly into private retreats. Every room was positioned to capture specific garden views, grounding the home in its natural context.",
            "By utilizing sustainable materials and local craftsmanship, House Tokwe stands as a testament to what is possible when modern design meets site-specific environmental considerations."
        ],
    },
    {
        slug: "checklist-for-building-investment-success",
        title: "Checklist for Building Investment Success",
        category: "Guides",
        excerpt: "Key considerations for investors and property owners before breaking ground on new developments.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/04/Front-scaled.jpg",
        publishedAt: "January 28, 2026",
        readTime: "6 min read",
        content: [
            "Investing in a new building project is a significant undertaking that requires meticulous planning. Before the first brick is laid, several critical factors must be evaluated to ensure both financial and functional success.",
            "The first step is a comprehensive feasibility study. This involves analyzing site conditions, local zoning laws, and budget constraints. Understanding the 'buildability' of your vision early on prevents costly redesigns and delays later in the process.",
            "Choosing the right architectural partner is equally vital. You need a team that understands not just the art of design, but the complexities of local council approvals and construction management. This ensures your project moves smoothly from concept to completion.",
            "Finally, always plan for the future. Invest in high-quality materials and sustainable technologies that may have a higher upfront cost but significantly reduce long-term maintenance and operational expenses, increasing the overall value of your asset."
        ],
    },
    {
        slug: "understanding-the-cost-of-construction-design",
        title: "Understanding the Cost of Construction & Design",
        category: "Cost Planning",
        excerpt: "How to budget effectively for your architectural project in today's market conditions.",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/07/03.jpg",
        publishedAt: "January 14, 2026",
        readTime: "5 min read",
        content: [
            "Cost is often the most significant concern for clients embarking on a new architectural journey. Understanding the components that drive these costs—from professional fees to material procurement—is essential for realistic budgeting.",
            "Design fees are an investment in accuracy. A well-detailed set of plans reduces ambiguity on site, which is the leading cause of construction cost overruns. Our use of BIM (Building Information Modeling) allows us to detect clashes and quantify materials precisely before construction begins.",
            "Construction costs are influenced by site topography, utility access, and the finish level of the building. We work closely with quantity surveyors to provide regular cost updates throughout the design phases, allowing for informed decisions on where to invest and where to optimize.",
            "In a fluctuating market, contingency planning is non-negotiable. We recommend a 10-15% buffer to accommodate unforeseen site conditions or price changes in imported materials, ensuring the project reaches its conclusion without financial strain."
        ],
    },
];

export function getBlogPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}
