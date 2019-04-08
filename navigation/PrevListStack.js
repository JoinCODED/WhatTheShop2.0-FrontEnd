// REPLACED LOLSTACK...TESTING PROFILE DRAWER

import { createStackNavigator } from "react-navigation";
import PrevOrdersList from "../components/PreviousOrders/PrevOrdersList";
import PrevOrdersDetail from "../components/PreviousOrders/PrevOrdersDetail";

const PrevListStack = createStackNavigator(
  {
    PrevList: PrevOrdersList,
    PrevDetail: PrevOrdersDetail
  },
  {
    defaultNavigationOptions: {
      title: "one-of-one"
    }
  }
);

export default PrevListStack;
