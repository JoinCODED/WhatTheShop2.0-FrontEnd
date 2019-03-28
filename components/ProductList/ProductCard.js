import React, { Component } from "react";
import ProductList from "../ProductList";
import { Card, CardItem, Thumbnail, Text, Left, Button } from "native-base";
import { withNavigation } from "react-navigation";
import ProductDetail from "../ProductDetail";
class ProductCard extends Component {
  handlePress = () => {
    this.props.navigation.navigate("Detail", {
      shop: this.props.product
    });
  };
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
            <Button onPress={this.handlePress}>
              <Text>detail</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(ProductCard);
