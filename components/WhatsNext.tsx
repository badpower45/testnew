
import React from 'react';

interface WhatsNextProps {
    onButtonClick: (type: 'seafood' | 'museums' | 'cafes') => void;
}

const LocationCard: React.FC<{
    image: string;
    icon: string;
    iconBgClass: string;
    title: string;
    description: string;
    tags: string[];
    buttonText: string;
    buttonIcon: string;
    buttonBgClass: string;
    onClick: () => void;
    delay: string;
}> = ({ image, icon, iconBgClass, title, description, tags, buttonText, buttonIcon, buttonBgClass, onClick, delay }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 animate-on-scroll" style={{ animationDelay: delay }}>
        <div className={`h-48 bg-cover bg-center ${image}`}></div>
        <div className="p-6">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-2xl text-white ${iconBgClass}`}>
                <i className={icon}></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <button onClick={onClick} className={`w-full text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform transform hover:scale-105 ${buttonBgClass}`}>
                <i className={buttonIcon}></i>
                <span>{buttonText}</span>
            </button>
        </div>
    </div>
);

const WhatsNext: React.FC<WhatsNextProps> = ({ onButtonClick }) => {
    const locations = [
        {
            image: "bg-[url('https://picsum.photos/400/200?image=1060')]",
            icon: "fas fa-utensils",
            iconBgClass: "bg-gradient-to-br from-red-500 to-orange-500",
            title: "Feeling Hungry?",
            description: "The freshest seafood of your life is minutes away at a local legend like El Borg.",
            tags: ["🦐 El Borg Seafood", "☕ Bianca Cafe"],
            buttonText: "Find Seafood Spots",
            buttonIcon: "fas fa-map-marker-alt",
            buttonBgClass: "bg-gradient-to-r from-red-500 to-orange-500",
            onClick: () => onButtonClick('seafood')
        },
        {
            image: "bg-[url('https://picsum.photos/400/200?image=1075')]",
            icon: "fas fa-landmark",
            iconBgClass: "bg-gradient-to-br from-purple-600 to-indigo-600",
            title: "More History?",
            description: "The Military Museum is right around the corner and tells the rest of Port Said's incredible story.",
            tags: ["🏛️ Port Said Military Museum", "🏢 Suez Canal Authority", "🗼 Port Said Lighthouse"],
            buttonText: "Explore Museums",
            buttonIcon: "fas fa-compass",
            buttonBgClass: "bg-gradient-to-r from-purple-600 to-indigo-600",
            onClick: () => onButtonClick('museums')
        },
        {
            image: "bg-[url('https://picsum.photos/400/200?image=292')]",
            icon: "fas fa-coffee",
            iconBgClass: "bg-gradient-to-br from-sky-500 to-cyan-500",
            title: "Need a Coffee & a Vibe?",
            description: "Hit up the Central Perk Cafe for a cool, nostalgic break.",
            tags: ["☕ Central Perk Cafe", "☕ Bianca Cafe"],
            buttonText: "Find Cafes",
            buttonIcon: "fas fa-coffee",
            buttonBgClass: "bg-gradient-to-r from-sky-500 to-cyan-500",
            onClick: () => onButtonClick('cafes')
        }
    ];

    return (
        <section className="py-24 bg-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Okay, What's Next? 🤔</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Don't just leave after the garden. Port Said has layers of stories waiting for you. Here's your curated continuation guide:
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <LocationCard key={index} {...loc} delay={`${index * 150}ms`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatsNext;
