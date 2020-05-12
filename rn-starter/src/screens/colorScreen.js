
import React, {useState} from 'react'
import { Text, View, FlatList, Button } from 'react-native'

const ColorScreen = () => {

    const [colors, setColors] = useState([])
    console.log(colors)
    return (
        <View>
            <Button title="Add a Color" onPress={ () => {
                /*  
                    what is that syntax?? setColors([...colors, randomRgb()])
                    [] it's a new array.
                    ... === take a copy of colors-array and add it's elements into our new defined [] array.
                    the second element will be a new generated rgb color using randomRgb()
                */
                setColors([...colors, randomRgb()])
            }}/>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={ (item) => item}
                data={colors}
                renderItem={ (element) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: element.item }}></View>
                    )
                }}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`;
}



export default ColorScreen;


//** any time we change a state variable (useStat setter) the app re-run the intire component!! (kind of refreshing)
