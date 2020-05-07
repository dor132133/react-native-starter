import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const exeComponent = () => {
    const appName='React-Native Course'
    return (
        <View>
            <Text style={{ fontSize: 35, textAlign: 'center'}}>Welcome to {appName} App</Text>
            <Text style={{ fontSize: 20, color: 'red' }}>bla bla</Text>
        </View>
    )
}




export default exeComponent;