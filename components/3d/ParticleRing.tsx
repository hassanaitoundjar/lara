"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function ParticleRing() {
    const pointsRef = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const count = 300;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color("#CCFF00");

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const radius = 1.5 + Math.random() * 0.5;
            const x = Math.cos(angle) * radius;
            const y = (Math.random() - 0.5) * 1;
            const z = Math.sin(angle) * radius;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            color.toArray(colors, i * 3);
        }
        return { positions, colors };
    }, []);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.1;
            pointsRef.current.rotation.z += delta * 0.05;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.positions.length / 3}
                        array={particles.positions}
                        itemSize={3}
                        args={[particles.positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={particles.colors.length / 3}
                        array={particles.colors}
                        itemSize={3}
                        args={[particles.colors, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.05}
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    depthWrite={false}
                />
            </points>
            {/* Core */}
            <mesh scale={0.8}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="#000" wireframe transparent opacity={0.1} />
            </mesh>
        </Float>
    )
}
