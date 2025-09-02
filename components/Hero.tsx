
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="h-screen relative flex items-center justify-center text-white overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center transition-transform duration-500 ease-out"
                style={{ transform: 'translateY(calc(var(--scroll-y) * 0.4px))' }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-600 opacity-80"></div>
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="relative z-10 text-center max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-shadow animate-on-scroll">
                    Ferial Garden:
                </h1>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-shadow animate-on-scroll [animation-delay:200ms]">
                    History in HD
                </h2>
                <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto text-gray-200 animate-on-scroll [animation-delay:400ms]">
                    Where Port Said's past meets the giants of the Suez Canal.
                </p>
                <a href="#audio" className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll [animation-delay:600ms]">
                    <i className="fas fa-play"></i>
                    <span>Start Audio Guide</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
