import { StackNavigator } from "react-navigation";
import Home from "../layouts/MenuScreens/Home/Home";
import ChooseColor from "../layouts/MenuScreens/ChooseColor/ChooseColor";
import PickName from "../layouts/MenuScreens/PickName/PickName";
import LifeScreen from "../counter/counter";
import Multiplayer from "../layouts/GameScreens/multiplayer/multiPContainer";

const navigationOptions = ({ navigation }) => ({
  header: null,
});

const RootStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions,
  },
  LifeScreen: {
    screen: LifeScreen,
    navigationOptions,
  },
  PickName: {
    screen: PickName,
    navigationOptions,
  },
  Multiplayer: {
    screen: Multiplayer,
    navigationOptions,
  },
  ChooseColor: {
    screen: ChooseColor,
    navigationOptions,
  },
});

export default RootStack;
