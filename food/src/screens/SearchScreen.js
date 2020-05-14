import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultsList'

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, data, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return data.filter( result => {
            return result.price === price
        })
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>We have found {data.length} resutls</Text>
            <ResultList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultList results={filterResultsByPrice('$$')} title="Bit Pricer"/>
            <ResultList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </View>
    ) 
}



const styles = StyleSheet.create({

})

export default SearchScreen