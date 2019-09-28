import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import Login from "../components/Login";
import BanakList from "../components/BanakList";
import Register from "../components/Register";

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    Login: Login,
    BanakList: BanakList,
    Register: Register
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Beldowar"
    }
  }
);

export default ProfileStack;
