import HeroSlider from "@/components/HeroSlider/HeroSlider";
import AboutSection from "@/components/AboutSection/AboutSection";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import Products from "@/components/Products/Products";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Certification from "@/components/Certification/Certification";

export default function Home() {
    return (
        <main className="relative w-full">
            <div className="relative z-10 flex flex-col w-full">
                <HeroSlider />
                <div>
                    <ScrollReveal>
                        <AboutSection />
                    </ScrollReveal>

                    <ScrollReveal>
                        <WhatWeDo />
                    </ScrollReveal>
                    <ScrollReveal>
                        <Products/>
                    </ScrollReveal>
                    <ScrollReveal>
                    <WhyChooseUs/>
                    </ScrollReveal>
                    <ScrollReveal>
                        <Testimonials />
                    </ScrollReveal>
                    <ScrollReveal>
                        <Certification />
                    </ScrollReveal>
                </div>
            </div>
        </main>
    );
}