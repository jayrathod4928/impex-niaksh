import React from 'react';
import Image from 'next/image';

interface CountryBadge {
    name: string;
    colorClass: string;
}

const ROW_1_COUNTRIES: CountryBadge[] = [
    { name: 'South Africa', colorClass: 'bg-red-50 text-red-600 border-red-200' },
    { name: 'USA', colorClass: 'bg-green-50 text-green-600 border-green-200' },
    { name: 'Canada', colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { name: 'Brazil', colorClass: 'bg-teal-50 text-teal-600 border-teal-200' },
    { name: 'Japan', colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    { name: 'Singapore', colorClass: 'bg-purple-50 text-purple-600 border-purple-200' },
    { name: 'UK', colorClass: 'bg-blue-50 text-blue-600 border-blue-200' },
    { name: 'Germany', colorClass: 'bg-sky-50 text-sky-600 border-sky-200' },
];

const ROW_2_COUNTRIES: CountryBadge[] = [
    { name: 'France', colorClass: 'bg-blue-50 text-blue-500 border-blue-100' },
    { name: 'Italy', colorClass: 'bg-indigo-50 text-indigo-500 border-indigo-100' },
    { name: 'UAE', colorClass: 'bg-amber-50 text-amber-600 border-amber-200' },
    { name: 'Australia', colorClass: 'bg-green-50 text-green-500 border-green-100' },
];

export default function GlobalMarket() {
    const badgeStyle = "px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border shadow-sm transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md cursor-default select-none";

    return (
        <section className="w-full bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:py-20 lg:px-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">

                {/* Header Block */}
                <div className="text-center mb-8 md:mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 font-serif">
                        Global Market Presence
                    </h2>
                    <div className="w-16 h-[3px] bg-amber-500 mx-auto rounded-full mb-3"></div>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide uppercase">
                        Serving International Markets Since 2026
                    </p>
                </div>

                {/* Premium Glassmorphic Card for the Map */}
                <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md rounded-2xl md:rounded-[2rem] border border-white/60 p-0 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-all duration-500 ease-out">
                    <div className="w-full flex items-center justify-center">
                        <img
                            src="/images/world map.png"
                            alt="NIP Export Import Global Presence Map"
                            className="w-full h-auto object-contain select-none block transition-transform duration-700 hover:scale-[1.015]"
                        />
                    </div>
                </div>

                {/* Responsive Country Badges Container */}
                <div className="mt-10 md:mt-12 w-full max-w-4xl mx-auto flex flex-col gap-3 md:gap-4 px-2">
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4">
                        {ROW_1_COUNTRIES.map((country, idx) => (
                            <span key={`row1-${idx}`} className={`${badgeStyle} ${country.colorClass}`}>
                {country.name}
              </span>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4">
                        {ROW_2_COUNTRIES.map((country, idx) => (
                            <span key={`row2-${idx}`} className={`${badgeStyle} ${country.colorClass}`}>
                {country.name}
              </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}