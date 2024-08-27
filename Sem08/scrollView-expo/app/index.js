import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
    return (
        <SafeAreaView style ={styles.containerSafe}>
            <ScrollView contentContainerStyle={{
                backgroundColor: 'azure',
                alignItems: 'center', 
                justifyContent: 'center',
                padding:50,
                }}>
                <Text>Image 1</Text>
                <Image style = {styles.imgScroll} source={{uri : 'https://cdn.pixabay.com/photo/2024/06/29/10/13/girl-8861154_1280.png'}}/>
                <Text>Image 2</Text>
                <Image style = {styles.imgScroll} source={{uri : 'https://cdn.pixabay.com/photo/2024/03/04/07/59/birds-8611993_1280.jpg'}}/>
                <Text>Image 3</Text>
                <Image style = {styles.imgScroll} source={{uri : 'https://cdn.pixabay.com/photo/2023/02/02/17/11/chickens-7763394_1280.jpg'}}/>
                <Text>Image 4</Text>
                <Image style = {styles.imgScroll} source={{uri : 'https://cdn.pixabay.com/photo/2021/08/16/03/56/common-heron-6549208_1280.jpg'}}/>
                <Text>Image 5</Text>
                <Image style = {styles.imgScroll} source={{uri : 'https://cdn.pixabay.com/photo/2019/10/15/08/02/birds-4551002_1280.jpg'}}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    containerSafe:{
        flex:1,
    },
    imgScroll:{
        margin: 20,
        width: 300,
        height: 500,
    },
})