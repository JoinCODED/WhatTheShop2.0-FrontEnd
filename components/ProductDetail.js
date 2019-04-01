import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  ListCard,
  Left,
  Body,
  Right,
  List,
  Content,
  Button
} from "native-base";

// // Components
import CartButton from "./CartButton";

// Store
import cartStore from "../stores/cartStore";

class ProductDetail extends Component {
  state = {
    product_id: "",
    // option: "",
    quantity: 1
  };

  // static navigationOptions = ({ navigation }) => ({
  //   title: navigation.getParam("shop", {}).name,
  //   headerRight: <CartButton />
  // });
  static navigationOptions = {
    title: "detail",
    headerRight: <CartButton />
  };

  changeProduct = value => {
    this.setState({
      product_id: value
    });
  };

  //   changeOption = value => {
  //     this.setState({
  //       option: value
  //     });
  //   };

  handlePress = () => {
    cartStore.addItemToCart(this.state);
  };

  render() {
    const product = this.props.navigation.getParam("shop");
    console.log("jygiugiu");
    console.log(product);
    console.log(product.name);

    return (
      <>
        <Text>{product.name}</Text>
        <Button light onPress={this.handlePress}>
          <Text>Add</Text>
        </Button>
      </>
    );
  }
}

export default observer(ProductDetail);
