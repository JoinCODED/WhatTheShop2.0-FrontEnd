import { createStackNavigator } from "react-navigation";
import React from "react";
import ClassificationScreen from "../components/ClassificationList";

import DetailScreen from "../components/ShopDetail";
import CartScreen from "../components/Cart";
import WelcomeScreen from "../components/Welcome";
import LoginScreen from "../components/Login";
import ProfileScreen from "../components/Profile";
import TabBar from "../components/TabBar";
const ListStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Classification: ClassificationScreen,
    TabBar: {
      screen: TabBar
    },
    Detail: DetailScreen,
    Cart: CartScreen,
    Login: LoginScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#BC8F8F"
      },
      headerTitleStyle: {
        fontFamily: "American Typewriter",

        fontWeight: "300",
        fontSize: 30
      }
    }
  }
);

export default ListStack;
