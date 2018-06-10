import { StackNavigator } from "react-navigation";
import Home from "../layouts/MenuScreens/Home/Home";
import ChooseColor from "../layouts/MenuScreens/ChooseColor/ChooseColor";
import PickName from "../layouts/MenuScreens/PickName/PickName";
import LifeScreen from "../counter/counter";

const RootStack = StackNavigator({
  LifeScreen: {
    screen: LifeScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  PickName: {
    screen: PickName,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

  ChooseColor: {
    screen: ChooseColor,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
});

export default RootStack;
