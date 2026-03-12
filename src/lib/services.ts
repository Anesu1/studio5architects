export type Service = {
    slug: string;
    title: string;
    description: string;
    image: string;
    longDescription: string;
    approach: {
        title: string;
        description: string;
    }[];
};

export const services: Service[] = [
    {
        slug: "interior-design",
        title: "Interior Design",
        description: "Designs that shape-out internal space according use and intended level of privacy.",
        image: "/images/services/interior/interior (1).webp",
        longDescription: "As much as buildings can be a marvel outside, they should create just as good an experience inside. Residential space should afford you comfort, privacy and safety. Business space should allow accessibility and promote productivity. We start out every project with the experience of occupants in mind.",
        approach: [
            {
                title: "Experience of Occupants",
                description: "We prioritize the comfort, privacy, and safety of the people who will live and work in the spaces we design."
            },
            {
                title: "Functional Aesthetics",
                description: "Balancing beauty with practicality to ensure every design choice serves a dual purpose of form and function."
            },
            {
                title: "Material Innovation",
                description: "Selecting high-quality, durable materials that enhance the tactile and visual experience of the interior."
            }
        ]
    },
    {
        slug: "landscape-design",
        title: "Landscape Design",
        description: "External design of the natural environment to complement overall design.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/09/2.jpg",
        longDescription: "Aesthetic beauty of a building’s surroundings allows a viewer to take in a full visual experience. The landscape is designed according to the building’s purpose. Safely mixing natural elements with an artificial placement of structures that match and amplify the building’s tone.",
        approach: [
            {
                title: "Natural Harmony",
                description: "We design outdoor spaces that seamlessly blend with the building's architecture and the surrounding environment."
            },
            {
                title: "Sustainable Ecosystems",
                description: "Integrating drought-resistant plants and efficient water management systems to ensure long-term site health."
            },
            {
                title: "Contextual Storytelling",
                description: "Using paths, lighting, and plantings to guide the viewer through a full visual experience of the project."
            }
        ]
    },
    {
        slug: "feasibility-studies",
        title: "Feasibility Studies",
        description: "A professional assessment and evaluation of possibilities early on in the process.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/11/MAIN-1-scaled.jpg",
        longDescription: "We consider your budget, timelines, equipment, material and human resources to determine whether a project is possible. This is based on standard industrial practice as well as our experience with unique cases. A thorough feasibility study reduces risk and provides a clear roadmap for success.",
        approach: [
            {
                title: "Risk Assessment",
                description: "Identifying potential technical, financial, and regulatory hurdles before significant investment is made."
            },
            {
                title: "Resource Planning",
                description: "Evaluating the availability of equipment, materials, and specialized labor required for your specific project."
            },
            {
                title: "Strategic Roadmapping",
                description: "Creating a clear, data-driven path from initial concept to final construction based on realistic timelines."
            }
        ]
    },
    {
        slug: "conceptualising",
        title: "Conceptualising",
        description: "Design based on interconnected needs and solutions that define the purpose of the project.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/11/MAIN-scaled.jpg",
        longDescription: "We creatively approach the design based on a number of factors including Function and Context as well as the impression or language that the project intends to speak. Conceptualising is in essence an inspired realisation of the overall design, aligning vision with practical constraints.",
        approach: [
            {
                title: "Inspired Realisation",
                description: "Translating abstract project goals into concrete architectural forms and spatial relationships."
            },
            {
                title: "Contextual Language",
                description: "Ensuring the project speaks a design language that respects its physical, cultural, and historical environment."
            },
            {
                title: "Iterative Refinement",
                description: "Testing multiple design iterations to find the optimal solution that satisfies all project requirements."
            }
        ]
    },
    {
        slug: "project-construction-management",
        title: "Project & Construction Management",
        description: "Total involvement in the project to ensure that everything is where it is supposed to be.",
        image: "https://www.studio5architects.com/wp-content/uploads/2020/11/03-1.jpg",
        longDescription: "Based on our knowledge and experience, we initiate and recommend steps that move the project forward. We inspect and ensure quality, manage timeframes, manage the budget and reinforce the quality of workmanship, ensuring your vision is realized exactly as intended.",
        approach: [
            {
                title: "Quality Assurance",
                description: "Regular site inspections and rigorous standards to ensure the highest level of workmanship at every stage."
            },
            {
                title: "Budget & Time Control",
                description: "Active management of financial resources and schedules to keep the project on track and within scope."
            },
            {
                title: "Interdisciplinary Coordination",
                description: "Managing all contractors and specialists to ensure a unified and efficient construction process."
            }
        ]
    }
];

export function getServiceBySlug(slug: string) {
    return services.find((s) => s.slug === slug);
}
