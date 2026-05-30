import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    imageUrl: string;
}

const BLOG_POSTS: BlogPost[] = [
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

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle="Industry Insights & Updates"
                title="Blog"
                accentColor="#c5a059"
            />

            {/* Introductory Layout block */}
            <section className="py-12 md:py-16 px-4 max-w-4xl mx-auto text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] mb-3 block">
                    Knowledge Hub
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-serif tracking-tight mb-4">
                    Trade Insights & Global Perspectives
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                    Stay informed with our regular updates detailing international trade regulations, market trend analysis,
                    and operational methodologies designed to maximize supply chain performance.
                </p>
                <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mt-6"></div>
            </section>

            {/* Blog Grid Section */}
            <section className="bg-slate-50/50 border-t border-slate-100 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

                        {BLOG_POSTS.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col group cursor-pointer"
                            >
                                {/* Featured Image Container */}
                                <div className="h-48 md:h-52 w-full overflow-hidden bg-slate-100 relative">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Category Floating Tag */}
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-slate-200/40 shadow-sm">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Article Details Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Meta Timeline Row */}
                                    <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold mb-3">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    {/* Core Text Info */}
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#c5a059] transition-colors duration-300 line-clamp-2 font-serif leading-snug mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-3 mb-6">
                                        {post.excerpt}
                                    </p>

                                    {/* Dynamic Interactive Call to Action */}
                                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between group/btn">
                                        <span className="text-xs font-bold text-slate-700 group-hover:text-[#c5a059] transition-colors duration-300 tracking-wide uppercase">
                                            Read Full Article
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-slate-400 group-hover:text-[#c5a059] transform transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        ))}

                    </div>
                </div>
            </section>
        </main>
    );
}