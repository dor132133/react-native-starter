import React from 'react'
import { Text, View, FlatList } from 'react-native'

const listScreen = () => {

    const friends = [
        { name: 'Menie', age: '39'},
        { name: 'Alice', age: '93'},
        { name: 'Bob', age: '23'},
        { name: 'Dor', age: '43'},
        { name: 'Shak', age: '31'},
        { name: 'Luis', age: '13'},
        { name: 'Mom', age: '3'},
        { name: 'Or', age: '28'}
    ];

    return (
        <View>
            <Text style={{ fontSize: 20 }}>Friend List</Text>
            <FlatList 
                // horizontal //align the list horizontally 
                // showsHorizontalScrollIndicator={false}
                data={friends} 
                keyExtractor={(item, index) => index}
                renderItem={ (element) => { //element === { item: { name: 'Friend }, index: 0}   
                    return <Text style={{ marginVertical: 40 }}>{ element.index + '. ' + element.item.name }</Text>
                }}/> 
        </View>
    )
}




export default listScreen;


//flat list == map array