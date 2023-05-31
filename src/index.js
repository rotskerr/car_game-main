import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";
import React from "react";
import { Loader } from "@react-three/drei";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas>
      <Physics
        broadphase="SAP"
        gravity={[0, -3, 0]}
      >
        <Scene />
      </Physics>
    </Canvas>
    <Loader />

    <div class="controls">
      <p>press w a s d to move</p>
      <p>press k to swap camera</p>
      <p>press r to reset</p>
      <p>press arrows for flips</p>
    </div>
  </>
);