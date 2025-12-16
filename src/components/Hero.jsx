import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero_background_1765884295452.png"
                    alt="Fine Dining Atmosphere"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/50 to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-4 mt-20">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="inline-block border border-primary rounded-full px-6 py-2 mb-8 bg-black/20 backdrop-blur-md"
                >
                    <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Michelin Star 2025</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    Taste the <br />
                    <span className="text-primary drop-shadow-2xl filter">Illumination</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Modern gastronomy in the heart of the city. Experience a symphony of flavors in an atmosphere of pure elegance where light meets taste.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button variant="primary" className="px-10 py-3 text-lg font-bold min-w-50">Reserve Now</Button>
                    <Button variant="secondary" className="px-10 py-3 text-lg font-bold min-w-50">View Menu</Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
