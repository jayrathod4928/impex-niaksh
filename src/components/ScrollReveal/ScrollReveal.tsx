"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Triggers 100px before the element enters
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ width: "100%" }}
        >
            {children}
        </motion.div>
    );
}