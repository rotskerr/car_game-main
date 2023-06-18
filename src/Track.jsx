import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { ColliderBox } from "./ColliderBox";
import { Ramp } from "./Ramp";

export function Track() {
  const result = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/track.glb"
  );

    const colorMap = useLoader(
      TextureLoader,
      process.env.PUBLIC_URL + "/textures/track.png"
    );

  useEffect(() => {
    colorMap.anisotropy = 160;
  }, [colorMap]);

  let geometry = result.scene.children[0].geometry;

  return (
    <>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          toneMapped={false}
          map={colorMap}
        />
      </mesh>

      <Ramp />
      
      <ColliderBox position={[1.75, 0, 0.5]} scale={[.3, 1, 0.3]}/>
      <ColliderBox position={[2.5, 0, -1.4]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[0.6, 0, -3.8]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[-1.95, 0, -5.18]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[-5.55, 0, -3.05]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[-4.4, 0, -1.77]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[-7.03, 0, -0.76]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[-4.75, 0, 2.73]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[-3.05, 0, 3.4]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[-0.83, 0, 3.2]} scale={[0.3, 1, 0.3]}/>
      
      <ColliderBox position={[-1.85,0,0.385]} scale={[0.05, 1, 0.13]}/>
      <ColliderBox position={[-1.85,0,-0.385]} scale={[0.05, 1, 0.13]}/>
      <ColliderBox position={[-2.28,0,0.385]} scale={[0.05, 1, 0.13]}/>
      <ColliderBox position={[-2.28,0,-0.385]} scale={[0.05, 1, 0.13]}/>
      <ColliderBox position={[-4.39,0,1.125]} scale={[0.13, 1, 0.13]}/>
      <ColliderBox position={[-4.39,0,1.9]} scale={[0.13, 1, 0.13]}/>
      
      <ColliderBox position={[-2.86,0,-0.9]} scale={[0.35, 1, 0.35]}/>
      <ColliderBox position={[-3.33,0,-0.9]} scale={[0.35, 1, 0.35]}/>
      <ColliderBox position={[0.41,0,2]} scale={[0.35, 1, 0.35]}/>
      
      <ColliderBox position={[-2.3,0,-2.76]} scale={[1.37, 1, 1.09]}/>
      
      <ColliderBox position={[-3.08,0,0.89]} scale={[0.36, 1, 0.03]}/>
      <ColliderBox position={[-2.53,0,0.89]} scale={[0.36, 1, 0.03]}/>
      
      <ColliderBox position={[-4.53,0,-0.65]} scale={[0.1, 0.5, 0.1]}/>
      <ColliderBox position={[-4.15,0,-0.67]} scale={[0.1, 0.5, 0.1]}/>
      <ColliderBox position={[-4.9,0,-0.58]} scale={[0.1, 0.5, 0.1]}/>
      <ColliderBox position={[-0.3,0,1]} scale={[0.1, 0.5, 0.1]}/>

      <ColliderBox position={[9.28,0,-0.335]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-0.335]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-0.695]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-1.075]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-1.455]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-1.82]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-2.2]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-2.565]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-2.939]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-3.31]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-3.685]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-4.05]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-4.425]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.65,0,-4.79]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.28,0,-4.79]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[8.905,0,-4.79]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[8.535,0,-4.79]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[8.165,0,-4.79]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-4.79]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-4.425]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-4.05]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-3.685]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-3.31]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-2.939]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-2.565]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-2.2]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-1.82]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-1.455]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-1.075]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-0.695]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.79,0,-0.335]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[8.165,0,-0.335]} scale={[0.15, 2, 0.15]}/>

      <ColliderBox position={[8,0,-0.655]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[8,0,-1.45]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[8,0,-2.215]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[8,0,-2.95]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[8,0,-3.7]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[7.983,0,-4.45]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[8.755,0,-4.51]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.41,0,-4.375]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.41,0,-3.665]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.41,0,-2.923]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.41,0,-2.185]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.41,0,-1.45]} scale={[0.15, 2, 0.15]}/>
      <ColliderBox position={[9.41,0,-0.73]} scale={[0.15, 2, 0.15]}/>

      <ColliderBox position={[9,0,7]} scale={[0.01, 2, 0.15]}/>




    </>
  );
}