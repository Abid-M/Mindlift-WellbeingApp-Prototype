import * as React from 'react';
import {ScrollView, Text} from 'react-native';
import {
    responsiveFontSize
    } from "react-native-responsive-dimensions";
import { FoodScreenStyles } from '../styles';
import { StatusButtons } from '../navigation';
import { HeaderBar } from "../components";

const MentalLogger = () => {
    return(
            <ScrollView style = {FoodScreenStyles.contianer}>
                <HeaderBar/>
                <Text style = {{color: 'black', fontSize: responsiveFontSize(3), textAlign: 'center'}}>Select your status bellow</Text>
                {StatusButtons()}
            </ScrollView>
    )
}


export default MentalLogger