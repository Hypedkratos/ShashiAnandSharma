'use client'
import React, { useState } from 'react';
import Navbar from "@/components/navbar/navbar"
import Link from 'next/link';

const homepage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div><Navbar toggleMenu={toggleMenu}/>
                <div className="relative h-screen">
                    {/* Background Image */}
                    <img
                        src="/Images/background.jpg"
                        alt="Background"
                        className="absolute inset-0 object-cover w-full h-full"
                    />
                    {/* Overlay with Blur Effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
                    {/* Content Container */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-white">
                            <h1 className="text-7xl font-bold transition duration-300 drop-shadow-md hover:scale-110">Welcome to My Portfolio</h1>
                            <p className="mt-4 transition duration-300 hover:scale-105">Discover my projects and skills.</p>
                            {/* Example navigation */}
                            <div className="mt-8">
                                <Link legacyBehavior href="/about">
                                    <a className="inline-block px-6 py-3 text-sm font-semibold text-white bg-sky-950 rounded hover:bg-blue-700">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full text-center pb-4">
                    <span className="text-white text-sm">
                        Copyright ©Shashi, 2024. All rights reserved.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default homepage