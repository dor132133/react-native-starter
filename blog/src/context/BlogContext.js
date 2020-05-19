
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost': 
            return [...state, { title: `Blog Post #${state.length+1}` }];
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    } 
}

export const { Context, Provider } = createDataContext(blogReducer,{addBlogPost},[]);

/*
first and goog aproach using useState:
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length+1}` }]);
    }

    const editBlog = () => {}
    const deleteBlog = () => {}
*/