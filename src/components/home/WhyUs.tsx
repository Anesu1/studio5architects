"use client";

import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";

const items = [
    {
        title: "Registered Professional Practice",
        content: (
            <p>
                Studio 5 Architects is registered with the Architects&apos; Council of Zimbabwe and follows professional standards throughout every stage of delivery.
            </p>
        ),
    },
    {
        title: "Design For People",
        content: (
            <p>
                We design spaces that align with client lifestyles, budgets, and long-term use, balancing comfort, function, and identity.
            </p>
        ),
    },
    {
        title: "Environmental Responsibility",
        content: (
            <p>
                Our work respects both built and natural environments, applying practical sustainability decisions from concept through implementation.
            </p>
        ),
    },
    {
        title: "End-To-End Project Support",
        content: (
            <p>
                From feasibility and conceptualisation to site coordination, we remain actively involved to protect design quality, timelines, and cost certainty.
            </p>
        ),
    },
];

export default function WhyUs() {
    return (
        <section className="py-24 px-6 md:px-12 bg-verdant-bg">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <Reveal>
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Our Mission</h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-3xl md:text-4xl font-heading leading-tight uppercase">
                            Designing buildings that enhance
                            <br />
                            the built and natural environment.
                        </p>
                    </Reveal>
                </div>
                <div className="md:w-2/3">
                    <Accordion items={items} />
                </div>
            </div>
        </section>
    );
}
