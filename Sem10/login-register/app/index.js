import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

export default function index() {
  return (
    <View>
      {/* <LoginScreen/> */}
      <RegisterScreen/>
    </View>
  )
}
