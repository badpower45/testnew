
import React from 'react';

interface MissionProps {
    onCardClick: (index: number) => void;
    onDownloadClick: () => void;
}

const MissionCard: React.FC<{
    icon: string;
    iconBgClass: string;
    title: string;
    description: string;
    onClick: () => void;
    delay: string;
}> = ({ icon, iconBgClass, title, description, onClick, delay }) => (
    <div
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden group hover:-translate-y-2 cursor-pointer animate-on-scroll"
        style={{ animationDelay: delay }}
        onClick={onClick}
        tabIndex={0}
        onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl text-white ${iconBgClass}`}>
            <i className={icon}></i>
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
            <i className="fas fa-check-circle"></i>
            <span>Verified by locals</span>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
);


const Mission: React.FC<MissionProps> = ({ onCardClick, onDownloadClick }) => {
    const missions = [
        {
            icon: "fas fa-camera",
            iconBgClass: "bg-gradient-to-br from-purple-600 to-indigo-600",
            title: "The Ultimate Ship Shot",
            description: "Don't snap from the entrance. Walk left along the water. Find the old cannon. Frame your shot with that in the foreground when a giant ship passes. Trust us.",
        },
        {
            icon: "fas fa-headphones",
            iconBgClass: "bg-gradient-to-br from-pink-600 to-red-600",
            title: "Story Sync-Up",
            description: "Find the main fountain. Play audio track #4 right there. The story you'll hear is about that specific spot, and it will give you goosebumps.",
        },
        {
            icon: "fas fa-gem",
            iconBgClass: "bg-gradient-to-br from-sky-500 to-cyan-500",
            title: "The Quiet Escape",
            description: "All the way in the back, there are benches under massive, ancient trees. It's the perfect spot to escape, chill, and finish the audio guide.",
        }
    ];

    return (
        <section className="py-24 bg-gray-900 text-white" id="mission">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 bg-yellow-400 text-black py-2 px-6 rounded-full font-semibold text-sm uppercase tracking-wider mb-4">
                        <i className="fas fa-bullseye"></i>
                        MISSION BRIEFING
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Mission, Should You Choose to Accept It:</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Three insider secrets that will level up your Ferial Garden experience from tourist to explorer.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {missions.map((mission, index) => (
                        <MissionCard 
                            key={index}
                            {...mission}
                            onClick={() => onCardClick(index)}
                            delay={`${index * 150}ms`}
                        />
                    ))}
                </div>

                <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">Ready to unlock the secrets?</h3>
                    <p className="text-lg mb-6 opacity-90">Download the audio guide and discover hidden spots</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={onDownloadClick} className="bg-white/20 border-2 border-white/30 hover:bg-white/30 transition-colors py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2">
                            <i className="fab fa-apple"></i>
                            Download for iOS
                        </button>
                        <button onClick={onDownloadClick} className="bg-white/20 border-2 border-white/30 hover:bg-white/30 transition-colors py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2">
                            <i className="fab fa-google-play"></i>
                            Download for Android
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
