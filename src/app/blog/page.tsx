import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Blog"
                accentColor="#c5a059"
            />
        </main>
    );
}