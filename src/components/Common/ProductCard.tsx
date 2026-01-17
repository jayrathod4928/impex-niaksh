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
            initial={{ opacity: 0, y: 20 }} // Reduced y offset for a faster feel
            whileInView={{ opacity: 1, y: 0 }}
            // REMOVED: delay: index * 0.1
            // FIXED: Set duration to 0.4 for a quicker entrance
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }} // Triggers slightly before it enters view
            className="group bg-white p-2 md:p-4 border border-amber-500/20 transition-all duration-500 hover:border-amber-600/60 hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)] hover:-translate-y-2 cursor-pointer flex flex-col h-full w-full"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-square mb-3 md:mb-4 bg-gray-50 flex items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
            </div>

            {/* Title */}
            <h3 className="text-center font-sans font-medium text-[10px] md:text-xs text-slate-700 mt-auto uppercase tracking-[0.15em] group-hover:text-amber-700 transition-colors duration-300 px-1 leading-relaxed">
                {title}
            </h3>
        </motion.div>
    );
};

export default ProductCard;