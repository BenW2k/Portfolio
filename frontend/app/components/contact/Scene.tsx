"use client";

import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import Model from "./glass";

export default function Scene() {
  return (
    <Canvas
      orthographic
      style={{background: "black", width: "100vw", height: "100vh"}}
      camera={{position: [0, 0, 1], zoom: 800}}
    >
      <Model />
      <directionalLight intensity={3} position={[0, 0.1, 1]} />
      <Environment preset="city" />
    </Canvas>
  );
}
