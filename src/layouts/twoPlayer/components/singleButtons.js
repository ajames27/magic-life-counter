import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text, View, Dimensions } from "react-native";
import lightTheme from "../styles/lightTheme";
import darkTheme from "../styles/darkTheme";
const { height: screenHeight } = Dimensions.get("window");

export const CounterOneDecrement = ({ counterOne, lifeHandler, isDarkTheme }) => {
  const { button, buttonLeft, score, leftDigit } = isDarkTheme ? darkTheme : lightTheme;

  return (
    <TouchableHighlight
      style={[button, buttonLeft]}
      underlayColor="#a9a9a9"
      onPress={() => lifeHandler({ action: "DECREMENT", playerId: 1, value: 1 })}>
      <Text style={[score, leftDigit]}>
        {counterOne < 0 || counterOne > 9 ? counterOne.toString().slice(0, 1) : "0"}
      </Text>
    </TouchableHighlight>
  );
};

export const CounterOneIncrement = ({ counterOne, lifeHandler, isDarkTheme }) => {
  const { button, buttonRight, score, rightDigit } = isDarkTheme ? darkTheme : lightTheme;
  return (
    <TouchableHighlight
      style={[button, buttonRight]}
      underlayColor="#a9a9a9"
      onPress={() => lifeHandler({ action: "INCREMENT", playerId: 1, value: 1 })}>
      <Text style={[score, rightDigit]}>
        {counterOne < 0 || counterOne > 9 ? (
          counterOne.toString().slice(1, 2)
        ) : (
          counterOne.toString().slice(0, 1)
        )}
      </Text>
    </TouchableHighlight>
  );
};

export const CounterTwoDecrement = ({ counterTwo, lifeHandler, isDarkTheme }) => {
  const { button, buttonLeft, score, leftDigit } = isDarkTheme ? darkTheme : lightTheme;
  return (
    <TouchableHighlight
      style={[button, buttonLeft]}
      underlayColor="#a9a9a9"
      onPress={() => lifeHandler({ action: "DECREMENT", playerId: 2, value: 1 })}>
      <Text style={[score, leftDigit]}>
        {counterTwo < 0 || counterTwo > 9 ? counterTwo.toString().slice(0, 1) : "0"}
      </Text>
    </TouchableHighlight>
  );
};

export const CounterTwoIncrement = ({ counterTwo, lifeHandler, isDarkTheme }) => {
  const { button, buttonRight, score, rightDigit } = isDarkTheme ? darkTheme : lightTheme;
  return (
    <TouchableHighlight
      style={[button, buttonRight]}
      underlayColor="#a9a9a9"
      onPress={() => lifeHandler({ action: "INCREMENT", playerId: 2, value: 1 })}>
      <Text style={[score, rightDigit]}>
        {counterTwo < 0 || counterTwo > 9 ? (
          counterTwo.toString().slice(1, 2)
        ) : (
          counterTwo.toString().slice(0, 1)
        )}
      </Text>
    </TouchableHighlight>
  );
};

export const ButtonDivider = () => (
  <View style={{ width: 1, height: screenHeight / 2 - 255, backgroundColor: "#a9a9a9" }} />
);

const counterOneProps = {
  counterOne: PropTypes.number,
  lifeHandler: PropTypes.func,
  isDarkTheme: PropTypes.bool,
};

const counterTwoProps = {
  counterTwo: PropTypes.number,
  lifeHandler: PropTypes.func,
  isDarkTheme: PropTypes.bool,
};

CounterOneDecrement.propTypes = {
  ...counterOneProps,
};

CounterOneIncrement.propTypes = {
  ...counterOneProps,
};

CounterTwoDecrement.propTypes = {
  ...counterTwoProps,
};

CounterTwoIncrement.propTypes = {
  ...counterTwoProps,
};
