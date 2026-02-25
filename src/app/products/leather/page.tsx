import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import ProductGrid from "@/components/Common/ProductGrid";
import {leatherProucts} from "@/app/products/leather/mock";

const leatherPoints = [
"NIPL is well known for the quality of leather and its a one of the highly leather produce company of India.\n" +
"Leather products are highly coveted for their classy look and feel. Be its shoes, bags or jackets, pure leather products can always be set apart from the synthetics and the faux leather.\n" +
"Leather is a strong, flexible and durable material obtained from the tanning, or chemical treatment, of animal skins and hides to prevent decay.\n" +
"Leather can be used to make a variety of items, including clothing, footwear, handbags, furniture, tools and sports equipment, and lasts for decades.",
    ];
export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Leather Products"
                accentColor="#c5a059"
            />
            <ContentShowcase
                title="About Leather Products"
                points={leatherPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2023/01/leather-pro.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Leather Products"
                data={leatherProucts}
            />
        </main>
    );
}