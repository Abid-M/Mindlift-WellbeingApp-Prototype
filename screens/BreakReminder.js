import React from 'react';
import { HeaderBar } from "../components";
import { View,
  Text,
  TouchableOpacity, 
  Alert,
  ImageBackground,
} 
from 'react-native';
import { useState,useEffect} from 'react';
import { COLORS, FONTS} from "../constants";
import { Styles } from '../styles';
import { Dropdown } from 'react-native-element-dropdown';


const BreakReminder = () => {

const [value, setValue] = useState(null);
const [drop, setDrop] = useState(false);

const data = [
  { label: '15 seconds', value:15},
  { label: '20 mins', value:1200 },
  { label: '40 mins', value: 2400},
  { label: '1 hour', value:3600 },
  { label: '1 hours 20 mins', value:4800 },
  { label: '1 hour 40 mins', value: 6000 },
  { label: '2 hours', value:7200},
  { label: '2 hours 20 mins', value:8400 },
  { label: '2 hours 40 mins', value:9600 },
];

const [secondsLeft, setSecondsLeft] = useState(null);
const [timerOn, setTimerOn] = useState(false);



useEffect(() => {
  console.log(timerOn);
  console.log(secondsLeft);
  if (secondsLeft == null & timerOn==true){createTwoButtonAlert();}
  },
  [secondsLeft]);

 

useEffect(() =>
{ 
  const intervalId = setInterval(() => {
    if(timerOn & value!=null)
      {
        startTimer();
        
      }
    
}, 1000); 
  return () => clearInterval(intervalId)},
  [timerOn]);


  const startTimer = () => {
    setSecondsLeft(sec=> {
      if (sec> 0) return sec- 1;
    }, 1000)
  };

  const clockify = () => {
    if(secondsLeft == null&& value==null)
    {
      return{
        displayHours:"00",
        displayMins:"00",
        displaySecs:'00',
      }
    }
    //console.log(secondsLeft);

    let hours = Math.floor(secondsLeft / 60 / 60)
    let mins = Math.floor((secondsLeft / 60) % 60)
    let seconds = Math.floor(secondsLeft % 60)
    let displayHours = hours < 10 ? `0${hours}` : hours
    let displayMins = mins < 10 ? `0${mins}` : mins
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds

    return {
      displayHours,
      displayMins,
      displaySecs,
    }
}

  function createTwoButtonAlert()
  {
      Alert.alert(
      "Time is up,let's have a break(:",
      null,
      [
      {
        text: "OKAY",
      }
      ]
    )
      console.log("TIME IS UP,HAVE A BREAK");
      setValue(null);
      setDrop(false);
      setTimerOn(false);
    
    };

    function start(){
      if(drop==false && value==null && secondsLeft==null)
      {
        chooseSlot();
      }
      else{
        setTimerOn(true);
        setDrop(true);
      }
        

    }

    function stop(){
      if(drop==false && value==null && secondsLeft==null)
      {
        chooseSlot();
      }
      else{
        setTimerOn(false);
        setDrop(true);
      }
     
    }

    function chooseSlot()
    {
          Alert.alert(
            "You need to choose a time slot",
            null,
            [
            {
              text: "OKAY",
            }
            ]
            )
        console.log("Choose it");
      
      }

  

return(
  <View style={{ marginTop:50 }}>
  <HeaderBar/>
    <Text style={{ margin:50,color: COLORS.black, ...FONTS.h2}}>
      “Don't underestimate the power of resting. It builds you back unlike anything.”
    </Text>
    <View style={Styles.flexing}>
      <Dropdown
        style={Styles.dropdown}
        placeholderStyle={Styles.placeholderStyle}
        selectedTextStyle={Styles.selectedTextStyle}
        iconStyle={Styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select working hour period"
        value={value}
        onChange={item => { 
          setValue(item.value);
          setSecondsLeft(item.value);
        }
        }
        />
  
      <View style={Styles.twobutton}>
        <TouchableOpacity
          style = {Styles.stopandstart}
          onPress={() =>start() }
        >
          <Text style = {Styles.buttonFont2 }>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {Styles.stopandstart}
          onPress={() =>stop() }
        >
          <Text style={Styles.buttonFont2} >Stop</Text>
        </TouchableOpacity>

      </View>
  
      <View style = {Styles.timeFont}>
        <ImageBackground
          source={require("../assets/images/banner.png")}
          resizeMode="cover"
          imageStyle={{ borderRadius: 150 }}
          style={Styles.shadow}
        >
        <View style = {Styles. countdowntimer}> 
          <Text style = {Styles.timefragment}>{clockify().displayHours}h</Text>
          <Text style = {Styles.timefragment}>:</Text>
          <Text style = {Styles.timefragment}>{clockify().displayMins}m</Text>
          <Text style = {Styles.timefragment}>:</Text>
          <Text style = {Styles.timefragment}>{clockify().displaySecs} s</Text>
        </View>
        </ImageBackground>
      </View>
    </View>
  </View>
)

};

export default BreakReminder;