import React from 'react';

const MapModal = ({open, onClose, children}) => {
    if(!open) return null;

    return (
        <div onClick={onClose} className="modal">
            <div
            onClick={(e) => e.stopPropagation() } 
            className="oui">
                <button onClick={onClose} className='modal-button'>
                    <span/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default MapModal;