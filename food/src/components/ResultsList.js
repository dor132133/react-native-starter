import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import ResultsItemDetails from '../components/ResultsItemDetails'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) =>{

    if(!results.length){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                keyExtractor={(results) => {
                    return results.id
                }}
                renderItem = { ({item}) => { 
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate('Result',{ id: item.id })}> 
                        <ResultsItemDetails result={item}/>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
    
}


const styles = StyleSheet.create({
    titleStyle : {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:10,
        marginBottom:5
    },
    container: {
        marginBottom:10
    }
})


export default withNavigation(ResultsList)