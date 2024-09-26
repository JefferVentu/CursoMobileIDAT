import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { collection, query, getDocs, where, addDoc, setDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function index() {

    // Operation Create
    const create = async () => {
        try {
            const docRef = collection(db, 'users')
            await addDoc(docRef, {
                email: 'xdxdxdxd@gmail.com',
                password: '123456' 
            });
        } catch (error) {
            Alert.alert("ERROR ADD DATA");
        }
        Alert.alert("DATA ADD");

    }

    // Operation Read
    const read = async () => {
        const docRef = collection(db, 'users')
        const q = query(docRef, where('email', '==', 'xdxdxdxd@gmail.com'));
        const docData = await getDocs(q);
        if(docData.size==0){
            Alert.alert('NOT FOUNDED');
        } else{
            docData.forEach((doc)=>{
                Alert.alert(`email: ${doc.data().email} \n password: ${doc.data().password}`);
            });
        }
    }

    // Operation Update
    const update = async () => {
        const docRef = collection(db, 'users')
        const q = query(docRef, where('email', '==', 'xdxdxdxd@gmail.com'));
        const docData = await getDocs(q);
        let dataId;
        if(docData.size==0){
            Alert.alert('NOT FOUNDED');
        } else{
            docData.forEach((doc)=>{
                dataId = doc.id;
            });
            const docRef = doc(db, 'users');
            await deleteDoc(docRef);
            Alert.alert("DATA UPDATE");
        }
    }

    // Operation Delete
    const deleteData = async () => {
        const docRef = collection(db, 'users')
        const q = query(docRef, where('email', '==', 'xdxdxdxd@gmail.com'));
        const docData = await getDocs(q);
        let dataId;
        if (docData.size == 0){
            Alert.alert('DATA NOT EXIST','Cant update');
        } else {
            docData.forEach((doc)=>{
                dataId = doc.id;
            });
            const docRef = doc(db, 'users');
            setDoc(docRef, {password:'98345345'}, {merge: true});
            Alert.alert("DATA UPDATE");
        }
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => create()}>
                <Text style={styles.text}> CREATE </Text>
            </TouchableOpacity>

            <View style={styles.separator}></View>

            <TouchableOpacity style={styles.button} onPress={() => read()}>
                <Text style={styles.text}> READ </Text>
            </TouchableOpacity>

            <View style={styles.separator}></View>

            <TouchableOpacity style={styles.button} onPress={() => update()}>
                <Text style={styles.text}> UPDATE </Text>
            </TouchableOpacity>

            <View style={styles.separator}></View>

            <TouchableOpacity style={styles.button} onPress={() => deleteData()}>
                <Text style={styles.text}> DELETE </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01ff56',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: 'blue',
        margin: 10,
        padding: 30,
        borderRadius: 10,
    },

    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

    separator: {
        margin: 20,
    }
})