import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "../Avatar";

export const Experience = ({ x }) => {
  return (
    <>
      <Environment preset="sunset" />
      <group position-y={-1.3} >
        <Avatar position-x={x}/>
      </group>
      
    </>
  );
};

export default Experience;