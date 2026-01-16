"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Handshake,
    Briefcase,
    ShieldCheck,
    Timer,
    BadgePercent,
    UserCheck
} from 'lucide-react';

// 1. Explicitly typed Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each card appearing
            delayChildren: 0.2,
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] // Custom "premium" cubic-bezier ease
        }
    }
};

const features = [
    {
        title: "We Build Relations",
        icon: <Handshake className="w-10 h-10" />,
        description: "Deep-rooted global networks ensuring smooth trade operations."
    },
    {
        title: "Experience & Professional",
        icon: <Briefcase className="w-10 h-10" />,
        description: "Decades of expertise in international logistics and compliance."
    },
    {
        title: "High Quality Products",
        icon: <ShieldCheck className="w-10 h-10" />,
        description: "Rigorous quality control standards for every shipment."
    },
    {
        title: "We Deliver On Time",
        icon: <Timer className="w-10 h-10" />,
        description: "Optimized supply chains to meet your critical deadlines."
    },
    {
        title: "Price Benefits",
        icon: <BadgePercent className="w-10 h-10" />,
        description: "Competitive pricing through direct sourcing and scale."
    },
    {
        title: "Complete Client Satisfaction",
        icon: <UserCheck className="w-10 h-10" />,
        description: "24/7 support and personalized service for every client."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 px-6 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
                    >
                        Why You <span className="text-blue-600">Choose Us</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "96px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-orange-500 mx-auto rounded-full"
                    />
                </div>

                {/* 2. Container using Variants */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants} // 3. Card using child Variants
                            whileHover={{
                                y: -12,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-default"
                        >
                            {/* Premium Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className="mb-8 p-5 rounded-2xl bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-200">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed max-w-[250px]">
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom Decorative Accent */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-orange-500 group-hover:w-1/2 transition-all duration-500 rounded-full" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;