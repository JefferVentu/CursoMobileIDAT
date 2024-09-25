import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native'
import Cammy from '../assets/animation/cammy.glb'
import { OBJLoader } from 'three/examples/jsm/Addons.js'

const obj = useLoader(OBJLoader, require('../assets/animation/cammy.glb'))

function Model(props) {
    const gltf = useGLTF(modelPath)
    return <primitive {...props} object={gltf.scene} />
}

export default function App() {
    return (
        <Canvas>
            <ambientLight />
            <mesh>
                <boxGeometry />
            </mesh>
        </Canvas>
    )
}
