import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import ListItem from "./listItem";

class Settings extends Component {
  state = {};
  render() {
    return (
      <FlatList data={[{ key: "a" }, { key: "b" }]} renderItem={item => <ListItem text={item} />} />
    );
  }
}

export default Settings;
