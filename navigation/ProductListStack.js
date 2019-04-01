import { createStackNavigator } from "react-navigation";

import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

const ProductListStack = createStackNavigator(
  {
    List: ProductList, //ProductsList or ProductList???
    Detail: ProductDetail
  },
  {
    defaultNavigationOptions: {
      title: "Product-list"
    }
  }
);

export default ProductListStack;
