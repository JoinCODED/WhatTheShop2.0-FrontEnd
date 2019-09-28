import { createStackNavigator } from "react-navigation-stack";

// Components
// import LolScreen from "../components/Lol";
import BanakList from "../components/BanakList";
import BanakDetail from "../components/BanakDetail";
import Register from "../components/Register";
import Login from "../components/Login";

const BanakStack = createStackNavigator(
  {
    BanakList: BanakList,
    BanakDetail: BanakDetail,
    Register: Register,
    Login: Login
  },
  {
    // defaultNavigationOptions: {
    //   title: "WhatTheShop",
    initialRouteName: "BanakList"
  }
);

export default BanakStack;
