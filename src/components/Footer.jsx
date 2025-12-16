import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Button from './Button';

const Footer = () => {
    return (
        <footer className="bg-[#0c1a14] pt-24 pb-12 px-6 border-t border-white/5">

            {/* CTA Box */}
            <div className="container mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-linear-to-r from-surface to-secondary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-white/5 transition-transform duration-500"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to be illuminated?</h2>
                        <p className="text-white/60 mb-10 max-w-xl mx-auto">Reserve your table today and experience the future of fine dining.</p>
                        <Button variant="primary" className="px-12 py-4 text-lg mx-auto hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]">Make a Reservation</Button>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero_background_1765884295452.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                </motion.div>
            </div>

            {/* Links */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/logo.svg" alt="Lumière Logo" className="w-6 h-6 rounded-full" />
                        <span className="text-xl font-bold text-white">Lumière</span>
                    </div>
                    <p className="text-white/50 leading-relaxed">
                        © 2025 Lumière Restaurant.<br />
                        All rights reserved.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Visit Us</h4>
                    <p className="text-white/70 leading-relaxed">
                        123 Culinary Avenue,<br />
                        Metropolis, NY 10012<br />
                        United States
                    </p>
                    <a href="#" className="text-primary mt-4 block hover:underline">Get Directions →</a>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Hours</h4>
                    <div className="grid grid-cols-2 text-white/70 gap-y-2">
                        <span>Mon - Thu</span>
                        <span className="text-right">5pm - 10pm</span>
                        <span>Fri - Sat</span>
                        <span className="text-right">5pm - 11pm</span>
                        <span>Sunday</span>
                        <span className="text-right">4pm - 9pm</span>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Connect</h4>
                    <div className="flex gap-4">
                        {/* Social placeholders */}
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-colors duration-300">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-colors duration-300">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-colors duration-300">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
