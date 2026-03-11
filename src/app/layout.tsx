import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-body-family" });

export const metadata: Metadata = {
    title: {
        default: "Studio 5 Architects | Leading Architects in Harare, Zimbabwe",
        template: "%s | Studio 5 Architects"
    },
    description: "Studio 5 Architects is a premier architectural firm in Harare, Zimbabwe, specializing in sustainable design, urban planning, and innovative commercial, residential, and institutional projects.",
    keywords: ["Architects in Harare", "Architecture Zimbabwe", "Harare Design Studio", "Sustainable Architecture Zimbabwe", "Commercial Architects Harare"],
    openGraph: {
        title: "Studio 5 Architects",
        description: "Designing spaces where humanity can thrive. Premier architecture firm in Zimbabwe.",
        url: "https://studio5architects.com",
        siteName: "Studio 5 Architects",
        locale: "en_ZW",
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalBusiness",
    "name": "Studio 5 Architects",
    "image": "https://studio5architects.com/logo.png",
    "@id": "https://studio5architects.com",
    "url": "https://studio5architects.com",
    "telephone": "+263-xxxx-xxx",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Harare, Zimbabwe",
        "addressLocality": "Harare",
        "addressCountry": "ZW"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -17.8252,
        "longitude": 31.0335
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} antialiased`}>
                <SmoothScroll>{children}</SmoothScroll>
                <ChatWidget />
            </body>
        </html>
    );
}
