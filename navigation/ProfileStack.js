import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import LoginCheck from "../components/LoginCheck";
import RegisterScreen from "../components/Register";
import OrdersScreen from "../components/PreviousOrders";
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    LoginCheck: LoginCheck,
    Register: RegisterScreen,
    Orders: OrdersScreen
  },
  {
    initialRouteName: "LoginCheck",
    defaultNavigationOptions: {
      title: "My Profile"
    }
  }
);

export default ProfileStack;
