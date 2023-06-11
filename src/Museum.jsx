import { useGLTF } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

function Museum() {
  const { scene: ThreJs } = useGLTF('/models/temple.glb'); // Замініть шляхи на реальні

  return (
    <Physics>
      <group >
        <primitive object={ThreJs} scale={0.07} position={[8, 0, -3]} />
      </group>
    </Physics>
  );
}

export default Museum;
