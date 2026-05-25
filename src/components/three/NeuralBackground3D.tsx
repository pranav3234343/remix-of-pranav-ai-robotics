import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralNetwork() {
  const points = useRef<THREE.Points>(null!);
  const lines = useRef<THREE.LineSegments>(null!);

  const { positions, linePositions } = useMemo(() => {
    const N = 140;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const segs: number[] = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < 2.2) {
          segs.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          segs.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }
    return { positions: pos, linePositions: new Float32Array(segs) };
  }, []);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (points.current) {
      points.current.rotation.y = t * 0.05;
      points.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (lines.current) {
      lines.current.rotation.y = t * 0.05;
      lines.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <group>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#7dd3fc" size={0.06} sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

export function NeuralBackground3D({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={className} />;
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
        <color attach="background" args={["#070b1a"]} />
        <ambientLight intensity={0.5} />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
