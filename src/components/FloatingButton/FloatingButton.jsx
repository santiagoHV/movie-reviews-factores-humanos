import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './FloatingButton.css';


const FloatingButton = ({ buttonText }) => {
    const [hovered, setHovered] = useState(false);
    const [showRectangle, setShowRectangle] = useState(false);
    const [showText, setShowText] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
        setShowRectangle(true);

        setTimeout(() => {
            setShowText(true);
        }, 350);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setShowRectangle(false);
        setShowText(false);
    };

    const handleClick = () => {
        alert('Botón clickeado');
    };

    return (
        <div>
            {showRectangle && (
                <div className="floating-button" onMouseLeave={handleMouseLeave} onClick={handleClick}>
                    {showText && <p className='texto-btn-flotante'>{buttonText}</p>}
                </div>
            )}
            {!hovered && (
                <div
                    className="floating-button"
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                >
                    <FaPlus />
                </div>
            )}
        </div>
    );
};

export default FloatingButton;
