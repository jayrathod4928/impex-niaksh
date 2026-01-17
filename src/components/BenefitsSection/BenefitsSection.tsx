"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    HiOutlineClipboardDocumentCheck,
    HiOutlineGlobeAlt,
    HiOutlineEye,
    HiOutlineTruck,
    HiOutlineShieldCheck,
    HiOutlineBuildingLibrary,
    HiOutlineClock
} from "react-icons/hi2";
import styles from './BenefitsSection.module.scss';

const BenefitsSection = () => {
    const benefits = [
        { id: 1, text: "You will get totally transparent & satisfied work.", icon: <HiOutlineClipboardDocumentCheck /> },
        { id: 2, text: "Sourcing multiple products from different states.", icon: <HiOutlineGlobeAlt /> },
        { id: 3, text: "Personal watch on shipment since day 1 to manufacturing.", icon: <HiOutlineEye /> },
        { id: 4, text: "Negotiate with shipment line, logistic & transportation behalf of you.", icon: <HiOutlineTruck /> },
        { id: 5, text: "We ensure about the quality of products & services.", icon: <HiOutlineShieldCheck /> },
        { id: 6, text: "We will be negotiate with banks behalf of you.", icon: <HiOutlineBuildingLibrary /> },
        { id: 7, text: "You will get on time delivery of your consignment.", icon: <HiOutlineClock /> },
    ];

    // Explicitly typing variants fixes the TS2322 error
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className={styles.sectionWrapper}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-20 px-4"
            >
                <h2 className="text-white text-3xl md:text-6xl font-bold tracking-tight mb-4">
                    What Is Your <span className="text-blue-500">Benefit</span>
                </h2>
                <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </motion.div>

            <motion.div
                className={styles.gridContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {benefits.map((item, index) => (
                    <motion.div
                        key={item.id}
                        variants={cardVariants}
                        whileHover={{
                            y: index % 2 === 0 ? -10 : 10,
                            scale: 1.03,
                            transition: { duration: 0.2 }
                        }}
                        className={styles.card}
                    >
                        <div className={styles.iconWrapper}>
                            {item.icon}
                        </div>
                        <p className={styles.title}>{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default BenefitsSection;