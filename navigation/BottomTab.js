import React from "react";
import { Icon } from "native-base";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import PrevOrders from "./PrevListStack";
import ProfileStack from "./ProfileStack";

import ProductList from "./ProductListStack";
import LogOut from "../components/Logout";
import Galleries from "../components/NewListProd/ListCard";

const BottomTab = createBottomTabNavigator(
  {
    ProfileTab: ProfileStack,
    PrevTab: PrevOrders,
    List: ProductList,
    LogOut: LogOut,
    Galleries: Galleries
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "PrevTab") {
          iconName = "smiley";
          iconType = "Octicons";
        } else if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        } else if (routeName === "List") {
          iconName = "list";
          iconType = "Feather";
        } else if (routeName === "LogOut") {
          iconName = "logout";
          iconType = "AntDesign";
        } else if (routeName === "Galleries") {
          iconName = "list";
          iconType = "AntDesign";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

// const AppContainer = createAppContainer(BottomTab);

// export default AppContainer;

export default BottomTab;
