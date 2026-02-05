import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
// Assuming this is where you save the image from the screenshot
import currentStageImg from "@/components/Images/current-stage.jpg";
import HistorySection from "@/components/HistorySection/HistorySection";

export default function AboutCompanyPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle="ESTABLISHED EXCELLENCE"
                title="Company"
                accentColor="#c5a059"
            />
            <HistorySection />

            {/* Current Stage Section */}
            <ContentShowcase
                title="Current stage of company"
                imageSrc="https://media.istockphoto.com/id/1333816158/photo/large-office-interior-a-reception-desk-a-lounge-corner-with-copy-space-and-wordesks-behind.jpg?s=612x612&w=0&k=20&c=kp4LrcxTmV9Jj7QjR2cHieaN9urXviCqBNMl26aInHg="
                imageAlt="OES Export Import Office Reception"
                points={[
                    "Currently the company serves products to many countries around the world, with main markets in America, Latin America, Europe, Asia, and Australia.",
                    "Our growing team of 10+ dedicated professionals works continuously to ensure premium service and total client satisfaction.",
                    "Our core goal is to build long-term engagement with our customers, ensuring they remain successful in their global missions.",
                    "We operate as a premier Import-Export sourcing agent in India, capable of sourcing the best quality products for any requirement."
                ]}
            />
        </main>
    );
}