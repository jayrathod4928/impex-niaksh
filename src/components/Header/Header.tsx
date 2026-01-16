"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import styles from './Header.module.scss';
import logo from '@/components/Images/Nipl-logo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null); // Level 1 (About, Products)
    const [openNestedMenu, setOpenNestedMenu] = useState(null); // Level 2 (Food Products)

    const toggleSubMenu = (menu: string | React.SetStateAction<null>) => {
        // @ts-expect-error
        setOpenSubMenu(openSubMenu === menu ? null : menu);
        setOpenNestedMenu(null); // Reset deep nest when parent toggles
    };

    const toggleNestedMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, menu: string | React.SetStateAction<null>) => {
        e.stopPropagation();
        // @ts-expect-error
        setOpenNestedMenu(openNestedMenu === menu ? null : menu);
    };

    const closeAll = () => {
        setIsMobileMenuOpen(false);
        setOpenSubMenu(null);
        setOpenNestedMenu(null);
    };

    return (
        <header className={styles.header}>
            <div className="max-w-300 mx-auto px-20 h-full flex items-center justify-between">
                <div className={styles.logoContainer}>
                    <Link href="/" className="cursor-pointer">
                        <Image src={logo} alt="Nipl-logo" width={100} height={10} priority className="h-20 w-auto object-contain" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-2">
                    <Link href="/" className={`${styles.navLink} ${styles.active}`}>HOME</Link>

                    {/* ABOUT DROPDOWN */}
                    <div className={styles.dropdownContainer}>
                        <div className={styles.navLink}>
                            ABOUT <ChevronDown size={14} className="ml-1" />
                        </div>
                        <div className={styles.dropdownMenu}>
                            <Link href="/company">Company</Link>
                            <Link href="/certification">Certification</Link>
                            <Link href="/key-person">Key Person</Link>
                        </div>
                    </div>

                    <Link href="/sourcing" className={styles.navLink}>SOURCING AGENT</Link>

                    {/* PRODUCTS DROPDOWN (Multi-level) */}
                    <div className={styles.dropdownContainer}>
                        <div className={styles.navLink}>
                            PRODUCTS <ChevronDown size={14} className="ml-1" />
                        </div>
                        <div className={styles.dropdownMenu}>
                            {/* Level 2: Nested Food Products */}
                            <div className={styles.nestedTrigger}>
                                <div className={styles.nestedHeader}>
                                    <span>Food Products</span>
                                    <ChevronRight size={14} />
                                </div>
                                {/* Level 3: Food Items */}
                                <div className={styles.subMenu}>
                                    <Link href="/products/fruits">Fruits & Vegetables</Link>
                                    <Link href="/products/grocery">Grocery</Link>
                                    <Link href="/products/spices">Spices</Link>
                                    <Link href="/products/namkeen">Namkeen & Frozen</Link>
                                </div>
                            </div>

                            <Link href="/products/garments">Garments</Link>
                            <Link href="/products/leather">Leather Products</Link>
                            <Link href="/products/jewellery">Imitation Jewellery</Link>
                            <Link href="/products/handicraft">Handicraft</Link>
                            <Link href="/products/furniture">Furniture</Link>
                            <Link href="/products/ceramic">Ceramic & Stone</Link>
                        </div>
                    </div>

                    <Link href="/gallery" className={styles.navLink}>GALLERY</Link>
                    <Link href="/blog" className={styles.navLink}>BLOG</Link>
                    <Link href="/contact" className={styles.navLink}>CONTACT US</Link>
                </nav>

                <button className="lg:hidden text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu size={32} />
                </button>
            </div>

            <div className={`${styles.drawerOverlay} ${isMobileMenuOpen ? styles.overlayVisible : ''}`} onClick={closeAll} />

            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={`${styles.drawerContent} h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}>
                    <div className="flex justify-center">
                        <Image src={logo} alt="Logo" className="h-25 w-auto" />
                    </div>

                    <nav className={styles.mobileNav}>
                        <Link href="/" className={`${styles.mobileActive} cursor-pointer`} onClick={closeAll}>Home</Link>

                        {/* Level 1: ABOUT */}
                        <div className={styles.mobileAccordion}>
                            <div className={`${styles.mobileItemWithArrow} cursor-pointer`} onClick={() => toggleSubMenu('about')}>
                                <span>About</span>
                                <ChevronRight size={18} className={openSubMenu === 'about' ? styles.rotate : ''} />
                            </div>
                            <div className={`${styles.mobileSubLinks} ${openSubMenu === 'about' ? styles.show : ''}`}>
                                <Link href="/company" className="cursor-pointer" onClick={closeAll}>Company</Link>
                                <Link href="/certification" className="cursor-pointer" onClick={closeAll}>Certification</Link>
                                <Link href="/key-person" className="cursor-pointer" onClick={closeAll}>Key Person</Link>
                            </div>
                        </div>

                        <Link href="/sourcing" className="cursor-pointer" onClick={closeAll}>Sourcing Agent</Link>

                        {/* Level 1: PRODUCTS */}
                        <div className={styles.mobileAccordion}>
                            <div className={`${styles.mobileItemWithArrow} cursor-pointer`} onClick={() => toggleSubMenu('products')}>
                                <span>Products</span>
                                <ChevronRight size={18} className={openSubMenu === 'products' ? styles.rotate : ''} />
                            </div>

                            <div className={`${styles.mobileSubLinks} ${openSubMenu === 'products' ? styles.show : ''}`}>
                                {/* Level 2: FOOD PRODUCTS (Deep Nested) */}
                                <div className={styles.mobileNestedAccordion}>
                                    <div className={`${styles.nestedTriggerItem} cursor-pointer`} onClick={(e) => toggleNestedMenu(e, 'food')}>
                                        <span className="text-[#ffffff]">Food Products</span>
                                        <ChevronDown size={16} className={openNestedMenu === 'food' ? styles.rotateDown : ''} />
                                    </div>
                                    {/* Level 3: FOOD ITEMS */}
                                    <div className={`${styles.nestedContent} ${openNestedMenu === 'food' ? styles.showNested : ''}`}>
                                        <Link href="/products/fruits" className="cursor-pointer" onClick={closeAll}>Fruits & Vegetables</Link>
                                        <Link href="/products/grocery" className="cursor-pointer" onClick={closeAll}>Grocery</Link>
                                        <Link href="/products/spices" className="cursor-pointer" onClick={closeAll}>Spices</Link>
                                        <Link href="/products/namkeen" className="cursor-pointer" onClick={closeAll}>Namkeen & Frozen</Link>
                                    </div>
                                </div>

                                <Link href="/products/garments" className="cursor-pointer" onClick={closeAll}>Garments</Link>
                                <Link href="/products/leather" className="cursor-pointer" onClick={closeAll}>Leather Products</Link>
                                <Link href="/products/jewellery" className="cursor-pointer" onClick={closeAll}>Imitation Jewellery</Link>
                                <Link href="/products/handicraft" className="cursor-pointer" onClick={closeAll}>Handicraft</Link>
                                <Link href="/products/furniture" className="cursor-pointer" onClick={closeAll}>Furniture</Link>
                                <Link href="/products/ceramic" className="cursor-pointer" onClick={closeAll}>Ceramic & Stone</Link>
                            </div>
                        </div>

                        <Link href="/gallery" className="cursor-pointer" onClick={closeAll}>Gallery</Link>
                        <Link href="/blog" className="cursor-pointer" onClick={closeAll}>Blog</Link>
                        <Link href="/contact" className="cursor-pointer" onClick={closeAll}>Contact us</Link>
                    </nav>

                    <div className={styles.drawerFooter}>
                        <p>© 2025 OES Export Import Pvt Ltd.</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;