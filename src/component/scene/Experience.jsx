import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "../Avatar";
import { AvatarMedieval } from "../AvatarMedieval";
import { AvatarAngel } from "../AvatarAngel";
import { useStoreAvatar } from "../../store/avatarStore";
import { objectData } from "../../data/objectData";

export const Experience = ({ x }) => {
  const selectedId = useStoreAvatar((state) => state.selectedId)

  const renderComponent = () => {
    let selectedComponent = null;
  
    objectData.forEach((item) => {
      if (item.id === selectedId) {
        // selectedComponent = item.component;
  
        if (selectedId === 1) {
          selectedComponent = <Avatar position-x={x} />;
        } else if (selectedId === 2) {
          selectedComponent = <AvatarAngel position-x={x}/>;
        } else if (selectedId === 3) {
          selectedComponent = <AvatarMedieval position-x={x}/>;
        }
      }
    });
  
    if (selectedComponent) {
      return selectedComponent;
    }
  
    return <Avatar position-x={x} />;
  };
  
  return (
    <>
      <Environment preset="sunset" />
      <group position-y={-1.3} >
        {renderComponent()}
      </group>
      
      
    </>
  );
};

export default Experience;