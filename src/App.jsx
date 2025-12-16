import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSelection from './components/MenuSelection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    return (
        <div className="antialiased select-none text-gray-900 bg-secondary min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <MenuSelection />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
