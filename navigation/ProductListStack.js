import { createStackNavigator } from "react-navigation";

import ProductsList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

const ProductListStack = createStackNavigator(
  {
    List: ProductsList,
    Detail: ProductDetail
  },
  {
    defaultNavigationOptions: {
      title: "Product-list"
    }
  }
);

export default ProductListStack;
