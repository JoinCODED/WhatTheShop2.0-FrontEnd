import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";

import LoginScreen from "../components/Login";
import SignUp from "../components/Register";
import UserProfile from "../components/Profile/UserProfile";

const ProfileStack = createStackNavigator(
  {
    Profile: UserProfile,
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
