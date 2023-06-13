import React from 'react';
import "./mapModal.css";

const MapModal = ({open, onClose, children}) => {
    if(!open) return null;

    return (
        <div onClick={onClose} className={open ? "modal-overlay" : "enable"}>
            <div
            onClick={(e) => e.stopPropagation() } 
            className="modal">
                <span onClick={onClose} className='modal-button'>
                    <div/>
                    <p>Back</p>
                </span>
                {children}
            </div>
        </div>
    );
};

export default MapModal;