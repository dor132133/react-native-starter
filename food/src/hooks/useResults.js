// hook === function that help with a component functionality

import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [data, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
       try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50, 
                    term: searchTerm,
                    location: 'san jose'
                } 
            });
            console.log(response.data.businesses)
            setResults(response.data.businesses);
        }catch(err){
            console.log(err)
            setErrorMessage('Something went wrong')
        }
    }

    //defualt results when the user open the app
    useEffect(() => {
        searchApi('meat')
    }, [])

    return [searchApi,data,errorMessage];
}