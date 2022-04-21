import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import { COLORS, SIZES, FONTS, icons } from "../constants";

const HeaderBar = ({ right, screen, data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        height: 90,
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.radius,
        alignItems: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.back_arrow}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.black,
          }}
        />
        <Text style={{ marginLeft: SIZES.base, ...FONTS.h2 }}>Back</Text>
      </TouchableOpacity>

      {right && (
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => navigation.navigate(screen, data)}>
            <AntDesign name="calendar" size={35} color={COLORS.secondary} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
