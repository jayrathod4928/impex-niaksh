"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import ProductCard from './ProductCard';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ProductData {
    id: number | string;
    title: string;
    image: string;
}

interface ProductGridProps {
    sectionTitle: string;
    data: ProductData[];
    // Added condition prop here
    showUnderline?: boolean;
}

// Staggered Container Variants
const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.01, // Staggers each product card by 0.1s
            ease: "easeOut"
        }
    }
};

const ProductGrid: React.FC<ProductGridProps> = ({
                                                     sectionTitle,
                                                     data,
                                                     showUnderline = true
                                                 }) => {
    const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedProduct(null);
    }, []);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [closeModal]);

    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedProduct]);

    return (
        <section className="py-9 md:py-5 px-4 md:px-6 max-w-7xl mx-auto">
            {/* Header Area */}
            <div className="flex flex-col items-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 text-center tracking-tight leading-tight">
                    {sectionTitle}
                </h2>

                {/* Conditional Rendering of the Underline */}
                {showUnderline && (
                    <div className="w-16 md:w-24 h-1 md:h-1.5 bg-amber-600 mt-4 md:mt-6 rounded-full" />
                )}
            </div>

            {/* STAGGERED CONTAINER */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10"
            >
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className="w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)] min-w-[150px] max-w-[300px]"
                        onClick={() => setSelectedProduct(item)}
                    >
                        <ProductCard
                            index={index}
                            title={item.title}
                            image={item.image}
                        />
                    </div>
                ))}
            </motion.div>

            {/* LIGHTBOX MODAL */}
            {mounted && createPortal(
                <AnimatePresence mode="wait">
                    {selectedProduct && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={closeModal}
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="relative max-w-3xl w-full bg-white p-4 md:p-8 rounded-sm shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 md:top-4 md:right-4 text-slate-400 hover:text-amber-600 transition-colors p-2 z-20 cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="overflow-hidden">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                                    />
                                </div>

                                <div className="mt-6 text-center">
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-widest">
                                        {selectedProduct.title}
                                    </h3>
                                    {/* Notice I added the same condition here if you want to hide the underline in the modal too */}
                                    {showUnderline && <div className="w-12 h-0.5 bg-amber-500 mx-auto mt-2" />}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default ProductGrid;