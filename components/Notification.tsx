
import React, { useEffect, useState } from 'react';

interface NotificationProps {
    message: string;
    type: 'success' | 'info';
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExiting(true);
            setTimeout(onClose, 300);
        }, 2700);

        return () => clearTimeout(timer);
    }, [onClose]);

    const baseClasses = "fixed top-5 right-5 p-4 rounded-lg text-white font-semibold shadow-lg z-50 transition-all duration-300";
    const typeClasses = {
        success: "bg-gradient-to-r from-green-500 to-emerald-500",
        info: "bg-gradient-to-r from-blue-500 to-sky-500"
    };
    const animationClasses = exiting ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0";

    return (
        <div className={`${baseClasses} ${typeClasses[type]} ${animationClasses}`}>
            {message}
        </div>
    );
};

export default Notification;
