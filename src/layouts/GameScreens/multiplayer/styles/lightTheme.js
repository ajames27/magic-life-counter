import { StyleSheet, Dimensions, Platform } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#dddddd",
    padding: "2%",
  },
  counterContainer: {
    flexDirection: "row",
    shadowColor: "rgba(100, 100, 100, 0.9)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    borderRadius: 20,
    elevation: 4,
  },
  flip: {
    transform: [{ rotate: "180deg" }],
  },
  score: {
    backgroundColor: "transparent",
    fontSize: 200,
    fontFamily: "Helvetica-Bold",
    alignSelf: "center",
  },
  rightDigit: {
    marginRight: 25,
    marginTop: Platform.OS === "android" ? 15 : 0,
  },
  leftDigit: {
    marginLeft: 25,
    marginTop: Platform.OS === "android" ? 15 : 0,
  },
  smallScore: {
    backgroundColor: "transparent",
    fontSize: 84,
    fontFamily: "Helvetica-Bold",
    alignSelf: "center",
    fontWeight: "bold",
  },
  smallRightDigit: {
    marginRight: 12,
    marginTop: Platform.OS === "android" ? 15 : 0,
  },
  smallLeftDigit: {
    marginLeft: 12,
    marginTop: Platform.OS === "android" ? 15 : 0,
  },
  button: {
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: screenHeight / 2 - 150,
  },
  buttonRight: {
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonLeft: {
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  smallButton: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: screenHeight / 3 - 155,
  },
  smallButtonRight: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  smallButtonLeft: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },

  menuBarContainer: {
    height: 65,
    width: screenWidth,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "auto",
    shadowColor: "rgba(100, 100, 100, 0.9)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  menuItem: {
    marginLeft: 10,
    marginRight: 10,
  },

  fiveButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 80,
    backgroundColor: "#fff",
    shadowColor: "rgba(100, 100, 100, 0.9)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    borderRadius: 10,
    elevation: 2,
  },
  fiveContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    marginLeft: "15%",
    marginRight: "15%",
  },
  fiveText: {
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "500",
  },
});
