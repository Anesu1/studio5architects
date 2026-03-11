import { Metadata } from "next";
import NewsroomClient from "@/components/news/NewsroomClient";

export const metadata: Metadata = {
    title: "Newsroom | Studio 5 Architects Press & Updates",
    description: "Stay up to date with the latest awards, press releases, and media mentions from Studio 5 Architects in Harare, Zimbabwe.",
};

export default function NewsroomPage() {
    return <NewsroomClient />;
}
