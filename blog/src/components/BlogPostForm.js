import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'


const BlogPostForm = ({onSubmit, initialValues}) => {

    const { state } = useContext(BlogContext); //how can I destructured 'state' ?

    const blogPost = state.find( blogPost => blogPost.id === navigation.getParam('id')) 

    //that's the magic
    //default values defined in BlogPostForm.defaultProps  
    const [title,setTitle] = useState(initialValues.tilte);
    const [content,setContent] = useState(initialValues.content);

    return <View>
        <Text style={styles.lable}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text style={styles.lable}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
        <Button 
            title="Save Blog Post" 
            onPress={()=> 
                onSubmit(title,content)
            }/>
    </View>
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    lable: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm