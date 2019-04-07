import React, { Component } from "react";
// import ProductList from "../ProductList";
import { Card, CardItem, Thumbnail, Text, Left, Icon } from "native-base";
import { withNavigation } from "react-navigation";
// import ProductDetail from "../ProductDetail";
class ProductCard extends Component {
  handlePress = () => {
    this.props.navigation.navigate("Detail", {
      shop: this.props.product
    });
  };
  render() {
    const { product } = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: product.image }} />
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>

            <Icon
              type="Ionicons"
              name="ios-more"
              style={{ color: "Black", fontSize: 30, marginLeft: 40 }}
              onPress={this.handlePress}
            />
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(ProductCard);
