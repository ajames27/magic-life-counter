import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text, View, Dimensions } from "react-native";
import lightTheme from "../styles/lightTheme";
import darkTheme from "../styles/darkTheme";
let interval;
const { height: screenHeight } = Dimensions.get("window");

export const IncrementButton = ({ playerId, lifeTotal, lifeHandler, isDarkTheme, size }) => {
  const {
    button,
    buttonRight,
    score,
    rightDigit,
    smallButton,
    smallButtonRight,
    smallScore,
    smallRightDigit,
  } = isDarkTheme ? darkTheme : lightTheme;
  const handleChange = () => lifeHandler({ action: "INCREMENT", playerId, value: 1 });
  return (
    <TouchableHighlight
      style={size !== "small" ? [button, buttonRight] : [smallButton, smallButtonRight]}
      underlayColor="#a9a9a9"
      onPress={handleChange}
      onLongPress={() => {
        interval = setInterval(handleChange, 200);
      }}
      onPressOut={() => clearInterval(interval)}
    >
      <Text style={size !== "small" ? [score, rightDigit] : [smallScore, smallRightDigit]}>
        {lifeTotal &&
          (lifeTotal < 0 || lifeTotal > 9
            ? lifeTotal.toString().slice(1, 2)
            : lifeTotal.toString().slice(0, 1))}
      </Text>
    </TouchableHighlight>
  );
};

export const DecrementButton = ({ playerId, lifeTotal, lifeHandler, isDarkTheme, size }) => {
  const {
    button,
    buttonLeft,
    score,
    leftDigit,
    smallButton,
    smallButtonLeft,
    smallScore,
    smallLeftDigit,
  } = isDarkTheme ? darkTheme : lightTheme;
  const handleChange = () => lifeHandler({ action: "DECREMENT", playerId, value: 1 });
  return (
    <TouchableHighlight
      style={size !== "small" ? [button, buttonLeft] : [smallButton, smallButtonLeft]}
      underlayColor="#a9a9a9"
      onPress={handleChange}
      onLongPress={() => {
        interval = setInterval(handleChange, 200);
      }}
      onPressOut={() => clearInterval(interval)}
    >
      <Text style={size !== "small" ? [score, leftDigit] : [smallScore, smallLeftDigit]}>
        {lifeTotal < 0 || lifeTotal > 9 ? lifeTotal.toString().slice(0, 1) : "0"}
      </Text>
    </TouchableHighlight>
  );
};

export const ButtonDivider = ({ size }) => (
  <View
    style={{
      width: 1,
      height: size === "small" ? screenHeight / 3 - 150 : screenHeight / 2 - 150,
      backgroundColor: "#a9a9a9",
    }}
  />
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
