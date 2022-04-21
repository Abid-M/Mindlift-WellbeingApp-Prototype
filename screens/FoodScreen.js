import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import React from "react";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ']);

import {
  responsiveHeight,
} from "react-native-responsive-dimensions";

import { FoodScreenStyles } from "../styles";

const FoodScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        height: responsiveHeight(100),
      }}
    > 
      <Text></Text>
      <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold', textDecorationLine: 'underline'}}>DIET LOGGER</Text>
      
      <View style={FoodScreenStyles.container}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SelectFood")}
        >
          <ImageBackground
            source={require("../assets/images/banner.png")}
            // source={30}
            resizeMode="cover"
            imageStyle={{ borderRadius: 6 }}
            style={FoodScreenStyles.shadow}
          >
            <Text style={FoodScreenStyles.text}>Log Food Eaten</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.shadow}
          onPress={() => props.navigation.navigate("WaterScreen")}
        >
          <ImageBackground
            source={require("../assets/images/banner.png")}
            // source={30}
            resizeMode="cover"
            imageStyle={{ borderRadius: 6 }}
            style={FoodScreenStyles.shadow}
          >
            <Text style={FoodScreenStyles.text}> Record Volume of Water Drank</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.shadow}
          onPress={() => props.navigation.navigate("DailyIntakes")}
        >
          <ImageBackground
            source={require("../assets/images/banner.png")}
            // source={30}
            imageStyle={{ borderRadius: 6 }}
            resizeMode="cover"
            style={FoodScreenStyles.shadow}
          >
            <Text style={FoodScreenStyles.text}>Daily Intakes</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodScreen;
