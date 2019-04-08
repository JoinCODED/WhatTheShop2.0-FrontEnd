import { createStackNavigator } from "react-navigation";

import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import CartPage from "../components/ProductCart";

const ProductListStack = createStackNavigator(
  {
    List: ProductList, //ProductsList or ProductList???
    Detail: ProductDetail,
    CartPage: CartPage
  },
  {
    defaultNavigationOptions: {
      title: "Product-list"
    }
  }
);

export default ProductListStack;
