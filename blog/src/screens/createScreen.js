import React, { useContext,  } from 'react'
import { StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const CreateScreen = ({navigation}) => {

    const {addBlogPost} = useContext(BlogContext)

    return <BlogPostForm 
            onSubmit={ (title,content) => {  //that's a callback that inside the from, title & content will be known.
                    addBlogPost(title,content, ()=> { //using callback to make sure that the adding action completely finish, and then navigate back
                    navigation.navigate("Index")
                    })
                }
            }/>
}

const styles = StyleSheet.create({
 
})

export default CreateScreen