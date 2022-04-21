import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { COLORS, SIZES } from "../constants";
const SelectFoodModel = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visiblity}
      onRequestClose={() => {
        props.changeVisibility(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.midContainer}>
          <TouchableOpacity
            style={styles.checkIcon}
            onPress={() => props.changeVisibility()}
          >
            <Image
              source={require("../assets/icons/close.png")}
              style={styles.checkIcon}
            />
          </TouchableOpacity>
          <Image
            source={props.data.image}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.text}>Food Name: {props.data.data}</Text>
          <Text style={styles.text}>Calories Amount: {props.data.calorie}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.onSubmit(props.data)}
          >
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },
  midContainer: {
    alignItems: "center",

    width: wp("70%"),
    height: hp("30%"),
    justifyContent: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  img: {
    width: wp("40%"),
    height: hp("10%"),
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    height: responsiveHeight(5), // 50% of window height
    width: responsiveWidth(25),
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  btnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  checkIcon: {
    width: wp("7%"),
    height: wp("7%"),
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export default SelectFoodModel;
