import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text, View, Dimensions } from "react-native";
import lightTheme from "../styles/lightTheme";
import darkTheme from "../styles/darkTheme";
let interval;
const { height: screenHeight } = Dimensions.get("window");

export const IncrementButton = ({ playerId, lifeTotal, lifeHandler, isDarkTheme }) => {
  const { button, buttonRight, score, rightDigit } = isDarkTheme ? darkTheme : lightTheme;
  const handleChange = () => lifeHandler({ action: "INCREMENT", playerId, value: 1 });
  return (
    <TouchableHighlight
      style={[button, buttonRight]}
      underlayColor="#a9a9a9"
      onPress={handleChange}
      onLongPress={() => {
        interval = setInterval(handleChange, 200);
      }}
      onPressOut={() => clearInterval(interval)}
    >
      <Text style={[score, rightDigit]}>
        {lifeTotal < 0 || lifeTotal > 9
          ? lifeTotal.toString().slice(1, 2)
          : lifeTotal.toString().slice(0, 1)}
      </Text>
    </TouchableHighlight>
  );
};

export const DecrementButton = ({ playerId, lifeTotal, lifeHandler, isDarkTheme }) => {
  const { button, buttonLeft, score, leftDigit } = isDarkTheme ? darkTheme : lightTheme;
  const handleChange = () => lifeHandler({ action: "DECREMENT", playerId, value: 1 });
  return (
    <TouchableHighlight
      style={[button, buttonLeft]}
      underlayColor="#a9a9a9"
      onPress={handleChange}
      onLongPress={() => {
        interval = setInterval(handleChange, 200);
      }}
      onPressOut={() => clearInterval(interval)}
    >
      <Text style={[score, leftDigit]}>
        {lifeTotal < 0 || lifeTotal > 9 ? lifeTotal.toString().slice(0, 1) : "0"}
      </Text>
    </TouchableHighlight>
  );
};

export const ButtonDivider = () => (
  <View style={{ width: 1, height: screenHeight / 2 - 150, backgroundColor: "#a9a9a9" }} />
);

IncrementButton.propTypes = {
  playerId: PropTypes.number,
  lifeTotal: PropTypes.number,
  lifeHandler: PropTypes.func,
  isDarkTheme: PropTypes.bool,
};
DecrementButton.propTypes = {
  playerId: PropTypes.number,
  lifeTotal: PropTypes.number,
  lifeHandler: PropTypes.func,
  isDarkTheme: PropTypes.bool,
};
