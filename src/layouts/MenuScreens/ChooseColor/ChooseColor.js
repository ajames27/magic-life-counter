import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import PropTypes from "prop-types";
import { SimpleLineIcons } from "@expo/vector-icons";
import Expo from "expo";
import { colorChips } from "../../../../AppConfig/constants";

class ChooseColor extends Component {
  state = {
    selectedColor: "",
  };

  handleChange = color => {
    this.setState(prevState => ({ selectedColor: prevState.selectedColor === color ? "" : color }));
  };

  handleSubmit = () => {
    if (this.state.selectedColor) {
      Expo.SecureStore.setItemAsync("color", this.state.selectedColor).then(() =>
        this.props.navigation.navigate("Home")
      );
    } else {
      Alert.alert("Select a color by tapping one of the boxes");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Pick a color</Text>
          <Text style={styles.descriptionText}>
            This color will be displayed behind your life total.
          </Text>
          <View style={styles.chipContainer}>
            {colorChips.map(color => (
              <TouchableWithoutFeedback key={color} onPress={() => this.handleChange(color)}>
                <View
                  style={{
                    width: this.state.selectedColor === color ? 44 : 50,
                    height: this.state.selectedColor === color ? 44 : 50,
                    backgroundColor: color,

                    borderRadius: 5,
                    margin: this.state.selectedColor === color ? 9 : 6,
                  }}
                />
              </TouchableWithoutFeedback>
            ))}
          </View>
          <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
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

ChooseColor.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#33273E",
    flex: 1,
  },
  textContainer: {
    width: "66%",
    alignItems: "center",
    justifyContent: "center",
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
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
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

export default ChooseColor;
