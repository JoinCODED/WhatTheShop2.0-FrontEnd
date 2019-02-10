import { createStackNavigator, createAppContainer } from "react-navigation";

import BottomTab from "./BottomTab";
import WelcomePage from "../components/Welcome";

const MyNav = createStackNavigator(
  {
    BottomTab: BottomTab,
    Welcome: { screen: WelcomePage }
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(MyNav);

export default AppContainer;
