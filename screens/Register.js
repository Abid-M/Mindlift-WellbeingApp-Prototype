import * as React from 'react';
import {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, ImageBackground } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Styles } from '../styles';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';


function testForBlank(data){return data === "";}

function testRegister(username, password, email, workerType, navigation){
    const auth = getAuth();
    if (workerType != "Employee" && workerType != "Expert" || testForBlank(username) || testForBlank(password) || testForBlank(email)){
        Alert.alert("Fill in the blank details");
    }
    else{
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("Account Created");
            addOtherDetails(auth, username, workerType)
            navigation.navigate("Home")
        })
        //bug here maybe, check by entering existing email, shit password or if fields are empty
        .catch(error => {
            if (error.code === 'auth/email-already-in-use'){
                Alert.alert("email already in use");
            }
            if (error.code === 'auth/invalid-email'){
                Alert.alert("that email address is invalid!")
            }
            if (error.code === 'auth/weak-password'){
                Alert.alert("Please enter a password more than 6 characters")
            }
            console.error(error);
        });
    }
}

function addOtherDetails(auth, username, workerType){
    updateProfile(auth.currentUser, {
        displayName: username,
    })

    const db = getDatabase();
    const usersListRef = ref(db, 'Users/' + username);

    const userRef = set(usersListRef, {
        userType: workerType,
    });

}

const Register = ({navigation}) => {
    //for the dropdown menu
    const [open, setOpen] = useState(false);
    const [workerType, setWorkerType] = useState(false);
    const [items, setItems] = useState([
        {label: "Employee", value: "Employee"},
        {label: "Expert", value: "Expert"}
    ]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <View style = {Styles.background}>
            <ImageBackground
                source={require('../assets/icons/bg.png')}
                style={Styles.background}
            >
                <Text style = {Styles.font}>Enter a Username</Text>
                <View style = {{alignSelf: 'stretch'}}>
                    <TextInput
                        style = {Styles.textBox}
                        placeholder = "Username"
                        placeholderTextColor={"black"}
                        autoComplete='off'
                        onChangeText={newUsername => setUsername(newUsername)}
                        defaultValue = {username}
                        />
                </View>
                

                <Text style = {Styles.font}>Enter a Passsword</Text>
                <View style = {{alignSelf: 'stretch'}}>
                    <TextInput
                        style = {Styles.textBox}
                        placeholder = "Password"
                        placeholderTextColor={"black"}
                        keyboardType = "visible-password"
                        autoComplete='off'
                        onChangeText={newPassword => setPassword(newPassword)}
                        defaultValue = {password}
                        />
                </View>

                <Text style = {Styles.font}>Enter your email</Text>
                <View style = {{alignSelf: 'stretch'}}>
                    <TextInput
                        style = {Styles.textBox}
                        placeholder = "Email"
                        placeholderTextColor={"black"}
                        keyboardType = "email-address"
                        onChangeText={newEmail => setEmail(newEmail)}
                        defaultValue = {email}                 
                        />
                </View>

                <Text style = {Styles.font}>Select your Role</Text>
                <View>
                    <DropDownPicker
                        placeholder='Select your Role'
                        open={open}
                        value={workerType}
                        items={items}
                        setOpen={setOpen}
                        setValue={setWorkerType}
                        setItems={setItems}
                        onPress = {(open) => console.log(open)}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style = {Styles.button}
                        onPress = {() => testRegister(username, password, email, workerType, navigation)}
                    >
                        <Text style = {Styles.buttonFont}>{"Complete Registration"}</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

            

        </View>
    )
};

export default Register;