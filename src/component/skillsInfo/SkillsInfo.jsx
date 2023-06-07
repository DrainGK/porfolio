import React from 'react';
import "./skillsinfo.css"

const SkillsInfo = ({ title, content, cat, className}) => {
    return (
        <div className={className} >
            <h2>{title}</h2>
            <p>{cat}</p>
            <p>{content}</p>
        </div>
    );
};

export default SkillsInfo;