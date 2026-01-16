"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Certification.module.scss';

const Certification: React.FC = () => {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.19, 1, 0.22, 1]
            }
        }
    };

    return (
        <section className={`${styles.certificationSection} relative overflow-hidden bg-white w-full`}>
            {/* Minimalist Header Banner */}
            <div className="w-full bg-[#0a0a0a] flex flex-col items-center justify-center py-32 md:py-40">
                <motion.span
                    initial={{ opacity: 0, letterSpacing: "1em" }}
                    whileInView={{ opacity: 0.5, letterSpacing: "0.5em" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="text-[#c5a059] uppercase text-[10px] md:text-xs mb-6 ml-[0.5em]"
                >
                    Global Accreditation
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`${styles.premiumSerif} text-white text-4xl md:text-7xl uppercase font-light text-center px-4 tracking-tight`}
                >
                    Certification
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-[1px] bg-[#c5a059] mt-10 opacity-60"
                ></motion.div>
            </div>

            {/* Centered Content Area */}
            <div className="max-w-5xl mx-auto px-6 py-32 md:py-32 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col items-center"
                >
                    <motion.h3
                        variants={itemVariants}
                        className={`${styles.premiumSerif} text-5xl md:text-5xl mb-12 text-[#1a1a1a] tracking-tight`}
                    >
                        We are <span className="italic text-gray-400 font-extralight">Certified</span>
                    </motion.h3>

                    <motion.div variants={itemVariants} className="space-y-8">
                        <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto">
                            We are pleased to inform you that
                            <span className="text-black font-normal uppercase tracking-wide px-2"> OES Export Import Pvt Ltd </span>
                            is certified by the
                            <span className="text-black font-normal"> Government of India </span>
                            according to the following standards.
                        </p>

                        <div className="flex justify-center items-center">
                            <div className="h-[1px] w-12 bg-gray-200"></div>
                            <div className="mx-4 w-1.5 h-1.5 rounded-full bg-[#c5a059]"></div>
                            <div className="h-[1px] w-12 bg-gray-200"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certification;