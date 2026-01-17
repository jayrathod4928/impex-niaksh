import ProductGrid from "@/components/Common/ProductGrid";
import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import {foodProducts, vegetableProducts} from "@/app/products/fruits/mock";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";

// 1. Move data outside the component for cleaner rendering
const fruitPoints = [
    "Fruits are a good source of vitamins, dietary fiber and folate.",
    "India is popularly known as 'the fruit basket of the world'.",
    "Eating fruit provides health benefits — people who eat more fruits as part of an overall healthy diet are likely to have a reduced risk of some chronic diseases.",
    "Fruits provide nutrients vital for health and maintenance of your body.",
    "Most fruits are naturally low in fat, sodium, and calories. None have cholesterol.",
    "Most of the fruits are grown in India including mangoes, bananas, papayas, oranges, apricots, grapes, strawberries, apples, guavas, litchis, so on, and so forth.",
    "Therefore, fruits export from India has been on the rise for a few decades. The export of fruits from India was around 372213.73 Metric tones in the year 2018-2019."
];
const vegetablesPoints = [
    "Vegetables Excellent source of vitamins. Good source of dietary fiber and folate.",
    "All vegetables contain healthful vitamins, minerals, and fiber. However, some stand out for their exceptional health benefits.",
    "Including vegetables as part of a healthy eating pattern can reduce the risk of some chronic diseases, including heart disease and type 2 diabetes, as well stroke and cancer.",
    "Vegetables are an important part of a healthy eating pattern and are excellent sources of many nutrients, including potassium, fiber, folate (folic acid) and vitamins A, E and C.",
    "Many vegetables are included in the export of vegetables from India like Onion, Broccoli, Brinjal, Spinach, cabbage, Green chilies so on, and so forth.",
];


export default function FruitsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle="NATURE'S FINEST SELECTION"
                title="Fruits & Vegetables"
                accentColor="#c5a059"
            />

            {/* Information Section */}
            <ContentShowcase
                title="About Fruit Products"
                points={fruitPoints}
                imageSrc="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />

            {/* Product Listing Section */}
            <ProductGrid
                sectionTitle="Our Fruit Products"
                data={foodProducts}
            />

            {/* Information Section */}
            <ContentShowcase
                title="About Vegetable Products"
                points={vegetablesPoints}
                imageSrc="https://images.unsplash.com/photo-1610348725531-843dff563e2c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D"                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />

            <ProductGrid
                sectionTitle="Our Vegetable Products"
                data={vegetableProducts}
            />
        </main>
    );
}