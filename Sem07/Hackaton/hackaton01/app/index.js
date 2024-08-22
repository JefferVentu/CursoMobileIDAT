import React from 'react'
import { StyleSheet,SafeAreaView,View, Text, StatusBar,FlatList} from 'react-native'

const info = [
    {
        id: 1,
        title: 'Juan Perez',
        fecha: 'Hoy - 12:05 pm',
        monto: 'S/. 20.00',
        tipo: 'ingreso',
    },
    {
        id: 2,
        title: 'Luis Castillo',
        fecha: 'Ayer - 09:05 am',
        monto: 'S/. 10.00',
        tipo: 'pago',
    }, 
    {
        id: 3,
        title: 'Roberto Silva',
        fecha: '10 Julio 2024 - 12:05 pm',
        monto: 'S/. 50.00',
        tipo: 'ingreso',
    }, 
    {
        id: 4,
        title: 'Jose Luna',
        fecha: '08 Julio 2024 - 12:05 pm',
        monto: 'S/. 30.00',
        tipo: 'pago',
    }, 
    {
        id: 5,
        title: 'Lucia Vega',
        fecha: '08 Julio 2024 - 12:05 pm',
        monto: 'S/. 40.00',
        tipo: 'ingreso',
    }, 
];

const Item = ({item, textMontoColor}) => (
    <View style={{flexDirection:"row",paddingTop:10}}>
        <View style={{width:200,}}>
            <Text style={[styles.title,]}>{item.title}</Text>
            <Text style={[styles.titleGrupo]}>{item.fecha}</Text>
        </View>
        <View style={[styles.monto]}>
            <Text style={[styles.titleGrupo, {color: textMontoColor}]}>{item.monto}</Text>
        </View>

    </View>
);

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
            Bank digital
            </Text>
        </View>
    )
}

const Separator = () => (
    <View style={{ backgroundColor:'#d6d6d',with:'100&',padding:15 ,borderColor:'#d6d6d',borderBottomWidth:1,
    }} />
)

const App = () => {
    const renderItem = ({item})=>{
        const color = item.tipo=== 'ingreso' ? 'black' : 'red';
        return (
            <Item 
            item ={item}
            textMontoColor={color}
            />
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
        <View style={{flexDirection:"row",paddingBottom:20}}>
            <Text style={{marginLeft:50, color:'purple',fontSize:18}}>Ultimos Movimientos</Text>
            <Text style={{marginLeft:80, color:'green',fontSize:18}}>Ver todos</Text>
        </View>
        <View style={{  backgroundColor:'#d6d6d',with:'100&' ,borderColor:'#d6d6d',borderBottomWidth:1, }} />
        <FlatList
        data ={info}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        />
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    monto:{
        alignSelf:'right',
        marginLeft: 80,
        marginTop:10,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:"row",
    },
    monto:{
        alignSelf:'right',
        marginLeft: 80,
        marginTop:10,
    },
    title: {
        fontSize: 18,
        marginLeft:20,
        fontWeight:'bold'
    },
    titleGrupo: {
            fontSize: 15,
            marginLeft:20,
    },
    header: {
        backgroundColor: '#7e2290',
        width: '100vw',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    headerText: {
        color: '#fff',
        fontSize: 18
    },
});