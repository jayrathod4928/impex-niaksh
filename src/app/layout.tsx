import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Global Export Prime | Premium Import Export",
    description: "Leading sourcing agent for food, garments, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {/* This will animate the entire page content as one block */}
        <ScrollReveal>
            <main>{children}</main>
        </ScrollReveal>
        </body>
        </html>
    );
}