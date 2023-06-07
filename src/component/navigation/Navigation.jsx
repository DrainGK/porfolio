import React, { useState } from 'react';
import "./navigation.css"

const navData = ["abilities", "character", "customization", "Inventory", "Missions", "Lore"]

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const handlePreviousClick = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === 0) {
        return navData.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === navData.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <nav>
      <div className="nav-container">
        <button onClick={handlePreviousClick}>L1</button>
        <ul className="nav-list">
          {navData.map((nav, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleItemClick(index)}
            >
              {nav}
            </li>
          ))}
        </ul>
        <button onClick={handleNextClick}>R1</button>
      </div>
      <div className='name-container'>
        <h1>Guillaume Lopez |  </h1>
        <h2>F-E DEV</h2>
      </div>
    </nav>
  );
};

export default Navigation;
