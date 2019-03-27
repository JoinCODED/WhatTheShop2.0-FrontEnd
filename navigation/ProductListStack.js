import { createStackNavigator } from "react-navigation";

import productsList from "../components/ProductList";

const ProductListStack = createStackNavigator(
  {
    List: productsList
  },
  {
    defaultNavigationOptions: {
      title: "Product-list"
    }
  }
);

export default ProductListStack;
