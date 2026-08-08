import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PresentationControls, ContactShadows, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { motion } from 'framer-motion';

// Draco-compressed model (90% smaller than the original 12.9 MB glTF).
// Decoder files are self-hosted under /draco/ to avoid external CDN deps.
const MODEL_URL = '/assets/models/cup-optimized.glb';
const DRACO_DECODER_PATH = '/draco/';

let dracoLoader: DRACOLoader | null = null;

function getDracoLoader(): DRACOLoader {
  if (!dracoLoader) {
    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(DRACO_DECODER_PATH);
  }
  return dracoLoader;
}

// The actual 3D model
function CupModel(props: any) {
  const [scene, setScene] = useState<any>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const ref = useRef<any>(null);

  // Gentle auto-rotation when not being dragged
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(getDracoLoader());

    gltfLoader.load(
      MODEL_URL,
      (gltf) => setScene(gltf.scene),
      undefined,
      (error: Error) => {
        console.error('Failed to load cup model:', error);
        setLoadError(error.message);
      },
    );
  }, []);

  if (loadError) {
    return (
      <Html center>
        <div className="text-xs text-red-400 font-mono text-center">
          3D preview unavailable
        </div>
      </Html>
    );
  }

  if (!scene) {
    return (
      <Html center>
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-white/60 font-mono">Loading model...</p>
        </div>
      </Html>
    );
  }

  return <primitive ref={ref} object={scene} {...props} />;
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
        <Suspense fallback={null}>
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

export default Cup3D;
