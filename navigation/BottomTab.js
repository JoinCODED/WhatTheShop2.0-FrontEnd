import React from "react";
import { Icon } from "native-base";

import {
  createBottomTabNavigator,
  createAppContainer,
  TabNavigator
} from "react-navigation";
import LolStack from "./LolStack";
import ProfileStack from "./ProfileStack";
import ProductList from "../components/ProductList";

// const Stack = StackNavigator(
//   {
//     ProfileTab: { screen: ProfileStack },
//     LolTab: { screen: LolStack },
//     List: { screen: ProductList }
//   },
//   { initialRouteName: "ProfileTab" }
// );

// const Tabs = TabNavigator(
//   {
//     TabA: { screen: TabA },
//     TabB: { screen: TabB },
//     TabC: { screen: TabC }
//   },
//   {
//     order: ["TabA", "TabB", "TabC"],
//     animationEnabled: true
//   }
// );

// const Drawer = DrawerNavigator({
//   Stack: { screen: Stack },
//   Tabs: { screen: Tabs },
//   Plain: { screen: Plain }
// });

const BottomTab = createBottomTabNavigator(
  {
    // ProfileTab: ProfileStack,
    // LolTab: LolStack,
    List: ProductList
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "LolTab") {
          iconName = "smiley";
          iconType = "Octicons";
        } else if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        } else if (routeName === "List") {
          iconName = "list";
          iconType = "Feather";
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
