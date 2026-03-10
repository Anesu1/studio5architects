import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-body-family" });

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
            <body className={`${inter.variable} antialiased`}>
                <SmoothScroll>{children}</SmoothScroll>
                <ChatWidget />
            </body>
        </html>
    );
}
