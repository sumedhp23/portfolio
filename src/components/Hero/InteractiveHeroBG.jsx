import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FlowPlane({ mouse }) {
  const material = useRef();

  useFrame(({ clock }) => {
    if (!material.current) return;

    material.current.uniforms.uTime.value = clock.elapsedTime * 0.4;
    material.current.uniforms.uMouse.value.lerp(mouse, 0.14);
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

            float primaryWave =
              sin(pos.x * 2.2 + uTime) * 0.18 +
              cos(pos.y * 2.8 + uTime * 0.9) * 0.18;

            float slowBreath =
              sin(uTime * 0.6) * 0.08;

            float wave = primaryWave + slowBreath;

            float flow =
              sin((pos.x + pos.y) * 1.5 + uTime * 0.7) * 0.12;

            pos.z += flow;

            float mouseInfluence =
              smoothstep(1.0, 0.0, distance(vUv, uMouse * 0.55 + 0.5));

            pos.z += wave + mouseInfluence * 0.9;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;

          void main() {
            float shimmer = sin(uTime * 0.4 + vUv.y * 4.0) * 0.03;

            vec3 base = mix(
              vec3(0.05, 0.07, 0.12),
              vec3(0.12, 0.18, 0.26),
              vUv.y + shimmer
            );

            float vignette = smoothstep(0.9, 0.2, distance(vUv, vec2(0.5)));
            gl_FragColor = vec4(base + vignette * 0.18, 0.35);
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
