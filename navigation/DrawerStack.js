import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";

import BottomTab from "./BottomTab";
import ListScreen from "../components/ShopList";

const AllProducts = createStackNavigator({
  AllList: {
    screen: props => <ListScreen {...props} itemType="all" />,
    navigationOptions: {
      headerTitle: "All"
    }
  }
});

const TShirt = createStackNavigator({
  TShirts: {
    screen: props => <ListScreen {...props} itemType="TShirts" />,
    navigationOptions: {
      headerTitle: "T-Shirts"
    }
  }
});

const Sunglasses = createStackNavigator({
  Sunglasses: {
    screen: props => <ListScreen {...props} itemType="Sunglasses" />,
    navigationOptions: {
      headerTitle: "Sunglasses"
    }
  }
});

const Shoes = createStackNavigator({
  Shoes: {
    screen: props => <ListScreen {...props} itemType="Shoes" />,
    navigationOptions: {
      headerTitle: "Shoes"
    }
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  All: AllProducts,
  TShirt: TShirt,
  Sunglasses: Sunglasses,
  Shoes: Shoes
});

export default MyDrawerNavigator;
