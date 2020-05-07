import React from "react";
import { View, Text, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
        <Text style={{}}>{props.title}</Text>
        <Image source={props.imageSource}/>
    </View>
  )
};



export default ImageDetail;
 