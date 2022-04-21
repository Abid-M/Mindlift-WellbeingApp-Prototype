import { FoodScreenStyles } from '../styles';
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';

function addAppontment(){

    //get the current user's username
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user.displayName;

    //get the database
    const db = getDatabase();
    //go to the database and to the specific user
    const userTypeRef = ref(db, 'Users/' + userId);
    //to get the object at the path "Users/userID"
    onValue(userTypeRef, (snapshot) => {
        //get the user type of the current user
        const data = snapshot.val().userType;
        const data1 = snapshot.val();
        console.log(data1);
        if (data === "Expert"){
            //refer to the appointments part in the database
            const appListRef = ref(db, 'Appointments/');
            //to add a new appointment
            const newAppointmentRef = push(appListRef);
            //testing purposes
            console.log(newAppointmentRef);
            //add the following details to the appointment
            set(newAppointmentRef, {
                appID: Math.floor(Math.random() * 100),
                Expert: userId,
                Booked: "None"
            })
            //show the user that the appointment is added
            Alert.alert("Appointment added");
        }
        else{
            Alert.alert("Only Accessible to Experts");
        }
    })
}

//to do later
function bookAppointment(navigation){
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user.displayName;

    const db = getDatabase();
    const userTypeRef = ref(db, 'Users/' + userId);
    onValue(userTypeRef, (snapshot) => {
        const data = snapshot.val().userType;
        if (data === "Employee"){
            navigation.navigate("BookAppoinment");
        }
        else{
            Alert.alert("Only Accessible to Employees");
        }
    })
}

const Appointments = ({navigation}) => {
    return(
        <View style = {FoodScreenStyles.container}>
            <TouchableOpacity
                style = {FoodScreenStyles.shadow}
                onPress = {() => addAppontment()}
            >
                <Text style = {FoodScreenStyles.text}>{"Add Appointment"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {FoodScreenStyles.shadow}
                onPress={() => bookAppointment(navigation)}
            >
                <Text style = {FoodScreenStyles.text}>{"Book an Appointment"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Appointments;