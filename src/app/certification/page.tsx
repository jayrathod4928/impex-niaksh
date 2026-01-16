import Certification from "@/components/Certification/Certification";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import AccreditationGallery from "@/components/AccreditationGallery/AccreditationGallery";

export default function CertificationsPage() {
    return (
        <main>
            <ScrollReveal>
                <Certification />
            </ScrollReveal>
            <ScrollReveal>
                <AccreditationGallery />
            </ScrollReveal>
        </main>
    );
}