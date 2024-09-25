import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function index() {
    return (
        <Canvas>
            <mesh>
                <torusGeometry/>
                <meshBasicMaterial color='yellow'/>
            </mesh>
            <mesh scale={0.5}>
                <torusGeometry/>
                <meshBasicMaterial color='pink'/>
            </mesh>
            <mesh scale={0.3}>
                <torusGeometry/>
                <meshBasicMaterial color='green'/>
            </mesh>
            <mesh>
                <torusGeometry/>
                <meshBasicMaterial color='purple'/>
            </mesh>
        </Canvas>
    )
}

const styles = StyleSheet.create({})