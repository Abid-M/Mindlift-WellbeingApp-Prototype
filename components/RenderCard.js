import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const RenderCard = ({ selectedData, realData, renderData }) => {
  return (
    <TouchableOpacity
      style={styles.BussinessTypeView}
      onPress={() => {
        console.log("RenderCard..++++.///", renderData);
        selectedData(renderData);
      }}
    >
      <Text style={styles.bussinessTypeText}>{renderData.data}</Text>
      {realData == renderData ? (
        <Image
          source={require("../assets/icons/close.png")}
          style={styles.checkIcon}
        />
      ) : (
        <Text></Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  BussinessTypeView: {
    width: wp("92%"),
    height: hp("7%"),
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: hp("0.05%"),
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  bussinessTypeText: {
    fontWeight: "bold",
    color: "#000",
  },
  checkIcon: {
    width: wp("5%"),
    height: wp("5%"),
  },
});

export default RenderCard;
