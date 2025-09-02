
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white border-t border-white/10">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-2">Ferial Garden</h3>
                        <p className="text-gray-400">Discover the hidden stories of Port Said</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Explore</h4>
                        <ul className="space-y-2">
                            <li><a href="#mission" className="text-gray-400 hover:text-pink-400 transition-colors">Mission Briefing</a></li>
                            <li><a href="#audio" className="text-gray-400 hover:text-pink-400 transition-colors">Audio Guide</a></li>
                            <li><a href="#community" className="text-gray-400 hover:text-pink-400 transition-colors">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"><i className="fab fa-instagram"></i> Instagram</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"><i className="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"><i className="fab fa-twitter"></i> Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-gray-500 pt-8 border-t border-white/10">
                    <p>&copy; {new Date().getFullYear()} Ferial Garden Experience. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
