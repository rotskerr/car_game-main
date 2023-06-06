import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

function Text3D() {
  const { scene } = useGLTF('/models/1.glb'); // Замініть шлях на реальний

  return (
      <Physics>
        <group>
          <mesh>
            <primitive object={scene} scale={0.03} />
          </mesh>
        </group>
      </Physics>
  );
}

export default Text3D;
