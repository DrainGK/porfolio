import React, { useState } from 'react'
import Scene from '../../component/scene/Scene';
import "./customization.css"
import { useStoreAvatar } from '../../store/avatarStore';
import Bubble from '../../component/bubble/Bubble';
import SkillsInfo from '../../component/skillsInfo/SkillsInfo';

const questionMark = require("../../assets/images/question-mark.jpg")

const avatarSelection = [
  {
    id: 1,
    name: "Default",
    content: "Default Skin",
    image: "./image/skins/default.png"
  },
  {
    id: 2,
    name: "Cupidon",
    content: "Cupidon Skin",
    image: "./image/skins/cupidon.png"
  },
  {
    id: 3,
    name: "Medieval",
    content: "Medieval Skin",
    image: "./image/skins/Medieval.png"
  },
  {
    id: 4,
    name: "Locked",
    content: "Continue the adventure to unlock the skin",
    image: ""
  },
  {
    id: 5,
    name: "Locked",
    content: "Continue the adventure to unlock the skin",
    image: ""
  },
  {
    id: 6,
    name: "Locked",
    content: "Continue the adventure to unlock the skin",
    image: ""
  },
  {
    id: 7,
    name: "Locked",
    content: "Continue the adventure to unlock the skin",
    image: ""
  },
  {
    id: 8,
    name: "Locked",
    content: "Continue the adventure to unlock the skin",
    image: ""
  },
]

const Customization = () => {
  const setId = useStoreAvatar(state => state.setId)
  const [selectedBubble, setSelectedBubble] = useState(avatarSelection);

  const handleClick = (id) => {
    setId(id)
    const selectedBubbleData = avatarSelection.find((data) => data.id === id);

    if (selectedBubbleData) {
      setSelectedBubble(selectedBubbleData);
      console.log('Clic valide:', selectedBubbleData);
    } else {
      console.log('Clic invalide:', id);
    }

  }

  return (
    <div className='customization'>
      <div className="character-container">
        <Scene x={-0.4} camera={{ position: [0, 2, 5], fov: 10}}/>
      </div>
      <div className="skins-infos-container">
        <div className="skins-info">
          {avatarSelection.map((data) => (
                <h2 key={data.id} className={selectedBubble && selectedBubble.id === data.id ? 'skin-title' : 'enable'}>{data.name}</h2>
              ))}
        </div>
        <div className="skins">
            {avatarSelection.map((data)=>(
              <Bubble 
              key={data.id}
              image={data.image === "" ? questionMark : data.image}
              title={data.title}
              onClick={() => handleClick(data.id)}
              className={selectedBubble && selectedBubble.id === data.id ? 'active-bubble bubble' : 'bubble'}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Customization