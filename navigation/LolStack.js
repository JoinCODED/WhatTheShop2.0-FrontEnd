import { createStackNavigator } from "react-navigation";

import LolScreen from "../components/Lol";

const LolStack = createStackNavigator(
  {
    Lol: LolScreen
  },
  {
    defaultNavigationOptions: {
      title: "one-of-one"
    }
  }
);

export default LolStack;
