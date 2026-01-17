import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import ProductGrid from "@/components/Common/ProductGrid";
import {namkeenProducts, frozenFood, frozenVegetables} from "@/app/products/namkeen/mock";

const namkeenPoints = [
    "Indian salted Namkeen have earned the flavour of global customers due to their unique mix of sweet, salty, tangy and spicy flavours. The Namkeen from India are known for being delicious and healthy.",
    "Namkeen are typically Indian word which relate to the age old Indian traditional of hospitality.",
    "From the time immemorial, it has been our tradition to mark a joyous Occasion with distributing namkeen. The same taste is packed our Namkeen.",
    "Spices are aromatic substances of vegetable origin obtained from various roots, bark, leaves, and stems of certain plants.",
    "We are a wide range of mouth-watering Namkeen to our worldwide Customer for Parties and for tea time.",
    "Some of product are Bhujia sev, Chatpata chana dal, Khatta meetha mix, Moong dal, Spicy sev, khakhara , farsan, chivda save, chips etc.",
];

const frozenFoodPoints = [
    "Not many people get the time to cook according to traditional Indian practices. Frozen dinners give busy people a way to feed themselves and their family’s healthy meals in minutes.",
    "It maintain you the nutrients you need to maintain your health, and energy.",
    "These Frozen food contains no preservatives and utmost hygiene condition.",
    "Finest Ingredients are selected from various parts of India to give savoury delightful taste that make OES frozen food products are components in completing any mouth water meal.",
    "Our Product are alternative from the time consuming and tedious work involved in making different Indian cuisine. Heat, serve and enjoy Indian taste.",
    "Some of product are Frozen paratha, Frozen Thepla, Frozen Pizza, Frozen Panjabi naan etc.",
];

export default function SpicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle="TRADITIONAL FLAVORS, MODERN CONVENIENCE"
                title="Namkeen & Frozen"
                accentColor="#c5a059"
            />
            {/* Information Section */}
            <ContentShowcase
                title="About NIPL Namkeen"
                points={namkeenPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/12/Namkeen-Mixture.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="NIPL Namkeen Products"
                data={namkeenProducts}
            />

            <ContentShowcase
                title="About Frozen Foods"
                points={frozenFoodPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/12/cover-photo-Copy.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />

            <ProductGrid
                sectionTitle="Frozen Foods"
                data={frozenFood}
            />

            <ProductGrid
                sectionTitle="Frozen Vegetables"
                data={frozenVegetables}
            />
        </main>
    );
}