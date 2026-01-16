"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Added for active state
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import styles from './Header.module.scss';
import logo from '@/components/Images/Nipl-logo.png';

const Header = () => {
    const pathname = usePathname(); // Get current route
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

    // Helper to check if a link is active
    const isActive = (path: string) => pathname === path;

    // Helper to check if a parent dropdown has an active child
    const isParentActive = (paths: string[]) => paths.some(path => pathname.startsWith(path));

    const toggleSubMenu = (menu: string) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
        setOpenNestedMenu(null);
    };

    const toggleNestedMenu = (e: React.MouseEvent, menu: string) => {
        e.stopPropagation();
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
                <nav className="hidden lg:flex items-center space-x-2">
                    <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>HOME</Link>

                    {/* ABOUT DROPDOWN */}
                    <div className={styles.dropdownContainer}>
                        <div className={`${styles.navLink} ${isParentActive(['/company', '/certification', '/key-person']) ? styles.active : ''}`}>
                            ABOUT <ChevronDown size={14} className="ml-1" />
                        </div>
                        <div className={styles.dropdownMenu}>
                            <Link href="/company" className={isActive('/company') ? styles.active : ''}>Company</Link>
                            <Link href="/certification" className={isActive('/certification') ? styles.active : ''}>Certification</Link>
                            <Link href="/key-person" className={isActive('/key-person') ? styles.active : ''}>Key Person</Link>
                        </div>
                    </div>

                    <Link href="/sourcing-agent" className={`${styles.navLink} ${isActive('/sourcing-agent') ? styles.active : ''}`}>SOURCING AGENT</Link>

                    {/* PRODUCTS DROPDOWN */}
                    <div className={styles.dropdownContainer}>
                        <div className={`${styles.navLink} ${isParentActive(['/products']) ? styles.active : ''}`}>
                            PRODUCTS <ChevronDown size={14} className="ml-1" />
                        </div>
                        <div className={styles.dropdownMenu}>
                            <div className={styles.nestedTrigger}>
                                <div className={`${styles.nestedHeader} ${isParentActive(['/products/fruits', '/products/grocery', '/products/spices', '/products/namkeen']) ? styles.active : ''}`}>
                                    <span>Food Products</span>
                                    <ChevronRight size={14} />
                                </div>
                                <div className={styles.subMenu}>
                                    <Link href="/products/fruits" className={isActive('/products/fruits') ? styles.active : ''}>Fruits & Vegetables</Link>
                                    <Link href="/products/grocery" className={isActive('/products/grocery') ? styles.active : ''}>Grocery</Link>
                                    <Link href="/products/spices" className={isActive('/products/spices') ? styles.active : ''}>Spices</Link>
                                    <Link href="/products/namkeen" className={isActive('/products/namkeen') ? styles.active : ''}>Namkeen & Frozen</Link>
                                </div>
                            </div>
                            <Link href="/products/garments" className={isActive('/products/garments') ? styles.active : ''}>Garments</Link>
                            <Link href="/products/leather" className={isActive('/products/leather') ? styles.active : ''}>Leather Products</Link>
                            <Link href="/products/jewellery" className={isActive('/products/jewellery') ? styles.active : ''}>Imitation Jewellery</Link>
                            <Link href="/products/handicraft" className={isActive('/products/handicraft') ? styles.active : ''}>Handicraft</Link>
                            <Link href="/products/furniture" className={isActive('/products/furniture') ? styles.active : ''}>Furniture</Link>
                            <Link href="/products/ceramic" className={isActive('/products/ceramic') ? styles.active : ''}>Ceramic & Stone</Link>
                            <Link href="/products/copper-products" className={isActive('/products/copper-products') ? styles.active : ''}>Copper products</Link>
                            <Link href="/products/packaging-products" className={isActive('/products/packaging-products') ? styles.active : ''}>Packaging Products</Link>
                        </div>
                    </div>

                    <Link href="/gallery" className={`${styles.navLink} ${isActive('/gallery') ? styles.active : ''}`}>GALLERY</Link>
                    <Link href="/blog" className={`${styles.navLink} ${isActive('/blog') ? styles.active : ''}`}>BLOG</Link>
                    <Link href="/contact-us" className={`${styles.navLink} ${isActive('/contact-us') ? styles.active : ''}`}>CONTACT US</Link>
                </nav>

                <button className="lg:hidden text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu size={32} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.drawerOverlay} ${isMobileMenuOpen ? styles.overlayVisible : ''}`} onClick={closeAll} />
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={`${styles.drawerContent} h-full overflow-y-auto`}>
                    <div className="flex justify-center">
                        <Image src={logo} alt="Logo" className="h-25 w-auto" />
                    </div>

                    <nav className={styles.mobileNav}>
                        <Link href="/" className={`${isActive('/') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Home</Link>

                        <div className={styles.mobileAccordion}>
                            <div className={`${styles.mobileItemWithArrow} ${isParentActive(['/company', '/certification', '/key-person']) ? styles.mobileActive : ''} cursor-pointer`} onClick={() => toggleSubMenu('about')}>
                                <span>About</span>
                                <ChevronRight size={18} className={openSubMenu === 'about' ? styles.rotate : ''} />
                            </div>
                            <div className={`${styles.mobileSubLinks} ${openSubMenu === 'about' ? styles.show : ''}`}>
                                <Link href="/company" className={`${isActive('/company') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Company</Link>
                                <Link href="/certification" className={`${isActive('/certification') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Certification</Link>
                                <Link href="/key-person" className={`${isActive('/key-person') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Key Person</Link>
                            </div>
                        </div>

                        <Link href="/sourcing-agent" className={`${isActive('/sourcing-agent') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Sourcing Agent</Link>

                        <div className={styles.mobileAccordion}>
                            <div className={`${styles.mobileItemWithArrow} ${isParentActive(['/products']) ? styles.mobileActive : ''} cursor-pointer`} onClick={() => toggleSubMenu('products')}>
                                <span>Products</span>
                                <ChevronRight size={18} className={openSubMenu === 'products' ? styles.rotate : ''} />
                            </div>

                            <div className={`${styles.mobileSubLinks} ${openSubMenu === 'products' ? styles.show : ''}`}>
                                <div className={styles.mobileNestedAccordion}>
                                    <div className={`${styles.nestedTriggerItem} cursor-pointer`} onClick={(e) => toggleNestedMenu(e, 'food')}>
                                        <span className={isParentActive(['/products/fruits', '/products/grocery', '/products/spices', '/products/namkeen']) ? "text-[#facc15]" : "text-[#ffffff]"}>Food Products</span>
                                        <ChevronDown size={16} className={openNestedMenu === 'food' ? styles.rotateDown : ''} />
                                    </div>
                                    <div className={`${styles.nestedContent} ${openNestedMenu === 'food' ? styles.showNested : ''}`}>
                                        <Link href="/products/fruits" className={`${isActive('/products/fruits') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Fruits & Vegetables</Link>
                                        <Link href="/products/grocery" className={`${isActive('/products/grocery') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Grocery</Link>
                                        <Link href="/products/spices" className={`${isActive('/products/spices') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Spices</Link>
                                        <Link href="/products/namkeen" className={`${isActive('/products/namkeen') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Namkeen & Frozen</Link>
                                    </div>
                                </div>

                                <Link href="/products/garments" className={`${isActive('/products/garments') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Garments</Link>
                                <Link href="/products/leather" className={`${isActive('/products/leather') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Leather Products</Link>
                                <Link href="/products/jewellery" className={`${isActive('/products/jewellery') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Imitation Jewellery</Link>
                                <Link href="/products/handicraft" className={`${isActive('/products/handicraft') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Handicraft</Link>
                                <Link href="/products/furniture" className={`${isActive('/products/furniture') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Furniture</Link>
                                <Link href="/products/ceramic" className={`${isActive('/products/ceramic') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Ceramic & Stone</Link>
                                <Link href="/products/copper-products" className={`${isActive('/products/copper-products') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Copper products</Link>
                                <Link href="/products/packaging-products" className={`${isActive('/products/packaging-products') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll} >Packaging Products</Link>
                            </div>
                        </div>

                        <Link href="/gallery" className={`${isActive('/gallery') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Gallery</Link>
                        <Link href="/blog" className={`${isActive('/blog') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Blog</Link>
                        <Link href="/contact-us" className={`${isActive('/contact-us') ? styles.mobileActive : ''} cursor-pointer`} onClick={closeAll}>Contact us</Link>
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