import { createSwitchNavigator } from "react-navigation";

import ProfileStack from "../navigation/ProfileStack";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import CreatureList from "../components/CreaturesList/index";

const SwitchNav = createSwitchNavigator({
  Login: Login,
  Signup: Signup,
  CreatureList: CreatureList,
  ProfileStack: ProfileStack
});

export default SwitchNav;
