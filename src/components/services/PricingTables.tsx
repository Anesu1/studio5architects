"use client";

import Reveal from "@/components/ui/Reveal";
import { Check } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const plans = [
    {
        name: "Essential",
        price: "$799",
        features: [
            "Initial Consultation",
            "Concept Mood Boards",
            "Floor Planning",
            "Furniture Recommendations"
        ]
    },
    {
        name: "Signature",
        price: "$9,999",
        popular: true,
        features: [
            "Everything in Essential",
            "3D Visualizations",
            "Material Selection",
            "Lighting Design",
            "Detailed Elevations"
        ]
    },
    {
        name: "Bespoke",
        price: "$15,999",
        features: [
            "Everything in Signature",
            "Custom Furniture Design",
            "Project Management",
            "Site Supervision",
            "Procurement Service",
            "Styling & Accessorizing"
        ]
    }
];

export default function PricingTables() {
    return (
        <section className="py-24 bg-verdant-bg">
            <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-6xl font-heading uppercase mb-4">Pricing Plans</h2>
                    <p className="text-lg text-black/60 max-w-2xl mx-auto">Transparent pricing tailored to the scale and complexity of your project.</p>
                </Reveal>
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className={`relative p-8 border ${plan.popular ? 'border-black bg-white shadow-xl' : 'border-black/10 bg-white/50'} flex flex-col`}
                    >
                        {plan.popular && (
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                                Most Popular
                            </span>
                        )}

                        <h3 className="text-xl font-heading uppercase tracking-widest mb-4">{plan.name}</h3>
                        <div className="text-4xl font-bold font-heading mb-8">{plan.price}</div>

                        <ul className="flex-1 space-y-4 mb-8">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-black/70">
                                    <span className="mt-1 p-0.5 bg-green-100 rounded-full text-green-800">
                                        <Check size={10} />
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <MagneticButton>
                            <button className={`w-full py-4 uppercase font-bold tracking-widest text-xs transition-colors ${plan.popular ? 'bg-black text-white hover:bg-gray-800' : 'bg-transparent border border-black hover:bg-black hover:text-white'}`}>
                                Select Plan
                            </button>
                        </MagneticButton>
                    </div>
                ))}
            </div>
        </section>
    );
}
