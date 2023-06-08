import React from 'react'
import Scene from '../../component/scene/Scene'
import "./character.css"

const Character = () => {
  return (
    <div className='character'>
      <Scene camera={{ position: [0, 2, 5], fov: 10}}/>
    </div>
  )
}

export default Character