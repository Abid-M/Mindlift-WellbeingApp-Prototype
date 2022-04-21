import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal,
  Animated,
  TextInput,
} from "react-native";
import Toast from "react-native-root-toast";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { HeaderBar } from "../components";
import { dummyData, COLORS, SIZES, FONTS, icons } from "../constants";
import storage from "../components/storage";
const Stats = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);
  const [status, setStatus] = React.useState(dummyData.status);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState([]);
  const [currentDate, setCurrentDate] = React.useState(null);
  const [streak, setStreak] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [number, onChangeNumber] = React.useState(null);
  const [view, onChangeView] = React.useState(null)
  const [watch, onChangeWatch] = React.useState(null)

  
  React.useEffect(async () => {
    let data = await storage.retrieve();
    let watchs = 0;
    let views = 0;
    if (data) {
      if (data.videos) {
        watchs = data.videos.length;
      }
      if (data.articles) {
        views = data.articles.length;
      }
    }

    onChangeView(views)
    onChangeWatch(watchs)

    // let toast = Toast.show(
    //   `Number of article Viewed: ${view} \n Number of videos watched: ${watch}`
    //   ,{
    //     visible: true
    //   }
    // );
    // setTimeout(function hideToast() {
    //   Toast.hide(toast);
    // }, 2000);
  }, []);

  function calendar() {
    const onDateChange = (date) => {
      setCurrentDate(date);
      setModalVisible(!modalVisible);
    };

    let customDatesStyles = [];
    let i = 0;
    // while (day.add(1, "day").isSame(today, "month")) {

    while (i < selectedDate.length) {
      customDatesStyles.push({
        date: selectedDate[i],

        style: {
          backgroundColor: COLORS.secondary,
        },
        textStyle: { color: "white" }, // sets the font color
        containerStyle: [], // extra styling for day container
        allowDisabled: true, // allow custom style to apply to disabled dates
      });
      i++;
    }

    return (
      <>
        <View
          style={{
            // width: 400,
            // height: 450,
            marginRight: "auto",
            marginLeft: "auto",
            borderRadius: 10,
            backgroundColor: COLORS.white,
          }}
        >
          <CalendarPicker
            selectedDayColor={COLORS.secondary}
            selectedDayTextColor={COLORS.white}
            onDateChange={(date) => onDateChange(date)}
            customDatesStyles={customDatesStyles}
          />
        </View>
      </>
    );
  }


  function toFixed(num, fixed) {
    try {
       var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
        return num.toString().match(re)[0];
    }
    catch (e) {
      console.error(e)
    }
  }

  function renderHeader() {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: 10,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...styles.shadow,
        }}
      >
        {/* Currency */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: SIZES.base }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {index == 0
                ? streak + " " + item.unit
                : index == 1
                ? selectedDate.length + " " + item.unit
                : toFixed(minutes / 60, 0) +
                  " h " +
                  (minutes - toFixed(minutes / 60, 0) * 60) +
                  " m"}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body3,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {item.title}
            </Text>
          </View>
        </View>

        {/* Value */}
        {/* <View style={{ marginTop: SIZES.radius }}>
                <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
                <Text style={{ color: item.type == "I" ? COLORS.green : COLORS.red, ...FONTS.h3 }}>{item.changes}</Text>
            </View> */}
      </TouchableOpacity>
    );

    return (
      <View
        style={{
          width: "100%",
          height: 150,
        }}
      >
        <View>
          <FlatList
            contentContainerStyle={{ marginTop: SIZES.base }}
            data={status}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function Model() {
    const styles = StyleSheet.create({
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: COLORS.secondary,
      },
      textStyle: {
        width: 80,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
      },
    });
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ ...FONTS.h2, color: COLORS.gray, margin: "4%" }}>
                Manual Entry
              </Text>
              <Text
                style={{ ...FONTS.body4, color: COLORS.gray, margin: "4%" }}
              >
                Enter how long you meditated for?
              </Text>

              <TextInput
                style={{
                  backgroundColor: COLORS.white,
                  color: COLORS.black,
                  marginVertical: "8%",
                  borderRadius: 25,
                  borderWidth: 2,
                  width: 230,
                  padding: 8,
                  borderColor: COLORS.secondary,
                }}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Time in Minutes"
                placeholderTextColor={COLORS.gray}
                keyboardType="numeric"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "80%",
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    onChangeNumber(null);
                  }}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    if (selectedDate.length == 0) {
                      setSelectedDate([new Date(currentDate.toString())]);
                      setStreak(1);
                    } else {
                      let array = [
                        ...selectedDate,
                        new Date(currentDate.toString()),
                      ];
                      let index = 1;
                      var uniq = array.reduce(function (a, b) {
                        if (a.toString().indexOf(b.toString()) < 0) a.push(b);
                        return a;
                      }, []);
                      let lastDate = uniq[uniq.length - 1];
                      while (
                        index < uniq.length &&
                        lastDate.getTime() -
                          uniq[uniq.length - 1 - index].getTime() ==
                          86400000
                      ) {
                        index++;
                        lastDate = uniq[uniq.length - index];
                      }
                      setStreak(index);
                      setSelectedDate(array);
                    }
                    setMinutes(parseInt(number) + parseInt(minutes));
                    setModalVisible(!modalVisible);
                    onChangeNumber(null);
                  }}
                >
                  <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray1,
      }}
    >
      <HeaderBar />

      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: SIZES.padding,
        }}
      >
        {/* Articles */}
        {renderHeader()}
        {calendar()}
        {Model()}
        <Toast
            visible={true}
            position={660}
            shadow={false}
            animation={false}
            hideOnPress={false}
        >{`Number of Article(s) Viewed: ${view} \n Number of Video(s) Watched: ${watch}`}</Toast>
        {console.log(selectedDate)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Stats;
