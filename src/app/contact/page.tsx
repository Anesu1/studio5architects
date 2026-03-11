import { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Architects in Harare, Zimbabwe | Studio 5",
    description: "Get in touch with Studio 5 Architects in Harare. Discuss your project requirements, mission, and budget with our expert architectural team.",
};

export default function ContactPage() {
    return <ContactClient />;
}
