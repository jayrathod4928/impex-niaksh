import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import {surgicalEquipmentProducts} from "@/app/products/surgical-equipment/mock";
import ProductGrid from "@/components/Common/ProductGrid";


const surgicalEquipmentPoints = [
    `NIP Export Import Pvt. Ltd. is a premier name in the global trade industry, specializing in the sourcing and distribution of high-quality products across international borders. Driven by a commitment to excellence and seamless logistics, we bridge the gap between global manufacturers and diverse markets. At NIP Export Import, we pride ourselves on delivering reliable, certified, and cost-effective solutions that adhere to the highest global standards. Our focus on supply chain integrity, timely delivery, and client satisfaction makes us a trusted partner for businesses and stakeholders worldwide seeking excellence in import and export services.`,
];

export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Surgical Equipments"
                accentColor="#c5a059"
            />
            <ContentShowcase
                title="About Surgical Equipment"
                points={surgicalEquipmentPoints}
                imageSrc="https://www.aedmexlifecare.in/assets/images/img/medicaldevices-banner.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Surgical Equipments"
                data={surgicalEquipmentProducts}
            />
        </main>
    );
}