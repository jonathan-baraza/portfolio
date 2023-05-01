import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
// import CanvasLoader from "./Loader";
import { Computer } from "./Computer";
import { motion } from "framer-motion";
import { useRef } from "react";

// function ComputerObj() {
//   return (
// <mesh>
//   <hemisphereLight intensity={0.15} groundColor={"black"} />

// <pointLight intensity={1} />
// <SpotLight
//   position={[-20, 50, 10]}
//   penumbra={1}
//   intensity={1}
//   castShadow
//   shadow-mapSize={1024}
// />
//       <primitive
//         object={Computer}
// scale={0.75}
// position={[0, -3.25, -1.5]}
// rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// }

const ComputerCanvas = () => {
  const meshRef = useRef();

  const [isMobile, setIsMobile] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // setInterval(() => {
    //   // meshRef.current.rotation.x += 0.01;
    //   meshRef.current.rotation.y += 0.01;
    // }, [100]);
  }, []);
  return (
    <motion.div style={{ width: "100%", position: "relative" }}>
      <Canvas
        style={{ height: `${isMobile ? "30vh" : "70vh"}`, width: "100%" }}
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className=""
      >
        <hemisphereLight intensity={0.15} groundColor={"black"} />
        {/* <Suspense fallback={<CanvasLoader />}> */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
        <mesh ref={meshRef}>
          <hemisphereLight intensity={0.15} groundColor={"black"} />
          <pointLight intensity={1} />
          <SpotLight
            position={[-20, 50, 10]}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />
          <Computer
            scale={1}
            position={isMobile ? [0, -3, -1.2] : [0, -2.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </mesh>
        {/* </Suspense> */}
        <Preload all />
      </Canvas>
    </motion.div>
  );
};

export default ComputerCanvas;
