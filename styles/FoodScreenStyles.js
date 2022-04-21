import {StyleSheet} from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { COLORS, SIZES} from "../constants";

const FoodScreenStyles = StyleSheet.create({
    container: {
      height: responsiveHeight(60), // 50% of window height
      width: responsiveWidth(100),
      justifyContent: "center",
      alignItems: "center",
    },
    shadow: {
      height: responsiveHeight(15), // 50% of window height
      width: responsiveWidth(92),
      marginTop: SIZES.radius,
      marginHorizontal: SIZES.radius,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.primary,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
  
      elevation: 8,
    },
    image: {
      height: responsiveHeight(15), // 50% of window height
      width: responsiveWidth(92),
      margin: responsiveWidth(1),
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: 'white',
      fontSize: responsiveFontSize(3),
      textAlign: "center",
    },
});

export default FoodScreenStyles;