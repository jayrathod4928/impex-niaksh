"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
    title: string;
    image: string;
    index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            // Adjusted padding for mobile (p-2) vs desktop (md:p-4)
            className="group bg-white p-2 md:p-4 border border-amber-500/20 transition-all duration-500 hover:border-amber-600/60 hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)] hover:-translate-y-2 cursor-pointer flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/4] mb-3 md:mb-4 bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
            </div>

            {/* Title - Adjusted text size for mobile (text-xs) vs desktop (md:text-lg) */}
            <h3 className="text-center font-sans font-medium text-[10px] md:text-xs text-slate-700 mt-auto uppercase tracking-[0.2em] group-hover:text-amber-700 transition-colors duration-300 px-1">
                {title}
            </h3>
        </motion.div>
    );
};

export default ProductCard;