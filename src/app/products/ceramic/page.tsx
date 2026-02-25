import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import {ceramicProducts,stoneProducts} from "@/app/products/ceramic/mock";
import ProductGrid from "@/components/Common/ProductGrid";

const ceramicPoints = [
    "In our everyday life, we are surrounded by ceramics and glass. Ceramics and glass are beneficial in the kitchen for cooking, " +
    "storing, and serving food. The finest tableware and cookware are made from porcelain. Wine Glasses, pitchers," +
    " and jars are obtained from blown glass. Kitchenware based on Pyrex glass is oven proof and used to cook " +
    "premium baked goods. Ceramic coatings cover the oven’s internal surface and make it scratch-free," +
    " easy-to-clean, and well insulated to ensure uniform temperature.  Even many washing machines " +
    "and dryers are coated with a porcelain enamel that is ant scratch, stain resistant and resistant" +
    " to chemicals.Ceramic has been in use for over millions of years and is found healthy l and safe" +
    " for food. It has been observed that ingredients that form ceramic are considered non-toxic.",
    ];
const stonePoints = [
    "The benefit of using Stone is that they can give an excellent finish to your temple which is unmatched." +
    " The marble temples will help you to get an elegance and style which is not possible in wood or metal pooja ghar." +
    " The other benefit of marble stone temples is that they do not get dirty easily and even if they do they are pretty" +
    " easy to clean. The most important event is the workplace opening as well as the putting of foundation stone. " +
    "The first place that the family or office members tends to go is in the house or office temple. " +
    "That shows the importance of a temple in the house or workplace. " +
    "Thus it is very important to choose the right temple for your office or house.",
];

export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Ceramic & Stone"
                accentColor="#c5a059"
            />
            {/* Information Section */}
            <ContentShowcase
                title="About Ceramic Products"
                points={ceramicPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/07/Ceramic.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Ceramic Products"
                data={ceramicProducts}
            />
            <ContentShowcase
                title="About Stone Products"
                points={stonePoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/07/stone-mandir.png"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Stone Products"
                data={stoneProducts}
            />
        </main>
    );
}