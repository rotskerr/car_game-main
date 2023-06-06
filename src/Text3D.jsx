import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

function Text3D() {
  const { scene } = useGLTF('/models/threejstext.glb'); // Замініть шлях на реальний

  return (
      <Physics>
        <group>
          <mesh>
            <primitive object={scene} scale={0.05} />
          </mesh>
        </group>
      </Physics>
  );
}

export default Text3D;
