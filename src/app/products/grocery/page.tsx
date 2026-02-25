import ProductGrid from "@/components/Common/ProductGrid";
import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import {varietyDal, varietyPulses, varietyFlours, basmatiRice } from "@/app/products/grocery/mock";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";

const groceryPoints = [
    "OES Export Import Pvt. Ltd is a world-class Grocery exporter in India. We have been manufacturing top quality product for our customers.",
    "Our best quality products have helped us gain the reputation of being one of the grocery exporters in India. Our customers have continuously demanded and expected a lot from us. They look up to us for more variety and we never let them down.",
    "We know how much people love and value food.Therefor we have many Grocery Products like, Wheat flour, Dal/Lentils & Legumes, Coffee + TEA and Sugar, all Spices, Pasta, Noodles, Breakfast and Snack , Sauces / Masala /Paste, Cooking oil, Dairy & Eggs many more. We have a wide portfolio of products; therefore, you will get a lot of items from this one place.",
];

export default function FruitsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle="PREMIUM GLOBAL SOURCING"
                title="Grocery"
                accentColor="#c5a059"
            />

            {/* Information Section */}
            <ContentShowcase
                title="About Our Grocery"
                points={groceryPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2021/07/pulsese.jpg"
                imageAlt="Assorted tropical and seasonal grocery from India"
                reverse={false}
            />

            {/* Product Listing Section */}
            <ProductGrid
                sectionTitle="Variety of Dal"
                data={varietyDal}
            />

            <ProductGrid
                sectionTitle="Variety of Pulses"
                data={varietyPulses}
            />
            <ProductGrid
                sectionTitle="Variety of Flours"
                data={varietyFlours}
            />
            <ProductGrid
                sectionTitle="Rice"
                data={basmatiRice}
            />
        </main>
    );
}