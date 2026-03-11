import { Metadata } from "next";
import CareersClient from "@/components/careers/CareersClient";

export const metadata: Metadata = {
    title: "Careers | Join Studio 5 Architects in Harare, Zimbabwe",
    description: "Join a team of visionaries shaping the future of architecture in Zimbabwe. Explore open positions for architects, designers, and project managers at Studio 5.",
};

export default function CareersPage() {
    return <CareersClient />;
}
