import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const HomeScreen = (props) => {

  return (
    <View>
      <Text style={styles.text}>Hello W(Or)ld</Text>
      <Text></Text>
      <Button 
        onPress={ () => {
          props.navigation.navigate('Component') //nevigate to another component screen
        }}
        title="Go to Component Demo"
      />
      <Text></Text>
      <Button 
        onPress={ () => {
          props.navigation.navigate('Image') //nevigate to another component screen
        }}
        title="Go to Image Demo"
      />
       <Text></Text>
      <Button 
        onPress={ () => {
          props.navigation.navigate('Counter') //nevigate to another component screen
        }}
        title="Go to Counter Demo"
      />
       <Text></Text>
      <Button 
        onPress={ () => {
          props.navigation.navigate('Color') //nevigate to another component screen
        }}
        title="Go to Color Demo"
      />
       <Text></Text>
      <Button 
        onPress={ () => {
          props.navigation.navigate('ColorEditor') //nevigate to another component screen
        }}
        title="Go to Color Editor Demo"
      />
       <Text></Text>
      <Button 
        onPress={ () => {
          props.navigation.navigate('Text') //nevigate to another component screen
        }}
        title="Go to Text Demo"
      />
       <Text></Text>
      <TouchableOpacity onPress={ () => {
        props.navigation.navigate('List')
      }}>
        <Text style={{ fontSize:20 }}>Go to List Demo</Text> 
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default HomeScreen;
 