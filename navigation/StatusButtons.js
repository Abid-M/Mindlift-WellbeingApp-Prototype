import * as React from 'react';
import { Text, Alert, TouchableOpacity } from 'react-native';
import { FoodScreenStyles } from '../styles';

const StatusButtons = () => {
    const buttons = []
    const mentalStatus = ["Fantastic", "Good", "Fine", "Not Great", "Horrible"];
    const numButtons = mentalStatus.length;
    for (let i = 0; i < numButtons; i ++){
      buttons.push(
        <TouchableOpacity
          style = {FoodScreenStyles.shadow}
          onPress = {() => Alert.alert("Status: " + mentalStatus[i].toString())}
        >
        <Text style = {FoodScreenStyles.text}>{mentalStatus[i]}</Text>
        </TouchableOpacity>
      )
    }
    return buttons;
}

export default StatusButtons;