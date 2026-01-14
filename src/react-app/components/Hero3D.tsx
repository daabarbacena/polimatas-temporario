import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Planet({ position, scale, color, distort = 0.3, speed = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.012; // +20% speed
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * speed * 0.024) * 0.05; // +20% speed
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={1}
        roughness={0.2}
        metalness={0.8}
        opacity={0.3}
        transparent={true}
      />
    </Sphere>
  );
}

function SaturnRing({ position }: any) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.036; // +20% speed
    }
  });

  return (
    <Torus 
      ref={ringRef}
      args={[1.5, 0.1, 16, 100]} 
      position={position} 
      rotation={[Math.PI / 2.5, 0, 0]}
    >
      <meshStandardMaterial
        color="#8b7355"
        transparent
        opacity={0.3}
        metalness={0.5}
        roughness={0.3}
      />
    </Torus>
  );
}

function FloatingStars() {
  const starCount = 200;
  const groupRef = useRef<THREE.Group>(null);
  
  const stars = Array.from({ length: starCount }, () => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ],
    scale: Math.random() * 0.05,
  }));

  // gentle rotation/drift for the star field
  useFrame((state, delta) => {
    if (groupRef.current) {
      const speed = 0.06; // increased speed for stars
      groupRef.current.rotation.y += delta * speed;
      groupRef.current.rotation.x += Math.sin(state.clock.getElapsedTime() * 0.1) * 0.0008;
    }
  });

  return (
    <group ref={groupRef}>
      {stars.map((star, i) => (
        <Sphere key={i} args={[0.02, 8, 8]} position={star.position as any}>
          <meshBasicMaterial color="#ffffff" />
        </Sphere>
      ))}
    </group>
  );
}

function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y = state.clock.getElapsedTime() * 0.006; // +20% speed
    }
  });

  return (
    <group>
      {/* Main sun sphere */}
      <Sphere ref={sunRef} args={[3, 64, 64]} position={[-8, 0, -15]}>
        <meshStandardMaterial
          color="#FDB813"
          emissive="#FDB813"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.1}
          opacity={0.3}
          transparent={true}
        />
      </Sphere>
      
      {/* Sun glow */}
      <Sphere args={[3.5, 64, 64]} position={[-8, 0, -15]}>
        <meshBasicMaterial
          color="#FFA500"
          transparent
          opacity={0.15}
        />
      </Sphere>
      
      {/* Eclipse shadow ring */}
      <Torus args={[3.2, 0.15, 32, 100]} position={[-8, 0, -15]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={0.4}
        />
      </Torus>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4d9fff" />
        <pointLight position={[-8, 0, -15]} intensity={3} color="#FDB813" distance={20} decay={2} />
        
        <Sun />
        <FloatingStars />
        
        {/* Main planet */}
        <Planet position={[0, 0, 0]} scale={1.8} color="#4d9fff" distort={0.4} speed={0.5} />
        
        {/* Saturn with rings */}
        <Planet position={[3.5, -1, -2]} scale={1} color="#f4a261" distort={0.2} speed={0.8} />
        <SaturnRing position={[3.5, -1, -2]} />
        
        {/* Small moon */}
        <Planet position={[-2, 1.5, -1]} scale={0.5} color="#e76f51" distort={0.3} speed={1.2} />
        
        {/* Distant planet */}
        <Planet position={[-3, -2, -4]} scale={0.7} color="#8b5cf6" distort={0.25} speed={0.6} />
      </Canvas>
    </div>
  );
}
