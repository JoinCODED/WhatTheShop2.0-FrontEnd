import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "My Profile"
    }
  }
);

export default ProfileStack;
