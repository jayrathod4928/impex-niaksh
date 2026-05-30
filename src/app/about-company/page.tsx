import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import HistorySection from "@/components/HistorySection/HistorySection";

export default function AboutCompanyPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
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
                imageSrc="/images/Office Image.jpeg"
                imageAlt="NIP Export Import Office Reception"
                points={[
                    "Currently the company serves products to many countries around the world, with main markets in America, Latin America, Europe, Asia, and Australia.",
                    "Our growing team of 10+ dedicated professionals works continuously to ensure premium service and total client satisfaction.",
                    "Our core goal is to build long-term engagement with our customers, ensuring they remain successful in their global missions.",
                    "We operate as a premier Import-Export sourcing agent in India, capable of sourcing the best quality products for any requirement."
                ]}
            />

            {/* Full-Width Interactive Google Map Section */}
            <section className="w-full relative">
                {/* Optional Section Label for a Premium look */}
                <div className="max-w-7xl mx-auto px-4 mb-6 sm:px-6 lg:px-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059]">Locate Us</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 font-serif">Global Headquarters</h3>
                </div>

                {/* Full Width Map Container with Subtle Edge Shadow */}
                <div className="w-full h-[400px] sm:h-[450px] md:h-[550px] bg-slate-100 shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] relative group overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1362095945805!2d72.6366114!3d22.9829392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8669dfbe9fbb%3A0xeae06df67cb3fe79!2sSharnam%20Elegance%20Block-A!5e0!3m2!1sen!2sin!4v1717060000000!5m2!1sen!2sin"
                        className="w-full h-full border-0 m-0 p-0 block filter grayscale-[15%] contrast-[105%] transition-all duration-700 group-hover:grayscale-0"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="NIP Export Import Global Head Office Location"
                    />
                </div>
            </section>
        </main>
    );
}