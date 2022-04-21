import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputWithLabels from "../components/InputWithLabels";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { COLORS, SIZES } from "../constants";
import { HeaderBar } from "../components";

const WaterScreen = () => {
  const [waterGoal, setWaterGoal] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [waterIntakeTotal, setWaterIntakeTotal] = useState(0);

  const addWater = () => {
    let add = parseInt(waterIntakeTotal) + parseInt(waterIntake);

    setWaterIntakeTotal(add);
    setWaterIntake("");
    alert("Water intake added");
  };
  const clearData = () => {
    setWaterGoal(0)
    setWaterIntake("");
    setWaterIntakeTotal(0);
    alert("Your data clear successfully.");
  };
  
  const onSubmit = async () => {
    try {
      await AsyncStorage.setItem("waterGoal", JSON.stringify(waterGoal));
      await AsyncStorage.setItem(
        "watertotal",
        JSON.stringify(waterIntakeTotal)
      );

      alert("Data Added Successfully.");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        height: responsiveHeight(100),
      }}
    >
      <HeaderBar />
      <Text></Text>
      <Text style={{color:'black', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Record Volume of Water Drank</Text>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <InputWithLabels
          placeholder="Water Intake Goal"
          isFocus={false}
          isError={false}
          showLabelCB={true}
          value={waterGoal}
          onChangeText={setWaterGoal}
        />

        <InputWithLabels
          placeholder="Water Intake in ml"
          isFocus={false}
          isError={false}
          showLabelCB={true}
          value={waterIntake}
          onChangeText={setWaterIntake}
        />
        <TouchableOpacity style={styles.button} onPress={() => addWater()}>
          <Text style={{color: 'white'}}>Add Water Intake</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => clearData()}>
          <Text style={{color: 'white'}}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: responsiveHeight(6), // 50% of window height
    width: responsiveWidth(92),
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondary,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  btn: {
    height: responsiveHeight(10), // 50% of window height
    width: responsiveWidth(92),
    flexDirection: "row",

    alignSelf: "center",
    justifyContent: "space-between",
  },
});
export default WaterScreen;
