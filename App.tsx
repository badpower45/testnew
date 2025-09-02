
import React, { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import AudioExperience from './components/AudioExperience';
import WhatsNext from './components/WhatsNext';
import RouteCreator from './components/RouteCreator';
import Community from './components/Community';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Notification from './components/Notification';
import { MissionDetails, LocationGuide } from './components/ModalContent';

const App: React.FC = () => {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.pageYOffset);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        const targets = document.querySelectorAll('.animate-on-scroll');
        targets.forEach(target => observer.observe(target));

        return () => targets.forEach(target => observer.unobserve(target));
    }, []);


    const showNotification = useCallback((message: string, type: 'success' | 'info') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    }, []);

    const handleShowMissionDetails = useCallback((index: number) => {
        setModalContent(<MissionDetails index={index} />);
    }, []);

    const handleShowLocationGuide = useCallback((type: 'seafood' | 'museums' | 'cafes') => {
        setModalContent(<LocationGuide type={type} />);
    }, []);

    return (
        <div className="bg-gray-900" style={{ '--scroll-y': `${scrollY}px` } as React.CSSProperties}>
            <Hero />
            <Mission onCardClick={handleShowMissionDetails} onDownloadClick={() => showNotification('App download initiated!', 'success')} />
            <AudioExperience onPlayClick={() => showNotification('Playing video preview...', 'info')} />
            <WhatsNext onButtonClick={handleShowLocationGuide} />
            <RouteCreator onButtonClick={() => showNotification('Route creator coming soon!', 'info')} />
            <Community onPostClick={() => showNotification('Full post view coming soon!', 'info')} onShare={() => showNotification('Experience shared!', 'success')} />
            <Footer />
            {modalContent && <Modal onClose={() => setModalContent(null)}>{modalContent}</Modal>}
            {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
        </div>
    );
};

export default App;
