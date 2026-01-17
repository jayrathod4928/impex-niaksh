import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle="Industry Insights & Updates"
                title="Blog"
                accentColor="#c5a059"
            />
        </main>
    );
}