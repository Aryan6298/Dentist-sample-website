import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import RealCeramicTooth from "./RealCeramicTooth";

export default function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4] }}
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Soft clinic light */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 6, 4]} intensity={1.3} />
      <pointLight position={[-3, -2, 2]} intensity={0.6} />

      {/* Tooth */}
      <RealCeramicTooth />

      {/* Studio reflections */}
      <Environment preset="studio" />

      {/* Shadow = realism */}
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.3}
        scale={10}
        blur={2}
        far={4}
      />

      {/* Calm rotation */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.25}
      />
    </Canvas>
  );
}
