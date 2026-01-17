"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './HistorySection.module.scss';

const COMPANY_DATA = {
    history: {
        title: "History & Location",
        points: [
            "Founded in 2016 by visionary brothers Mr. Paresh & Mr. Sanjay with an interest to expand business globally.",
            "Strategically located in Ahmedabad, the western part of INDIA.",
            "Specializing in premium Handicrafts, Glass Products, Garments, Ceramic & Stone, and Home Decorative items.",
            "Initially established as a small-scale export operation focused on quality and cost-effectiveness.",
            "Successfully expanded to large-scale operations to better serve international markets.",
            "Core mission centered on empowering local artisans and daily-basis workers through handmade products.",
            "Dedicated to complete client satisfaction through timely delivery and high-quality standards.",
            "Committed to building long-term engagement and ensuring mission success for every honorable customer."
        ]
    }
};

const HistorySection = () => {
    // Explicitly typing as Variants fixes the TS2322 error
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className={`${styles.historySection} py-15 lg:py-18 px-6`}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Centered Decorative Line */}
                    <div className={styles.accentLine} />

                    {/* Centered Title */}
                    <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-16 leading-tight">
                        {COMPANY_DATA.history.title}
                    </h2>

                    {/* All points in a clean, balanced grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left w-full">
                        {COMPANY_DATA.history.points.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex items-start gap-5 p-5 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all duration-300"
                            >
                                {/* Premium Gold Bullet */}
                                <div className="mt-1.5 shrink-0">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#c5a059] shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
                                </div>
                                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HistorySection;