import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./navigation.css"
import navSound from "../../assets/sounds/navigation.mp3"

const navData = [
  {
    id: "1",
    name:"abilities"
  },
  {
    id: "2",
    name:"character"
  },
  {
    id: "3",
    name:"customization"
  },
  {
    id: "1",
    name:"inventory"
  },
  {
    id: "1",
    name:"missions"
  },
  {
    id: "1",
    name:"map"
  },
]

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const audioRef = React.useRef(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const index = parseInt(searchParams.get('index'));
    if (!isNaN(index)) {
      setActiveIndex(index);
    }
  }, [location.search]);

  const handleItemClick = (index) => {
    const selectedNav = navData[index];
    setActiveIndex(index);
    navigate(`/${selectedNav.name}`);
    playSound();
  };

  const handlePreviousClick = () => {
    const previousIndex = activeIndex === 0 ? navData.length - 1 : activeIndex - 1;
    const previousNav = navData[previousIndex];
    setActiveIndex(previousIndex);
    navigate(`/${previousNav.name}`);
    playSound();
  };

  const handleNextClick = () => {
    const nextIndex = activeIndex === navData.length - 1 ? 0 : activeIndex + 1;
    const nextNav = navData[nextIndex];
    setActiveIndex(nextIndex);
    navigate(`/${nextNav.name}`);
    playSound();
  };

  const playSound = () => {
    audioRef.current.play()
      .catch(error => {
        console.error('Failed to play sound:', error);
      });
  };

  return (
    <nav>
      <audio ref={audioRef} src={navSound} />
      <div className="nav">
        <div className="nav-container">
          <button onClick={handlePreviousClick}>L1</button>
          <ul className="nav-list">
            {navData.map((nav, index) => (
              <li
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleItemClick(index)}
              >
                {nav.name}
              </li>
            ))}
          </ul>
          <button onClick={handleNextClick}>R1</button>
        </div>
        <div className='name-container'>
          <h1>Guillaume Lopez |  </h1>
          <h2>F-E DEV</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
