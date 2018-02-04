import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Font } from "expo";
import LifeScreen from "./src/counter/counter";
import Settings from "./src/settings/settings";

export default class App extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      Helvetica: require("./src/resources/fonts/HELR65W.ttf"),
      "Helvetica-Bold": require("./src/resources/fonts/HELR65W.ttf"),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        {this.state.fontLoaded ? <LifeScreen startingLife={20} /> : null}
      </View>
    );
  }
}
