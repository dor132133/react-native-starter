import React, { useContext, useState } from 'react'
import { StyleSheet} from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({navigation}) => {

    const { state, editBlogPost } = useContext(BlogContext); //how can I destructured 'state' ?

    const id = navigation.getParam('id')
    const blogPost = state.find( blogPost => blogPost.id === id) 

    return <BlogPostForm
        initialValues={{title: blogPost.title, content: blogPost.content}} 
        onSubmit={ (title,content) => {
            editBlogPost(id,title, content, ()=>{
                navigation.pop() //navigate to the last screen we were...
            })
    }} />
}

const styles = StyleSheet.create({

})

export default EditScreen