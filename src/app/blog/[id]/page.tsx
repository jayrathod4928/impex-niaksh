// src/app/blog/[id]/page.tsx
import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "../blogData";

interface BlogPostDetailPageProps {
    params: Promise<{ id: string }>;
}

/**
 * 1. FIX: Tell Next.js which paths to pre-render at build time
 * This fulfills the requirement for 'output: export' configuration.
 */
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPostDetailPage({ params }: BlogPostDetailPageProps) {
    // Unwrapping Next.js Async dynamic route parameters
    const { id } = await params;

    // Search for a matching configuration parameters key pattern
    const article = BLOG_POSTS.find((post) => post.id === id);

    // Fallback if user navigates to an invalid slug path route
    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-4">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Article Not Found</h1>
                <p className="text-slate-500 mb-6">The insights page you are looking for does not exist or has moved.</p>
                <Link href="/blog" className="px-5 py-2.5 bg-[#c5a059] text-white rounded-xl text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
                    Return to Blog
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50/30 pb-20 pt-24 md:pt-36">
            {/* ^ Added pt-24 (mobile) and md:pt-36 (desktop) to clear the fixed NIPL header */}

            {/* Header Content Breadcrumb Navigation Section */}
            <div className="max-w-4xl mx-auto pt-4 pb-6 px-4">
                {/* ^ Reduced interior padding-top from pt-12 to pt-4 since the main container now handles the margin */}

                <Link href="/blog" className="text-xs font-bold text-[#c5a059] hover:underline flex items-center gap-1 mb-8 uppercase tracking-wider transition-colors duration-200">
                    ← Back to Blog Hub
                </Link>

                {/* The rest of your code remains unchanged */}
                <span className="inline-block bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#c5a059]/20 shadow-sm">
            {article.category}
        </span>

                <h1 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight mt-4 mb-6">
                    {article.title}
                </h1>

                <div className="flex items-center gap-4 text-slate-400 text-xs font-medium border-b border-slate-200 pb-8">
                    <span>Published: <b className="text-slate-600">{article.date}</b></span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{article.readTime}</span>
                </div>
            </div>

            {/* Main Visual Display and Article Layout Content Block */}
            <div className="max-w-4xl mx-auto px-4">
                <div className="w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-sm mb-10">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                </div>

                {/* Premium Typographic Article Body Rendering Layout */}
                <article className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-sans md:text-lg space-y-6">
                    <p className="font-medium text-slate-800 text-xl leading-relaxed italic border-l-4 border-[#c5a059] pl-4 mb-8">
                        {article.excerpt}
                    </p>
                    <p>
                        As modern international logistics protocols demand enhanced structural efficiency, aligning internal freight execution models with contemporary regulatory changes becomes critical. Navigating modern global customs procedures requires proactive monitoring of regional maritime lanes and documentation standard variances.
                    </p>
                    <p>
                        By optimizing end-to-end supply chain visibility and utilizing specialized cold-chain infrastructure configurations where applicable, premium export operations remain resilient. Ongoing cross-border infrastructure optimizations guarantee compliance safety thresholds are maintained across distinct market environments seamlessly.
                    </p>
                </article>
            </div>
        </main>
    );
}