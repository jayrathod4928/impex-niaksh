import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import SourcingSection from "@/components/SourcingSection/SourcingSection";
import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";

export default function SourcingAgentPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Sourcing Agent"
                accentColor="#c5a059"
            />
            <SourcingSection />
            <BenefitsSection />
        </main>
    );
}