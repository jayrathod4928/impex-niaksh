"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ProductCardProps {
    title: string;
    image: string;
    index: number;
}

// Child Variants
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const ProductCard: React.FC<ProductCardProps> = ({ title, image }) => {
    return (
        <motion.div
            variants={itemVariants} // Inherits from parent Container
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