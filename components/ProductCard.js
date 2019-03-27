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
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: product.img }} />
            <Text>{product.name}</Text>
            <Text>{product.distance}</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default ProductCard;
