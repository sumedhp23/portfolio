import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FlowPlane({ mouse }) {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = clock.elapsedTime * 0.4;
    materialRef.current.uniforms.uMouse.value.lerp(mouse, 0.14);
  });
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
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

            pos.z += wave + mouseInfluence * 1.5;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;

          void main() {
            float shimmer = sin(uTime * 0.4 + vUv.y * 4.0) * 0.05;

            // Cyber-blue accent base
            vec3 baseColor = vec3(0.22, 0.74, 0.97) * 0.6;
            
            float distanceToCenter = distance(vUv, vec2(0.5));
            float vignette = smoothstep(1.0, 0.0, distanceToCenter);
            
            gl_FragColor = vec4(baseColor * vignette, 0.4 + shimmer);
          }
        `}
        wireframe={true}
      />
    </mesh>
  );
}

export default function InteractiveHeroBG() {
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initial wake-up hack for first load
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        transform: "translateZ(0)", // Hardware acceleration to bypass basic occlusion tracking
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 3] }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
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
