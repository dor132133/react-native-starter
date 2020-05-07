import React, {useState} from 'react'
import { Text, View, FlatList, Button } from 'react-native'

const ColorCounter = (props) => {
    return (
        <View>
            <Text></Text>
            <Text style={{ textAlign: 'center', color: `${props.color.toLowerCase()}`, fontSize:20}}>{props.color}</Text>
            <Button
                title={`Increase ${props.color}`}
                onPress={ () => props.onIncrease()}
            />
            <Button
                title={`Decrease ${props.color}`}
                onPress={ () => props.onDecrease()}
            />
        </View>
    );
}

export default ColorCounter