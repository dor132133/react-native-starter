import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ImageDetail from '../components/ImageDetail'

const ImageScreen = (props) => {

  return (
    <View>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title="Sunset" imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  )
};



export default ImageScreen;
 