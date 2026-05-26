import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Realistic surgical robotic arm — inspired by da Vinci-class systems.
 * Ceiling-suspended boom with multi-DOF articulation, cable conduits,
 * sterile drape rings, and an instrument cluster at the tip.
 */

// Shared materials (memoized via useMemo in component)
function useArmMaterials() {
  return useMemo(() => {
    const whiteShell = new THREE.MeshPhysicalMaterial({
      color: "#f4f1ea",
      metalness: 0.15,
      roughness: 0.35,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
      envMapIntensity: 1.2,
    });
    const darkShell = new THREE.MeshPhysicalMaterial({
      color: "#1a1d24",
      metalness: 0.4,
      roughness: 0.45,
      clearcoat: 0.8,
      clearcoatRoughness: 0.25,
    });
    const chromeRing = new THREE.MeshPhysicalMaterial({
      color: "#e6d6a6",
      metalness: 1,
      roughness: 0.12,
      envMapIntensity: 1.8,
    });
    const goldAccent = new THREE.MeshPhysicalMaterial({
      color: "#d4af37",
      metalness: 1,
      roughness: 0.18,
      emissive: new THREE.Color("#7a5a18"),
      emissiveIntensity: 0.25,
      envMapIntensity: 1.6,
    });
    const rubber = new THREE.MeshStandardMaterial({
      color: "#0d0f14",
      metalness: 0.1,
      roughness: 0.85,
    });
    const steel = new THREE.MeshPhysicalMaterial({
      color: "#cfd2d6",
      metalness: 1,
      roughness: 0.3,
      envMapIntensity: 1.4,
    });
    return { whiteShell, darkShell, chromeRing, goldAccent, rubber, steel };
  }, []);
}

// A realistic joint module: white shell + dark band + gold ring + bolts
function JointModule({
  radius = 0.32,
  length = 0.55,
  mats,
}: {
  radius?: number;
  length?: number;
  mats: ReturnType<typeof useArmMaterials>;
}) {
  return (
    <group>
      {/* Main housing */}
      <mesh material={mats.whiteShell} castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius, length, 48]} />
      </mesh>
      {/* Dark seam band */}
      <mesh material={mats.darkShell} castShadow>
        <cylinderGeometry args={[radius * 1.005, radius * 1.005, length * 0.18, 48]} />
      </mesh>
      {/* Gold accent rings */}
      <mesh position={[0, length * 0.42, 0]} material={mats.goldAccent}>
        <torusGeometry args={[radius * 1.02, 0.012, 12, 64]} />
      </mesh>
      <mesh position={[0, -length * 0.42, 0]} material={mats.goldAccent}>
        <torusGeometry args={[radius * 1.02, 0.012, 12, 64]} />
      </mesh>
      {/* End caps with rotation indicator */}
      <mesh position={[0, length / 2 + 0.001, 0]} material={mats.darkShell}>
        <cylinderGeometry args={[radius * 0.95, radius * 0.95, 0.02, 48]} />
      </mesh>
      <mesh position={[0, length / 2 + 0.012, 0]} material={mats.chromeRing}>
        <torusGeometry args={[radius * 0.6, 0.008, 10, 48]} />
      </mesh>
    </group>
  );
}

// Tubular link between joints with cable conduit
function ArmLink({
  length,
  radius = 0.15,
  mats,
}: {
  length: number;
  radius?: number;
  mats: ReturnType<typeof useArmMaterials>;
}) {
  return (
    <group>
      <mesh material={mats.whiteShell} castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius * 1.05, length, 32]} />
      </mesh>
      {/* Cable conduit running along the link */}
      <mesh position={[radius * 1.05, 0, 0]} material={mats.rubber}>
        <cylinderGeometry args={[0.025, 0.025, length * 0.92, 16]} />
      </mesh>
      {/* Subtle dark stripe */}
      <mesh position={[-radius * 1.0, 0, 0]} material={mats.darkShell}>
        <boxGeometry args={[0.012, length * 0.9, 0.03]} />
      </mesh>
    </group>
  );
}

function SurgicalArm({ mats }: { mats: ReturnType<typeof useArmMaterials> }) {
  const root = useRef<THREE.Group>(null!);
  const j1 = useRef<THREE.Group>(null!); // shoulder yaw
  const j2 = useRef<THREE.Group>(null!); // shoulder pitch
  const j3 = useRef<THREE.Group>(null!); // elbow pitch
  const j4 = useRef<THREE.Group>(null!); // forearm roll
  const j5 = useRef<THREE.Group>(null!); // wrist pitch
  const j6 = useRef<THREE.Group>(null!); // tool roll
  const tipLight = useRef<THREE.PointLight>(null!);

  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Smooth critically-damped follow values
  const state = useRef({
    rootY: 0, rootX: 0,
    s1: 0, s2: 0, e1: 0, fr: 0, wp: 0, tr: 0,
  });

  useFrame((s, delta) => {
    const t = s.clock.elapsedTime;
    const dt = Math.min(delta, 0.05);
    const lerp = (a: number, b: number, k: number) =>
      a + (b - a) * (1 - Math.exp(-k * dt));

    // Idle surgical motion — subtle, deliberate, micro-precise
    const targetRootY = target.current.x * 0.35 + Math.sin(t * 0.18) * 0.06;
    const targetRootX = target.current.y * 0.12 + Math.sin(t * 0.22) * 0.03;
    const targetS1 = Math.sin(t * 0.32) * 0.18 - 0.05;
    const targetS2 = Math.cos(t * 0.27) * 0.22 + 0.55; // arm extended forward
    const targetE1 = Math.sin(t * 0.41) * 0.18 - 0.9; // elbow bent
    const targetFr = Math.sin(t * 0.6) * 0.4 + t * 0.05;
    const targetWp = Math.cos(t * 0.5) * 0.25 - 0.1;
    const targetTr = t * 0.3;

    state.current.rootY = lerp(state.current.rootY, targetRootY, 2.2);
    state.current.rootX = lerp(state.current.rootX, targetRootX, 2.2);
    state.current.s1 = lerp(state.current.s1, targetS1, 1.6);
    state.current.s2 = lerp(state.current.s2, targetS2, 1.6);
    state.current.e1 = lerp(state.current.e1, targetE1, 1.8);
    state.current.fr = lerp(state.current.fr, targetFr, 2.0);
    state.current.wp = lerp(state.current.wp, targetWp, 2.2);
    state.current.tr = lerp(state.current.tr, targetTr, 2.4);

    if (root.current) {
      root.current.rotation.y = state.current.rootY;
      root.current.rotation.x = state.current.rootX;
    }
    if (j1.current) j1.current.rotation.y = state.current.s1;
    if (j2.current) j2.current.rotation.z = state.current.s2;
    if (j3.current) j3.current.rotation.z = state.current.e1;
    if (j4.current) j4.current.rotation.x = state.current.fr;
    if (j5.current) j5.current.rotation.z = state.current.wp;
    if (j6.current) j6.current.rotation.x = state.current.tr;

    if (tipLight.current) {
      tipLight.current.intensity = 1.6 + Math.sin(t * 3) * 0.3;
    }
  });

  const upperLen = 1.6;
  const foreLen = 1.5;
  const wristLen = 0.45;

  return (
    <group ref={root} position={[0.2, 0.4, 0]} scale={0.95}>
      {/* Ceiling mount plate */}
      <mesh position={[0, 2.2, 0]} material={mats.darkShell} castShadow>
        <cylinderGeometry args={[0.7, 0.7, 0.08, 48]} />
      </mesh>
      <mesh position={[0, 2.16, 0]} material={mats.chromeRing}>
        <torusGeometry args={[0.68, 0.015, 12, 64]} />
      </mesh>
      {/* Pendant column from ceiling */}
      <mesh position={[0, 1.55, 0]} material={mats.whiteShell} castShadow>
        <cylinderGeometry args={[0.18, 0.2, 1.2, 32]} />
      </mesh>
      <mesh position={[0, 1.55, 0.21]} material={mats.darkShell}>
        <boxGeometry args={[0.06, 1.0, 0.02]} />
      </mesh>

      {/* Shoulder yoke */}
      <group position={[0, 0.9, 0]}>
        <mesh material={mats.whiteShell} castShadow>
          <sphereGeometry args={[0.38, 32, 32]} />
        </mesh>

        {/* Shoulder yaw */}
        <group ref={j1}>
          {/* Shoulder pitch joint */}
          <group ref={j2} position={[0, 0, 0]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <JointModule radius={0.3} length={0.5} mats={mats} />
            </group>

            {/* Upper arm link */}
            <group position={[upperLen / 2, 0, 0]}>
              <group rotation={[0, 0, Math.PI / 2]}>
                <ArmLink length={upperLen} radius={0.14} mats={mats} />
              </group>
            </group>

            {/* Elbow */}
            <group ref={j3} position={[upperLen, 0, 0]}>
              <group rotation={[0, 0, Math.PI / 2]}>
                <JointModule radius={0.26} length={0.42} mats={mats} />
              </group>

              {/* Forearm roll */}
              <group ref={j4} position={[foreLen / 2, 0, 0]}>
                <group rotation={[0, 0, Math.PI / 2]}>
                  <ArmLink length={foreLen} radius={0.12} mats={mats} />
                </group>

                {/* Wrist pitch */}
                <group ref={j5} position={[foreLen / 2, 0, 0]}>
                  <group rotation={[0, 0, Math.PI / 2]}>
                    <JointModule radius={0.2} length={0.34} mats={mats} />
                  </group>

                  {/* Tool roll */}
                  <group ref={j6} position={[wristLen / 2 + 0.18, 0, 0]}>
                    {/* Sterile drape collar */}
                    <mesh rotation={[0, 0, Math.PI / 2]} material={mats.chromeRing}>
                      <cylinderGeometry args={[0.18, 0.16, 0.08, 32]} />
                    </mesh>
                    <mesh position={[0.06, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={mats.goldAccent}>
                      <torusGeometry args={[0.18, 0.012, 12, 48]} />
                    </mesh>

                    {/* Instrument shaft */}
                    <mesh position={[0.55, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={mats.steel} castShadow>
                      <cylinderGeometry args={[0.022, 0.022, 0.95, 24]} />
                    </mesh>
                    {/* Black grip section */}
                    <mesh position={[0.18, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={mats.rubber}>
                      <cylinderGeometry args={[0.05, 0.05, 0.12, 24]} />
                    </mesh>

                    {/* Articulated tip jaws */}
                    <group position={[1.05, 0, 0]}>
                      <mesh position={[0.04, 0.012, 0]} rotation={[0, 0, 0.18]} material={mats.steel}>
                        <boxGeometry args={[0.12, 0.012, 0.022]} />
                      </mesh>
                      <mesh position={[0.04, -0.012, 0]} rotation={[0, 0, -0.18]} material={mats.steel}>
                        <boxGeometry args={[0.12, 0.012, 0.022]} />
                      </mesh>
                      {/* Tip indicator LED */}
                      <mesh position={[0.12, 0, 0]}>
                        <sphereGeometry args={[0.018, 16, 16]} />
                        <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={4} />
                      </mesh>
                      <pointLight ref={tipLight} position={[0.12, 0, 0]} intensity={1.6} distance={1.5} color="#9fdcff" />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function StatusRings() {
  const g = useRef<THREE.Group>(null!);
  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.elapsedTime * 0.06;
  });
  return (
    <group ref={g} position={[0, -1.4, 0]}>
      {[2.4, 2.7, 3.0].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r, 0.004, 8, 160]} />
          <meshBasicMaterial color="#f4d27a" transparent opacity={0.28 - i * 0.07} />
        </mesh>
      ))}
    </group>
  );
}

export function RoboticArm3D({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
        const schedule = w.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 200));
        schedule(() => setMounted(true), { timeout: 1500 });
        io.disconnect();
      }
    }, { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={className} style={{ pointerEvents: "none" }} aria-hidden>
      {!mounted ? (
        <div className="absolute inset-0 grid place-items-center">
          <div className="size-12 rounded-full border-2 border-[var(--gold)]/30 border-t-[var(--gold)] animate-spin" />
        </div>
      ) : (
        <Canvas
          shadows
          camera={{ position: [4.2, 1.2, 5.8], fov: 34 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          frameloop="always"
          style={{ background: "transparent" }}
        >
          <ArmScene />
        </Canvas>
      )}
    </div>
  );
}

function ArmScene() {
  const mats = useArmMaterials();
  return (
    <>
      {/* Cinematic surgical-suite lighting */}
      <ambientLight intensity={0.35} />
      <hemisphereLight args={["#fff3d0", "#1a1410", 0.5]} />
      <directionalLight
        position={[5, 7, 4]}
        intensity={1.8}
        color="#fbe7b3"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <directionalLight position={[-5, 3, -2]} intensity={0.7} color="#d4af37" />
      <pointLight position={[0, -1, 4]} intensity={0.6} color="#b8862a" />

      <Environment preset="studio" environmentIntensity={0.5} />

      <Float speed={0.8} rotationIntensity={0.06} floatIntensity={0.18}>
        <SurgicalArm mats={mats} />
      </Float>

      <StatusRings />

      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.55}
        scale={9}
        blur={2.6}
        far={3}
        color="#3a2a08"
      />
    </>
  );
}
