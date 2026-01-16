"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Globe, Users, Briefcase } from 'lucide-react';
import styles from './WhatWeDo.module.scss';

const services = [
    {
        title: "Export",
        desc: "We are exporting best quality product around the world. You need best product on time you are at right place @ NIPL Export Import.",
        icon: <Ship className="w-8 h-8 text-white" />,
    },
    {
        title: "Import agent (for foreign client)",
        desc: "We help foreign companies to introduce their best quality products in India and help them to find local partners in India.",
        icon: <Globe className="w-8 h-8 text-white" />,
    },
    {
        title: "Sourcing Agent",
        desc: "We are working as a local partner for our foreign clients to source best quality products from India as per client requirement.",
        icon: <Users className="w-8 h-8 text-white" />,
    },
    {
        title: "Training & consultancy",
        desc: "We are promoting global business; to make it easy we are giving Practical Export Import training. Visit www.onlineexim.com",
        icon: <Briefcase className="w-8 h-8 text-white" />,
    },
];

const WhatWeDo = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className={styles.sectionWrapper}>
            <div className={`max-w-7xl mx-auto px-6 py-24 ${styles.contentContainer}`}>

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        What <span className="text-[#ff8c00]">We Do</span>
                    </h2>
                    <div className="h-1.5 w-32 bg-[#ff8c00] mx-auto rounded-full" />
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20"
                >
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group"
                        >
                            {/* Icon Container with Glass Effect */}
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#ff8c00] group-hover:border-[#ff8c00] transition-all duration-500 rotate-3 group-hover:rotate-0 shadow-2xl">
                                    <div className="-rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Text content */}
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-white group-hover:text-[#ff8c00] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeDo;