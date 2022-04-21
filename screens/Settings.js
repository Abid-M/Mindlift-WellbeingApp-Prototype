import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FoodScreenStyles } from '../styles';

const Settings = ({navigation}) => {
    return(
        <View style = {FoodScreenStyles.container}>
            <TouchableOpacity
                style = {FoodScreenStyles.shadow}
                onPress = {() => navigation.navigate("Onboarding")}
            >
                <Text style = {FoodScreenStyles.text}>{"Log Out"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings;