import React, {useState, useReducer} from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'


const TextScreen = () => {

    var myName=''
    return (
        <View>
            <Text>Text Screen</Text>
            <Text style={{ fontSize:20, textAlign: 'center'}}>Enter Name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={ () =>{
                
                }}
            />
            <Text>{myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})


export default TextScreen;
