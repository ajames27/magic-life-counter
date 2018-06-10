import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Expo from "expo";
import PropTypes from "prop-types";
import { Overlay } from "react-native-elements";

class Home extends Component {
  // componentDidMount() {
  //   Expo.SecureStore.getItemAsync("username").then(console.warn);
  //   Expo.SecureStore.getItemAsync("color").then(console.warn);
  // }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Join Room</Text>
          <TextInput
            enablesReturnKeyAutomatically
            style={styles.input}
            textAlign={"center"}
            autoCapitalize="none"
            autoCorrect={false}
            value={""}
            onChangeText={username => this.setState({ username })}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={this.validateUsername}>
            <Text style={styles.btnText}>Continue</Text>
            <SimpleLineIcons
              name="arrow-right-circle"
              color="#fff"
              size={25}
              style={styles.btnIcon}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.heading}>________________</Text>
        </View>
        <View style={styles.gameOptions}>
          <TouchableOpacity style={styles.createBtn}>
            <Text style={styles.createBtnText}>Create new room</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push("LifeScreen")} style={styles.createBtn}>
            <Text style={styles.createBtnText}>Play offline</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#33273E",
    flex: 1,
  },
  textContainer: {
    width: "66%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    fontSize: 18,
    color: "#222",
    width: 210,
    height: 42,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderWidth: StyleSheet.hairlineWidth * 6,
    borderColor: "rgba(255, 255, 255, 1)",
  },

  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 48,
    width: 210,
    backgroundColor: "rgba(250, 250, 250, 0.5)",
    margin: 22,
    borderRadius: 22,
    borderWidth: StyleSheet.hairlineWidth * 6,
    borderColor: "#fff",
  },
  createBtn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 48,
    width: 280,
    backgroundColor: "rgba(250, 250, 250, 0.5)",
    margin: 22,
    borderRadius: 22,
    borderWidth: StyleSheet.hairlineWidth * 6,
    borderColor: "#fff",
  },
  btnText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },
  createBtnText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  btnIcon: {
    marginTop: 3.5,
    marginLeft: 12,
  },
  gameOptions: {
    marginTop: 40,
  },
});

export default Home;
