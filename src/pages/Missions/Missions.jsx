import React, { useState } from 'react'
import "./missions.css"
import { missionsData } from '../../data/missionsData'
import { designData } from '../../data/designData';
import DropDown from '../../component/drop-down/DropDown';

const Missions = () => {
  const [data, setData] = useState(missionsData);
  const [selectedMission, setSelectedMission] = useState(data[0]);
  const [missionType, setMissionType] = useState(false)

  const handleMissionClick = (id) => {
    const selectedMissionData = data.find((data) => data.id === id);
      // Vérifier si le clic correspond à un élément valide
      if (selectedMissionData) {
        setSelectedMission(selectedMissionData);
        console.log('Clic valide:', selectedMissionData);
      } else {
        console.log('Clic invalide:', id);
      }
  }

  const handleType = () => {
    if (missionType === false) {
      setData(designData);
    } else {
      setData(missionsData);
    }
    setMissionType((missionType) => !missionType);
    console.log(missionType);
  }

  // className={isVisible ? "mission-image" : "enable" }
  return (
    <div className='missions'>
      <div className="missons-left">
        {data.map((img)=>(
          <div className='mission-container'>
            <img className={selectedMission && selectedMission.id === img.id ? '' : 'enable'} height={"450px"} width={"600px"} src={img.image} alt={img.name}
            />
          </div>
        ))}
      </div>
      <div className="missions-right">
          {data.map((item) => (
            <>
            <div className={selectedMission && selectedMission.id === item.id ? 'mission-title-container active-bubble' : 'mission-title-container'} onClick={()=>handleMissionClick(item.id)}>
              <h3>{item.title}</h3>
            </div>
            <div className={selectedMission && selectedMission.id === item.id ? 'mission-content-container' : 'enable'}>
              <h4>{item.date}</h4>
              <p >{item.exp}</p>
            </div>
            </>
          ))}
      </div>
      <div className="button-container-mission">
        <button onClick={handleType}>Web</button>
        <button onClick={handleType}>Design</button>
      </div>
    </div>
  )
}

export default Missions