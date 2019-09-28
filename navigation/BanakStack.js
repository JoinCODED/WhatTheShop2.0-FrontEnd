import { createStackNavigator } from "react-navigation-stack";

// Components
// import LolScreen from "../components/Lol";
import BanakList from "../components/BanakList";
import BanakDetail from "../components/BanakDetail";
import Register from "../components/Register";
import Login from "../components/Login";
import profileStore from "../stores/profileStore";
import Profile from "../components/Profile";

const BanakStack = createStackNavigator(
  {
    BanakList: BanakList,
    BanakDetail: BanakDetail,
    Register: Register,
    Login: Login,
    Profile: Profile
  },
  {
    // defaultNavigationOptions: {
    //   title: "WhatTheShop",
    initialRouteName: "BanakList"
  }
);

export default BanakStack;
