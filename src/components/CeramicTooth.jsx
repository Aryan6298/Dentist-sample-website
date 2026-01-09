import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RealCeramicTooth() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref} scale={[0.9, 1.4, 0.9]}>
      {/* Tooth base shape */}
      <capsuleGeometry args={[0.6, 1.4, 16, 32]} />

      {/* Ceramic material */}
      <meshPhysicalMaterial
        color="#fdfefe"
        roughness={0.12}
        metalness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.04}
        transmission={0.35}   // translucency
        thickness={0.6}
        ior={1.45}            // ceramic refraction
        reflectivity={0.5}
      />
    </mesh>
  );
}
