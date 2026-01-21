import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, width = 'fit-content', delay = 0, className = '' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={className} style={{ position: 'relative', width }}>
            <div
                style={{
                    height: '100%',
                    transform: isVisible ? 'translateY(0)' : 'translateY(75px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
                    pointerEvents: isVisible ? 'auto' : 'none',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Reveal;
