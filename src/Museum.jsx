import { useGLTF } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

function Museum() {
  const { scene: temple } = useGLTF('/models/temple.glb');
  const { scene: directional_sign } = useGLTF('/models/directional_sign.glb');


  return (
    <Physics>
      <group >
        <primitive object={temple} scale={0.07} position={[8, 0, -3]} />
        <primitive object={directional_sign} scale={0.04} position={[9, -0.01, 7]} rotation={[0, Math.PI, 0]} />


      </group>
    </Physics>
  );
}

export default Museum;
