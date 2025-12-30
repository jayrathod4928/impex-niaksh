"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Starts 50px below and invisible
            whileInView={{ opacity: 1, y: 0 }} // Moves to original position when seen
            viewport={{ once: true, amount: 0.2 }} // Only triggers once, when 20% visible
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}