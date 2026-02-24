"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    FaFacebookF, FaTwitter, FaInstagram,
    FaYoutube, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa';

// Import your logo
import logo from '@/components/Images/Nipl-logo.png';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState<number>(2026);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentYear(new Date().getFullYear());
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        /** * FIX APPLIED:
         * 1. Added 'relative' and 'z-[100]' to ensure it stays above the fixed background image.
         * 2. Ensured 'bg-[#1a202c]' is solid so the background image doesn't show through.
         */
        <footer className="relative z-[100] bg-[#1a202c] text-white pt-16 pb-8 px-4 md:px-8 lg:px-24 font-sans border-t border-gray-800">
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 lg:gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                {/* Brand Section */}
                <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-4">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="NIPL Logo"
                                width={140}
                                height={45}
                                priority
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <p className="text-gray-400 text-xs lg:text-sm leading-relaxed max-w-xs">
                        Leading the way in global trade, <span className="text-white font-medium">NIPL</span> connects markets with premium handicrafts.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-6 border-b-2 border-orange-500 w-fit pb-1">Quick Links</h3>
                    <ul className="space-y-3">
                        {['Home', 'About Us', 'About Key Person', 'About Certification', 'Sourcing Agent', 'Contact Us'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-orange-500 hover:text-white text-sm transition-colors duration-300 flex items-center justify-center md:justify-start group">
                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 hidden lg:inline">»</span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Products */}
                <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-6 border-b-2 border-orange-500 w-fit pb-1">Products</h3>
                    <ul className="space-y-3">
                        {['Handicrafts', 'Copper Products', 'Garments', 'Ceramic & Stone', 'Packaging Products'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-orange-500 hover:text-white text-sm transition-colors duration-300 flex items-center justify-center md:justify-start group">
                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 hidden lg:inline">»</span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Us */}
                <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-6 border-b-2 border-orange-500 w-fit pb-1">Contact Us</h3>
                    <div className="space-y-4 w-full">
                        <a href="mailto:info@nipl.com" className="flex items-center justify-center md:justify-start text-orange-500 hover:text-white text-sm transition-all group">
                            <FaEnvelope className="mr-3 text-base group-hover:scale-110 transition-transform" />
                            <span className="break-all">info@nipl.com</span>
                        </a>
                        <div className="flex items-start justify-center md:justify-start text-orange-500 text-sm">
                            <FaMapMarkerAlt className="mr-3 mt-1 text-base shrink-0" />
                            <span>Ahmedabad, Gujarat, India</span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center md:justify-start space-x-2 pt-4">
                            {[
                                { icon: FaFacebookF, link: 'https://www.facebook.com/share/1AfEhNrXci/' },
                                { icon: FaTwitter, link: 'https://x.com/' },
                                { icon: FaInstagram, link: 'https://www.instagram.com/niiaksh.impex?igsh=ZzhtbzkxMW1nZnRl' },
                                { icon: FaYoutube, link: 'https://www.youtube.com/' },
                                { icon: FaLinkedinIn, link: 'https://www.linkedin.com/' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#2d3748] p-2 rounded-md hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <social.icon className="text-white text-xs" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Copyright */}
            <div className="mt-16 pt-8 border-t border-gray-700 text-center">
                <p className="text-orange-500 text-xs font-medium tracking-wide px-4">
                    &copy; 2026 All Rights Reserved NIPL Pvt Ltd. Designed by SEULUXE.
                </p>
            </div>
        </footer>
    );
};

export default Footer;