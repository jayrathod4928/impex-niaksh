import React from 'react';
import ProductCard from './ProductCard';

interface ProductData {
    id: number | string;
    title: string;
    image: string;
}

interface ProductGridProps {
    sectionTitle: string;
    data: ProductData[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ sectionTitle, data }) => {
    return (
        <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
            {/* Header with Premium Underline */}
            <div className="flex flex-col items-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 text-center tracking-tight leading-tight">
                    {sectionTitle}
                </h2>
                <div className="w-16 md:w-24 h-1 md:h-1.5 bg-amber-600 mt-4 md:mt-6 rounded-full" />
            </div>

            {/* Centered Flex Container - This solves the "6 or 7 items" issue */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        // Mobile: 2 columns (minus gap)
                        // Desktop: 4 columns (minus gap)
                        className="w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)] min-w-[150px] max-w-[300px]"
                    >
                        <ProductCard
                            index={index}
                            title={item.title}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;