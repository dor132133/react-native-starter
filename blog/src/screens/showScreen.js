import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'


const showScreen = ({navigation}) => {

    const { state } = useContext(BlogContext);

    const blogPost = state.find((blogPost) => {
        return blogPost.id === navigation.getParam('id')
    })

    console.log(navigation.getParam('id'))
    return <View>
        <Text>{blogPost.title} - {blogPost.id}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

//add element to top bar screen
showScreen.navigationOptions = ({navigation}) => {
    return { 
        headerRight: () => (
        <TouchableOpacity onPress={()=> navigation.navigate('Edit',{id: navigation.getParam('id') })}>
            <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

})

export default showScreen