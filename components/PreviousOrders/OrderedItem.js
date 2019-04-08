import React, { Component } from "react";

import { Image } from "react-native";

import { Card, CardItem, Body, Thumbnail, Text, Left } from "native-base";

class OrderedItem extends Component {
  render() {
    const { item } = this.props;
    console.log("=================");
    console.log("PRODUCT", item);

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: item.product.image }} />
          </Left>
          <Body>
            <Text>{item.product.description}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default OrderedItem;
