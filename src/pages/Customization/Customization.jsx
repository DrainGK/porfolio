import React from 'react'
import Scene from '../../component/scene/Scene';
import "./customization.css"
import { useStoreAvatar } from '../../store/avatarStore';

const Customization = () => {
  const setId = useStoreAvatar(state => state.setId)
  return (
    <div className='customization'>
      <div className="character-container">
        <Scene x={-0.4} camera={{ position: [0, 2, 5], fov: 10}}/>
      </div>
      <div className="button-container">
        <button onClick={() => setId(1)}>Avatar</button>
        <button onClick={() => setId(2)}>Avatar Angel</button>
        <button onClick={() => setId(3)}>Avatar Medieval</button>
      </div>
    </div>
  )
}

export default Customization