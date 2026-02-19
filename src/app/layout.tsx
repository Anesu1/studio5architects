import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-body-family" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-heading-family" });

export const metadata: Metadata = {
    title: "Studio 5 Architects",
    description: "Studio 5 Architects - Designing spaces where humanity can thrive.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${bebas.variable} antialiased`}>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
