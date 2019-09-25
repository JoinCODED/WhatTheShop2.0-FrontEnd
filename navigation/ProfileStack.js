import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import LoginScreen from "../components/Login";
import BanakList from "../components/BanakList";
import Register from "../components/Register";

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    Login: LoginScreen,
    BanakList: BanakList,
    Register: Register
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
