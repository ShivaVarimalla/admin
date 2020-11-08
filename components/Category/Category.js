import React from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

const Category =()=>{
    return(
    
    <View style={styles.container}> 
             <View style={styles.subcontainer}>
                <Text style={styles.text}>Select Category</Text>
             </View>
                <TextInput style={styles.TextInput} placeholder="select a category"/>
             <View>
                <TouchableOpacity style={styles.button}><Text style={styles.add}>Add</Text></TouchableOpacity>
             </View>
    </View>    
    )
}
const styles= StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 60,
    paddingRight: 60
    },
    subcontainer:{
        alignSelf: 'stretch'
    },
    text:{
        fontSize: 24,
        color: '#0fdb6b',
        alignSelf: 'center',
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    TextInput:{
        backgroundColor: '#d1d4cb',
        height: 80,
        paddingLeft:10,
        borderRadius: 5
    },
    button:{
        marginTop: 20,
        padding:10,
        alignItems: 'center',
        backgroundColor: 'coral',
        borderRadius: 10
    },
    add:{
        fontWeight: 'bold',
        fontSize: 15
    }
})
export default Category;