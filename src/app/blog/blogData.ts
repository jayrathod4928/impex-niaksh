// src/data/blogData.ts

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    imageUrl: string;
    content?: string; // Optional: Add a placeholder for full article markup down the line
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "global-supply-chain-2026",
        title: "Navigating Global Supply Chain Shifts: Trends to Watch",
        excerpt: "Discover the critical macroeconomic changes and maritime routing adaptations shaping the export-import landscape this year.",
        category: "Logistics",
        date: "May 28, 2026",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "agricultural-export-standards",
        title: "Maintaining Freshness: Quality Control in Cold-Chain Food Export",
        excerpt: "An in-depth look into international phytosanitary compliances and advanced IQF freezing technologies used to preserve quality during long transits.",
        category: "Quality Assurance",
        date: "May 15, 2026",
        readTime: "4 min read",
        imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "sustainable-packaging-demand",
        title: "The Rise of Eco-Friendly Packaging in International Trade",
        excerpt: "How sustainable materials like jute, biodegradable paper takeaway boxes, and bamboo are replacing traditional plastics to meet strict global custom regulations.",
        category: "Sustainability",
        date: "April 30, 2026",
        readTime: "3 min read",
        imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80"
    }
];