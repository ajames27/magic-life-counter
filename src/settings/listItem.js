import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const ListItem = text => {
  return (
    <View
      style={{
        flex: 1,
        height: 40,
        width: screenWidth,
        borderColor: "#000",
        borderBottomWidth: 1,
        justifyContent: "center",
      }}>
      <Text style={{ marginLeft: 10 }}>{text.key}</Text>
    </View>
  );
};

export default ListItem;
