import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Feature = ({ icon, title, description }) => (
    <div className="bg-surface p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors duration-300">
        <div className="text-primary mb-4 text-2xl">{icon}</div>
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
);

const About = () => {
    return (
        <section className="py-24 px-6 bg-secondary relative overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Experience</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Where shadow defines <br />
                            <span className="text-primary">the light.</span>
                        </h2>
                        <p className="text-white/70 mb-8 text-lg font-light leading-relaxed">
                            Our philosophy is rooted in the interplay of contrast. Minimalist interior design meets maximalist flavor profiles. Every seat in the house offers a unique perspective—a whisper of intimate moments while a culinary art comes to life under focused spotlights.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Feature
                                icon={<i className="las la-wine-glass"></i>}
                                title="Curated Cellar"
                                description="Over 400 labels selected to pair perfectly with our seasonal menus."
                            />
                            <Feature
                                icon={<i className="las la-leaf"></i>}
                                title="Organic Sourcing"
                                description="Ingredients harvested daily from our exclusive partner farms."
                            />
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-4/3 group">
                            <img
                                src="/images/about_interior_1765884311402.png"
                                alt="Restaurant Interior"
                                className="w-full h-full object-cover transition-transform duration-700 scale-106 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-secondary to-transparent opacity-60"></div>
                        </div>

                        {/* Floating Image Accent */}
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-2xl overflow-hidden border-4 border-secondary hidden md:block shadow-2xl">
                            <img
                                src="/images/drink_pour_1765884354936.png"
                                alt="Cocktail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
