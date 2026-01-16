"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './HeroSlider.module.scss';

const SLIDES = [
    {
        id: 1,
        title: "Welcome To NIP Export Import Pvt. Ltd.",
        subtitle: "We Are here to Export",
        image: "http://oesexportimport.com/wp-content/uploads/2024/11/165.webp",
        link: "/services/logistics"
    },
];

const HeroSlider = () => {
    return (
        <section className={styles.sliderContainer}>
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                speed={1200}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                // Swiper optimization for click events
                touchStartPreventDefault={false}
                preventClicks={false}
                preventClicksPropagation={false}
                className="h-[70vh] md:h-[85vh] lg:h-screen w-full"
            >
                {SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="relative w-full h-full overflow-hidden bg-[#0a0a0a]">
                                <motion.div
                                    initial={{ scale: 1.15 }}
                                    animate={{ scale: isActive ? 1 : 1.15 }}
                                    transition={{ duration: 7, ease: "easeOut" }}
                                    className="absolute inset-0 z-0"
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover opacity-50"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
                                </motion.div>

                                {/* CRITICAL FIX: pointer-events-none on the container ensures
                                    hidden slides don't block clicks on the active slide.
                                */}
                                <div className={`relative z-10 flex flex-col justify-center h-full px-6 mx-auto max-w-7xl md:px-12 transition-opacity duration-500 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                                    <AnimatePresence mode="wait">
                                        {isActive && (
                                            <div className="max-w-4xl">
                                                <motion.span
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6, duration: 0.8 }}
                                                    className="text-[#d4af37] font-semibold tracking-[0.4em] uppercase text-xs md:text-sm mb-6 mt-10 block"
                                                >
                                                    {slide.subtitle}
                                                </motion.span>

                                                <motion.h1
                                                    initial={{ opacity: 0, x: -40 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.9, duration: 0.9, ease: "easeOut" }}
                                                    className="text-4xl font-bold text-white md:text-6xl lg:text-8xl leading-[1.1] tracking-tight"
                                                >
                                                    {slide.title.split(' ').map((word, i) => (
                                                        <span key={i} className="inline-block mr-4">{word}</span>
                                                    ))}
                                                </motion.h1>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 1.4, duration: 0.8 }}
                                                    className="mt-10 flex flex-wrap gap-5"
                                                >
                                                    <Link href={slide.link} prefetch={true}>
                                                        <button
                                                            className="px-10 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.2)] active:scale-95 cursor-pointer"
                                                        >
                                                            Explore Services
                                                        </button>
                                                    </Link>

                                                    <Link href="/contact" prefetch={true}>
                                                        <button
                                                            className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm rounded-sm backdrop-blur-md hover:bg-white/10 transition-all duration-300 active:scale-95 cursor-pointer"
                                                        >
                                                            Contact Us
                                                        </button>
                                                    </Link>
                                                </motion.div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSlider;