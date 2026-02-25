import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import ProductGrid from "@/components/Common/ProductGrid";
import {ceramicProducts} from "@/app/products/furniture/mock";

const furniturePoints = [
    "If you’re facing an empty house or a big remodel, you’ve got big choices to make. Before you decide how to fill your home, " +
    "learn about the options you have—the types of furniture and the names of furniture pieces—to help " +
    "you make the best decisions to decorate your rooms. Furniture is also used to hold objects at a convenient " +
    "height for work (as horizontal surfaces above the ground, such as tables and desks), or to store things " +
    "(e.g., cupboards and shelves). Furniture can be a product of design and is considered a form of decorative art. " +
    "Wood is the most environmentally friendly raw material. It’s renewable.",
];

export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Furniture"
                accentColor="#c5a059"
            />
            <ContentShowcase
                title="About Copper Products"
                points={furniturePoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/07/Furniture.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            {/* Product Listing Section */}
            <ProductGrid
                sectionTitle="Furniture Products"
                data={ceramicProducts}
            />
        </main>
    );
}