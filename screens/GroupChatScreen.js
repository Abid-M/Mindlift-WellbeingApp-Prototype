import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
  
import React from "react";
import { LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ']);
  

import {
    responsiveHeight,
} from "react-native-responsive-dimensions";
import ChatRoomStyle from "../styles/ChatRoomStyle";


const GroupChatScreen = (props) => {
return (
    <View
    style={{
        flex: 1,
        height: responsiveHeight(100),
    }}
    >
    <Text></Text>
    <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold', textDecorationLine: 'underline'}}>Chat Rooms</Text>
    
    <View style={ChatRoomStyle.container}>
        <TouchableOpacity
            onPress={() => props.navigation.navigate("Groupchat1")}
        >
        <ImageBackground
            source={require("../assets/images/banner.png")}
            // source={30}
            resizeMode="cover"
            imageStyle={{ borderRadius: 6 }}
            style={ChatRoomStyle.shadow}
        >
            <Text style={ChatRoomStyle.text}>Enter Group Chat 1</Text>
            <Text style={ChatRoomStyle.text}>Online: 15</Text>
            <Text style={ChatRoomStyle.text}>0 Unread Messages</Text>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
        // style={ChatRoomStyle.shadow}
        onPress={() => props.navigation.navigate("Groupchat2")}
        >
        <ImageBackground
            source={require("../assets/images/banner.png")}
            // source={30}
            resizeMode="cover"
            imageStyle={{ borderRadius: 6 }}
            style={ChatRoomStyle.shadow}
        >
            <Text style={ChatRoomStyle.text}>Enter Group Chat 2</Text>
            <Text style={ChatRoomStyle.text}>Online: 1</Text>
            <Text style={ChatRoomStyle.text}>4 Unread Messages</Text>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
        // style={ChatRoomStyle.shadow}
        onPress={() => props.navigation.navigate("Groupchat3")}
        >
        <ImageBackground
            source={require("../assets/images/banner.png")}
            // source={30}
            imageStyle={{ borderRadius: 6 }}
            resizeMode="cover"
            style={ChatRoomStyle.shadow}
        >
            <Text style={ChatRoomStyle.text}>Enter Group Chat 3</Text>
            <Text style={ChatRoomStyle.text}>Online: 0</Text>
            <Text style={ChatRoomStyle.text}>1 Unread Message</Text>
        </ImageBackground>
        </TouchableOpacity>
    </View>
    </View>
);
};

export default GroupChatScreen;
