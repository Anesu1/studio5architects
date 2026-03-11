import { Metadata } from "next";
import ProjectClient from "@/components/projects/ProjectClient";

export const metadata: Metadata = {
    title: "Our Projects | Zimbabwe Architectural Design Portfolio",
    description: "Explore Studio 5 Architects' portfolio of commercial, residential, healthcare, and industrial projects in Harare and across Zimbabwe.",
};

export default function ProjectsPage() {
    return <ProjectClient />;
}
