import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import ProductGrid from "@/components/Common/ProductGrid";
import {packagingProducts} from "@/app/products/packaging-products/mock";


const packagingPoints = [
    "NIPL Export Import Pvt ltd packaging Products are known for their quality, durability and the precision they come with. As a quality conscious organization, we ensure quality meets excellence in our output.",
    "Based on our state-of-the-art designing and manufacturing facilities, we provide a huge assortment of qualitative and exclusive range of packaging material that is catering to the requirements of diverse industries across the globe.\n",
    "Our flexible and versatile packaging material is reckoned for their outstanding features like rigid packaging, brilliant designs and prints, excellent clarity and impact strength.\n",
    "Our packaging products are Cotton Bag, Eco friendly bag, Jute bag, tote bag, paper bag, plastic bag, corrugated box, paper container, Mono carton and many more products.\n",
];

export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Packaging Products"
                accentColor="#c5a059"
            />
            <ContentShowcase
                title="About Packaging Products"
                points={packagingPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2021/06/Packaging-Products.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Bed Sheet Products"
                data={packagingProducts}
            />
        </main>
    );
}