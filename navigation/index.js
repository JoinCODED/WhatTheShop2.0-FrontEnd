import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BottomTab from "./BottomTab";

// Components
import Login from "../components/Login";
import Lol from "../components/Lol";

const StackNav = createStackNavigator(
  {
    BottomTab: BottomTab,
    Login: Login,
    Lol: Lol
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(8,80,129)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(8,80,129)"
    }
  }
);
const AppContainer = createAppContainer(StackNav);
export default AppContainer;
