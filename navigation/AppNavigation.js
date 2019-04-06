import React from "react";
import { Text, Animated, Easing } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import ForgottenPasswordScreen from "./ForgottenPasswordScreen";
// import Screen1 from "./Screen1";
// import Screen2 from "./Screen2";
// import Screen3 from "./Screen3";
import DrawerContainer from "./DrawerContainer";
import BottomTab from "./BottomTab";

//Components
import ProductList from "../components/ProductList";
import Profile from "../components/Profile";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PrevOrdersList from "../components/PreviousOrders/PrevOrdersList";
import PrevOrdersDetail from "../components/PreviousOrders/PrevOrdersDetail";

//Stores
import authStore from "../stores/authStore";

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
    ProductList: ProductList, //1
    Profile: Profile, //2
    PrevList: PrevOrdersList,
    PrevDetail: PrevOrdersDetail,
    Home: Home, //3
    Tabs: BottomTab
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
      title: `Welcome ${authStore.username}`, //you are logged in
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
    loginScreen: Login,
    signupScreen: Register,
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
    home: Home,
    loginStack: Login,
    drawerStack: DrawerNavigation
  },
  {
    // Default config for all screens
    headerMode: "float",
    title: "Main",
    initialRouteName: "loginStack",
    transitionConfig: noTransitionConfig
  }
);

const AppContainer = createAppContainer(PrimaryNav);

export default AppContainer;

// mode:'modal',
// navigationOptions..
