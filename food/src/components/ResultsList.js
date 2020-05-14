import React from 'react'
import { View, Text, StyleSheet, FlatList } from "react-native"
import ResultsItemDetails from '../components/ResultsItemDetails'

const ResultsList = ({ title, results }) =>{

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal={true}
                data={results}
                keyExtractor={(results) => {
                    return results.id
                }}
                renderItem = { ({item}) => {
                    return <ResultsItemDetails result={item}/>
                }}
            />
        </View>
    )
    
}


const styles = StyleSheet.create({
    titleStyle : {
        fontSize: 18,
        fontWeight: 'bold'
    }
})


export default ResultsList