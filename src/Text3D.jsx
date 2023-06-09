import { useGLTF } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

// Оголосіть змінну клонованої моделі


function Text3D() {
  const { scene: ThreJs } = useGLTF('/models/ThreeJs.glb'); // Замініть шляхи на реальні
  const { scene: Git } = useGLTF('/models/Git.glb');
  const { scene: CSS } = useGLTF('/models/Css.glb');
  const { scene: GitHub } = useGLTF('/models/GitHub.glb');
  const { scene: HTML } = useGLTF('/models/HTML.glb');
  const { scene: JS } = useGLTF('/models/JS.glb');
  const { scene: MUI } = useGLTF('/models/MUI.glb');
  const { scene: Postgre } = useGLTF('/models/Postgre.glb');
  const { scene: React } = useGLTF('/models/React.glb');
  const { scene: Tailwind } = useGLTF('/models/Tailwind.glb');

  return (
    <Physics>
      <group rotation={[0, Math.PI / -2, 0]}>
        <primitive object={ThreJs} scale={0.05} position={[0, 0.1, -5.023]} />
        <primitive object={Git} scale={0.045} position={[0.3, 0.1, -5]} />
        <primitive object={CSS} scale={0.09} position={[0.6, 0.12, -5.01]} />
        <primitive object={GitHub} scale={0.07} position={[0.8, 0.08, -5]} />
        <primitive object={HTML} scale={0.068} position={[1.1, 0.073, -5.039]} />
        <primitive object={JS} scale={0.025} position={[1.4, 0.078, -5.01]} />
        <primitive object={MUI} scale={0.057} position={[1.7, 0.14, -5.01]} />
        <primitive object={Postgre} scale={0.04} position={[2.05, 0.09, -5]} />
        <primitive object={React} scale={0.035} position={[2.3, 0.22, -5]} />
        <primitive object={Tailwind} scale={0.057} position={[2.506, 0.085, -5]} />

      </group>
    </Physics>
  );
}

export default Text3D;
