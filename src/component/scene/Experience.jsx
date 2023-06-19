import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "../Avatar";
import { AvatarMedieval } from "../AvatarMedieval";
import { AvatarAngel } from "../AvatarAngel";
import { useStoreAvatar } from "../../store/avatarStore";

const avatarComponents = [
  {
    id: 1,
    component: <Avatar />
  },
  {
    id: 2,
    component: <AvatarAngel />
  },
  {
    id: 3,
    component: <AvatarMedieval />
  },

]

export const Experience = ({ x }) => {
  const selectedId = useStoreAvatar((state) => state.selectedId)

  const renderComponent = () => {
    let selectedComponent = null;
  
    avatarComponents.forEach((item) => {
      if (item.id === selectedId) {
        selectedComponent = item.component;
  
        if (selectedId === 1) {
          // Condition for id = 1
          // Add your custom logic here
          selectedComponent = <Avatar position-x={x} />;
        } else if (selectedId === 2) {
          // Condition for id = 2
          // Add your custom logic here
          selectedComponent = <AvatarAngel position-x={x}/>;
        } else if (selectedId === 3) {
          // Condition for id = 3
          // Add your custom logic here
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
        {/* <Avatar position-x={x}/> */}
        {/* <AvatarMedieval position-x={x}/> */}
        {renderComponent()}
      </group>
      
      
    </>
  );
};

export default Experience;