import React, { useState } from 'react';
import { frontEndData } from '../../data/frontEndData';
import { otherSkillsData } from '../../data/otherSkillsData';
import Bubble from '../../component/bubble/Bubble';
import SkillsInfo from '../../component/skillsInfo/SkillsInfo';

import "./abilities.css"
import Scene from '../../component/scene/Scene';

const Abilities = () => {
    const [selectedBubble, setSelectedBubble] = useState(frontEndData[0]);
  
    const handleBubbleClick = (id) => {
      const selectedBubbleData = frontEndData.find((data) => data.id === id);
  
      // Vérifier si le clic correspond à un élément valide
      if (selectedBubbleData) {
        setSelectedBubble(selectedBubbleData);
        console.log('Clic valide:', selectedBubbleData);
      } else {
        console.log('Clic invalide:', id);
      }
    };
  
    return (
      <section className="abilities">
        <div className="abilities-container-top">
        {frontEndData.map((data) => (
              <SkillsInfo
                key={data.id}
                title={data.title}
                content={data.content}
                cat={data.cat}
                className={selectedBubble && selectedBubble.id === data.id ? 'skills-info-container' : 'enable'}
              />
            ))}
        </div>
            <div className="character-container">
              <Scene camera={{ position: [0, 2, 5], fov: 10}}/>
            </div>
        <div className="abilities-container-bottom">
          <div className="abilities-container-bottom-left">
            <div className="front-end">
              {frontEndData.slice(0,9).map((data) => (
                <Bubble
                  key={data.id}
                  image={data.icon}
                  title={data.title}
                  onClick={() => handleBubbleClick(data.id)}
                  className={selectedBubble && selectedBubble.id === data.id ? 'active-bubble bubble' : 'bubble'}
                />
              ))}
            </div>
          </div>

          <div className="abilities-container-bottom-right">
            <div className="others">
            {frontEndData.slice(10,19).map((data) => (
                <Bubble
                  key={data.id}
                  image={data.icon}
                  title={data.title}
                  onClick={() => handleBubbleClick(data.id)}
                  className={selectedBubble && selectedBubble.id === data.id ? 'active-bubble bubble' : 'bubble'}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default Abilities;
