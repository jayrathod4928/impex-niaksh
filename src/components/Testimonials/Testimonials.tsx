"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // 1. Import Autoplay
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials.module.scss';

const testimonials = [
    {
        name: "Elias Meier",
        text: "Our experience with OES Export Import for packaging products has been fantastic. Their commitment to European quality standards and professionalism sets them apart.",
        location: "Berlin, Germany",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "Sophie Müller",
        text: "The go-to partner for imitation jewellery and handicrafts. Every shipment arrives perfectly packed and the craftsmanship is always consistent.",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "James Taylor",
        text: "We've been importing premium spices and rice. The aromatic quality is unmatched, and their logistics team ensures timely delivery to the USA.",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "Ahmed Al-Sayed",
        text: "Exceptional service in sourcing industrial copper products. Their documentation process is seamless, making the import process completely stress-free.",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "Chen Wei",
        text: "Professionalism at its best. OES handles high-volume orders with precision. Their attention to detail in quality control is what keeps our partnership strong.",
        location: "Shanghai, China",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "Elena Rodriguez",
        text: "Importing luxury handicrafts has never been easier. The aesthetic appeal of their products has helped our boutique grow significantly this year.",
        location: "Madrid, Spain",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    // 2. Initialize Autoplay Plugin
    const autoplayOptions = {
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true, // Pauses when user hovers
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [Autoplay(autoplayOptions)]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.bgOverlay} />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Global Client <span className="text-blue-400">Feedback</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto" />
                </motion.div>

                <div className="relative group px-4">
                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className={`${styles.navButton} left-[-20px] lg:left-[-60px]`}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <button
                        onClick={scrollNext}
                        className={`${styles.navButton} right-[-20px] lg:right-[-60px]`}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* 3. Added mt-10 here for spacing */}
                    <div className={`${styles.embla} mt-10`} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {testimonials.map((item, index) => (
                                <div className={styles.emblaSlide} key={index}>
                                    <div className={`${styles.glassCard} p-8 rounded-3xl`}>
                                        <Quote className="text-blue-500 mb-6 opacity-40" size={32} />

                                        <p className="text-gray-300 leading-relaxed mb-8 text-lg min-h-[120px]">
                                            "{item.text}"
                                        </p>

                                        <div className="flex gap-1 mb-8">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 mt-auto">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/30"
                                            />
                                            <div className="text-left">
                                                <h4 className="text-white font-bold">{item.name}</h4>
                                                <p className="text-blue-400 text-xs font-medium uppercase tracking-tighter">
                                                    {item.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                i === selectedIndex ? 'w-12 bg-blue-500' : 'w-2 bg-gray-700 hover:bg-gray-500'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;