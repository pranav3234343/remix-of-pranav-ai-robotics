import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function ArmRig() {
  const root = useRef<THREE.Group>(null!);
  const joint1 = useRef<THREE.Group>(null!);
  const joint2 = useRef<THREE.Group>(null!);
  const joint3 = useRef<THREE.Group>(null!);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, target.current.x * 0.5 + Math.sin(t * 0.3) * 0.1, 0.05);
      root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, target.current.y * 0.2, 0.05);
    }
    if (joint1.current) joint1.current.rotation.z = Math.sin(t * 0.7) * 0.35 - 0.2;
    if (joint2.current) joint2.current.rotation.z = Math.cos(t * 0.5) * 0.4 + 0.3;
    if (joint3.current) joint3.current.rotation.z = Math.sin(t * 0.9) * 0.45;
  });

  const chrome = (
    <meshStandardMaterial color="#e9d59a" metalness={1} roughness={0.22} envMapIntensity={1.6} />
  );
  const accent = (
    <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.18} emissive="#b8862a" emissiveIntensity={0.45} />
  );

  return (
    <group ref={root} position={[0, -0.4, 0]} scale={1.1}>
      {/* Base */}
      <mesh position={[0, -1.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.1, 1.3, 0.3, 48]} />
        {chrome}
      </mesh>
      <mesh position={[0, -1.42, 0]}>
        <torusGeometry args={[1.05, 0.04, 16, 64]} />
        {accent}
      </mesh>

      {/* Shoulder joint */}
      <group ref={joint1} position={[0, -1.4, 0]}>
        <mesh>
          <sphereGeometry args={[0.42, 32, 32]} />
          {chrome}
        </mesh>
        {/* Upper arm */}
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.28, 0.32, 1.6, 32]} />
          {chrome}
        </mesh>
        <mesh position={[0, 0.9, 0.18]}>
          <boxGeometry args={[0.08, 1.3, 0.04]} />
          {accent}
        </mesh>

        {/* Elbow */}
        <group ref={joint2} position={[0, 1.75, 0]}>
          <mesh>
            <sphereGeometry args={[0.36, 32, 32]} />
            {chrome}
          </mesh>
          {/* Forearm */}
          <mesh position={[0.85, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.22, 0.26, 1.7, 32]} />
            {chrome}
          </mesh>

          {/* Wrist */}
          <group ref={joint3} position={[1.7, 0, 0]}>
            <mesh>
              <sphereGeometry args={[0.28, 32, 32]} />
              {chrome}
            </mesh>
            {/* Tool head */}
            <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <coneGeometry args={[0.16, 0.7, 24]} />
              {accent}
            </mesh>
            {/* Glow tip */}
            <mesh position={[0.9, 0, 0]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={3} />
            </mesh>
            <pointLight position={[0.9, 0, 0]} intensity={2} distance={3} color="#7dd3fc" />
          </group>
        </group>
      </group>
    </group>
  );
}

function FloatingRings() {
  const g = useRef<THREE.Group>(null!);
  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.elapsedTime * 0.1;
  });
  return (
    <group ref={g}>
      {[2.6, 3.1, 3.6].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.15, 0, i * 0.4]}>
          <torusGeometry args={[r, 0.005, 8, 128]} />
          <meshBasicMaterial color="#f4d27a" transparent opacity={0.4 - i * 0.1} />
        </mesh>
      ))}
    </group>
  );
}

export function RoboticArm3D({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={className} />;
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [3.5, 1.5, 5.5], fov: 38 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#00000000"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 6, 4]} intensity={1.2} />
        <directionalLight position={[-4, 3, -3]} intensity={0.6} color="#7dd3fc" />
        <Environment preset="city" />
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          <ArmRig />
        </Float>
        <FloatingRings />
      </Canvas>
    </div>
  );
}
