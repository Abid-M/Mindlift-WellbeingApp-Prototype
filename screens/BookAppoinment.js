//todor
import { FoodScreenStyles } from '../styles';
import { View, TouchableOpacity, Text, Alert} from "react-native";
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { React, useState } from 'react';
import { HeaderBar } from '../components';
import DropDownPicker from 'react-native-dropdown-picker';

function getAppointmentDetails(ref){
    var details = []
    onValue(ref, (snapshot) => {
        details.push(snapshot.val().Expert);
        details.push(snapshot.val().appID);
    });
    return details
}

function importAppointments(){
    var appointmentList = [];
    const db = getDatabase();
    const appointRef = ref(db, "Appointments");
    onValue(appointRef, (snapshot) => {
        const data = snapshot.toJSON();
        for (var i in data){
            const tempRef = ref(db, "Appointments/" + i);
            var details = getAppointmentDetails(tempRef);
            appointmentList.push({label: details[0] + details[1], value: i});
        }
    });
    return appointmentList;
}

function bookAppointment(appointName, navigation){
    if (appointName === false){Alert.alert("Select an appointment")}
    else{
        const db = getDatabase();
        const appointRef = ref(db, "Appointments/" + appointName);
        remove(appointRef);
        Alert.alert("Appointment booked");
        navigation.navigate("Home");
    }

}

const BookAppoinment = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [appointment, setAppointment] = useState(false);
    const [items, setItems] = useState(importAppointments());

    return(
        <View>
            <HeaderBar/>
            <View style = {{justifiContnet: 'space-between'}}>
                <TouchableOpacity
                    style = {FoodScreenStyles.shadow}
                    onPress = {() => bookAppointment(appointment, navigation)}
                >
                    <Text style = {FoodScreenStyles.text}>{"Submit"}</Text>
                </TouchableOpacity>

                <DropDownPicker
                    placeholder='Select an appointment'
                    open={open}
                    value={appointment}
                    items={items}
                    setOpen={setOpen}
                    setValue={setAppointment}
                    setItems={setItems}
                />
            </View>
        </View>
    );
}

export default BookAppoinment;