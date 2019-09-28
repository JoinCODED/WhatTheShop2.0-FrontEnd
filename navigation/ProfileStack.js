import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import Login from "../components/Login";
import BanakList from "../components/BanakList";
import Register from "../components/Register";
import OrderHistory from "../components/OrderHistory";

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    Login: Login,
    BanakList: BanakList,
    Register: Register,
    Orders: OrderHistory
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Beldowar"
    }
  }
);

export default ProfileStack;
