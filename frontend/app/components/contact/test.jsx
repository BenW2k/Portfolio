import React, {useRef} from "react";
import {useGLTF} from "@react-three/drei";
import {useThree} from "@react-three/fiber";
import {Float} from "@react-three/drei";
import {Text} from "@react-three/drei";
import {useControls} from "leva";
import {MeshTransmissionMaterial} from "@react-three/drei";

export default function Model() {
  const {nodes} = useGLTF("/glass.glb");
  const {viewport} = useThree();
  return (
    <group
      position={[-6, -3.5, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={viewport.width * 1.8}
    >
      {nodes.Scene.children.map((mesh, i) => {
        return <Mesh data={mesh} key={i} />;
      })}
      {/* <Font /> */}
    </group>
  );
}
function Mesh({data}) {
  const materialProps = useControls({
    thickness: {value: 0.275, min: 0, max: 1, step: 0.01},

    ior: {value: 1.8, min: 0, max: 3, step: 0.1},

    chromaticAberration: {value: 0.75, min: 0, max: 1},

    resolution: {value: 300},
  });
  return (
    <Float speed={0.4} floatIntensity={0.3} floatingRange={[-0.3, 0.3]}>
      <mesh {...data}>
        <MeshTransmissionMaterial
          roughness={0}
          transmission={0.99}
          {...materialProps}
        />
      </mesh>
    </Float>
  );
}

function Font() {
  const src = "/Satoshi-Bold.otf";

  const textOption = {
    color: "white",

    anchorX: "center",

    anchorY: "middle",
  };

  return (
    <group>
      <Text font={src} position={[0, 0, -0.1]} fontSize={0.4} {...textOption}>
        Test
      </Text>

      <Text
        font={src}
        position={[0, -0.15, -0.1]}
        fontSize={0.03}
        {...textOption}
      >
        Lets Break the Ice
      </Text>
    </group>
  );
}
