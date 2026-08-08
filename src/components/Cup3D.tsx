import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, ContactShadows, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

// The actual 3D model
function CupModel(props: any) {
  const { scene } = useGLTF('/assets/models/cup-optimized.glb');
  const ref = useRef<any>(null);

  // Gentle auto-rotation when not being dragged
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}

// Simple loading fallback shown while model loads
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
        <p className="text-xs text-white/60 font-mono">Loading model...</p>
      </div>
    </Html>
  );
}

interface Cup3DProps {
  className?: string;
  scale?: number;
  autoRotate?: boolean;
  enableDrag?: boolean;
}

const Cup3D = ({ className = '', scale = 1, autoRotate = true, enableDrag = true }: Cup3DProps) => {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting setup */}
          <ambientLight intensity={0.6} />
          <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.2} castShadow />
          <spotLight position={[-5, 3, -5]} angle={0.3} penumbra={1} intensity={0.5} color="#ffd699" />

          {/* Environment for realistic reflections */}
          <Environment preset="studio" />

          {enableDrag ? (
            <PresentationControls
              global
              rotation={[0, 0, 0]}
              polar={[-0.3, 0.3]}
              azimuth={[-1, 1]}
              damping={10}
              snap
            >
              <CupModel scale={scale} position={[0, -0.5, 0]} />
            </PresentationControls>
          ) : (
            <CupModel scale={scale} position={[0, -0.5, 0]} />
          )}

          {/* Soft shadow beneath cup */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.4}
            scale={5}
            blur={2.5}
            far={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Preload the optimized (Draco-compressed) model so it's cached and ready.
// This only runs once the component module is dynamically imported (which is
// itself gated by IntersectionObserver in App.tsx), so the 3D asset is never
// fetched until the viewer enters the viewport.
useGLTF.preload('/assets/models/cup-optimized.glb');

export default Cup3D;