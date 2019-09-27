import { createStackNavigator } from "react-navigation-stack";

// Components
// import LolScreen from "../components/Lol";
import BanakList from "../components/BanakList";
import BanakDetail from "../components/BanakDetail";
import Register from "../components/Register";

const BanakStack = createStackNavigator(
  {
    BanakList: BanakList,
    BanakDetail: BanakDetail,
    Register: Register
  },
  {
    // defaultNavigationOptions: {
    //   title: "WhatTheShop",
    initialRouteName: "BanakList"
  }
);

export default BanakStack;
