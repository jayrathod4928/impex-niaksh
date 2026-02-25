import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import {copperBottles,copperStatues, copperJug } from "@/app/products/copper-products/mock";
import ProductGrid from "@/components/Common/ProductGrid";

const copperPoints = [
    "Copper is an imperative nutrient for body. It helps the body to form red blood cells, maintain healthy bones, blood vessels, nerves, immune function, and iron absorption. It prevents cardiovascular disease and osteoporosis when taken in proper amount in diet.",
    "The handmade copper bottles, Jugs & Other Utensils fight free radicals in the body and boost the digestive system health.",
    "We have wide range of Copper bottle like, Diamond copper bottle, printed copper bottle, hammered copper bottle, plain copper bottle and Copper jug variety like Printed, plain Jug.",
    "Also wide range of products which include Copper god Statue like Copper Ganesh idol, Shiva idol Statue, Copper Buddha, copper diva Temple etc.",
];

export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Copper Products"
                accentColor="#c5a059"
            />
            {/* Information Section */}
            <ContentShowcase
                title="About Copper Products"
                points={copperPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2021/06/Copper-Products.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />

            {/* Product Listing Section */}
            <ProductGrid
                sectionTitle="Copper Bottle"
                data={copperBottles}
            />
            <ProductGrid
                sectionTitle="Copper God Statue"
                data={copperStatues}
            />
            <ProductGrid
                sectionTitle="Copper Jug"
                data={copperJug}
            />
        </main>
    );
}