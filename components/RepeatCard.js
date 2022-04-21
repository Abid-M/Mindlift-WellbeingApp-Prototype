import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const InputWithLabels = (props) => {
  return (
    <>
      <View
        style={props?.type ? styles.unFocusStyleIcon : styles.normalStyleIcon}
      >
        <View style={styles.labelContainerIcon}>
          {!props?.type && (
            <Text
              style={
                props?.boldTitle == false
                  ? styles.normallabelText
                  : styles.labelText
              }
            >
              {props.label ? props.label.toUpperCase() : null}
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.inputContainerIcon}
          onPress={props.onPress}
        >
          <Text
            style={props?.type ? styles.inputStyles : styles.inputStylesIcon}
          >
            {props.bodyText}
          </Text>

          <Image
            source={require("../assets/icons/downarrow.png")}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  labelContainerIcon: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 10,
    zIndex: 1,
    elevation: 0,
    shadowColor: "white",
    position: "absolute",
    top: -12,
  },
  labelText: {
    color: "#000",

    fontSize: 12,
  },
  normallabelText: {
    color: "#000",

    fontSize: 12,
  },
  inputContainerIcon: {
    flexDirection: "row",
    width: wp("92%"),
    justifyContent: "center",
    zIndex: 0,
  },
  iconStyle: {
    width: wp("6%"),
    height: hp("6%"),
  },
  inputStylesIcon: {
    width: wp("77%"),
    color: "#000",
    fontSize: 14,
    // fontFamily: Typography.FONT_FAMILY_BOLD,
    justifyContent: "center",
    alignSelf: "center",
  },
  inputStyles: {
    width: wp("77%"),
    color: "#000",
    fontSize: 12,
    justifyContent: "center",
    alignSelf: "center",
  },
  normalStyleIcon: {
    width: wp("92%"),
    height: hp("7%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    color: "#000",
    fontSize: 14,

    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: wp("2%"),
    marginBottom: wp("4%"),
  },
  unFocusStyleIcon: {
    width: wp("92%"),
    height: hp("7%"),
    paddingRight: wp("4%"),
    color: "#000",
    fontSize: 16,

    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: wp(".2%"),
    marginTop: wp("2%"),
    marginBottom: wp("4%"),
  },
});

export default InputWithLabels;
