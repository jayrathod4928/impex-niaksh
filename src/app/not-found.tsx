"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        /* Changed background to white and used a very subtle light gray radial for depth */
        <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center px-4">

            {/* Image Container with subtle fade-in */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-lg mt-23"
            >
                <img
                    src="https://cdn.vectorstock.com/i/500p/81/59/404-error-page-not-found-vector-51588159.jpg"
                    alt="404 Error - Page Not Found"
                    className="w-full h-auto"
                />
            </motion.div>

            {/* Content Section with added top margin (mt-12) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center "
            >
                {/* Updated text color to a darker slate for readability on white */}
                <h2 className="text-slate-800 uppercase tracking-[0.5em] text-xs md:text-sm mb-8 font-semibold">
                    Page Not Found
                </h2>

                <Link
                    href="/"
                    /* Maintained your accentColor (#c5a059) for the button branding */
                    className="inline-block mb-12 px-10 py-4 border border-[#c5a059] text-[#c5a059] uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold hover:bg-[#c5a059] hover:text-white transition-all duration-500 ease-out shadow-sm hover:shadow-lg"
                >
                    Return to Home
                </Link>
            </motion.div>
        </div>
    );
}