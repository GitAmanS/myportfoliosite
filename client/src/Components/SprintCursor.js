import React, { useEffect, useState } from 'react';

const SpringCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorActive, setCursorActive] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.pageX, y: e.pageY });
        };

        const handleMouseDown = () => {
            setCursorActive(true);
        };

        const handleMouseUp = () => {
            setCursorActive(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div
            className={`cursor z-50 ${cursorActive ? 'cursor-active' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default SpringCursor;
