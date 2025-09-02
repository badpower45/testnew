
import React from 'react';

interface RouteCreatorProps {
    onButtonClick: () => void;
}

const RouteCreator: React.FC<RouteCreatorProps> = ({ onButtonClick }) => {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Want the full Port Said experience? 🗺️</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                    Our app creates a custom route connecting all these spots based on your interests and time.
                </p>
                <button 
                    onClick={onButtonClick} 
                    className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-300">
                    Create My Route
                </button>
            </div>
        </section>
    );
};

export default RouteCreator;
