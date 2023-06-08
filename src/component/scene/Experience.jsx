import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "../Avatar";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <group position-y={-1.3}>
        <Avatar />
      </group>
      
    </>
  );
};

export default Experience;