
import React from 'react';

interface AudioExperienceProps {
    onPlayClick: () => void;
}

const AudioExperience: React.FC<AudioExperienceProps> = ({ onPlayClick }) => {
    return (
        <section className="py-24 bg-slate-50" id="audio">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Think you just came here for a walk? 😱</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        <strong>You're missing the best part.</strong> This garden has secrets, and our audio guide is the key. 
                        Pop in your headphones and hit play to unlock the real stories the statues can't tell you. 
                        <span className="font-semibold text-gray-800 bg-yellow-300 px-2 py-1 rounded-md">It's the ultimate experience hack.</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="rounded-2xl overflow-hidden shadow-2xl animate-on-scroll">
                        <div className="aspect-video bg-cover bg-center bg-[url('https://picsum.photos/1000/563')] relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-black/30"></div>
                            <button onClick={onPlayClick} className="relative z-10 w-20 h-20 rounded-full bg-white/90 text-gray-800 text-3xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                                <i className="fas fa-play"></i>
                            </button>
                        </div>
                    </div>

                    <div className="animate-on-scroll [animation-delay:200ms]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 text-white flex items-center justify-center text-xl">
                                <i className="fas fa-headphones"></i>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800">The Hidden Layer</h3>
                        </div>
                        <ul className="space-y-4 mb-8 text-lg">
                            <li className="flex items-center gap-4 text-gray-700">
                                <i className="fas fa-check-circle text-green-500 text-xl"></i>
                                <span><strong>15 hidden stories</strong> behind every statue and corner</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-700">
                                <i className="fas fa-check-circle text-green-500 text-xl"></i>
                                <span><strong>Original recordings</strong> from local historians</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-700">
                                <i className="fas fa-check-circle text-green-500 text-xl"></i>
                                <span><strong>GPS-triggered</strong> stories as you walk</span>
                            </li>
                        </ul>
                        <button onClick={onPlayClick} className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Start Your Audio Journey
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudioExperience;
