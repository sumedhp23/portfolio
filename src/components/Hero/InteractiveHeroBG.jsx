import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function FlowPlane({ mouse }) {
  const material = useRef();

  useFrame(({ clock }) => {
    if (!material.current) return;

    material.current.uniforms.uTime.value = clock.elapsedTime * 0.4;

    // smooth mouse lerp
    material.current.uniforms.uMouse.value.lerp(mouse, 0.08);
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6, 128, 128]} />
      <shaderMaterial
        ref={material}
        transparent
        depthWrite={false}
        depthTest={false}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        }}
        vertexShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          varying vec2 vUv;

          void main() {
            vUv = uv;
            vec3 pos = position;

            float wave =
              sin(pos.x * 2.0 + uTime) * 0.12 +
              cos(pos.y * 2.5 + uTime * 0.8) * 0.12;

            float mouseInfluence =
              smoothstep(0.9, 0.0, distance(vUv, uMouse * 0.6 + 0.5));


            pos.z += wave + mouseInfluence * 0.45;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;

          void main() {
            vec3 base = mix(
              vec3(0.05, 0.07, 0.12),
              vec3(0.10, 0.16, 0.22),
              vUv.y
            );

            float vignette = smoothstep(0.9, 0.2, distance(vUv, vec2(0.5)));
            gl_FragColor = vec4(base + vignette * 0.15, 0.35);
          }
        `}
      />
    </mesh>
  );
}

export default function InteractiveHeroBG() {
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));

  const handleMouseMove = (e) => {
    mouse.current.set(
      e.clientX / window.innerWidth,
      1 - e.clientY / window.innerHeight
    );
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 3] }}
        gl={{ alpha: true, antialias: true }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <ambientLight intensity={1} />
        <FlowPlane mouse={mouse.current} />
      </Canvas>
    </div>
  );
}
