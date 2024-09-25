import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { CircleGeometry, ConeGeometry, OctahedronGeometry, Triangle } from 'three'


export default function index() {
    return (
        <Canvas>
            <mesh position={[0,2,0]}>
                <CircleGeometry color='blue' />
            </mesh>
            <mesh position={[0,0,0]}>
                <ConeGeometry color='red'/>
            </mesh>
            <mesh position={[0,-2,0]}>
                <OctahedronGeometry color='green'/>
            </mesh>
        </Canvas>
    )
}

const styles = StyleSheet.create({})