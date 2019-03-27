import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import React from "react";

import LoginScreen from "../components/Login";
import ProductList from "../components/ProductList";
import { Icon } from "native-base";
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "one-of-one"
    }
  }
);

export default ProfileStack;
