import React from "react";
import { VidsAndArticles,
  Transaction,
  SelectFood,
  FoodScreen, 
  DailyIntakes, 
  WaterScreen, 
  Login, 
  Register, 
  Settings, 
  Appointments, 
  MentalLogger, 
  BookAppoinment,
  GroupChat1,
  GroupChat2,
  GroupChat3,
  GroupChatScreen,
  BreakReminder,
  Stats,
  VideoDetails,
  ArticleDetails
} from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

import { useFonts } from "expo-font";
import onBoarding from "./screens/Onboarding";
import Tabs from "./navigation/tabs";
console.reportErrorsAsExceptions = false;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhBBdyAVoZh954U-YHOfMjC8oK_Z63OC0",
  authDomain: "mindliftalpha.firebaseapp.com",
  databaseURL: "https://mindliftalpha-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mindliftalpha",
  storageBucket: "mindliftalpha.appspot.com",
  messagingSenderId: "1082952311253",
  appId: "1:1082952311253:web:ddf0dafefa2da8fdad1d5c",
  measurementId: "G-C7QJ30JNSH"
};

initializeApp(firebaseConfig);
const analytics = getAnalytics(App);

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Onboarding"}
      >
        <Stack.Screen name= "Onboarding" component={onBoarding} />
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Register" component = {Register}/>
        <Stack.Screen name= "Settings" component={Settings} />
        <Stack.Screen name= "Home" component={Tabs} />
        <Stack.Screen name= "Appointments" component={Appointments} />
        <Stack.Screen name= "MentalLogger" component={MentalLogger} />
        <Stack.Screen name="VidsAndArticles" component={VidsAndArticles} />
        <Stack.Screen name="GroupChatScreen" component={GroupChatScreen} />
        <Stack.Screen name="Groupchat1" component={GroupChat1} screenOptions={{
            headerShown: true,
          }}/>
        <Stack.Screen name="BreakRemind" component={BreakReminder} />
        <Stack.Screen name="Groupchat2" component={GroupChat2} />
        <Stack.Screen name="Groupchat3" component={GroupChat3} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="FoodScreen" component={FoodScreen} />
        <Stack.Screen name="BookAppoinment" component={BookAppoinment} />
        <Stack.Screen
          name="SelectFood"
          component={SelectFood}
          screenOptions={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="DailyIntakes" component={DailyIntakes} />
        <Stack.Screen name="WaterScreen" component={WaterScreen} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
        <Stack.Screen name="VideoDetails" component={VideoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
