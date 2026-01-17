import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ProductGrid from "@/components/Common/ProductGrid";
import {gallery} from "@/app/gallery/mock";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle="EXCELLENCE IN EVERY PACK"
                title="Gallery"
                accentColor="#c5a059"
            />

            <ProductGrid
                sectionTitle=" "
                data={gallery}
                showUnderline={false}
            />
        </main>
    );
}