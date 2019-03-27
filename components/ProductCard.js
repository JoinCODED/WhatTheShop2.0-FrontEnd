import React, { Component } from "react";
import ProductList from "./ProductList";
import { Card, CardItem, Thumbnail, Text, Left } from "native-base";

class ProductCard extends Component {
  // handlePress = () => {
  //     this.props.navigation.navigate("CoffeeDetail", {
  //       shop: this.props.coffeeShop
  //     });
  render() {
    const { product } = this.props;
    console.log("=================");
    console.log(product.detail);
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: product.image }} />
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default ProductCard;
