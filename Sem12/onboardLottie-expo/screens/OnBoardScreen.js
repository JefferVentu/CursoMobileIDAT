import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import DoneButton from 'react-native-onboarding-swiper/src/buttons/DoneButton'

const {width, height} = Dimensions.get('window')

const OnBoardScreen = () => {

    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('Home')
    }

    const doneButtom = ({...props}) => {
        return(
            <TouchableOpacity style={styles.doneButtom} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style = {styles.container}>
            <Onboarding
            onDone = {handleDone}
            onSkip = {handleDone}
            DoneButtonComponent = {doneButtom}

            containerStyles = {{paddingHorizontal: 15}}
            pages={[
                {
                    backgroundColor: '#dd0960',
                    image: (
                        <View>
                            <LottieView source={require('../assets/animations/Animation - 1725899772075.json')} autoPlay loop style={styles.lottie}/>
                        </View>
                    ),
                    title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: (
                        <View>
                            <Text>Hello World</Text>
                        </View>
                    ),
                    title: 'HomeScreen',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#7d09dd',
                    image: (
                        <View>
                            <Text>Hello World</Text>
                        </View>
                    ),
                    title: 'SuperScreen',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
        </View>
        
        
    )
}

export default OnBoardScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'peru',
        alignItems: 'center',
    },
    lottie:{
        width: width*0.6,
        height: height*0.6,
    },
    doneButtom:{
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: '100%',
    },
})