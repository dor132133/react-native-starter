import React, {useState, useReducer} from 'react'
import { Text, View, FlatList, Button } from 'react-native'


const reducer = (state, action) =>{
    if(state.counter + action.payload < 0 ) return state;
    return {...state, counter: state.counter + action.payload}
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0})
    const {counter} = state

    return (
        <View>
            <Button title="Increase" onPress={ () => {
                dispatch({ type: 'number', payload: 1})
            }}/>
            <Text></Text> 
            <Button title="Decrease" onPress={ () => {
                dispatch({ type: 'number', payload: -1})
            }}/>
            <Text style={{ fontSize: 20 }}>Current Count: {counter}</Text>
        </View>
    )
}




export default CounterScreen;



//first implement by useState
    // // let counter = 0;  //bad practice for watchable var
    // const [counter, setCounter] = useState(0); //an assigmnet of useState array's elements respectively to my array's elements.

    // return (
    //     <View>
    //         <Button title="Increase" onPress={ () => {
    //             // counter++;  //bad practice
    //             setCounter(counter + 1) //doesn't change counter var directly - takes a few moments
    //         }}/>
    //         <Text></Text>
    //         <Button title="Decrease" onPress={ () => {
    //             // counter--;  //bad practice
    //             setCounter(counter -1 ) //doesn't change counter var directly - takes a few moments
    //         }}/>
    //         <Text style={{ fontSize: 20 }}>Current Count: {counter}</Text>
    //     </View>
    // )