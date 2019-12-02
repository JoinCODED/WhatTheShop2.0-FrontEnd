import { createStackNavigator } from "react-navigation-stack";

// Components
import List from "../components/List";

const LolStack = createStackNavigator(
  {
    List: List
  },
  {
    initialRouteName: "Lol",
    defaultNavigationOptions: {
      title: "Dinosaur List"
    }
  }
);

export default LolStack;
