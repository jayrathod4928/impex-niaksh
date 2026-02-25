"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Certification.module.scss';
import PremiumBanner from '@/components/PremiumHeader/PremiumHeader'; // Adjust path as needed

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

            {/* Reusable Common Component */}
            <PremiumBanner
                subtitle="Global Accreditation"
                title="Certification"
            />

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
                            <span className="text-black font-normal uppercase tracking-wide px-2"> NIPL Export Import Pvt Ltd </span>
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