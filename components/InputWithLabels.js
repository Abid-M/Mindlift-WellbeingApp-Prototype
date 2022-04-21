import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const InputWithLabels = ({
  showLabelCB,
  placeholder,
  bodyText,
  onChangeText,
  onBlur,
  icon,
  onFocus,
  value,
  isError,
  isFocus,
  errorText,
  editable,
  onPress,
  keyboardType,
  minHeight,
  maxHeight,
  numberOfLines,
  multiline,
  returnKeyType,
}) => {
  const [showLabel, setShowLabel] = useState(false);
  useEffect(() => {
    setShowLabel(showLabelCB);
  }, [showLabelCB]);
  if (!icon) {
    return (
      <View>
        <View style={styles.labelContainer}>
          {showLabel && (
            <Text style={styles.label}>{placeholder.toUpperCase()}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={
              isFocus === true
                ? styles.focusStyle
                : isError === true
                ? styles.errorStyle
                : styles.normalStyle
            }
            placeholder={placeholder}
            bodyText = {bodyText}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            onFocus={onFocus}
            editable={editable}
            keyboardType="decimal-pad"
            returnKeyType="done"
            placeholderTextColor={"#000"}
            minHeight={minHeight}
            maxHeight={maxHeight}
            numberOfLines={numberOfLines}
            multiline={multiline}
          />
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      </View>
    );
  }
  return (
    <>
      <View
        style={
          isFocus === true
            ? styles.focusStyleIcon
            : isError === true
            ? styles.errorStyleIcon
            : styles.normalStyleIcon
        }
      >
        <View style={styles.labelContainerIcon}>
          {showLabel && (
            <Text style={styles.label}>{placeholder.toUpperCase()}</Text>
          )}
        </View>
        <View style={styles.inputContainerIcon}>
          <TextInput
            style={styles.inputStylesIcon}
            returnKeyType="done"
            underlineColorAndroid="transparent"
            placeholder={showLabel ? "" : placeholder}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholderTextColor={"#000"}
            minHeight={minHeight}
            maxHeight={maxHeight}
            numberOfLines={numberOfLines}
            multiline={multiline}
          />
          <TouchableOpacity style={styles.iconView} onPress={onPress}>
            <Image
              source={require("../assets/icons/downarrow.png")}
              resizeMode="contain"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.errorTextIcon}>{errorText}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 10,
    zIndex: 1,
    elevation: 0,
    shadowColor: "white",
    position: "absolute",
    top: -12,
    marginTop: wp("3%"),
  },
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
  label: {
    color: "#000",
  },
  inputContainer: {
    zIndex: 0,
  },
  normalStyle: {
    width: wp("92%"),
    height: hp("7%"),
    paddingLeft: wp("4%"),
    color: "#000",
    fontSize: 16,

    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    marginTop: wp("2%"),
    borderRadius: 4,
  },
  focusStyle: {
    width: wp("92%"),
    height: hp("7%"),
    paddingLeft: wp("4%"),
    color: "#000",
    fontSize: 14,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 4,
    marginTop: wp("2%"),
  },
  errorStyle: {
    width: wp("92%"),
    height: hp("7%"),
    paddingLeft: wp("4%"),
    color: "#000",
    fontSize: 16,

    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 4,
    marginTop: wp("2%"),
  },
  errorText: {
    fontSize: 12,
    width: wp("92%"),
    paddingLeft: wp("4%"),
    letterSpacing: 0.2,
    color: "#000",
    marginRight: 0,
    marginTop: wp("0.5%"),
    marginBottom: wp("0.5%"),
  },
  inputContainerIcon: {
    flexDirection: "row",
    zIndex: 0,
  },
  iconView: {
    width: wp("14%"),
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    width: wp("6%"),
    height: hp("6%"),
  },
  inputStylesIcon: {
    width: wp("77%"),
    paddingLeft: wp("4%"),
  },
  normalStyleIcon: {
    width: wp("92%"),
    height: hp("7%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    color: "#fff",
    fontSize: 16,

    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    marginTop: wp("2%"),
  },
  focusStyleIcon: {
    width: wp("92%"),
    height: hp("7%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    color: "#000",
    fontSize: 14,

    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 4,
    marginTop: wp("2%"),
  },
  errorStyleIcon: {
    width: wp("92%"),
    height: hp("7%"),
    paddingLeft: wp("4%"),
    flexDirection: "row",
    justifyContent: "center",
    color: "#000",
    fontSize: 16,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 4,
  },
  errorTextIcon: {
    fontSize: 12,
    width: wp("92%"),
    paddingLeft: wp("4%"),
    letterSpacing: 0.2,
    color: "#000",
    marginRight: 0,
    marginTop: wp("0.5%"),
    marginBottom: wp("0.5%"),
  },
});

export default InputWithLabels;
