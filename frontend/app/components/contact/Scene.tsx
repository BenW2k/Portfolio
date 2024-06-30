"use client";

import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import {Model} from "./glass";
import dynamic from "next/dynamic";

export default function Scene() {
  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <Canvas
        orthographic
        style={{backgroundColor: "black"}}
        camera={{position: [-5, 20, -5], zoom: 3200}}
      >
        <Model />
        <directionalLight intensity={3} position={[1, 0.1, 1]} />
        <Environment preset="city" />
      </Canvas>
      ;
    </div>
  );
}
