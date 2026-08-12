import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { CanvasFallback } from './CanvasFallback';

// 3D Procedural Silver/White Metallic Luxury Sedan Car Model
const LuxuryCar: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const carGroup = useRef<THREE.Group>(null);
  const frontWheels = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (carGroup.current) {
      // Subtle float & mouse tilt animation
      carGroup.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.05 - 0.2;
      
      // Target rotation from mouse
      const targetRotY = mousePos.x * 0.15;
      const targetRotX = mousePos.y * 0.08;
      
      carGroup.current.rotation.y = THREE.MathUtils.lerp(carGroup.current.rotation.y, targetRotY, 0.05);
      carGroup.current.rotation.x = THREE.MathUtils.lerp(carGroup.current.rotation.x, targetRotX, 0.05);
    }
  });

  return (
    <group ref={carGroup} position={[0, -0.2, 0]} rotation={[0, -Math.PI / 6, 0]}>
      {/* Main Lower Car Body Chassis - Metallic Silver White finish with electric blue undertone */}
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.1, 0.5, 4.4]} />
        <meshPhysicalMaterial
          color="#F1F5F9"
          metalness={0.85}
          roughness={0.15}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          reflectivity={0.9}
        />
      </mesh>

      {/* Aerodynamic Cabin & Roof */}
      <mesh position={[0, 0.9, -0.2]} castShadow>
        <boxGeometry args={[1.7, 0.5, 2.5]} />
        <meshPhysicalMaterial
          color="#E2E8F0"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1.0}
        />
      </mesh>

      {/* Front Windshield Tinted Dark Glass */}
      <mesh position={[0, 0.95, 0.9]} rotation={[0.4, 0, 0]}>
        <planeGeometry args={[1.5, 0.8]} />
        <meshPhysicalMaterial
          color="#0B1F3A"
          transparent
          opacity={0.85}
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>

      {/* Rear Windshield */}
      <mesh position={[0, 0.95, -1.3]} rotation={[-0.4, 0, 0]}>
        <planeGeometry args={[1.5, 0.7]} />
        <meshPhysicalMaterial
          color="#0B1F3A"
          transparent
          opacity={0.85}
          roughness={0.05}
        />
      </mesh>

      {/* Chrome Side Accents */}
      <mesh position={[1.06, 0.45, 0]}>
        <boxGeometry args={[0.02, 0.08, 3.8]} />
        <meshStandardMaterial color="#1769FF" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-1.06, 0.45, 0]}>
        <boxGeometry args={[0.02, 0.08, 3.8]} />
        <meshStandardMaterial color="#1769FF" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Front Electric Blue LED Headlights */}
      <group position={[0, 0.5, 2.21]}>
        {/* Left Light */}
        <mesh position={[-0.75, 0, 0]}>
          <boxGeometry args={[0.4, 0.12, 0.05]} />
          <meshBasicMaterial color="#00D8F6" />
        </mesh>
        <spotLight
          position={[-0.75, 0, 0.1]}
          target-position={[-0.75, -0.5, 10]}
          color="#00D8F6"
          intensity={10}
          distance={15}
          angle={0.4}
          penumbra={0.5}
        />

        {/* Right Light */}
        <mesh position={[0.75, 0, 0]}>
          <boxGeometry args={[0.4, 0.12, 0.05]} />
          <meshBasicMaterial color="#00D8F6" />
        </mesh>
        <spotLight
          position={[0.75, 0, 0.1]}
          target-position={[0.75, -0.5, 10]}
          color="#00D8F6"
          intensity={10}
          distance={15}
          angle={0.4}
          penumbra={0.5}
        />
      </group>

      {/* Rear LED Tail Lights */}
      <group position={[0, 0.55, -2.21]}>
        <mesh position={[-0.75, 0, 0]}>
          <boxGeometry args={[0.45, 0.1, 0.05]} />
          <meshBasicMaterial color="#EF4444" />
        </mesh>
        <mesh position={[0.75, 0, 0]}>
          <boxGeometry args={[0.45, 0.1, 0.05]} />
          <meshBasicMaterial color="#EF4444" />
        </mesh>
      </group>

      {/* Wheels - 4 Luxury Alloy Rims */}
      <group ref={frontWheels}>
        {/* Front Left */}
        <mesh position={[-1.05, 0.25, 1.3]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.32, 0.32, 0.25, 24]} />
          <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Front Right */}
        <mesh position={[1.05, 0.25, 1.3]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.32, 0.32, 0.25, 24]} />
          <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Rear Left */}
        <mesh position={[-1.05, 0.25, -1.3]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.32, 0.32, 0.25, 24]} />
          <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Rear Right */}
        <mesh position={[1.05, 0.25, -1.3]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.32, 0.32, 0.25, 24]} />
          <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
};

// Animated Minimal Futuristic Light Road
const RoadEnvironment: React.FC = () => {
  const roadLinesRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (roadLinesRef.current) {
      roadLinesRef.current.position.z -= delta * 6;
      if (roadLinesRef.current.position.z < -4) {
        roadLinesRef.current.position.z = 0;
      }
    }
  });

  return (
    <group>
      {/* Light Grey Minimal Asphalt Plane */}
      <mesh position={[0, -0.21, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 30]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.6} />
      </mesh>

      {/* Side Blue & Cyan Light Streaks */}
      <mesh position={[-3, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.12, 30]} />
        <meshBasicMaterial color="#00B8D9" transparent opacity={0.8} />
      </mesh>
      <mesh position={[3, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.12, 30]} />
        <meshBasicMaterial color="#1769FF" transparent opacity={0.8} />
      </mesh>

      {/* Dashed Center Blue Road Lines Animation */}
      <group ref={roadLinesRef}>
        {Array.from({ length: 10 }).map((_, i) => (
          <mesh key={i} position={[0, -0.19, (i - 5) * 3]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.15, 1.2]} />
            <meshBasicMaterial color="#1769FF" transparent opacity={0.7} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

// Floating Translucent Blue Particle Field
const ParticleDust: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesCount = 80;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = Math.random() * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#1769FF" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

export const Hero3DCanvas: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (hasError) {
    return <CanvasFallback />;
  }

  return (
    <div className="relative w-full h-112.5 sm:h-137.5 lg:h-162.5 rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-slate-200/80 shadow-2xl shadow-blue-500/10">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#FFFFFF'), 0);
        }}
        onError={() => setHasError(true)}
      >
        <PerspectiveCamera makeDefault position={[3.5, 1.8, 5.5]} fov={45} />
        
        {/* Lighting setup for daylight luxury white showcase */}
        <ambientLight intensity={0.9} color="#FFFFFF" />
        <directionalLight position={[10, 18, 8]} intensity={2.0} color="#FFFFFF" castShadow />
        <pointLight position={[-5, 5, -5]} intensity={1.2} color="#00B8D9" />
        <pointLight position={[5, -2, 5]} intensity={1.0} color="#1769FF" />

        {/* 3D Scene Components */}
        <LuxuryCar mousePos={mousePos} />
        <RoadEnvironment />
        <ParticleDust />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.05}
          minPolarAngle={Math.PI / 3}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
        />
      </Canvas>

      {/* Floating 3D Interaction Badge overlay */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#0B1F3A] border border-slate-200 shadow-md pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#1769FF] animate-ping" />
        <span>Interactive 3D View — Move cursor to rotate camera</span>
      </div>
    </div>
  );
};

