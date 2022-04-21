import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { COLORS, SIZES } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HeaderBar } from "../components";

const DailyIntakes = () => {
  const [redFood, setRedFood] = useState([]);
  const [greenFood, setGreenFood] = useState([]);
  const [yellowFood, setYellowFood] = useState([]);
  const [calorie, setCalorie] = useState(0);
  const [waterGoal, setWaterGoal] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [calorieTotal, setCalorieTotal] = useState(0);
  useEffect(async () => {
    await getData();
  }, []);
  const getData = async () => {
    try {
      let red = await AsyncStorage.getItem("redFood");
      let green = await AsyncStorage.getItem("greenFood");
      let yellow = await AsyncStorage.getItem("yellowFood");
      let calorie = await AsyncStorage.getItem("caloriegoal");
      let waterGoal = await AsyncStorage.getItem("waterGoal");
      let waterIntake = await AsyncStorage.getItem("watertotal");
      let calorieTotal = await AsyncStorage.getItem("calorieTotal");

      setTimeout(() => {
        setGreenFood(green ? JSON.parse(green) : []);
        setRedFood(red ? JSON.parse(red) : []);
        setYellowFood(yellow ? JSON.parse(yellow) : []);
        setCalorie(calorie ? JSON.parse(calorie) : 0);
        setWaterGoal(JSON.parse(waterGoal));
        setWaterIntake(JSON.parse(waterIntake));
        setCalorieTotal(JSON.parse(calorieTotal));
      }, 200);
    } catch (e) {}
  };
  const RenderCard = ({ item }) => {
    let img = JSON.parse(item.image);
    return (
      <View style={styles.container}>
        <View style={styles.midContainer}>
          <Image source={img} style={styles.img} resizeMode="contain" />
          <Text style={styles.text}>Food Name: {item.data}</Text>
          <Text style={styles.text}>Calories Amount: {item.calorie}</Text>
        </View>
      </View>
    );
  };
  const separator = () => {
    return <View style={{ height: hp("2%"), width: wp("3%") }} />;
  };
  return (
    <View
      // source={require("../assets/images/banner.png")}
      // // source={30}
      // resizeMode="cover"
      style={{
        flex: 1,
        height: responsiveHeight(100),
      }}
    >
      <HeaderBar />
      <View style={{ width: responsiveWidth(92), alignSelf: "center" }}>
        <View style={styles.textView}>
          <Text style={styles.title}>Calorie Goal: {calorie}</Text>
          <Text style={styles.title}>Water Goal: {waterGoal}ml</Text>
          <Text></Text>
          <Text style={styles.title}>
            Current total Calories Eaten: {calorieTotal}
          </Text>
          <Text style={styles.title}>
            Current total Water Drank: {waterIntake}ml
          </Text>
        </View>

        {greenFood.length > 0 && (
          <>
            <Text style={styles.headerTitleGreen}>Green Foods</Text>
            <View style={styles.flatListStyle}>
              <FlatList
                data={greenFood}
                horizontal={true}
                renderItem={RenderCard}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={separator}
              />
            </View>
          </>
        )}
        {yellowFood.length > 0 && (
          <>
            <Text style={styles.headerTitleYellow}>Yellow Foods</Text>
            <View style={styles.flatListStyle}>
              <FlatList
                data={yellowFood}
                horizontal={true}
                renderItem={RenderCard}
                ItemSeparatorComponent={separator}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
              />
            </View>
          </>
        )}
                {redFood.length > 0 && (
          <>
            <Text style={styles.headerTitleRed}>Red Foods</Text>
            <View style={styles.flatListStyle}>
              <FlatList
                style={styles.flatListStyle}
                data={redFood}
                horizontal={true}
                renderItem={RenderCard}
                ItemSeparatorComponent={separator}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: wp("40%"),
    height: hp("15%"),
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
  textView: {
    height: responsiveHeight(20),
    alignItems: "center",
    paddingLeft: responsiveWidth(1.5),
    justifyContent: "center",
    marginBottom: 10,
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
  midContainer: {
    alignItems: "center",
    width: wp("40%"),
    height: hp("15%"),
  },
  img: {
    width: wp("40%"),
    height: hp("10%"),
  },
  text: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: "bold",
    textAlign: "left",
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
  },
  headerTitleRed: {
    color: 'red',
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    height: responsiveHeight(5),
  },
  headerTitleYellow: {
    color: 'orange',
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    height: responsiveHeight(5),
  },
  headerTitleGreen: {
    color: 'green',
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    height: responsiveHeight(5),
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
  flatListStyle: {
    height: hp("17%"),
    marginBottom: responsiveHeight(1),
  },
});
export default DailyIntakes;
