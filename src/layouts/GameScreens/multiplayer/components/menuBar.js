import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import darkTheme from "../styles/darkTheme";
import lightTheme from "../styles/lightTheme";

export const MenuBar = ({ lifeHandler, isDarkTheme, toggleTheme, toggleColorOverlay }) => {
  const { menuItem, menuBarContainer } = isDarkTheme ? darkTheme : lightTheme;
  const color = isDarkTheme ? "#ccc" : "#000";
  return (
    <View style={menuBarContainer}>
      <TouchableOpacity onPress={() => lifeHandler({ action: "RESET" })}>
        <Ionicons style={menuItem} name="md-refresh" size={48} color={color} />
      </TouchableOpacity>
      <TouchableOpacity underlayColor="#a9a9a9" onPress={toggleTheme}>
        <MaterialCommunityIcons style={menuItem} name="theme-light-dark" size={48} color={color} />
      </TouchableOpacity>
      <TouchableOpacity underlayColor="#a9a9a9" onPress={() => {}}>
        <MaterialCommunityIcons style={menuItem} name="settings" size={48} color={color} />
      </TouchableOpacity>
    </View>
  );
};

MenuBar.propTypes = {
  lifeHandler: PropTypes.func,
  isDarkTheme: PropTypes.bool,
  toggleTheme: PropTypes.func,
  toggleColorOverlay: PropTypes.func,
};
