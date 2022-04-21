import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FoodScreen, SelectFood, DailyIntakes, BookAppoinment } from '../screens';

const Stack = createNativeStackNavigator();
const FoodStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FoodScreen" component={FoodScreen} />
        <Stack.Screen name="SelecFoodScreen" component={SelectFood} />
        <Stack.Screen name="DailyIntakesScreen" component={DailyIntakes} />
        <Stack.Screen name="BookAppoinment" component={BookAppoinment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default FoodStack;
