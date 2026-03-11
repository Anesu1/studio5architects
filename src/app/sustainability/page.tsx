import { Metadata } from "next";
import SustainabilityClient from "@/components/sustainability/SustainabilityClient";

export const metadata: Metadata = {
    title: "Sustainability | Sustainable Architecture Zimbabwe | Studio 5",
    description: "Studio 5 Architects is committed to sustainable design, social impact, and carbon neutrality. Learn about our climate journey and responsible design practices in Harare.",
};

export default function SustainabilityPage() {
    return <SustainabilityClient />;
}
