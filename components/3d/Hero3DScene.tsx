"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, PerspectiveCamera, ContactShadows, Text, Html } from "@react-three/drei";
import * as THREE from "three";

function AnimatedShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={2.5}
            >
                <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    emissive="#CCFF00"
                    emissiveIntensity={hovered ? 2 : 0.5}
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </Float>
    );
}

function SceneContent() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#CCFF00" />
            <pointLight position={[-10, -10, -10]} intensity={2} color="#2D55FF" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <AnimatedShape />
        </>
    )
}

export default function Hero3DScene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <SceneContent />
            </Canvas>
        </div>
    );
}
