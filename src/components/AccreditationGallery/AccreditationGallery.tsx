"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import styles from './AccreditationGallery.module.scss';

const certifications = [
    { id: 1, name: "DGFT", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/dgft.jpg" },
    { id: 2, name: "APEDA", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/logo5.png" },
    { id: 3, name: "MSME", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/msme.png" },
    { id: 4, name: "FIEO", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/fieo.jpg" },
    { id: 5, name: "FICCI", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/ficci.jpg" },
    { id: 6, name: "GCCI", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/gcci.png" },
    { id: 7, name: "Adyog Aadhaar", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/udyogaadhaar.png" },
    { id: 8, name: "GST", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/logo3.jpg" },
    { id: 9, name: "FDA", logo: "https://oesexportimport.com/wp-content/uploads/2020/12/fda.png" },
    { id: 10, name: "Spices Board", logo: "https://oesexportimport.com/wp-content/uploads/2020/12/spice.png" },
    { id: 11, name: "Halal", logo: "https://oesexportimport.com/wp-content/uploads/2020/12/halal.png" },
    { id: 12, name: "GMP", logo: "https://oesexportimport.com/wp-content/uploads/2020/12/gmp.png" },
];

const AccreditationGallery: React.FC = () => {
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

    return (
        <section className={`${styles.gallerySection} bg-white py-24 md:py-32 overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-4">Our Accreditations</h2>
                    <div className="h-1 w-20 bg-[#c5a059] mx-auto"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                borderColor: '#c5a059',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
                            }}
                            className="group relative bg-white border border-gray-100 p-6 md:p-10 flex flex-col items-center justify-center transition-all duration-500 rounded-sm"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative w-full aspect-square max-w-[130px] mb-6 flex items-center justify-center"
                            >
                                <Image
                                    src={cert.logo}
                                    alt={cert.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 200px"
                                />
                            </motion.div>

                            <div className="w-full border-t border-gray-50 pt-6">
                                <span className="text-[10px] md:text-xs tracking-[0.25em] font-bold text-gray-400 group-hover:text-[#c5a059] uppercase transition-colors duration-300">
                                    {cert.name}
                                </span>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#c5a059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AccreditationGallery;