"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';
import styles from './ContactSection.module.scss';

interface FormInputProps {
    type?: string;
    placeholder: string;
    name: string; // Added name prop for form submission
    isTextArea?: boolean;
    required?: boolean;
}

const FormInput = ({ type, placeholder, name, isTextArea = false, required = true }: FormInputProps) => (
    <div className={styles.inputWrapper}>
        {isTextArea ? (
            <textarea
                name={name}
                rows={4}
                placeholder={placeholder}
                required={required}
                className="w-full py-4 px-6 outline-none bg-transparent text-white"
            />
        ) : (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                className="w-full py-4 px-6 outline-none bg-transparent text-white"
            />
        )}
    </div>
);

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // Configuration for Web3Forms
        formData.append("access_key", "3a94af5f-861f-431c-b01a-81117f009827");
        formData.append("subject", "New General Inquiry - Contact Form");
        formData.append("from_name", "NIPL Export Portal");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                setIsSent(true);
                // Reset form state after 5 seconds
                setTimeout(() => setIsSent(false), 5000);
                (e.target as HTMLFormElement).reset();
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    className="z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
                >
                    <span className="text-[#c5a059] uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
                        Contact Inquiry
                    </span>
                    <h2 className="text-5xl md:text-7xl font-light text-[#1e3a8a] leading-tight mb-8">
                        Elevate Your <br />
                        <span className="italic font-serif text-[#c5a059]">Logistics.</span>
                    </h2>
                    <div className="h-[1px] w-20 bg-[#c5a059] mb-8 mx-auto lg:mx-0" />
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
                    className={`${styles.formCard} p-10 md:p-14 rounded-sm relative`}
                >
                    {isSent ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <CheckCircle size={48} className="text-[#c5a059] mb-4" />
                            <h3 className="text-white text-2xl font-light tracking-widest uppercase">Thank You</h3>
                            <p className="text-gray-400 mt-4">Your inquiry has been received. We will contact you shortly.</p>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-white text-xl font-light mb-10 tracking-[0.2em] uppercase">
                                Request Consultation
                            </h3>

                            <form className="space-y-2" onSubmit={handleSubmit}>
                                <FormInput name="name" type="text" placeholder="FULL NAME" />
                                <FormInput name="email" type="email" placeholder="EMAIL ADDRESS" />
                                <FormInput name="phone" type="tel" placeholder="PHONE NUMBER" />
                                <FormInput name="message" placeholder="MESSAGE" isTextArea />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`${styles.premiumButton} w-full py-5 mt-6 uppercase text-xs tracking-[0.3em] transition-all flex justify-center items-center disabled:opacity-50`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin mr-2" size={16} />
                                            Sending...
                                        </>
                                    ) : "Send Inquiry"}
                                </button>
                            </form>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;