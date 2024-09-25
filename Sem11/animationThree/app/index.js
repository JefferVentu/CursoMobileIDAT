import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function index() {
    return(
        <Canvas>
            <ambientLight/>
            <pointLight position={[10,10,10]}/>
            <mesh position={[1,2,0]}>
                <capsuleGeometry/>
                <meshBasicMaterial color='purple'/>
            </mesh>
            <mesh position={[-1,-1,1]} scale={0.1}>
                <cylinderGeometry args={[5,5,20,32]}/>
                <meshBasicMaterial color='yellow'/>
            </mesh>
        </Canvas>
    )
}

const styles = StyleSheet.create({})