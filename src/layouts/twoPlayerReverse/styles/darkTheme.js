import { StyleSheet } from "react-native";
import lightTheme from "./lightTheme";

const darkTheme = {
  container: {
    ...StyleSheet.flatten([lightTheme.container, { backgroundColor: "#000" }]),
  },
  button: {
    ...StyleSheet.flatten([lightTheme.button, { backgroundColor: "#333" }]),
  },
  fiveButton: {
    ...StyleSheet.flatten([lightTheme.fiveButton, { backgroundColor: "#333", shadowOpacity: 0 }]),
  },

  menuBarContainer: {
    ...StyleSheet.flatten([lightTheme.menuBarContainer, { backgroundColor: "#333" }]),
  },
  fiveText: {
    ...StyleSheet.flatten([lightTheme.fiveText, { color: "#ddd" }]),
  },
  score: {
    ...StyleSheet.flatten([lightTheme.score, { color: "#ccc" }]),
  },
  counterContainer: {
    ...StyleSheet.flatten([lightTheme.counterContainer, { shadowOpacity: 0 }]),
  },
};

export default { ...lightTheme, ...darkTheme };
