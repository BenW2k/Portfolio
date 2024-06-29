import React, {useRef} from "react";
import {useGLTF} from "@react-three/drei";

export function Model(props) {
  const {nodes, materials} = useGLTF("/glass.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.SVGMat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["SVGMat.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials["SVGMat.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials["SVGMat.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve005.geometry}
        material={materials["SVGMat.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve006.geometry}
        material={materials["SVGMat.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={materials["SVGMat.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={materials["SVGMat.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve009.geometry}
        material={materials["SVGMat.009"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials["SVGMat.010"]}
      />
    </group>
  );
}

useGLTF.preload("/glass.glb");
