import React, { Component } from "react";
import Expo from "expo";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";

import { MenuBar } from "./components/menuBar";

import { IncrementButton, DecrementButton, ButtonDivider } from "./components/singleButtons";

import { FiveIncrement, FiveDecrement } from "./components/fiveButtons";

export default class TwoPlayer extends Component {
  render() {
    const { lifeHandler, toggleTheme, lifeTotals, isDarkTheme, toggleColorOverlay } = this.props;
    const { container, flip, counterContainer, fiveContainer } = isDarkTheme
      ? darkTheme
      : lightTheme;

    const playerOneProps = {
      playerId: 1,
      lifeTotal: lifeTotals[0],
      lifeHandler,
      isDarkTheme,
    };
    const playerTwoProps = {
      playerId: 2,
      lifeTotal: lifeTotals[1],
      lifeHandler,
      isDarkTheme,
    };

    return (
      <View style={container}>
        <Expo.KeepAwake />
        <View style={[fiveContainer, flip]}>
          <FiveIncrement playerId={2} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
          <View style={{ flex: 0.5 }} />
          <FiveDecrement playerId={2} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
        </View>
        <View style={[counterContainer, flip]}>
          <DecrementButton {...playerTwoProps} />
          <ButtonDivider />
          <IncrementButton {...playerTwoProps} />
        </View>
        <MenuBar
          lifeHandler={lifeHandler}
          isDarkTheme={isDarkTheme}
          toggleTheme={toggleTheme}
          toggleColorOverlay={toggleColorOverlay}
        />
        <View style={[counterContainer]}>
          <DecrementButton {...playerOneProps} />
          <ButtonDivider />
          <IncrementButton {...playerOneProps} />
        </View>
        <View style={fiveContainer}>
          <FiveIncrement playerId={1} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
          <View style={{ flex: 0.5 }} />
          <FiveDecrement playerId={1} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
        </View>
      </View>
    );
  }
}

TwoPlayer.propTypes = {
  isDarkTheme: PropTypes.bool,
  lifeHandler: PropTypes.func,
  toggleTheme: PropTypes.func,
  lifeTotals: PropTypes.array,
  colorOverlayVisible: PropTypes.bool,
  toggleColorOverlay: PropTypes.func,
};
