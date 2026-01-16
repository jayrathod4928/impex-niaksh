"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Certification.module.scss';

const certifications = [
    { id: 1, name: "DGFT", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/dgft.jpg" },
    { id: 2, name: "APEDA", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/logo5.png" },
    { id: 3, name: "MSME", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/msme.png" },
    { id: 4, name: "FIEO", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/fieo.jpg" },
    { id: 5, name: "FICCI", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/ficci.jpg" },
    { id: 6, name: "GCCI", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/gcci.png" },
    { id: 7, name: "Adyog Aadhaar", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/udyogaadhaar.png" },
    { id: 8, name: "Goods", logo: "https://oesexportimport.com/wp-content/uploads/2020/07/logo3.jpg" },
    { id: 9, name: "FDA", logo: "https://oesexportimport.com/wp-content/uploads/2020/12/fda.png" },
    { id: 10, name: "Spices", logo: "https://oesexportimport.com/wp-content/uploads/2020/12/spice.png" },
    { id: 11, name: "Halal", logo: "https://oesexportimport.com/wp-content/uploads/2020/12/halal.png" },
    { id: 12, name: "GMP", logo: "https://oesexportimport.com/wp-content/uploads/2020/12/gmp.png" },
];

const Certification = () => {
    // Note: align: 'center' is crucial for the middle item to be the selectedIndex
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            skipSnaps: false
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
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
        <section className={styles.certificationSection}>
            <div className="max-w-7xl mx-auto px-6 relative">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Membership & Certification
                    </h2>
                    <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="relative group">
                    {/* Navigation Buttons */}
                    <button onClick={scrollPrev} className={`${styles.navButton} -left-4 lg:-left-12`}>
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={scrollNext} className={`${styles.navButton} -right-4 lg:-right-12`}>
                        <ChevronRight size={24} />
                    </button>

                    {/* Slider Wrapper */}
                    <div className={styles.embla} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {certifications.map((item, index) => (
                                <div className={styles.emblaSlide} key={item.id}>
                                    <div className={`
                                        ${styles.logoWrapper} 
                                        ${index === selectedIndex ? styles.active : ''}
                                    `}>
                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            className="max-h-full max-w-full object-contain pointer-events-none"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    {certifications.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === selectedIndex ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certification;