import React, {useState, useReducer} from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'


const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: { //parent style
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'center', //align the childs inside.flex-start, flex-end
        // flexDirection: 'row', // align the childs verticaly | horizontaly (row)
        height: 200,
        justifyContent: 'space-around' //center, flex-start, flex-end, space-between, space-around
    },
    textOneStyle: { //child style
        borderWidth: 3,
        borderColor: 'red',
        // flex: 4, //how much space the child will takes inside the parent ret
        // alignSelf: 'center' //override alignItems(parent) flex-start, flex-end, stretch
    },
    textTwoStyle: { //child style
        borderWidth: 3,
        borderColor: 'red',
        // flex: 4 
        // alignSelf: 'flex-start',
        position: 'absolute', //Obey parent style, and completly ignore it's sibling styles
        // position: 'relative', //default
        // top: 10, //shifted down 10 units from it's top edge. bottom, left, right. can cause of expand it's parent box
        // fontSize: 20,
        ...StyleSheet.absoluteFillObject //===> position:'absolute', top: 0, right: 0, bottom: 0, left: 0
    },
    textThreeStyle: { //child style
        borderWidth: 3,
        borderColor: 'red',
        // flex: 2
        // alignSelf: 'flex-end'
    }
})


export default BoxScreen;

/* Layout System
1. 3 diff properties that take care of react-native styling.
    a. Position - how single element gets laid out inside of parent. (will override flex box style)
    b. Flex Box system - Howsome number of sibling elements get laid out inside a parent.
    c. Box Object Model - The height/width/border/margin of element.

2. Box Object Models layers: Margin(marginTop) -> Border(borderTopWidth) -> Padding(paddingTop) -> Content(height)
                             Margin(marginLeft) -> Border(borderLeftWidth) -> Padding(paddingLeft) -> Content(width)
3. Shortcuts: margin, marginVertical, marginHorizontal, padding, paddingVertical, paddingHorizontal, borderWidth
4.                        
*/