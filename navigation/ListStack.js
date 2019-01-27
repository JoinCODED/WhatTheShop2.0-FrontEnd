import { createStackNavigator } from "react-navigation";

import ListScreen from "../components/ShopList";
import DetailScreen from "../components/ShopDetail";

const ListStack = createStackNavigator(
  {
    List: ListScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Items List"
    }
  }
);

export default ListStack;
