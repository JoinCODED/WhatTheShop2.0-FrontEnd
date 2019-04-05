import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";

import LoginScreen from "../components/Login";
import SignUp from "../components/Register";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    SignUp: SignUp
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "one-of-one"
    }
  }
);

export default ProfileStack;
