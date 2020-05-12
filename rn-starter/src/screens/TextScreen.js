import React, {useState, useReducer} from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'


const TextScreen = () => {

    const [name,setName] = useState('');
    const [password,setPass] = useState('');

    return (
        <View>
            <Text style={{ fontSize:20, textAlign: 'center'}}>Enter Name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={ (newValue) =>{
                    setName(newValue)
                }}
            />
            <Text style={{fontSize:40, textAlign: 'center'}}>{name}</Text>

            <Text style={{ fontSize:20, textAlign: 'center'}}>Enter Password</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={ (newValue) =>{
                    setPass(newValue)
                }}
            />
            { password.length <4 ? <Text>Password must be 4 characters</Text>: null}
            <Text style={{fontSize:40, textAlign: 'center'}}>{password}</Text>


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

/* what going on with text input in react?
 1. TextScreen pass to TextInput a value + callback function every rendering process. 
 2. the callback will be invoke everytime the user enter a text.
 3. so, inside the callback, we can procide setter function, that eventually updates and re-render the screen and the current (parent) text value.  
 4. small clearification - every single time the user enter character the screen is re-render.
 */