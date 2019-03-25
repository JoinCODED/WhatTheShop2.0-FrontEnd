import React from "react";
import { Icon } from "native-base";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProfileStack from "./ProfileStack";
import ListStack from "./ListStack";

const BottomTab = createBottomTabNavigator(
  {
    ListTab: ListStack,
    ProfileTab: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconType;
        if (routeName === "ListTab") {
          iconName = "shop";
          iconType = "Entypo";
        } else if (routeName === "ProfileTab") {
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
      activeTintColor: "white",
      inactiveTintColor: "#778899",
      style: {
        backgroundColor: "#BC8F8F"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;

// const AppContainer = createAppContainer(BottomTab);

// export default AppContainer;
