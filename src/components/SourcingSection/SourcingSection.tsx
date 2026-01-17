"use client";
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import styles from './SourcingSection.module.scss';

const sourcingSteps = [
    "We find manufacturer as per buyer requirement.",
    "We negotiate and fix deal in suitable price range.",
    "We arrange transportation and handle full consignment.",
    "If buyer have supplier and manufacturer then we also provide shipment or transportation service.",
    "We can source products from multiple suppliers."
];

const SourcingSection = () => {
    // SNAPPY ANIMATION CONFIG
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Faster stagger (from 0.2)
                delayChildren: 0.1    // Reduced initial wait (from 0.3)
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: 30 }, // Reduced distance for faster-looking movement
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5, // Faster duration
                ease: [0.22, 1, 0.36, 1] // "Out" quint easing for a smooth stop
            }
        }
    };

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.imageLayer}>
                <Image
                    src="https://oesexportimport.com/wp-content/uploads/2020/11/eredd.jpg"
                    alt="Logistics background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className={`${styles.mainContainer} container mx-auto px-6 lg:px-12`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it enters view
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a2b3c] leading-tight mb-6">
                            How We <span className="text-blue-900">Work</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-[#f39c12] mb-8" />
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                            As a premier sourcing agent, we manage the entire lifecycle of
                            your procurement. From factory audit to final delivery.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col gap-4 lg:gap-5"
                    >
                        {sourcingSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                // Removed heavy CSS transitions that conflict with Framer Motion
                                className="group flex items-center gap-5 p-4 rounded-xl
                                           bg-white/10 backdrop-blur-md border border-white/20
                                           hover:bg-white/25 transition-colors duration-200 shadow-xl"
                            >
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#f39c12] rounded-full flex items-center justify-center
                                                shadow-lg group-hover:scale-105 transition-transform duration-200">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <p className="text-[#1a2b3c] lg:text-white font-semibold text-sm md:text-lg">
                                    {step}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SourcingSection;