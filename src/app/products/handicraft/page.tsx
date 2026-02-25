import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import {handiCraftsProducts} from "@/app/products/handicraft/mock";
import ProductGrid from "@/components/Common/ProductGrid";


const handiCraftsPoints = [
    `Indian handicrafts are a cornerstone of the global artisanal market, representing a seamless blend of ancient heritage and contemporary design. These products are more than just decorative items; they are the result of centuries-old techniques passed down through generations of skilled artisans across India. From the intricate brass work of Moradabad to the hand-carved Sheesham wood of Saharanpur and the vibrant block prints of Rajasthan, the category encompasses a vast range of materials including metal, wood, clay, and natural fibers. Because these items are handcrafted, they offer a level of uniqueness and "soul" that mass-produced factory goods cannot replicate, making them highly sought after by international importers in the home decor, fashion, and giftware industries.`,
];

export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Handicrafts"
                accentColor="#c5a059"
            />
            <ContentShowcase
                title="About Bed sheet Products"
                points={handiCraftsPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/07/Wooden-Gift-Items-1.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Handicrafts Products"
                data={handiCraftsProducts}
            />
        </main>
    );
}