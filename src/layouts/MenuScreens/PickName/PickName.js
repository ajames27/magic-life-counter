import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { SecureStore } from "expo";
import { PropTypes } from "prop-types";

class PickName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleChange = username => {
    this.setState({ username });
  };

  validateUsername = () => {
    const { navigation } = this.props;
    const { username } = this.state;
    const regex = /^\w+$/;
    if (username.length < 3) {
      Alert.alert("Username must be at least 3 characters");
    } else if (!regex.test(username)) {
      Alert.alert(
        "Your username may only contain alphanumeric characters ( A-Z/0-9 ) and underscores ( _ )."
      );
    } else {
      SecureStore.setItemAsync("username", JSON.stringify(username));
      navigation.navigate("ChooseColor");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View
          style={{
            width: "66%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.heading}>Pick a username</Text>
          <Text style={styles.descriptionText}>
            Your username will be displayed to others while playing
          </Text>
          <TextInput
            enablesReturnKeyAutomatically
            style={styles.input}
            textAlign={"center"}
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.username}
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
      </KeyboardAvoidingView>
    );
  }
}

PickName.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#33273E",
    flex: 1,
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 4,
    fontWeight: "bold",
  },
  descriptionText: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 22,
    textAlign: "center",
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
  btnText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },
  btnIcon: {
    marginTop: 3.5,
    marginLeft: 12,
  },
});

export default PickName;
