import React from 'react';
import "./bubble.css"

const Bubble = ({ image, title, className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <img src={image} alt={title} />
        </div>
    );
};

export default Bubble;