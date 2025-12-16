import React, { useState, useEffect } from 'react';
import Button from './Button';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo Icon */}
                    <img src="/logo.svg" alt="Lumière Logo" className="w-8 h-8 rounded-full shadow-[0_0_15px_rgba(132,204,22,0.3)]" />
                    <span className="text-2xl font-bold tracking-wider text-white">Lumière</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/80 font-light">
                    <a href="#" className="hover:text-primary transition-colors">Home</a>
                    <a href="#" className="hover:text-primary transition-colors">About Us</a>
                    <a href="#" className="hover:text-primary transition-colors">Reservations</a>
                    <a href="#" className="hover:text-primary transition-colors">Private Dining</a>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden sm:block text-sm">Sign In</Button>
                    <Button variant="primary" className="text-sm px-6">Book a Table</Button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
