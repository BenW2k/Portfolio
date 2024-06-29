import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import {Model} from "../components/contact/glass";

export default function Scene() {
  <Canvas
    orthographic
    style={{backgroundColor: "black"}}
    camera={{position: [0, 0, 1], zoom: 800}}
  >
    <directionalLight intensity={3} position={[0, 0.1, 1]} />
    <Model />
  </Canvas>;
}
