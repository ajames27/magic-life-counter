import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import LifeScreen from "./src/counter/counter";

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden={true} />
                <LifeScreen startingLife={20} />
            </View>
        );
    }
}
