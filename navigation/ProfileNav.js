import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "The Coral Farm"
    }
  }
);

export default ProfileStack;
