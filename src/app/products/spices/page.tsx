import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import ProductGrid from "@/components/Common/ProductGrid";
import {spicesProducts} from "@/app/products/spices/mock";

const spicesPoints = [
    "Spices are one of the most important ingredients in Indian dishes. Indian Spices have been popular across the world for their unique flavor, aroma, and beautiful texture.",
    "India has been a front-runner in the race for export of spices. India leads in the production and their exports of different spices and products in the last few years have shown an increasing trend.",
    "Out of the 109 varieties listed by the International Organization for Standardization around 75 varieties are exported and produced by India and therefore India is known to be the “home of spices”.",
    "Spices are aromatic substances of vegetable origin obtained from various roots, bark, leaves, and stems of certain plants.",
    "They have a varied range of properties and cater to the cosmetic, perfumery, medicinal and food industries.",
    "In the medicinal sector, they act as antioxidants, antimicrobial agents. To the perfumery industry, the processed products of spices like oleoresins and spice oils play an important role.",
    "Spices are valued mainly for their distinctive color, flavors and aroma and thus are indispensable for culinary purposes and flavoring.",
    "Spices come with notable nutritional values and provide some major health benefits.",
    "we believe that Indian culture and our unique spices in India should reach each corner of the world.",
];

export default function SpicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle="PURE, FRESH, AND NATURALLY SOURCED"
                title="Spices"
                accentColor="#c5a059"
            />
            {/* Information Section */}
            <ContentShowcase
                title="About Our Spices"
                points={spicesPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/11/Spices.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Spices Products"
                data={spicesProducts}
            />
        </main>
    );
}