import React, { useState } from 'react';
import About from '../Components/Homepage/About';
import Features from '../Components/Homepage/Features';
import Footer from '../Components/Homepage/Footer';
import Navbar from '../Components/Homepage/Navbar';
import Showcase from '../Components/Homepage/Showcase';


const Homepage = () => {
    return (

        <main>
            <Navbar />
            <Showcase />
            <Features />
            <About />
            <Footer />
        </main>

    );
}

export default Homepage;