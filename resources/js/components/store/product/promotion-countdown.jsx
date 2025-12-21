import { useEffect, useState } from 'react';

const PromotionCountdown = ({ endsAt }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        if (!endsAt) return;

        const interval = setInterval(() => {
            const now = new Date();
            const end = new Date(endsAt);
            const diff = end - now;

            if (diff <= 0) {
                setTimeLeft('Promocja zakończona');
                clearInterval(interval);
                return;
            }

            const days = Math.floor(diff / 1000 / 60 / 60 / 24);
            const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            if (days > 0) {
                setTimeLeft(`${days} dni ${hours}h ${minutes}m ${seconds}s`);
            } else {
                setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endsAt]);

    return <span className="text-black">{timeLeft}</span>;
};

export default PromotionCountdown;
