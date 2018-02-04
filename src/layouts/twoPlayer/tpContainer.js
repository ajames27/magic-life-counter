import React, { Component } from "react";
import Expo from "expo";
import PropTypes from "prop-types";
import { View } from "react-native";

import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";

import { MenuBar } from "./components/menuBar";

import {
  CounterOneDecrement,
  CounterOneIncrement,
  CounterTwoDecrement,
  CounterTwoIncrement,
  ButtonDivider,
} from "./components/singleButtons";

import { FiveIncrement, FiveDecrement } from "./components/fiveButtons";

export default class TwoPlayer extends Component {
  render() {
    const { lifeHandler, toggleTheme, counterOne, counterTwo, isDarkTheme } = this.props;
    const { container, counterContainer, topFiveContainer, bottomFiveContainer } = isDarkTheme
      ? darkTheme
      : lightTheme;

    return (
      <View style={container}>
        <Expo.KeepAwake />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View style={counterContainer}>
              <CounterOneDecrement
                counterOne={counterOne}
                lifeHandler={lifeHandler}
                isDarkTheme={isDarkTheme}
              />
              <ButtonDivider />
              <CounterOneIncrement
                counterOne={counterOne}
                lifeHandler={lifeHandler}
                isDarkTheme={isDarkTheme}
              />
            </View>
            <View style={topFiveContainer}>
              <FiveIncrement playerId={1} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
              <View style={{ flex: 0.5 }} />
              <FiveDecrement playerId={1} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
            </View>
          </View>
          <View style={{ flex: 0.4 }} />
          <View>
            <View style={counterContainer}>
              <CounterTwoDecrement
                counterTwo={counterTwo}
                lifeHandler={lifeHandler}
                isDarkTheme={isDarkTheme}
              />
              <ButtonDivider />
              <CounterTwoIncrement
                counterTwo={counterTwo}
                lifeHandler={lifeHandler}
                isDarkTheme={isDarkTheme}
              />
            </View>
            <View style={bottomFiveContainer}>
              <FiveIncrement playerId={2} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
              <View style={{ flex: 0.5 }} />
              <FiveDecrement playerId={2} isDarkTheme={isDarkTheme} lifeHandler={lifeHandler} />
            </View>
          </View>
        </View>
        <MenuBar lifeHandler={lifeHandler} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </View>
    );
  }
}

TwoPlayer.propTypes = {
  isDarkTheme: PropTypes.bool,
  lifeHandler: PropTypes.func,
  toggleTheme: PropTypes.func,
  counterOne: PropTypes.number,
  counterTwo: PropTypes.number,
};
