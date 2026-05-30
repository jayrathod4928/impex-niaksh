"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Eye, Edit3, X, CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Product {
    id: number;
    title: string;
    link: string;
    img: string;
    desc: string;
}

const products: Product[] = [
    { id: 1, title: "Fruits & Vegetables", link: "/products/fruits-vegetables", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop", desc: "We are offering fresh and hygienic fruits and vegetables..." },
    { id: 2, title: "Spices Products", link: "/products/spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop", desc: "A spice is a seed, fruit, root, bark or other plant substance primarily used for flavoring..." },
    { id: 3, title: "Grocery Products", link: "/products/grocery", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop", desc: "We provide variety of grocery products like dal, flours and pulses..." },
    { id: 4, title: "Namkeen & Frozen", link: "/products/namkeen", img: "https://isconbalajifoods.com/wp-content/uploads/2025/06/Food-plater-shots-1-1568x726.jpg", desc: "Indian salted Namkeen have earned the flavour of global customers..." },
    { id: 5, title: "Handicraft Products", link: "/products/handicraft", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop", desc: "Handicraft is any of a wide variety of types of work where items are made by hand..." },
    { id: 6, title: "Copper Products", link: "/products/copper-products", img: "https://oesexportimport.com/wp-content/uploads/2021/06/copper-bottle-sub-category.jpg", desc: "Copper is an imperative nutrient for body. It helps form red blood cells..." },
    { id: 7, title: "Imitation Jewellery", link: "/products/jewellery", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop", desc: "Artificial Jewellery is loved by all for its beauty and pocket friendly prices..." },
    { id: 8, title: "Furniture", link: "/products/furniture", img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop", desc: "Learn about the options you have before you decide how to fill your home..." },
    { id: 9, title: "Leather Products", link: "/products/leather", img: "https://images.unsplash.com/photo-1524289286702-f07229da36f5?q=80&w=2070&auto=format&fit=crop", desc: "Leather products are highly coveted for their classy look and feel..." },
    { id: 10, title: "Garment Products", link: "/products/garments", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop", desc: "Garments could be classified based on several aspects..." },
    { id: 11, title: "Ceramic & Stone", link: "/products/ceramic", img: "https://oesexportimport.com/wp-content/uploads/2020/11/Ceramic-Stone-Products.jpg", desc: "Ceramics are inorganic materials essential to our daily lifestyle..." },
    { id: 12, title: "Packaging Products", link: "/products/packaging-products", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop", desc: "Known for their quality, durability and the precision they come with..." }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsSent(false);
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // Using your provided Access Key
        formData.append("access_key", "922d2657-22e5-4327-97b9-0ee4660cf730");
        formData.append("subject", `New Inquiry: ${selectedProduct?.title}`);
        formData.append("from_name", "NIPL Export Portal");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                setIsSent(true);
                // Automatically close modal after 3 seconds of success message
                setTimeout(() => {
                    setIsModalOpen(false);
                    setIsSent(false);
                }, 3000);
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 px-4 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">What We Export</h2>
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
                                <img src={product.img} alt={product.title} className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110" />
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
                                <Link href={product.link} className="flex-1 py-4 flex justify-center items-center border-r border-slate-700 hover:bg-orange-600 transition-colors duration-300">
                                    <Eye size={22} />
                                </Link>
                                <button onClick={() => openModal(product)} className="flex-1 py-4 flex justify-center items-center hover:bg-orange-600 transition-colors duration-300">
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
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" />

                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8" >
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-orange-600 transition-colors">
                                <X size={24} />
                            </button>

                            {isSent ? (
                                <div className="text-center py-10">
                                    <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-slate-900">Inquiry Sent!</h3>
                                    <p className="text-gray-500 mt-2">Thank you. We'll be in touch regarding {selectedProduct?.title} soon.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">
                                        Inquiry for <span className="text-orange-600 block">{selectedProduct?.title}</span>
                                    </h3>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input type="hidden" name="Interest" value={selectedProduct?.title} />

                                        <input type="text" name="name" required placeholder="Full Name" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 outline-none transition-all" />
                                        <input type="email" name="email" required placeholder="Email Address" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 outline-none transition-all" />
                                        <input type="tel" name="phone" required placeholder="Contact Number" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 outline-none transition-all" />
                                        <textarea name="message" rows={4} required placeholder="Tell us more about your requirements..." className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 outline-none resize-none transition-all"></textarea>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-orange-600 text-white font-bold hover:bg-slate-900 transition-all rounded-lg flex justify-center items-center shadow-lg active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin mr-2" size={20} />
                                                    Sending...
                                                </>
                                            ) : "Send Inquiry"}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Products;