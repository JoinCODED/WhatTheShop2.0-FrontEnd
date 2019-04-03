import React from "react";
import { Text, Animated, Easing } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import LoginScreen from "../components/LoginScreen";
import SignupScreen from "../components/SignupScreen";
import ForgottenPasswordScreen from "../components/ForgottenPasswordScreen";
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";
import Screen3 from "../components/Screen3";
import DrawerContainer from "../components/DrawerContainer";

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

// drawer stack
const DrawerStack = createDrawerNavigator(
  {
    screen1: Screen1,
    screen2: Screen2,
    screen3: Screen3
  },
  {
    gesturesEnabled: false,
    contentComponent: props => <DrawerContainer {...props} />
  }
);

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: DrawerStack
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "green" },
      title: "Logged In to your app!",
      gesturesEnabled: false,
      headerLeft: (
        <Text onPress={() => navigation.navigate("DrawerOpen")}>Menu</Text>
      )
    })
  }
);

// login stack
const LoginStack = createStackNavigator(
  {
    loginScreen: LoginScreen,
    signupScreen: SignupScreen,
    forgottenPasswordScreen: {
      screen: ForgottenPasswordScreen,
      navigationOptions: { title: "Forgot Password" }
    }
  },
  {
    headerMode: "float",
    navigationOptions: {
      headerStyle: { backgroundColor: "red" },
      title: "You are not logged in"
    }
  }
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    loginStack: LoginStack,
    drawerStack: DrawerNavigation
  },
  {
    // Default config for all screens
    headerMode: "none",
    title: "Main",
    initialRouteName: "loginStack",
    transitionConfig: noTransitionConfig
  }
);

const AppContainer = createAppContainer(PrimaryNav);

export default AppContainer;
