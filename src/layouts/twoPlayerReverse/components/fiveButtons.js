import React from "react";
import { TouchableHighlight, Text } from "react-native";
import PropTypes from "prop-types";
import darkTheme from "../styles/darkTheme";
import lightTheme from "../styles/lightTheme";

export const FiveIncrement = ({ lifeHandler, isDarkTheme, playerId }) => {
  const { fiveButton, fiveText } = isDarkTheme ? darkTheme : lightTheme;
  return (
    <TouchableHighlight
      style={[fiveButton]}
      underlayColor="#a9a9a9"
      onPress={() => lifeHandler({ action: "INCREMENT", playerId, value: 5 })}>
      <Text style={fiveText}>+5</Text>
    </TouchableHighlight>
  );
};

export const FiveDecrement = ({ lifeHandler, isDarkTheme, playerId }) => {
  const { fiveButton, fiveText } = isDarkTheme ? darkTheme : lightTheme;
  return (
    <TouchableHighlight
      style={[fiveButton]}
      underlayColor="#a9a9a9"
      onPress={() => lifeHandler({ action: "DECREMENT", playerId, value: 5 })}>
      <Text style={fiveText}>-5</Text>
    </TouchableHighlight>
  );
};

FiveIncrement.propTypes = {
  lifeHandler: PropTypes.func,
  isDarkTheme: PropTypes.bool,
  playerId: PropTypes.number,
};

FiveDecrement.propTypes = {
  ...FiveIncrement.propTypes,
};
