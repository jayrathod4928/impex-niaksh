import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";

interface ExecutiveMember {
    name: string;
    role: string;
    avatarUrl: string;
    bio: string;
    phone: string;
    email: string;
}

const LEADERSHIP_TEAM: ExecutiveMember[] = [
    {
        name: "Ashvin Barad",
        role: "Managing Director & Founder",
        // Professional corporate gents avatar illustration
        avatarUrl: "https://img.magnific.com/premium-vector/vector-drawing-smiling-young-man-business-suit_1290707-2356.jpg?ga=GA1.1.1755562317.1780123937&semt=ais_test_b&w=740&q=80",
        bio: "Spearheads transnational trade partnerships, compliance frameworks, and corporate logistics strategies to scale NIPL's operational footprints across global markets.",
        phone: "+91 73594-58888",
        email: "info@niiakshimpex.com"
    },
    {
        name: "Daksha Barad",
        role: "Director of Operations",
        // Professional corporate ladies avatar illustration
        avatarUrl: "https://img.magnific.com/premium-vector/businesswoman-wearing-professional-attire_188544-266326.jpg?ga=GA1.1.1755562317.1780123937&semt=ais_test_b&w=740&q=80",
        bio: "Oversees quality assurance parameters, supply-chain documentation, and international buyer relationship pipelines to guarantee seamless delivery execution.",
        phone: "+91 96019-83363",
        email: "info@niiakshimpex.com"
    }
];

export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle="LEADERSHIP & VISION"
                title="Key Person"
                accentColor="#c5a059"
            />

            {/* Executive Introduction Block */}
            <section className="py-12 md:py-20 px-4 max-w-4xl mx-auto text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] mb-3 block">
                    Pillars of Excellence
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-serif tracking-tight mb-5">
                    Niiaksh Impex Management Board
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
                    Bringing together decades of combined trade insight, regulatory mastery, and global execution
                    standards to facilitate smooth, reliable sourcing networks for our worldwide clientele.
                </p>
                <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mt-6"></div>
            </section>

            {/* Dual Director Flex Matrix Layout */}
            <section className="bg-slate-50/60 border-t border-slate-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-8 lg:gap-12">

                    {LEADERSHIP_TEAM.map((member, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/2 bg-white border border-slate-200/50 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out flex flex-col items-center text-center group"
                        >
                            {/* Portrait Shell */}
                            {/* FIX: Added overflow-hidden to ensure circular clipping and changed object-contain to object-cover */}
                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-slate-50 p-2 border border-slate-100 shadow-inner mb-5 transition-transform duration-500 group-hover:scale-[1.03]">
                                <img
                                    src={member.avatarUrl}
                                    alt={`${member.name} - ${member.role}`}
                                    className="w-full h-full object-cover select-none"
                                />
                            </div>

                            {/* Credentials */}
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight font-serif">
                                {member.name}
                            </h3>
                            <p className="text-xs font-bold text-[#c5a059] uppercase tracking-wider mt-1.5 mb-3">
                                {member.role}
                            </p>

                            {/* Biography */}
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 flex-grow max-w-sm">
                                {member.bio}
                            </p>

                            {/* Direct Communication Channels */}
                            <div className="w-full border-t border-slate-100 pt-4 mt-auto space-y-1.5">
                                <a
                                    href={`tel:${member.phone.replace(/[\s-]/g, '')}`}
                                    className="text-xs font-semibold text-slate-700 hover:text-[#c5a059] block tracking-wide transition-colors duration-300"
                                >
                                    Direct: {member.phone}
                                </a>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="text-[11px] font-medium text-slate-400 hover:text-slate-600 block tracking-normal transition-colors duration-300"
                                >
                                    {member.email}
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </main>
    );
}