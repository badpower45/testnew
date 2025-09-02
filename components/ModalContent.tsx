
import React from 'react';

interface MissionDetailsProps {
    index: number;
}

export const MissionDetails: React.FC<MissionDetailsProps> = ({ index }) => {
    const missions = [
        {
            title: "The Ultimate Ship Shot",
            icon: "fas fa-camera",
            details: "This secret spot has been used by photographers for decades. The old cannon was placed there in 1869 and provides the perfect frame for capturing the massive ships passing through the Suez Canal.",
            tips: ["Best time: Golden hour (1 hour before sunset)", "Use portrait mode for depth", "Wait for the largest ships for a more impressive shot"]
        },
        {
            title: "Story Sync-Up",
            icon: "fas fa-headphones",
            details: "Track #4 tells the story of the fountain's construction and the French engineer who designed it. The audio was recorded by local historian Ahmed Mansour.",
            tips: ["Stand directly in front of the fountain", "Use good headphones for best experience", "Listen for the water sounds in the background"]
        },
        {
            title: "The Quiet Escape",
            icon: "fas fa-gem",
            details: "These ancient trees were planted in 1885 and have witnessed over a century of Port Said's history. The benches were added in the 1960s.",
            tips: ["Perfect for reflection and journaling", "Great spot for finishing the audio guide", "Often empty in the early morning"]
        }
    ];

    const mission = missions[index];

    if (!mission) return null;

    return (
        <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <i className={mission.icon}></i> {mission.title}
            </h3>
            <p className="text-gray-600 mb-4">{mission.details}</p>
            <h4 className="font-semibold mb-2">Pro Tips:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
                {mission.tips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
        </div>
    );
};


interface LocationGuideProps {
    type: 'seafood' | 'museums' | 'cafes';
}

export const LocationGuide: React.FC<LocationGuideProps> = ({ type }) => {
    const locations = {
        seafood: {
            title: "Best Seafood Spots",
            icon: "fas fa-utensils",
            places: ["El Borg Seafood - Famous for fresh catch", "Bianca Cafe - Great sea view", "Port Marina - Upscale dining"]
        },
        museums: {
            title: "Historical Sites",
            icon: "fas fa-landmark",
            places: ["Port Said Military Museum", "Suez Canal Authority Building", "Port Said Lighthouse"]
        },
        cafes: {
            title: "Top-Rated Cafes",
            icon: "fas fa-coffee",
            places: ["Central Perk Cafe", "Bianca Cafe", "Corniche Coffee House"]
        }
    };
    
    const location = locations[type];
    
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <i className={location.icon}></i> {location.title}
            </h3>
            <div className="space-y-3">
                {location.places.map((place, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                        <i className="fas fa-map-marker-alt text-red-500"></i>
                        <span>{place}</span>
                    </div>
                ))}
            </div>
             <button className="mt-6 w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Open in Maps
            </button>
        </div>
    )
}
