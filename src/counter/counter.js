import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

class LifeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counterOne: this.props.startingLife,
            counterTwo: this.props.startingLife,
            isDarkTheme: true,
        };
    }

    updateLifeCounter = (action, playerId, lifeChange) => {
        const { counterOne, counterTwo } = this.state;
        if (action === "reset") {
            this.setState({ counterOne: this.props.startingLife, counterTwo: this.props.startingLife });
        }
        if (playerId === 1) {
            if (action === "decrement") {
                if (counterOne - lifeChange < -8) {
                    this.setState({
                        counterTwo: -9,
                    });
                } else {
                    this.setState({
                        counterOne: counterOne - lifeChange,
                    });
                }
            }
            if (action === "increment") {
                if (counterOne + lifeChange > 98) {
                    this.setState({ counterOne: 99 });
                } else {
                    this.setState({
                        counterOne: counterOne + lifeChange,
                    });
                }
            }
        }
        if (playerId === 2) {
            if (action === "decrement") {
                if (counterTwo - lifeChange < -8) {
                    this.setState({
                        counterTwo: -9,
                    });
                } else
                    this.setState({
                        counterTwo: counterTwo - lifeChange,
                    });
            }
            if (action === "increment") {
                if (counterTwo + lifeChange > 98) {
                    this.setState({
                        counterTwo: 99,
                    });
                } else {
                    this.setState({
                        counterTwo: counterTwo + lifeChange,
                    });
                }
            }
        }
    };

    render() {
        const {
            container,
            score,
            flip,
            button,
            rightDigit,
            leftDigit,
            buttonLeft,
            buttonRight,
            counterContainer,
            topFiveContainer,
            topFiveMinus,
            topFivePlus,
            bottomFiveContainer,
            bottomFiveMinus,
            bottomFivePlus,
            fiveButton,
            fiveText,
            menuBar,
            menuItem,
        } = this.state.isDarkTheme ? darkTheme : lightTheme;
        const { counterOne, counterTwo } = this.state;

        const hello = () => setInterval(this.updateLifeCounter("decrement", 2, 5), 200);

        const counterOneLeft = (
            <TouchableOpacity style={[button, buttonLeft]} onPress={() => this.updateLifeCounter("decrement", 1, 1)}>
                <Text style={[score, leftDigit]}>
                    {this.state.counterOne < 0 || this.state.counterOne > 9 ? counterOne.toString().slice(0, 1) : "0"}
                </Text>
            </TouchableOpacity>
        );

        const counterOneRight = (
            <TouchableOpacity style={[button, buttonRight]} onPress={() => this.updateLifeCounter("increment", 1, 1)}>
                <Text style={[score, rightDigit]}>
                    {this.state.counterOne < 0 || this.state.counterOne > 9
                        ? counterOne.toString().slice(1, 2)
                        : counterOne.toString().slice(0, 1)}
                </Text>
            </TouchableOpacity>
        );

        const counterTwoLeft = (
            <TouchableOpacity style={[button, buttonLeft]} onPress={() => this.updateLifeCounter("decrement", 2, 1)}>
                <Text style={[score, leftDigit]}>
                    {this.state.counterTwo < 0 || this.state.counterTwo > 9 ? counterTwo.toString().slice(0, 1) : "0"}
                </Text>
            </TouchableOpacity>
        );

        const counterTwoRight = (
            <TouchableOpacity style={[button, buttonRight]} onPress={() => this.updateLifeCounter("increment", 2, 1)}>
                <Text style={[score, rightDigit]}>
                    {this.state.counterTwo < 0 || this.state.counterTwo > 9
                        ? counterTwo.toString().slice(1, 2)
                        : counterTwo.toString().slice(0, 1)}
                </Text>
            </TouchableOpacity>
        );

        return (
            <View style={container}>
                <View style={[topFiveContainer, flip]}>
                    <TouchableOpacity style={[fiveButton]} onPress={() => this.updateLifeCounter("increment", 1, 5)}>
                        <Text style={fiveText}>+5</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 0.5 }} />
                    <TouchableOpacity style={[fiveButton]} onPress={() => this.updateLifeCounter("decrement", 1, 5)}>
                        <Text style={fiveText}>-5</Text>
                    </TouchableOpacity>
                </View>
                <View style={[counterContainer, flip]}>
                    {counterOneLeft}
                    {counterOneRight}
                </View>
                <View style={menuBar}>
                    <TouchableOpacity onPress={() => this.updateLifeCounter("reset")}>
                        <Ionicons
                            style={menuItem}
                            name="md-refresh"
                            size={48}
                            color={this.state.isDarkTheme ? "#ccc" : "#000"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ isDarkTheme: !this.state.isDarkTheme })}>
                        <MaterialCommunityIcons
                            style={menuItem}
                            name="theme-light-dark"
                            size={48}
                            color={this.state.isDarkTheme ? "#ccc" : "#000"}
                        />
                    </TouchableOpacity>
                </View>
                <View style={counterContainer}>
                    {counterTwoLeft}
                    {counterTwoRight}
                </View>

                <View style={bottomFiveContainer}>
                    <TouchableOpacity style={[fiveButton]} onPress={() => this.updateLifeCounter("increment", 2, 5)}>
                        <Text style={fiveText}>+5</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 0.5 }} />
                    <TouchableOpacity
                        style={[fiveButton]}
                        onPress={() => this.updateLifeCounter("decrement", 2, 5)}
                        onLongPress={() => hello()}
                        onPressOut={clearInterval(hello)}
                    >
                        <Text style={fiveText}>-5</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export default LifeScreen;
