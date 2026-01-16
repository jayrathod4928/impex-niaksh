import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Contact us"
                accentColor="#c5a059"
            />
            <ScrollReveal>
                <ContactSection />
            </ScrollReveal>
        </main>
    );
}