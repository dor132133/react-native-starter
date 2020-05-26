
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost': 
            return [...state, {
                    title: action.payload.title,
                    id: Math.floor(Math.random()* 9999),
                    content: action.payload.content
                }];
        case 'delete_blogpost': 
            return state.filter(blogPost => {
               return blogPost.id !== action.payload
            })
        case 'edit_blogpost':
            return state.map(blogPost=> {
                return blogPost.id === action.payload.id? action.payload: blogPost
            }) 
        default:
            return state
    }
}


// because dispatch isn't define here (it's defined in createDataContext),
// we wrap & return it, in a ()=> function. 
const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: {title , content} })
        callback();
    } 
}
const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blogpost', payload: {id, title , content} })
        callback()
    } 
}
const deleteBlogPost = (dispatch) => {
    return (id) => { //this inner func, is the actuall function that occured inside the component.  
        dispatch({ type: 'delete_blogpost', payload: id })
    } 
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    {addBlogPost,deleteBlogPost, editBlogPost},
    [{title: 'Test Post', content: 'Test Content', id: 1}]
    );

/*
first and goog aproach using useState:
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length+1}` }]);
    }

    const editBlog = () => {}
    const deleteBlog = () => {}
*/