import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Gallery"
                accentColor="#c5a059"
            />
        </main>
    );
}