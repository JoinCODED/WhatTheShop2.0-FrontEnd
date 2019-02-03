import { createStackNavigator } from "react-navigation";

import TestScreen from "../components/ShopTest";
import DetailScreen from "../components/ShopDetail";
const TestStack = createStackNavigator(
  {
    Test: TestScreen,
    Detail: DetailScreen
  },
  {
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default TestStack;
