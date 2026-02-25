import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import {jewelleryProucts} from "@/app/products/jewellery/mock";
import ProductGrid from "@/components/Common/ProductGrid";

const jewelleryPoints = [
    "Artificial Jewellery, also known as costume jewellery, imitation jewellery or fashion jewellery is loved by one and all for its beauty and pocket friendly prices. This discrete fashion accessory is manufactured as a look-alike to real jewellery to complement the costumes and speak a style statement.\n",
    "Lately, various designers added their charm to imitation jewellery and gave it the designer, modern day touch. Gold plated, rhodium plated, beads, etc. are some of the versions of artificial jewellery.\n",
    "We are here to export artificial jewellery for male and female categories in very affordable price as per our customer’s needs and requirements.\n",
];

export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Imitation Jewellery"
                accentColor="#c5a059"
            />
            <ContentShowcase
                title="About Imitation Jewellery"
                points={jewelleryPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2023/01/ss.jpeg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Imitation Jewellery Products"
                data={jewelleryProucts}
            />
        </main>
    );
}