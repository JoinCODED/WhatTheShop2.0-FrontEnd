import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Navigators
import BanakStack from "./BanakStack";
import ProfileStack from "./ProfileStack";
import Login from "../components/Login";
import ProfilePage from "../components/Profile";

const BottomTab = createBottomTabNavigator(
  {
    HomeTab: BanakStack,
    ProfileTab: ProfilePage
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === "ProfileTab") {
          iconName = "smiley";
          iconType = "Octicons";
        } else if (routeName === "HomeTab") {
          iconName = "person";
          iconType = "MaterialIcons";
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

export default BottomTab;

// import React, { Component } from "react";
// import {
//   createDrawerNavigator,
//   createAppContainer
// } from "react-navigation-drawer";

// // Components pages
// import BanakList from "../components/BanakList";
// import Login from "../components/Login";

// const MyDrawerNavigator = createDrawerNavigator(
//   {
//     BanakList: { screen: BanakList },
//     Login: { screen: Login }
//   },
//   {
//     initialRouteName: "BanakList",
//     drawerWidth: 300,
//     drawerPosition: "left"
//   }
// );

// const AppContainer = createAppContainer(MyDrawerNavigator);

// export default class DrawerNavigator extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }
