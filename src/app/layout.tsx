import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"; // Import your new footer
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
    title: "NIPL | Global Export Prime | Premium Import Export",
    description: "Leading sourcing agent for food, garments, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />

        {/* Main content area */}
        <ScrollReveal>
            <main className="flex-grow">
                {children}
            </main>
        </ScrollReveal>

        {/* Footer component */}
        <Footer />
        </body>
        </html>
    );
}