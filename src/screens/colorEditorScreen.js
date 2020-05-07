
import React, { useReducer } from 'react'
import { Text, View, FlatList, Button } from 'react-native'
import ColorCounter from '../components/colorCounter'


//best practice - define it outside the component, to be interpetered once! remeber that every reducer call the whole component is reload
// action - an object that tells how to change the state object.
const reducer = (state, action) =>{
    //state === { red: number, green: number, blue: number }
    //action === { type: 'red' || 'green' || 'blue', payload: 20 || -20}
    switch (action.type){
        case 'red':
            //never modify state value directly: state.red +=15
            return {...state, red: state.red + action.payload} //make a new object {} and copy the exist state object And change/override red property.
        case 'green':
            return {...state, green: state.green + action.payload} 
        case 'blue':
            return {...state, blue: state.blue + action.payload} 
        default:
    }
}

const INCREMENT=20


const ColorEditorScreen = () => {
    //reducer implement

    //useReduer(theChanger func, initial state)
    const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0})
    const { red, green, blue } = state

    return (
        <View>
            <Text style= {{ fontSize: 20, textAlign: 'center'}}>Color Editor Screen</Text>
            <ColorCounter 
                color='Red'
                onIncrease={ () => {
                    dispatch({ type: 'red', payload: INCREMENT })//the object {} argument is the action object in the reducer
                    console.log(red)
                }} 
                onDecrease={ () => {
                    dispatch({ type: 'red', payload: -1 * INCREMENT })
                    console.log(red)   
                }}
            />
            <ColorCounter 
                color='Green'   
                onIncrease={ () => {
                    dispatch({ type: 'green', payload: INCREMENT })
                    console.log(green)
                }} 
                onDecrease={ () => {
                    dispatch({ type: 'green', payload: -1 * INCREMENT })
                    console.log(green)
                }}
            />
            <ColorCounter 
                color='Blue'
                onIncrease={ () => {
                    dispatch({ type: 'blue', payload: INCREMENT })
                    console.log(blue)
                }}
                onDecrease={ () => {
                    dispatch({ type: 'blue', payload: -1 * INCREMENT })
                    console.log(blue)
                }}
            />
            <Text></Text>
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`, alignSelf: 'center' }}></View>
        </View>
    )
}


export default ColorEditorScreen;

/*
Best practice questions to ask:
1. What piece of data is changing in our app??
2. What type of data is it?
3. Waht is the data's starting value?
*/

//this example will send a callback method to colorCounter child component, to let them the ability to change the color.
//even if the stat var defined in the 'father' component.

//reducer - function that manages changes to an object
/*
gets 2 arguments 
    1. state object -> initial object
    2. how to change by the #1 object --> by another object.
    * must return a value - used as the state object -> argument #1.
    * never change the #1 argument directly.
*/







/* basic implement (without reducer)

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const INCREMENT=20
    const MAX=255
    const MIN=0

    return (
        <View>
            <Text style= {{ fontSize: 20, textAlign: 'center'}}>Color Editor Screen</Text>
            <ColorCounter 
                color='Red'
                onIncrease={ () => {
                    (red + INCREMENT)<=MAX? setRed(red + INCREMENT):null
                    console.log(red)
                }} 
                onDecrease={ () => {
                    (red - INCREMENT)>=MIN? setRed(red - INCREMENT):null
                    console.log(red)   
                }}
            />
            <ColorCounter 
                color='Green'
                onIncrease={ () => {
                    (green + INCREMENT)<=MAX? setGreen(green + INCREMENT):null
                    console.log(green)
                }} 
                onDecrease={ () => {
                    (green - INCREMENT)>=MIN? setGreen(green - INCREMENT):null
                    console.log(green)
                }}
            />
            <ColorCounter 
                color='Blue'
                onIncrease={ () => {
                    (blue + INCREMENT)<=MAX? setBlue(blue + INCREMENT): null
                    console.log(blue)
                }}
                onDecrease={ () => {
                   (blue - INCREMENT)>=MIN? setBlue(blue - INCREMENT):null
                   console.log(blue)
                }}
            />
            <Text></Text>
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`, alignSelf: 'center' }}></View>
        </View>
    )
*/
