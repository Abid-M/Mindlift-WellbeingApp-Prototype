import { StyleSheet } from "react-native";
import { COLORS } from "../constants";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

//css
const Styles = StyleSheet.create({
  font:{
     fontWeight: 'normal',
     color: 'white',
     flexWrap: 'wrap',
     fontWeight:"bold",
   },
   background:{
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor:"#7F5DF0",
   },
   image: {
     flex: 1,
     justifyContent: 'center'
   },
   homeBackground:{
     flex:1,
     alignItems: 'center',
     justifyContent: 'space-around',
     backgroundColor: 'white'
   },
   button:{
     backgroundColor: 'white',
     padding: 10,
     borderRadius:10,
     marginTop:16,
     width:180,
     height:45
   },
   buttonFont:{
       color:"#7F5DF0",
       fontSize:15,
       textAlign:'center',
   },
   middleButton:{
     backgroundColor: '#2574f5',
   },
   bottomButtons:{
     alignItems: 'center',
     flexDirection: 'row',
     justifyContent: 'space-evenly',
   },
   textBox:{
     color: 'black',
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
     borderRadius:10,
     backgroundColor:"white"
   },
   buttonFont2:{
    color:"#7F5DF0",
    textAlign:"center",
    fontWeight:"bold",
    fontSize:16,
  },
   timefragment:{
    height:60,
    color: 'white',
    fontWeight:"bold",
    textAlign:"center",
    flexDirection: 'row',
    flex:1,
    fontSize:24 ,
   },
   countdowntimer:{
    flexDirection: 'row',
    height: 10,
    justifyContent: 'space-between',
    marginTop:5,
  },
  dropdown: {
    marginLeft:50,
    borderWidth: 3,
    padding: 15,
    borderRadius:6,
    fontWeight:"bold",
    backgroundColor:'white',
    fontWeight:"bold",
    width:280,
    height:70,
  },
  twobutton:{
    marginLeft:5,
    flexDirection: 'row',
    flex:2,
    justifyContent: 'center',
    padding: 15,
  },
  flexing:{
    flexDirection: 'column',
    flex:3,
    margin:10,
  },
  stopandstart: {
    borderWidth: 3,
    borderRadius:6,
    fontWeight:"bold",
    backgroundColor:'white',
    width:130,
    color: COLORS.primary,
    height:70,
    fontSize:16,
    margin:4,
    paddingTop:24,
    textAlign:"center",
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color:'white',
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight:"bold",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight:"bold",
  },
  iconStyle: {
    width: 30,
    height: 30,
    color:'white',
    backgroundColor:'white',
    marginRight:1,
  },
  shadow: {
    height: responsiveHeight(30),
    width: responsiveWidth(70),
    marginTop: 70,
    marginLeft:60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius:150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 150,
    elevation: 16,
    borderWidth: 3,
    borderColor:COLORS.primary,
  }
});

export default Styles;