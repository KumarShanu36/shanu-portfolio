import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, Stars } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const continentDots = [
  [0.62, 0.26, 0.78],
  [0.55, 0.33, 0.81],
  [0.51, 0.2, 0.84],
  [0.46, 0.12, 0.88],
  [0.39, 0.04, 0.92],
  [0.3, 0.12, 0.95],
  [0.21, 0.2, 0.96],
  [0.14, 0.28, 0.95],
  [0.08, 0.16, 0.99],
  [0.68, 0.1, 0.72],
  [0.63, -0.02, 0.77],
  [0.55, -0.14, 0.83],
  [0.48, -0.24, 0.84],
  [0.38, -0.28, 0.88],
  [0.29, -0.18, 0.94],
  [0.21, -0.06, 0.98],
];

const bandConfigs = [
  { radius: 2.7, tube: 0.2, arc: 5.1, color: "#8eb5ff", rotation: [0.55, 0.2, -0.6], position: [0, -0.7, 0.05] },
  { radius: 2.55, tube: 0.16, arc: 4.6, color: "#74dbe5", rotation: [0.35, -0.1, -0.55], position: [0.1, -1.1, 0.3] },
  { radius: 2.35, tube: 0.16, arc: 4.3, color: "#9fb8ff", rotation: [0.12, 0.15, -0.48], position: [0.08, -0.15, 0.7] },
  { radius: 2.2, tube: 0.15, arc: 4.8, color: "#e8c3f5", rotation: [0.15, -0.15, 0.52], position: [0.2, 1.1, 0.45] },
  { radius: 1.95, tube: 0.15, arc: 4.2, color: "#c7dcff", rotation: [0.45, 0.1, 0.58], position: [0.32, 1.55, 0.08] },
  { radius: 1.7, tube: 0.12, arc: 3.7, color: "#d8baf2", rotation: [0.65, -0.3, 0.72], position: [0.55, 1.9, -0.18] },
];

function PlanetBody() {
  const group = useRef(null);

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.16;
    group.current.rotation.z = Math.sin(performance.now() * 0.0002) * 0.05 - 0.22;
  });

  return (
    <group ref={group} rotation={[0.35, 0.45, -0.22]}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.9, 64, 64]} />
        <meshStandardMaterial color="#101220" roughness={0.86} metalness={0.12} />
      </mesh>

      <mesh position={[-0.18, 0.12, 1.18]}>
        <sphereGeometry args={[1.45, 32, 32]} />
        <meshBasicMaterial color="#41e8cf" transparent opacity={0.2} />
      </mesh>

      <mesh position={[-0.1, 0.05, 1.24]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial color="#83a8ff" transparent opacity={0.12} />
      </mesh>

      {continentDots.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshBasicMaterial color="#ffe3c7" />
        </mesh>
      ))}
    </group>
  );
}

function OrbitBands() {
  const group = useRef(null);

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.22;
  });

  return (
    <group ref={group} rotation={[0.25, 0.05, -0.18]}>
      {bandConfigs.map((band, index) => (
        <mesh
          key={index}
          castShadow
          receiveShadow
          position={band.position}
          rotation={band.rotation}
        >
          <torusGeometry args={[band.radius, band.tube, 24, 200, band.arc]} />
          <meshStandardMaterial color={band.color} roughness={0.24} metalness={0.18} />
        </mesh>
      ))}
    </group>
  );
}

export default function ContactGlobe() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 900);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const onChange = (event) => setIsMobile(event.matches);
    onChange(media);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 13], fov: 20, near: 1, far: 40 }}
      >
        <color attach="background" args={["#0b0d14"]} />
        <fog attach="fog" args={["#0b0d14", 16, 34]} />
        <Stars radius={30} depth={20} count={1600} factor={3.2} saturation={0} fade speed={0.45} />
        <ambientLight intensity={0.95} />
        <directionalLight position={[6, 5, 8]} intensity={2.8} color="#f1d7ff" />
        <directionalLight position={[-5, -1, 7]} intensity={2.2} color="#7ccfff" />
        <pointLight position={[-1, 0, 5]} intensity={24} color="#3ee5c4" distance={9} />
        <pointLight position={[3, 1, 4]} intensity={10} color="#7f96ff" distance={8} />
        <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.55}>
          <group position={isMobile ? [0.15, -0.75, 0] : [3.35, -0.05, 0]} scale={isMobile ? 0.88 : 1.18}>
            <PlanetBody />
            <OrbitBands />
          </group>
        </Float>
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 4, 1]}>
            <Lightformer form="circle" intensity={2.4} position={[0, 5, -9]} scale={10} color="#ffffff" />
            <Lightformer form="circle" intensity={2.2} position={[0, 3, 1]} scale={10} color="#d4e7ff" />
            <Lightformer form="circle" intensity={2.2} position={[-5, -1, -1]} scale={10} color="#8ce9f0" />
            <Lightformer form="circle" intensity={2.4} position={[10, 1, 0]} scale={16} color="#f7d2ef" />
          </group>
        </Environment>
      </Canvas>
    </div>
  );
}
