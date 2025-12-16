import React from 'react';
import { motion } from 'framer-motion';

const Review = ({ text, author, role, image }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -10 }}
        className="bg-surface/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_10px_30px_-10px_rgba(132,204,22,0.1)]"
    >
        <div className="flex justify-center text-primary text-sm mb-6 gap-1">
            {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
            ))}
        </div>
        <p className="text-white/80 text-lg mb-8 italic leading-relaxed">"{text}"</p>
        <div>
            <div className="w-12 h-12 rounded-full mx-auto mb-3 overflow-hidden border border-white/10 relative">
                <img src={image} alt={author} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-white font-bold">{author}</h4>
            <span className="text-white/40 text-xs uppercase tracking-wider">{role}</span>
        </div>
    </motion.div>
);

const Testimonials = () => {
    return (
        <section className="py-24 px-6 bg-secondary">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto text-center mb-16"
            >
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-4">Acclaim</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">"A masterclass in modern dining."</h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 }
                    }
                }}
                className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                <Review
                    text="The lighting, the service, the food—everything was choreographed to perfection. An unforgettable night."
                    author="Sarah Jenkins"
                    role="Food Critic"
                    image="https://randomuser.me/api/portraits/women/44.jpg"
                />
                <Review
                    text="Lumière lives up to its name. It shines brightly in a crowded culinary scene. The Truffle Risotto is divine."
                    author="Michael Chen"
                    role="Verified Diner"
                    image="https://randomuser.me/api/portraits/men/32.jpg"
                />
                <Review
                    text="Elegant without being stuffy. The perfect spot for our anniversary. We will definitely be returning soon."
                    author="Emily Rose"
                    role="Verified Diner"
                    image="https://randomuser.me/api/portraits/women/68.jpg"
                />
            </motion.div>
        </section>
    );
};

export default Testimonials;
