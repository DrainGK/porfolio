import React, { useState } from "react";
import "./dropDown.css"

const DropDown = ({ content, dropTitle }) => {
    const [opened, setOpened] = useState(false);

    function toggle() {
        setOpened((opened) => !opened);
    }
    return (
        <div className="dropdown">
        <div className="dropdown-button" onClick={toggle}>
            <h3 className="drop-title">{dropTitle}</h3>
            {opened ? (
            <img src="image/arrow_up.svg" alt="arrow" />
            ) : (
            <img src="image/arrow_down.svg" alt="arrow" />
            )}
        </div>
        <div className="dropdown-details">
            {opened && 
                <div className="drop-details">
                    <h3>{content.title}</h3>
                    <h4>{content.date}</h4>
                    <p>{content.exp}</p>
                </div>}
        </div>
        </div>
    );
};

export default DropDown;