"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './ContactSection.module.scss';

// 1. Move types outside the component
interface FormInputProps {
    type?: string;
    placeholder: string;
    isTextArea?: boolean;
}

// 2. Move sub-components OUTSIDE the main component to fix ESLint error
const FormInput = ({ type, placeholder, isTextArea = false }: FormInputProps) => (
    <div className={styles.inputWrapper}>
        {isTextArea ? (
            <textarea
                rows={4}
                placeholder={placeholder}
                className="w-full py-4 px-6 outline-none bg-transparent"
            />
        ) : (
            <input
                type={type}
                placeholder={placeholder}
                className="w-full py-4 px-6 outline-none bg-transparent"
            />
        )}
    </div>
);

const ContactSection = () => {
    // 3. Explicitly type the variants for TypeScript
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-white py-24 lg:py-40 px-6 relative overflow-hidden">
            {/* Soft Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#c5a059] opacity-[0.05] blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Content */}
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="z-10"
                >
                    <span className="text-[#c5a059] uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
                        Contact Inquiry
                    </span>
                    <h2 className="text-5xl md:text-7xl font-light text-[#1e3a8a] leading-tight mb-8">
                        Elevate Your <br />
                        <span className="italic font-serif text-[#c5a059]">Logistics.</span>
                    </h2>
                    <div className="h-[1px] w-20 bg-[#c5a059] mb-8" />
                    <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                        Our experts are ready to architect a bespoke solution for your global trade requirements.
                    </p>
                </motion.div>

                {/* Right Side: The Premium Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`${styles.formCard} p-10 md:p-14 rounded-sm`}
                >
                    <h3 className="text-white text-xl font-light mb-10 tracking-[0.2em] uppercase">
                        Request Consultation
                    </h3>

                    <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                        <FormInput type="text" placeholder="FULL NAME" />
                        <FormInput type="email" placeholder="EMAIL ADDRESS" />
                        <FormInput type="tel" placeholder="PHONE NUMBER" />
                        <FormInput placeholder="MESSAGE" isTextArea />

                        <button
                            type="submit"
                            className={`${styles.premiumButton} w-full py-5 mt-6 uppercase text-xs tracking-[0.3em] transition-all`}
                        >
                            Send Inquiry
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;