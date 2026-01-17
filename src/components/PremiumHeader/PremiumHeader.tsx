"use client";

import { motion } from "framer-motion";

interface PremiumHeaderProps {
    subtitle: string;
    title: string;
    accentColor?: string; // Default is your gold color
}

const PremiumHeader = ({
                           subtitle,
                           title,
                           accentColor = "#c5a059"
                       }: PremiumHeaderProps) => {
    return (
        <div className="w-full bg-[radial-gradient(circle_at_center,_#1e1e2e_0%,_#0f0f13_100%)] flex flex-col items-center justify-center pt-32 pb-12 md:pt-40 md:pb-16">

            {/* Animated Subtitle */}
            <motion.span
                initial={{ opacity: 0, letterSpacing: "1em" }}
                whileInView={{ opacity: 0.5, letterSpacing: "0.5em" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                style={{ color: accentColor }}
                className="uppercase text-[10px] md:text-xs mb-4 ml-[0.5em] block"
            >
                {subtitle}
            </motion.span>

            {/* Main Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-4xl md:text-7xl uppercase font-light text-center px-4 tracking-tight leading-tight"
                style={{ fontFamily: "var(--premium-serif)" }}
            >
                {title}
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ backgroundColor: accentColor }}
                className="h-[1px] mt-8 opacity-60"
            ></motion.div>
        </div>
    );
};

export default PremiumHeader;