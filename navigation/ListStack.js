import { createStackNavigator } from "react-navigation";
import React from "react";
import ClassificationScreen from "../components/ClassificationList";
import ListScreen from "../components/ShopList";
import DetailScreen from "../components/ShopDetail";
import CartScreen from "../components/Cart";
import Log from "../components/UserStatus";
import LoginScreen from "../components/Login";
import ProfileScreen from "../components/Profile";
import TabBar from "../components/TabBar";
const ListStack = createStackNavigator(
  {
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
    initialRouteName: "Classification",
    defaultNavigationOptions: {
      // headerRight: <Log />,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#BC8F8F"
      },
      headerTitleStyle: {
        fontFamily: "American Typewriter",

        fontWeight: "300",
        fontSize: 35
      }
    }
  }
);

export default ListStack;
