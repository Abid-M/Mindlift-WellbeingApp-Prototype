import { View , Text , StyleSheet , TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HeaderBar, ModelListView, RepeatCard, RenderCard, SelectFoodModel } from "../components";
import InputWithLabels from "../components/InputWithLabels";

import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { COLORS, SIZES } from "../constants";

const SelectFood = () => {
  const [green, setGreen] = useState("Select green food");
  const [yellow, setYellow] = useState("Select yellow food");
  const [red, setRed] = useState("Select red food");

  const [greenArr, setGreenArr] = useState([]);
  const [yellowArr, setYellowArr] = useState([]);
  const [redArr, setRedArr] = useState([]);

  const [calorie, setCalorie] = useState(0);
  const [calorieTotal, setCalorieTotal] = useState(0);

  const [greenVisible, setGreenVisible] = useState(false);
  const [yellowVisible, setYellowVisible] = useState(false);
  const [redVisible, setRedVisible] = useState(false);

  const [greenSelectVisible, setGreenSelectVisible] = useState(false);
  const [yellowSelectVisible, setYellowSelectVisible] = useState(false);
  const [redSelectVisible, setRedSelectVisible] = useState(false);

  // const GREEN = [
  //   "Blueberries",
  //   "Apples",
  //   "Carrots",
  //   "Peppers",
  //   "Spinach",
  //   "Brussels Sprouts",
  //   "Broccoli",
  //   "Sweet Potatoes",
  //   "Beets",
  //   "Berries",
  //   "Bananas",
  //   "Oats",
  //   "Whole-Grain Bread",
  //   "Quinoa",
  //   "Non-Fat Dairy",
  //   "Products",
  //   "Egg Whites",
  // ];
  // const YELLOW = [
  //   "Avocado",
  //   "Salmon",
  //   "Chicken",
  //   "Turkey",
  //   "Beans",
  //   "Tofu",
  //   "Whole Eggs",
  //   "Tempeh",
  //   "Lean Ground Beef",
  //   "Black Beans",
  //   "Chickpeas",
  //   "Low-Fat Dairy",
  // ];
  // const RED = [
  //   "Olive Oil and Other Oils",
  //   "Nuts and Seeds",
  //   "Nut Butters",
  //   "Dried Fruit",
  //   "Beef",
  //   "Pork",
  //   "Full-Fat Dairy",
  //   "Bacon",
  //   "French Fries",
  //   "Burgers",
  //   "Potato Chips",
  //   "Pizza",
  //   "Cake",
  // ];

  const GREEN = [
    {
      data: "Blueberries",
      calorie: 30,
      image: require("../assets/FoodImages/Green/Blueberries.png"),
    },
    {
      data: "Apples",
      calorie: 50,
      image: require("../assets/FoodImages/Green/Apples.png"),
    },
    {
      data: "Carrots",
      calorie: 41,
      image: require("../assets/FoodImages/Green/Carrots.png"),
    },
    {
      data: "Peppers",
      calorie: 40,
      image: require("../assets/FoodImages/Green/Peppers.png"),
    },
    {
      data: "Spinach",
      calorie: 23,
      image: require("../assets/FoodImages/Green/Spinach.png"),
    },
    {
      data: "Brussels Sprouts",
      calorie: 43,
      image: require("../assets/FoodImages/Green/Brussels.png"),
    },
    {
      data: "Broccoli",
      calorie: 45,
      image: require("../assets/FoodImages/Green/Broccoli.png"),
    },
    {
      data: "Sweet Potatoes",
      calorie: 86,
      image: require("../assets/FoodImages/Green/Sweet-Potatoes.png"),
    },
    {
      data: "Beetroots",
      calorie: 60,
      image: require("../assets/FoodImages/Green/Beetroots.png"),
    },
    {
      data: "Strawberries",
      calorie: 33,
      image: require("../assets/FoodImages/Green/Strawberries.png"),
    },
    {
      data: "Bananas",
      calorie: 89,
      image: require("../assets/FoodImages/Green/Bananas.png"),
    },
    { data: "Oats", 
      calorie: 120, 
      image: require("../assets/FoodImages/Green/Oats.png") },
    {
      data: "Whole-Grain Bread",
      calorie: 24,
      image: require("../assets/FoodImages/Green/Whole-Grain-Bread.png"),
    },
    {
      data: "Quinoa",
      calorie: 110,
      image: require("../assets/FoodImages/Green/Quinoa.jpg"),
    },
    {
      data: "Egg Whites",
      calorie: 52,
      image: require("../assets/FoodImages/Green/Egg-Whites.png"),
    },
  ];

  const YELLOW = [
    {
      data: "Avocado",
      calorie: 160,
      image: require("../assets/FoodImages/Yellow/Avocado.png"),
    },
    {
      data: "Salmon",
      calorie: 208,
      image: require("../assets/FoodImages/Yellow/Salmon.png"),
    },
    {
      data: "Chicken",
      calorie: 239,
      image: require("../assets/FoodImages/Yellow/Chicken.png"),
    },
    {
      data: "Turkey",
      calorie: 189,
      image: require("../assets/FoodImages/Yellow/Turkey.png"),
    },
    {
      data: "Beans",
      calorie: 95,
      image: require("../assets/FoodImages/Yellow/Beans.png"),
    },
    { data: "Tofu", 
      calorie: 76, 
      image: require("../assets/FoodImages/Yellow/Tofu.png") },
    {
      data: "Whole Eggs",
      calorie: 155,
      image: require("../assets/FoodImages/Yellow/Whole-Eggs.png"),
    },
    {
      data: "Tempeh",
      calorie: 193,
      image: require("../assets/FoodImages/Yellow/Tempeh.jpg"),
    },
    {
      data: "Lean Ground Beef",
      calorie: 332,
      image: require("../assets/FoodImages/Yellow/LeanBeef.png"),
    },
    {
      data: "Chickpeas",
      calorie: 364,
      image: require("../assets/FoodImages/Yellow/Chickpeas.png"),
    },
  ];

  const RED = [
    {
      data: "Olive Oil and Other Oils",
      calorie: 200,
      image: require("../assets/FoodImages/Red/Oil.png"),
    },
    {
      data: "Nuts and Seeds",
      calorie: 825,
      image: require("../assets/FoodImages/Red/Nuts.png"),
    },
    { 
      data: "Steak", 
      calorie: 650, 
      image: require("../assets/FoodImages/Red/Steak.png") 
    },
    { 
      data: "Pork", 
      calorie: 242, 
      image: require("../assets/FoodImages/Red/Pork.png") 
    },
    { 
      data: "Bacon", 
      calorie: 541, 
      image: require("../assets/FoodImages/Red/Bacon.png") 
    },
    {
      data: "French Fries",
      calorie: 312,
      image: require("../assets/FoodImages/Red/FrenchFries.png"),
    },
    {
      data: "Burgers",
      calorie: 320,
      image: require("../assets/FoodImages/Red/Burgers.png"),
    },
    {
      data: "Crisps",
      calorie: 536,
      image: require("../assets/FoodImages/Red/Crisps.png"),
    },
    {
      data: "Pizza",
      calorie: 266,
      image: require("../assets/FoodImages/Red/Pizza.png"),
    },
    { 
      data: "Cake", calorie: 257, image: require("../assets/FoodImages/Red/Cake.png") 
    },
  ];

  const onPressGreen = () => {
    setGreenVisible(!greenVisible);
    setYellowVisible(false);
    setRedVisible(false);
  };
  const onPressYellow = () => {
    setGreenVisible(false);
    setYellowVisible(!yellowVisible);
    setRedVisible(false);
  };
  const onPressRed = () => {
    setGreenVisible(false);
    setYellowVisible(false);
    setRedVisible(!redVisible);
  };
  const closeModal = () => {
    setGreenVisible(false);
    setYellowVisible(false);
    setRedVisible(false);

    setGreenSelectVisible(false);
    setYellowSelectVisible(false);
    setRedSelectVisible(false);
  };
  //selections....
  const onselectRed = (item) => {
    setRedVisible(false);
    setRed(item);
    setRedSelectVisible(true);
  };

  const onselectYellow = (item) => {
    setYellow(item);
    setYellowVisible(false);
    setYellowSelectVisible(true);
  };
  const onselectGreen = (item) => {
    setGreen(item);
    setGreenVisible(false);
    setGreenSelectVisible(true);
  };
  //other Modal
  const onSubmitRed = (item) => {
    console.log("iiiiii", item);
    setRedVisible(false);
    setCalorieTotal(parseInt(calorieTotal) + parseInt(item.calorie));
    setRedSelectVisible(false);

    setRedArr([...redArr, item]);
  };

  const onSubmitYellow = (item) => {
    setYellowVisible(false);
    setCalorieTotal(parseInt(calorieTotal) + parseInt(item.calorie));
    setYellowSelectVisible(false);

    setYellowArr([...yellowArr, item]);
  };
  const onSubmitGreen = (item) => {
    setGreenVisible(false);
    setGreenSelectVisible(false);
    setCalorieTotal(parseInt(calorieTotal) + parseInt(item.calorie));
    setGreenArr([...greenArr, item]);
  };
  const clearData = () => {
    setGreenArr([]), setRedArr([]);
    setYellowArr([]);
    setCalorie("");
    setCalorieTotal(0);
    alert("Your data clear successfully.");
  };
  const onSubmit = async () => {
    await storeData();
  };
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("redFood", JSON.stringify(redArr));
      await AsyncStorage.setItem("yellowFood", JSON.stringify(yellowArr));
      await AsyncStorage.setItem("greenFood", JSON.stringify(greenArr));
      await AsyncStorage.setItem("caloriegoal", JSON.stringify(calorie));
      await AsyncStorage.setItem("calorieTotal", JSON.stringify(calorieTotal));
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
      <HeaderBar/>
      <Text></Text>
      <Text style={styles.header}>Food divided into three categories</Text>
      <Text style={styles.header}> based on calorie density: </Text>

      <Text style ={{textAlign: 'center'}}>
        <Text style={{color:'green', textAlign: 'center', fontSize: 20}}>Green </Text>
        <Text style={{color:'orange', textAlign: 'center', fontSize: 20}}>Yellow </Text>
        <Text style={{color:'red', textAlign: 'center', fontSize: 20}}>Red</Text>
      </Text> 

      <SelectFoodModel
        visiblity={yellowSelectVisible}
        data={yellow}
        onSubmit={onSubmitYellow}
        changeVisibility={closeModal}
      />
      <SelectFoodModel
        visiblity={redSelectVisible}
        data={red}
        onSubmit={onSubmitRed}
        changeVisibility={closeModal}
      />
      <SelectFoodModel
        visiblity={greenSelectVisible}
        data={green}
        onSubmit={onSubmitGreen}
        changeVisibility={closeModal}
      />
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <InputWithLabels
          placeholder="Calorie Goal"
          bodyText={"Input Calorie Goal"}
          isFocus={false}
          isError={false}
          showLabelCB={true}
          value={calorie}
          onChangeText={setCalorie}
        />
        <RepeatCard
          type={false}
          label="GREEN FOOD"
          onPress={() => onPressGreen()}
          icon={true}
          bodyText={"Select Green Food"}
        />
        <RepeatCard
          type={false}
          label="YELLOW FOOD"
          onPress={() => onPressYellow()}
          icon={true}
          bodyText={"Select Yellow Food"}
        />

        <RepeatCard
          type={false}
          label="RED FOOD"
          onPress={() => onPressRed()}
          icon={true}
          bodyText={"Select Red Food"}
        />
        <ModelListView
          data={RED}
          renderItem={(item) => (
            <RenderCard
              // realData={''}
              renderData={item}
              selectedData={onselectRed}
            />
          )}
          title={"Select Red Food"}
          type={"rule"}
          visiblity={redVisible}
          changeVisibility={closeModal}
        />

        <ModelListView
          data={GREEN}
          renderItem={(item) => (
            <RenderCard
              realData={""}
              renderData={item}
              selectedData={onselectGreen}
            />
          )}
          title={"Select Green Food"}
          type={"green"}
          visiblity={greenVisible}
          changeVisibility={closeModal}
        />
        <ModelListView
          data={YELLOW}
          renderItem={(item) => (
            <RenderCard
              realData={""}
              renderData={item}
              selectedData={onselectYellow}
            />
          )}
          title={"Select Yellow Food"}
          type={"yellow"}
          visiblity={yellowVisible}
          changeVisibility={closeModal}
        />
      </View>
      <View style={styles.btn}>
        {/* <ImageBackground
          style={styles.button}
          source={require("../assets/images/banner.png")}
          // source={30}
          resizeMode="cover"
        > */}
        <TouchableOpacity style={styles.button} onPress={() => clearData()}>
          <Text style={{color: 'white'}}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    height: responsiveHeight(5), // 50% of window height
    width: responsiveWidth(25),
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
  header: {
    shadowColor: "#000",
    textAlign: "center",
    fontSize: 20,

    justifyContent: "center",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  btn: {
    color: '#FFFFFF',
    height: responsiveHeight(10), // 50% of window height
    width: responsiveWidth(92),
    flexDirection: "row",

    alignSelf: "center",
    justifyContent: "space-between",
  },
});

export default SelectFood;