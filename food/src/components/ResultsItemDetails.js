import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native"



const ResultsItemDetails = ({result}) => {



    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom:5
    },
    nameStyle: {
        fontSize:14,
        fontWeight:'bold'
    },
    container: {
        marginLeft:10
    }
})

export default ResultsItemDetails 