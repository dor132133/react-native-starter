import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'


const IndexScreen = (props) => {

    const {state, addBlogPost, deleteBlogPost} = useContext(BlogContext)
    console.log(props)
    return (
        
            <View>
                <FlatList
                    data={state}
                    keyExtractor={(post) => post.id+''}
                    renderItem={ ({item})=> {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate('Show', { id: item.id })}>
                                <View style={styles.row}>
                                    <Text style={styles.title}>{item.title} {item.id}</Text>
                                    <TouchableOpacity onPress={()=>{
                                        deleteBlogPost(item.id)
                                    }}>
                                        <Feather style={styles.icon} name="trash"/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
    )
}

//add element to top bar screen
IndexScreen.navigationOptions = ({navigation}) => {
    return { 
        headerRight: () => (
        <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18,
    },
    icon:{
        fontSize:24
    }
})

export default IndexScreen
