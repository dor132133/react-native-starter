import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons' //Feather is the name of the Icon library

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name='search' size={30}></Feather>
            <TextInput></TextInput>
        </View>
    )
}



const styles = StyleSheet.create({
    backgraound: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical:15
    }
})

export default SearchBar