import { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
    title: "Architecture Services | Harare & Zimbabwe Design Studio",
    description: "Studio 5 Architects offers a comprehensive range of services including interior design, landscape design, feasibility studies, and project management in Harare, Zimbabwe.",
};

export default function ServicesPage() {
    return <ServicesClient />;
}
