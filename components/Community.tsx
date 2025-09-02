
import React from 'react';

interface CommunityProps {
    onPostClick: (index: number) => void;
    onShare: () => void;
}

const PostCard: React.FC<{
    image: string;
    avatarIcon: string;
    username: string;
    text: string;
    likes: number;
    comments: number;
    onClick: () => void;
    delay: string;
}> = ({ image, avatarIcon, username, text, likes, comments, onClick, delay }) => (
    <div 
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-on-scroll" 
        onClick={onClick}
        style={{ animationDelay: delay }}
    >
        <div className="h-48 relative">
            <img src={image} alt={`Post by ${username}`} className="w-full h-full object-cover" />
            <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
        </div>
        <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white">
                    <i className={avatarIcon}></i>
                </div>
                <span className="font-semibold text-pink-400">{username}</span>
            </div>
            <p className="text-gray-300 mb-2">{text}</p>
            <div className="text-pink-400 text-sm font-medium mb-4">#EgySafaryDiscovery</div>
            <div className="flex gap-4 text-sm text-gray-400">
                <span><i className="far fa-heart mr-1"></i> {likes}</span>
                <span><i className="far fa-comment mr-1"></i> {comments}</span>
            </div>
        </div>
    </div>
);

const Community: React.FC<CommunityProps> = ({ onPostClick, onShare }) => {
    const posts = [
        {
            image: "https://picsum.photos/400/300?image=1011",
            avatarIcon: "fas fa-user",
            username: "@sarah_explores",
            text: "Found the secret bench! The audio guide was RIGHT 📍✨",
            likes: 247,
            comments: 18
        },
        {
            image: "https://picsum.photos/400/300?image=1025",
            avatarIcon: "fas fa-user",
            username: "@marco.travels",
            text: "That cannon shot tip = GAME CHANGER 🚢⚓",
            likes: 183,
            comments: 12
        },
        {
            image: "https://picsum.photos/400/300?image=1043",
            avatarIcon: "fas fa-user",
            username: "@local_lens",
            text: "The fountain story gave me actual chills 🏛️🎧",
            likes: 312,
            comments: 24
        }
    ];

    return (
        <section className="py-24 bg-gray-900 text-white" id="community">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-6 rounded-full font-semibold text-sm uppercase tracking-wider mb-4">
                        <i className="fas fa-users"></i>
                        Community
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Turn. 📷</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        You've seen it, you've heard it. <strong>Now show us your vision.</strong> Tag your best shots with <span className="text-pink-400 font-semibold">#EgySafaryDiscovery</span> and join the community of explorers who go deeper.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {posts.map((post, index) => (
                        <PostCard key={index} {...post} onClick={() => onPostClick(index)} delay={`${index * 150}ms`} />
                    ))}
                </div>

                <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">Ready to be featured? ⭐</h3>
                    <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">Share your unique perspective of Ferial Garden and you might be our next featured explorer. The best shots get featured on our main page!</p>
                    <div className="max-w-md mx-auto mb-6">
                        <div className="flex items-center bg-white/20 rounded-xl overflow-hidden">
                            <span className="py-3 px-4 bg-white/10 font-semibold hidden sm:inline-block">#EgySafaryDiscovery</span>
                            <input type="text" placeholder="Share your experience..." className="flex-1 p-3 bg-transparent placeholder-white/70 outline-none" />
                             <button onClick={onShare} className="py-3 px-4 bg-white/30 hover:bg-white/40 font-semibold">Share</button>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm opacity-90">
                        <span><strong>2.4k</strong> explorers joined this week</span>
                        <span className="hidden sm:inline">|</span>
                        <span>Featured posts get <strong>10x more views</strong></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
