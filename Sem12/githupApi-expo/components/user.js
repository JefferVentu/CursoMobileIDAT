import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const user = ({details}) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardItem}>
                <Image source={{uri: details.avatar_url}} style={styles.image}/>
            </View>

            <View style={styles.cardItem}>
                <Text style={styles.text}>Name: {details.name}</Text>
            </View>
            <View style={styles.cardItem}>
                <Text style={styles.text}>Followers: {details.follower}</Text>
            </View>
            <View style={styles.cardItem}>
                <Text style={styles.text}>Followigs: {details.following}</Text>
            </View>
            <View style={styles.cardItem}>
                <Text style={styles.text}>Repositories: {details.public_repos}</Text>
            </View>
        </View>
    )
}

export default user

const styles = StyleSheet.create({
    card:{
        width:'100%',
        backgroundColor:'orange',
        padding: 10,
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 10,
        justifyContent: 'flex-start',
        marginBottom: 50,
    },
    image:{
        width:120,
        height:120,
        borderRadius: 120/2,
        overflow: 'hidden',
        marginTop: -80,
        backgroundColor: 'purple',
    },
    cardItem:{
        paddingTop: 10,
    },
    text:{
        color: 'white',
        fontSize: 20,
    }
})