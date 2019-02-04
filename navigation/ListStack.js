import { createStackNavigator } from "react-navigation";

import ClassificationScreen from "../components/ClassificationList";
import ListScreen from "../components/ShopList";
import DetailScreen from "../components/ShopDetail";
import CartScreen from "../components/Cart";

const ListStack = createStackNavigator(
  {
    Classification: ClassificationScreen,
    List: ListScreen,
    Detail: DetailScreen,
    Cart: CartScreen
  },
  {
    initialRouteName: "Classification"
    // defaultNavigationOptions: {
    //   title: "Items List"
    // }
  }
);

export default ListStack;
