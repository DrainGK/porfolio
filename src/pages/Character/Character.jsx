import React, { useState } from 'react'
import Scene from '../../component/scene/Scene'
import "./character.css"
import { characterData } from '../../data/characterData'
import Bubble from '../../component/bubble/Bubble'
import ContactForm from '../../component/contact/ContactForm'

const Character = () => {
  const [selectedBubble, setSelectedBubble] = useState(characterData[0]);
  
    const handleBubbleClick = (id) => {
      const selectedBubbleData = characterData.find((data) => data.id === id);
  
      // Vérifier si le clic correspond à un élément valide
      if (selectedBubbleData) {
        setSelectedBubble(selectedBubbleData);
        console.log('Clic valide:', selectedBubbleData);
      } else {
        console.log('Clic invalide:', id);
      }
    };

  return (
    <div className='character'>
      <div className="character-container">
        <Scene x={0.4} camera={{ position: [0, 2, 5], fov: 10}}/>
      </div>
      <div className="character-infos">

        <div className="name-infos-container">
          <h2>Guillaume Lopez</h2>
          <h3>Front-end Engineer</h3>
        </div>
        {characterData.map((data) => (
          <div className={selectedBubble && selectedBubble.id === data.id ? 'info-container' : 'enable'}>
            <h3>{data.title}</h3>
            <span>{data.content}</span>
          </div>
        ))}
        <div className="character-bubble">
          <h2>Character's informations</h2>
          <div className="bubble-container">
            {characterData.map((data) => (
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
        <div className="character-sns">
          <h2>Character's Inbox</h2>
          <div className="sns-container">
            <a href="https://www.linkedin.com" target="_blank">
              <Bubble
                    image={"./image/linkedin_logo.png"}
                    title={"Linkedin"}
                    className={"bubble"}
              />
            </a>
            <a href="https://www.github.com" target="_blank">
              <Bubble
                image={"./image/git-hub_logo.png"}
                title={"github"}
                className={"bubble"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character