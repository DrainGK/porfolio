import React, { useState } from 'react'
import "./missions.css"
import { missionsData } from '../../data/missionsData'
import { designData } from '../../data/designData';
import DropDown from '../../component/drop-down/DropDown';

const Missions = () => {
  const [data, setData] = useState(missionsData);
  const [selectedMission, setSelectedMission] = useState(data[0]);
  const [missionType, setMissionType] = useState(false)
  const [isActive, setIsActive] = useState(true)

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
    setIsActive((isActive) => !isActive)
    if (missionType === false) {
      setData(designData);
    } else {
      setData(missionsData);
    }
    setMissionType((missionType) => !missionType);
    console.log(missionType);
  }

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
              <h3>{item.name}</h3>
            </div>
            <div className={selectedMission && selectedMission.id === item.id ? 'mission-content-container' : 'enable'}>
              <h4>{item.date}</h4>
              <p >{item.exp}</p>
            </div>
            </>
          ))}
      <div className="button-container-mission">
        <div className={isActive === true ? "mission-button mission-button-active" : "mission-button"} onClick={handleType}>Web</div>
        <div className={isActive === true ? "mission-button" : "mission-button mission-button-active"} onClick={handleType}>Design</div>
      </div>
      </div>
    </div>
  )
}

export default Missions