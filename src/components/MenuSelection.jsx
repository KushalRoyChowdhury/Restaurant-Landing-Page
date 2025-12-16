import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const MenuItem = ({ title, price, description, image, category }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -10 }}
        className="bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 group"
    >
        <div className="h-64 overflow-hidden relative">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white font-bold text-sm">
                ${price}
            </div>
        </div>
        <div className="p-8">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/60 text-sm mb-6 min-h-10">{description}</p>
            <div className="flex items-center justify-between">
                <span className="text-primary text-xs uppercase tracking-wider font-bold">{category}</span>
                <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors cursor-pointer">
                    +
                </button>
            </div>
        </div>
    </motion.div>
);

const MenuSelection = () => {
    const items = [
        {
            title: "Duck Confit",
            price: "45",
            description: "Slow-cooked duck leg with crispy skin, orange gastric, and parosnip purée.",
            image: "/images/chef_plating_1765884334891.png", // Fallback
            category: "Main Course"
        },
        {
            title: "Omakase Platter",
            price: "120",
            description: "Chef's daily selection of premium sashimi and nigiri. Flown in daily.",
            image: "/images/hero_background_1765884295452.png", // Fallback/Placeholder
            category: "Premium"
        },
        {
            title: "Midnight Old Fashioned",
            price: "24",
            description: "Rye whiskey, smoked maple syrup, angostura bitters, orange peel.",
            image: "/images/drink_pour_1765884354936.png",
            category: "Cocktail"
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#0c2219]">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Chef's Signature Selection</h2>
                        <p className="text-white/60">A rotating showcase of our kitchen's finest creations.</p>
                    </div>
                    <a href="#" className="text-primary font-medium hover:text-white transition-colors flex items-center gap-2 text-sm">
                        View Full Menu <span>→</span>
                    </a>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {items.map((item, index) => (
                        <MenuItem key={index} {...item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MenuSelection;
