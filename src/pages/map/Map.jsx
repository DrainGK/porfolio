import React from 'react'
import Map3D from '../../component/scene/Map3D'
import "./map.css"
import { motion } from 'framer-motion'

const Map = () => {
  return (
    <div className='map'>
      <motion.div className="map-rpg"
      drag
      dragConstraints={{ left: 0, right: 0, top: -300, bottom: 300 }}
      dragElastic={0.2}>
        <div className='red-dot'></div>
        <div className='blue-dot'></div>
        <div className='green-dot'></div>
        <div className='pink-dot'></div>
      </motion.div>
      {/* <Map3D /> */}
    </div>
  )
}

export default Map