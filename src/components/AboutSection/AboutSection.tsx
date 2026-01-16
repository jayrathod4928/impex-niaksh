"use client";

import React from 'react';
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo"; // Adjust the import path as needed

const AboutSection = () => {
    const aboutData = {
        title: "About Nipl",
        imageSrc: "https://oesexportimport.com/wp-content/uploads/2020/07/OES-Desk.jpg",
        imageAlt: "Nipl Office Reception and Wooden Handicrafts",
        points: [
            "Nipl Export Import Pvt Ltd has created its own goodwill and a global reputation as primary exporters of Wooden Handicrafts.",
            "Specializing in glass items, handmade products, and premium wooden temples characterized by elegance and style.",
            "Well-established global clientele with a deep understanding of quality and timely delivery in the international market.",
            "Our products meet superior quality standards, ensuring elegance and style for every client."
        ]
    };

    return (
        <>
    <div className="relative">
            {/* Custom Header Section (Optional, if you want to keep your specific underline style) */}
            <div className="pt-12 md:pt-20 bg-white text-center">
                <div className="inline-flex items-center space-x-4">
                    <div className="h-[2px] w-8 md:w-12 bg-orange-500"></div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 uppercase">
                        Welcome to <span className="text-orange-600">Nipl</span>
                    </h2>
                    <div className="h-[2px] w-8 md:w-12 bg-blue-700"></div>
                </div>
            </div>

            {/* Reusable Showcase Component */}
            <ContentShowcase
                title={aboutData.title}
                points={aboutData.points}
                imageSrc={aboutData.imageSrc}
                imageAlt={aboutData.imageAlt}
                reverse={false} // Change to true if you want the image on the right
            />

            {/* Statistical/Feature Grid (Preserved from your original design) */}
            <section className="bg-white pb-12 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                    {/* Container for centering the grid */}
                    <div className="flex justify-center border-t border-slate-100">
                        <div className="grid grid-cols-2 gap-12 md:gap-24">

                            {/* Global Clientele Item */}
                            <div className="group cursor-default text-center">
                                <h4 className="text-orange-600 font-bold text-2xl md:text-3xl mb-1 transition-transform group-hover:scale-105">
                                    Global
                                </h4>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                                    Clientele
                                </p>
                            </div>

                            {/* Premium Standards Item */}
                            <div className="group cursor-default text-center">
                                <h4 className="text-blue-800 font-bold text-2xl md:text-3xl mb-1 transition-transform group-hover:scale-105">
                                    Premium
                                </h4>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                                    Quality Standards
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default AboutSection;