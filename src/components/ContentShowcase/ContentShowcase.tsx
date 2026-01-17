"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ContentShowcaseProps {
    title: string;
    points: string[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
                                                             title,
                                                             points,
                                                             imageSrc,
                                                             imageAlt,
                                                             reverse = false,
                                                         }) => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const textItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="w-full py-12 md:py-15 lg:py-20 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
            <div
                className={`max-w-7xl mx-auto flex flex-col gap-10 lg:gap-16 items-center ${
                    reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
            >
                {/* IMAGE BLOCK */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: reverse ? 50 : -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2"
                >
                    <div className="relative group overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                        <div className="relative h-[300px] sm:h-[450px] w-full">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                        </div>
                        {/* Elegant glass-effect border/overlay */}
                        <div className="absolute inset-0 border-[1px] border-white/20 rounded-3xl pointer-events-none" />
                    </div>
                </motion.div>

                {/* TEXT BLOCK */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 space-y-6 lg:space-y-8"
                >
                    <div>
                        <motion.h2
                            variants={textItemVariants}
                            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
                        >
                            {title}
                        </motion.h2>
                        <motion.div
                            variants={textItemVariants}
                            className="h-1.5 w-20 bg-[#ff8c00] mt-4 rounded-full"
                        />
                    </div>

                    <ul className="space-y-4 md:space-y-6">
                        {points.map((point, index) => (
                            <motion.li
                                key={index}
                                variants={textItemVariants}
                                className="group flex items-start gap-4"
                            >
                                <div className="mt-1.5 shrink-0">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff8c00] group-hover:scale-150 transition-transform duration-300" />
                                </div>
                                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                                    {point}
                                </p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default ContentShowcase;