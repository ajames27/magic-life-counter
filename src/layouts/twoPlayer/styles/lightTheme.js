import { StyleSheet, Dimensions, Platform } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#dddddd",
  },
  counterContainer: {
    flexDirection: "row",
    shadowColor: "rgba(100, 100, 100, 0.9)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    borderRadius: 20,
    elevation: 4,
    marginTop: "28%",
  },
  score: {
    backgroundColor: "transparent",
    fontSize: 110,
    fontFamily: "Helvetica-Bold",
    alignSelf: "center",
  },
  rightDigit: {
    marginRight: 20,
    marginTop: Platform.OS === "android" ? 15 : 0,
  },
  leftDigit: {
    marginLeft: 20,
    marginTop: Platform.OS === "android" ? 15 : 0,
  },
  button: {
    width: 85,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: screenHeight / 2 - 255,
  },
  buttonLeft: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  buttonRight: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },

  menuBarContainer: {
    height: 155,
    width: screenWidth - 20,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "auto",
    marginBottom: 30,
    borderRadius: 15,
  },
  menuItem: {
    marginLeft: 10,
    marginRight: 10,
  },

  fiveButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 28,
    width: 45,
    backgroundColor: "#fff",
    shadowColor: "rgba(100, 100, 100, 0.9)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    borderRadius: 15,
    elevation: 2,
    marginTop: "8%",
  },
  topFiveContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    marginLeft: "10%",
    marginRight: "10%",
  },
  bottomFiveContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "5%",
  },
  fiveText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    fontWeight: "500",
  },
});
