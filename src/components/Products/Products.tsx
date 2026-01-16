"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion'; // 1. Added Variants import
import { Eye, Edit3, X } from 'lucide-react';

interface Product {
    id: number;
    title: string;
    link: string;
    img: string;
    desc: string;
}

const products: Product[] = [
    { id: 1, title: "Fruits & Vegetables", link: "/products/fruits", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop", desc: "We are offering fresh and hygienic fruits and vegetables. Fruits and vegetables contain important vitamins, minerals and plant chemicals..." },
    { id: 2, title: "Spices Products", link: "/products/spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop", desc: "A spice is a seed, fruit, root, bark or other plant substance primarily used for flavoring or coloring food. Spices are distinguished from herbs..." },
    { id: 3, title: "Grocery Products", link: "/products/grocery", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop", desc: "We are here to provide variety of grocery products to our valuable customer like dal, flours and pulses as per their requirements..." },
    { id: 4, title: "Namkeen & Frozen", link: "/products/namkeen", img: "https://oesexportimport.com/wp-content/uploads/2021/01/frozen-food.jpg", desc: "Indian salted Namkeen have earned the flavour of global customers due to their unique mix of sweet, salty, tangy and spicy flavours..." },
    { id: 5, title: "Handicraft Products", link: "/products/handicraft", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop", desc: "A handicraft sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where..." },
    { id: 6, title: "Copper Products", link: "/products/copper", img: "https://oesexportimport.com/wp-content/uploads/2021/06/copper-bottle-sub-category.jpg", desc: "Copper is an imperative nutrient for body. It helps the body to form red blood cells, maintain healthy bones, blood vessels, nerves, immune function..." },
    { id: 7, title: "Imitation Jewellery", link: "/products/jewellery", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop", desc: "Artificial Jewellery, also known as costume jewellery, imitation jewellery or fashion jewellery is loved by one and all for its beauty and pocket friendly prices..." },
    { id: 8, title: "Furniture", link: "/products/furniture", img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop", desc: "If you're facing an empty house or a big remodel, you've got big choices to make. Before you decide how to fill your home, learn about the options you have..." },
    { id: 9, title: "Leather Products", link: "/products/leather", img: "https://images.unsplash.com/photo-1524289286702-f07229da36f5?q=80&w=2070&auto=format&fit=crop", desc: "Leather products are highly coveted for their classy look and feel. Be its shoes, bags or jackets, pure leather products can always be set apart from synthetics..." },
    { id: 10, title: "Garment Products", link: "/products/garments", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop", desc: "Garments could be classified based on several aspects as there is no standard classification system available. However, the garments could be..." },
    { id: 11, title: "Ceramic & Stone", link: "/products/ceramic", img: "https://oesexportimport.com/wp-content/uploads/2020/11/Ceramic-Stone-Products.jpg", desc: "Ceramics are classified as inorganic and nonmetallic materials that are essential to our daily lifestyle. Ceramic and materials engineers are the..." },
    { id: 12, title: "Packaging Products", link: "/products/packaging", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop", desc: "OES Export Import Pvt Ltd packaging Products are known for their quality, durability and the precision they come with. As a quality..." }
];

// 2. Explicitly type these objects as Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <section className="py-20 px-4 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        What We Export
                    </h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-500 overflow-hidden flex flex-col h-full border border-gray-100"
                        >
                            <div className="relative h-60 w-full overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="p-6 flex-grow text-center">
                                <h3 className="text-xl font-bold text-orange-600 mb-3 group-hover:text-orange-500 transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                    {product.desc}
                                </p>
                            </div>

                            <div className="flex border-t border-gray-100 bg-slate-900 text-white">
                                <a
                                    href={product.link}
                                    className="flex-1 py-4 flex justify-center items-center border-r border-slate-700 hover:bg-orange-600 transition-colors duration-300"
                                    title="View Details"
                                >
                                    <Eye size={22} />
                                </a>
                                <button
                                    onClick={() => openModal(product)}
                                    className="flex-1 py-4 flex justify-center items-center hover:bg-orange-600 transition-colors duration-300"
                                    title="Inquiry"
                                >
                                    <Edit3 size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-orange-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">
                                Inquiry for <span className="text-orange-600 block">{selectedProduct?.title}</span>
                            </h3>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Full Name" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 outline-none" />
                                <input type="email" placeholder="Email Address" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 outline-none" />
                                <input type="tel" placeholder="Contact Number" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 outline-none" />
                                <textarea rows={4} placeholder="Your Message" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 outline-none resize-none"></textarea>
                                <button type="submit" className="w-full py-4 bg-orange-600 text-white font-bold hover:bg-slate-900 transition-all rounded-lg">
                                    Send Inquiry
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Products;