// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
// import CanvasLoader from "./Loader";

// function Computers() {
//   const computer = useGLTF("../../public/models/desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor={"black"} />

//       <pointLight intensity={1} />
//       <SpotLight
//         position={[-20, 50, 10]}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <primitive
//         object={computer.scene}
//         scale={0.75}
//         position={[0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// }

// const ComputerCanvas = () => {
//   return (
//     <Canvas
    //   frameloop="demand"
    //   shadows
    //   camera={{ position: [20, 3, 5], fov: 25 }}
    //   gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputerCanvas;
