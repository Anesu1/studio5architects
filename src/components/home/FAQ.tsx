"use client";

import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";

const faqItems = [
    {
        title: "Do you handle both design and construction oversight?",
        content: (
            <p>
                Yes. We support projects from feasibility and conceptual design through project and construction management to ensure quality, budget control, and timely completion.
            </p>
        ),
    },
    {
        title: "What project types do you specialize in?",
        content: (
            <p>
                Our portfolio includes commercial, industrial, institutional, medical, and residential developments across Zimbabwe.
            </p>
        ),
    },
    {
        title: "Can you design to my budget?",
        content: (
            <p>
                Yes. Budget is integrated from early feasibility studies so design decisions align with realistic delivery costs and procurement timelines.
            </p>
        ),
    },
    {
        title: "Where is Studio 5 Architects based?",
        content: (
            <p>
                We are based at 5 Chaifont Road, Greencroft, Harare, and deliver projects across multiple regions.
            </p>
        ),
    },
];

export default function FAQ() {
    return (
        <section className="py-24 px-6 md:px-12 bg-verdant-white">
            <div className="max-w-4xl mx-auto">
                <Reveal className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-heading uppercase mb-4">Frequently Asked Questions</h2>
                    <p className="text-verdant-black/60 max-w-lg mx-auto">
                        Key information on our expertise, delivery process, and project approach.
                    </p>
                </Reveal>

                <Accordion items={faqItems} />
            </div>
        </section>
    );
}
