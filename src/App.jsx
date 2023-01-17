import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <div className="App">
      drrdhhhoohdo
      <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 3],
        }}
      >
        {/* todo */}
      </Canvas>
      <mesh position={[0, 0, -2]}>
      <sphereGeometry args={[2, 32]} />
      <meshStandardMaterial color={0x00ff00} />
      </mesh>
    </div>
  );
}

export default App;