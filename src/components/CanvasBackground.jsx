import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Environment, Float, Sphere, MeshDistortMaterial, TorusKnot } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 3 }))
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15
    ref.current.rotation.y -= delta / 20
    
    ref.current.position.x += (state.pointer.x * 0.2 - ref.current.position.x) * 0.05
    ref.current.position.y += (state.pointer.y * 0.2 - ref.current.position.y) * 0.05
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#45e9ff" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function RoamingRobot({ offset = 0, scale = 1, coreColor = "#8f6dff", spread = 1 }) {
  const robotRef = useRef()
  const target = useMemo(() => new THREE.Vector3(), [])

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime + offset
    
    // Create an independent wide roaming path
    const x = Math.sin(time * 0.3) * (6 * spread) + Math.cos(time * 0.1) * 2
    const y = Math.cos(time * 0.4) * (3 * spread) + Math.sin(time * 0.15) * 2
    const z = Math.sin(time * 0.2) * (2 * spread) - 4 // stay in background
    
    target.set(x, y, z)
    
    // Smoothly interpolate position
    robotRef.current.position.lerp(target, delta * 0.5)
    
    // Robot looks slightly towards its movement direction and the camera
    const lookTarget = new THREE.Vector3().copy(target).add(new THREE.Vector3(0, 0, 5))
    robotRef.current.quaternion.slerp(
      new THREE.Quaternion().setFromRotationMatrix(
        new THREE.Matrix4().lookAt(robotRef.current.position, lookTarget, new THREE.Vector3(0, 1, 0))
      ),
      delta * 2
    )
  })

  return (
    <group ref={robotRef} scale={scale}>
      <Float speed={4} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Head */}
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[0.6, 0.4, 0.5]} />
          <meshStandardMaterial color="#0d111e" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Eye Left */}
        <mesh position={[-0.15, 0.8, 0.26]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#45e9ff" emissive="#45e9ff" emissiveIntensity={2} />
        </mesh>
        
        {/* Eye Right */}
        <mesh position={[0.15, 0.8, 0.26]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#45e9ff" emissive="#45e9ff" emissiveIntensity={2} />
        </mesh>

        {/* Antenna Base & Tip */}
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.2]} />
          <meshStandardMaterial color="#45e9ff" />
        </mesh>
        <mesh position={[0, 1.15, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={coreColor} emissive={coreColor} emissiveIntensity={2} />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.3]} />
          <meshStandardMaterial color="#45e9ff" wireframe />
        </mesh>

        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.3, 0.9, 8]} />
          <meshStandardMaterial color="#05070f" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Glowing Core on Body */}
        <mesh position={[0, 0.1, 0.45]}>
          <circleGeometry args={[0.15, 32]} />
          <meshStandardMaterial color={coreColor} emissive={coreColor} emissiveIntensity={1} />
        </mesh>

        {/* Floating Ring around Body */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.01, 16, 64]} />
          <meshStandardMaterial color="#45e9ff" emissive="#45e9ff" emissiveIntensity={1} />
        </mesh>
      </Float>
    </group>
  )
}

function SceneController() {
  useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 0.5 - state.camera.position.x) * 0.05
    state.camera.position.y += (state.pointer.y * 0.5 - state.camera.position.y) * 0.05
    state.camera.lookAt(0, 0, 0)
  })
  
  return null
}

export default function CanvasBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', background: 'transparent' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <SceneController />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#45e9ff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#8f6dff" />
        <Environment preset="city" />
        <Stars />
        
        {/* Squad of 5 AI Robots */}
        <RoamingRobot offset={0} scale={1} coreColor="#8f6dff" spread={1} />
        <RoamingRobot offset={15} scale={0.6} coreColor="#ff456a" spread={1.5} />
        <RoamingRobot offset={42} scale={0.8} coreColor="#45ffb1" spread={1.2} />
        <RoamingRobot offset={73} scale={0.5} coreColor="#ffca45" spread={1.8} />
        <RoamingRobot offset={110} scale={0.7} coreColor="#ffffff" spread={1.4} />
      </Canvas>
    </div>
  )
}
