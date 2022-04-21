import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity,TextInput, Alert, ImageBackground} from 'react-native';
import { Styles } from '../styles';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function testLogin(email, password, navigation){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("Signed in");
            navigation.navigate("Home");    
        })
        .catch(error => {
            if (error.code === 'auth/invalid-email'){
                Alert.alert("Email Invalid");
            }
            else if (error.code === 'auth/user-not-found'){
                Alert.alert("User does not exist with the details given")
            }
            else if (error.code === 'auth/wrong-password'){
                Alert.alert("Password Incorrect")
            }
            console.error(error);
        });
}

const Login = ( {navigation} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style = {Styles.image}>
            <ImageBackground
                source={require('../assets/icons/bg.png')}
                style={Styles.background}
            >

                <Text style = {Styles.font}>Enter your Email</Text>
                <View style = {{alignSelf: 'stretch'}}>
                    <TextInput
                        style = {Styles.textBox}
                        placeholder = "Email"
                        placeholderTextColor={"black"}
                        autoComplete='off'
                        onChangeText={newEmail => setEmail(newEmail)}
                        defaultValue = {email}
                        />
                </View>
                

                <Text style = {Styles.font}>Enter your Passsword</Text>
                <View style = {{alignSelf: 'stretch'}}>
                    <TextInput
                        style = {Styles.textBox}
                        placeholder = "Password"
                        placeholderTextColor={"black"}
                        keyboardType = "visible-password"
                        onChangeText={newPassword => setPassword(newPassword)}
                        defaultValue = {password}
                        autoComplete='off'
                        />
                </View>

                <View>
                    <TouchableOpacity
                        style = {Styles.button}
                        onPress = {() => navigation.navigate("Register")}
                    >
                        <Text style = {Styles.buttonFont}>{"Don't have an account?"}</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity
                        style = {Styles.button}
                        onPress = {() => testLogin(email, password, navigation)}              
                    >
                        <Text style = {Styles.buttonFont}>{"Login"}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>


    );
};

export default Login;