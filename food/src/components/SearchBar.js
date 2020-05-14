import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons' //Feather is the name of the Icon library

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search'style={styles.iconStyle}></Feather>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style = {styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        fontSize: 18,
        flex: 1
    },
    iconStyle : {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar