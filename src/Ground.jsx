import { usePlane } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { BufferAttribute, PlaneGeometry } from "three";
import React from "react";
export function Ground({ wireframe, segments }) {
  const [ref] = usePlane(() => ({
    type: 'Static',
    rotation: [-Math.PI / 2, 0, 0]
  }));

  const meshRef = useRef(null);
  const meshRef2 = useRef(null);

  useEffect(() => {
    if (!meshRef.current || !meshRef2.current) return;

    const uvs = meshRef.current.geometry.attributes.uv.array;
    meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));

    const uvs2 = meshRef2.current.geometry.attributes.uv.array;
    meshRef2.current.geometry.setAttribute("uv2", new BufferAttribute(uvs2, 2));
  }, []);

  return (
    <>
      <mesh ref={ref}>
        <planeGeometry args={[20, 20, 50, 50]} attach="geometry" />
        <meshBasicMaterial
          color="#2CD3E1"
          wireframe={true}
          side={2}
          transparent={true}
          opacity={0.5}
          
        />
      </mesh>
    </>
  );
}
