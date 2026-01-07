import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Plane() {
  const mat = useRef();

  useFrame(({ clock }) => {
    if (mat.current) {
      mat.current.uniforms.uTime.value = clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[12, 12, 64, 64]} />
      <shaderMaterial
        ref={mat}
        transparent
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 p = position;
            p.z += sin(p.x * 1.5 + uTime) * 0.08;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          void main() {
            gl_FragColor = vec4(0.08,0.12,0.18,0.08);
          }
        `}
      />
    </mesh>
  );
}

export default function AmbientBackground() {
  return (
    <Canvas
      camera={{ position: [0, 3, 4] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={1} />
      <Plane />
    </Canvas>
  );
}
