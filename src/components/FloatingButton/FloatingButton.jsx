import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './FloatingButton.css';

const FloatingButton = ({ buttonText, to }) => {
    const [hovered, setHovered] = useState(false);
    const [showRectangle, setShowRectangle] = useState(false);
    const [showText, setShowText] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
        setShowRectangle(true);

        setTimeout(() => {
            setShowText(true);
        }, 150);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setShowRectangle(false);
        setShowText(false);
    };

    return (
        <div>
            {showRectangle && (
                <Link to={"/newMovie"} className="floating-button" onMouseLeave={handleMouseLeave}>
                    {showText && <p className='texto-btn-flotante'>{buttonText}</p>}
                </Link>
            )}
            {!hovered && (
                <div
                    className="floating-button"
                    onMouseEnter={handleMouseEnter}
                >
                    <FaPlus />
                </div>
            )}
        </div>
    );
};

export default FloatingButton;
