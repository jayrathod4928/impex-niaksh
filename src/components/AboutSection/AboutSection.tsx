"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './AboutSection.module.scss';
import Image from "next/image";

const AboutSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className={`py-12 md:py-24 bg-white overflow-hidden relative ${styles.container}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content Side */}
                    <motion.div
                        className="flex-1 space-y-6 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center space-x-4">
                            <div className="h-[2px] w-8 md:w-12 bg-orange-500"></div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 uppercase">
                                About <span className="text-orange-600">Nipl</span>
                            </h2>
                            <div className="h-[2px] w-8 md:w-12 bg-blue-700"></div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                            <p className="font-semibold text-slate-800 text-lg md:text-xl">
                                Welcome to Nipl Export Import PVT Ltd.
                            </p>
                            <p>
                                Nipl Export Import Pvt Ltd has created its own goodwill and a global reputation.
                                We are primarily exporters of all <span className="text-blue-700 font-medium underline decoration-orange-500/30 underline-offset-4">Wooden Handicraft products</span>,
                                glass items, handmade products, and premium wooden temples.
                            </p>
                            <p>
                                The products are of elegance, style, and superior quality. We have a
                                well-established global clientele, understanding the importance of
                                <strong className="text-slate-900"> Quality and Timely Delivery</strong> in this competitive
                                international business scenario.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200"
                        >
                            <div className="group cursor-default">
                                <h4 className="text-orange-600 font-bold text-2xl mb-1 transition-transform group-hover:translate-x-1">Global</h4>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">Clientele</p>
                            </div>
                            <div className="group cursor-default">
                                <h4 className="text-blue-800 font-bold text-2xl mb-1 transition-transform group-hover:translate-x-1">Premium</h4>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">Quality Standards</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image Side - FIX: Responsive aspect ratio to show full image */}
                    <motion.div
                        className="flex-1 relative w-full aspect-[6/3] md:aspect-video lg:aspect-square"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className={`relative h-full w-full ${styles.imageWrapper}`}>
                            {/* Decorative Overlay - Lower opacity to see more image detail */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent z-10 rounded-2xl" />

                            <Image
                                src="https://oesexportimport.com/wp-content/uploads/2020/07/OES-Desk.jpg"
                                alt="Nipl Office Reception"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 800px) 80vw, 40vw from-slate-900/10 via-transparent to-transparent z-10 rounded-2xl"
                                className="rounded-2xl object-contain md:object-cover lg:object-cover shadow-2xl bg-slate-50"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;