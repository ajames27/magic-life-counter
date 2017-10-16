import { StyleSheet, Dimensions } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#dddddd",
    },
    counterContainer: {
        flexDirection: "row",
        shadowColor: "rgba(100, 100, 100, 0.9)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        borderRadius: 20,
    },
    score: {
        backgroundColor: "transparent",
        fontSize: 200,
        fontFamily: "Helvetica-Bold",
        alignSelf: "center",
    },
    flip: {
        transform: [{ rotate: "180deg" }],
    },
    rightDigit: {
        marginRight: 25,
    },
    leftDigit: {
        marginLeft: 25,
    },
    button: {
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: screenHeight / 2 - 150,
    },
    buttonLeft: {
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderRightWidth: StyleSheet.hairlineWidth * 3,
        borderRightColor: "#a9a9a9",
    },
    buttonRight: {
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },

    menuBar: {
        height: 65,
        width: screenWidth,
        backgroundColor: "#f9f9f9",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        margin: "auto",
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
    },
    topFiveContainer: {
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "5%",
    },
    bottomFiveContainer: {
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        marginLeft: "15%",
        marginRight: "15%",
        marginBottom: "5%",
    },
    fiveText: {
        fontFamily: "Helvetica",
        fontSize: 20,
        fontWeight: "500",
    },
});
