import React, { Component } from "react";
import Expo from "expo";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";

import { MenuBar } from "./components/menuBar";

import { IncrementButton, DecrementButton, ButtonDivider } from "./components/singleButtons";

import { FiveIncrement, FiveDecrement } from "./components/fiveButtons";

export default class LinkedMultiplayerContainer extends Component {
  render() {
    const { lifeHandler, toggleTheme, lifeTotals, isDarkTheme, toggleColorOverlay } = this.props;
    const { container, flip, counterContainer, fiveContainer } = isDarkTheme
      ? darkTheme
      : lightTheme;
    const playerSharedProps = {
      lifeHandler,
      isDarkTheme,
    };
    const playerOneProps = {
      playerId: 1,
      lifeTotal: lifeTotals[0],
    };
    const playerTwoProps = {
      playerId: 2,
      lifeTotal: lifeTotals[1],
      size: "small",
    };
    const playerThreeProps = {
      playerId: 3,
      lifeTotal: lifeTotals[2],
      size: "small",
    };
    const playerFourProps = {
      playerId: 4,
      lifeTotal: lifeTotals[3],
      size: "small",
    };

    return (
      <View style={container}>
        <Expo.KeepAwake />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={[counterContainer]}>
            <DecrementButton {...playerTwoProps} {...playerSharedProps} />
            <ButtonDivider size="small" />
            <IncrementButton {...playerTwoProps} {...playerSharedProps} />
          </View>
          <View style={[counterContainer]}>
            <DecrementButton {...playerThreeProps} {...playerSharedProps} />
            <ButtonDivider size="small" />
            <IncrementButton {...playerThreeProps} {...playerSharedProps} />
          </View>
          <View style={[counterContainer]}>
            <DecrementButton {...playerFourProps} {...playerSharedProps} />
            <ButtonDivider size="small" />
            <IncrementButton {...playerFourProps} {...playerSharedProps} />
          </View>
        </View>

        <View style={[counterContainer]}>
          <DecrementButton {...playerOneProps} {...playerSharedProps} />
          <ButtonDivider />
          <IncrementButton {...playerOneProps} {...playerSharedProps} />
        </View>
        <View style={fiveContainer}>
          <FiveIncrement playerId={1} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
          <View style={{ flex: 0.5 }} />
          <FiveDecrement playerId={1} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
        </View>
        <MenuBar
          lifeHandler={lifeHandler}
          isDarkTheme={isDarkTheme}
          toggleTheme={toggleTheme}
          toggleColorOverlay={toggleColorOverlay}
        />
      </View>
    );
  }
}

LinkedMultiplayerContainer.propTypes = {
  isDarkTheme: PropTypes.bool,
  lifeHandler: PropTypes.func,
  toggleTheme: PropTypes.func,
  lifeTotals: PropTypes.array,
  colorOverlayVisible: PropTypes.bool,
  toggleColorOverlay: PropTypes.func,
};
