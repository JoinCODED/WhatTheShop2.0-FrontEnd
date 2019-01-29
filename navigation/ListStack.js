import { createStackNavigator } from "react-navigation";

import ListScreen from "../components/ShopList";
import DetailScreen from "../components/ShopDetail";
import CartScreen from "../components/Cart";

const ListStack = createStackNavigator(
  {
    List: ListScreen,
    Detail: DetailScreen,
    Cart: CartScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Items"
    }
  }
);

export default ListStack;
