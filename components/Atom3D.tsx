"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere, Sparkles, Html } from "@react-three/drei";
import * as THREE from "three";

const COLOR_CYAN = "#00f5ff";
const COLOR_VIOLET = "#7b2fff";
const COLOR_GREEN = "#00ff88";

function OrbitalRing({
  radius,
  rotation,
  speed,
  electronColor,
  electronSize = 0.13,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
  electronColor: string;
  electronSize?: number;
}) {
  const ref = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
    }
    return pts;
  }, [radius]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={rotation}>
      {/* Ring path */}
      <Line points={points} color={COLOR_CYAN} lineWidth={1} transparent opacity={0.2} />
      <group ref={ref}>
        {/* Electron dot */}
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[electronSize, 16, 16]} />
          <meshStandardMaterial
            color={electronColor}
            emissive={electronColor}
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>
        {/* Electron trail glow */}
        <mesh position={[radius * 0.85, 0, 0]}>
          <sphereGeometry args={[electronSize * 0.6, 8, 8]} />
          <meshStandardMaterial
            color={electronColor}
            emissive={electronColor}
            emissiveIntensity={1.5}
            transparent
            opacity={0.4}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

function ShipCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    }
  });

  return (
    <group>
      {/* Profile image - non-rotating center */}
      <Float speed={1.8} rotationIntensity={0} floatIntensity={0.4}>
        <Html transform center position={[0, 0, 0]} style={{ pointerEvents: "none" }}>
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: "160px",
              height: "160px",
              border: "2px solid rgba(0,245,255,0.5)",
              boxShadow: "0 0 30px rgba(0,245,255,0.4), 0 0 80px rgba(0,245,255,0.1), inset 0 0 30px rgba(0,245,255,0.05)",
            }}
          >
            <img
              src="/profile.jpg"
              alt="Abhinav A"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.style.background = "linear-gradient(135deg,#0a1628,#0d2040)";
                  parent.style.display = "flex";
                  parent.style.alignItems = "center";
                  parent.style.justifyContent = "center";
                  parent.innerHTML = `<span style="font-size:60px;font-family:Orbitron,sans-serif;color:#00f5ff;text-shadow:0 0 20px #00f5ff">A</span>`;
                }
              }}
            />
          </div>
        </Html>

        {/* Nucleus glow sphere */}
        <Sphere args={[1.6, 32, 32]}>
          <meshStandardMaterial
            color={COLOR_CYAN}
            transparent
            opacity={0.03}
            emissive={COLOR_CYAN}
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>

      {/* Rotating orbital system */}
      <group ref={groupRef}>
        {/* Inner ring — cyan electron */}
        <OrbitalRing
          radius={2.8}
          rotation={[Math.PI / 2.5, 0, 0]}
          speed={1.1}
          electronColor={COLOR_CYAN}
          electronSize={0.14}
        />
        {/* Middle ring — violet electron */}
        <OrbitalRing
          radius={3.2}
          rotation={[-Math.PI / 3, Math.PI / 6, 0]}
          speed={0.75}
          electronColor={COLOR_VIOLET}
          electronSize={0.12}
        />
        {/* Outer ring — green electron */}
        <OrbitalRing
          radius={3.7}
          rotation={[Math.PI / 5, Math.PI / 3, Math.PI / 5]}
          speed={0.55}
          electronColor={COLOR_GREEN}
          electronSize={0.1}
        />

        {/* Sparkle field */}
        <Sparkles
          count={90}
          scale={9}
          size={1.2}
          speed={0.3}
          color={COLOR_CYAN}
          opacity={0.5}
        />
      </group>

      {/* Static outer decorative ring (very faint) */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        {(() => {
          const pts: THREE.Vector3[] = [];
          for (let i = 0; i <= 128; i++) {
            const a = (i / 128) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(a) * 4.2, Math.sin(a) * 4.2, 0));
          }
          return <Line points={pts} color={COLOR_CYAN} lineWidth={0.5} transparent opacity={0.08} />;
        })()}
      </group>
    </group>
  );
}

export default function Atom3D() {
  return (
    <div style={{ width: "100%", height: "520px", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 9], fov: 42 }}>
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.2}
          penumbra={1}
          intensity={2.5}
          color={COLOR_CYAN}
        />
        <pointLight position={[-8, -8, -8]} intensity={0.8} color={COLOR_VIOLET} />
        <pointLight position={[8, -5, 5]} intensity={0.5} color={COLOR_GREEN} />
        <ShipCore />
      </Canvas>
    </div>
  );
}