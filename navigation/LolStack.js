import { createStackNavigator } from "react-navigation-stack";

// Components
import LolScreen from "../components/Lol";
import BanakList from "../components/BanakList";
import BanakDetail from "../components/BanakDetail";

const LolStack = createStackNavigator(
  {
    Lol: LolScreen,
    BanakList: BanakList,
    BanakDetail: BanakDetail
  },
  {
    // defaultNavigationOptions: {
    //   title: "WhatTheShop",
    initialRouteName: "BanakList"
  }
);

export default LolStack;
