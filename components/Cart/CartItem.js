import React, { Component } from "react";

import CartStore from "../../stores/cartStore";
import ShopStore from "../../stores/shopStore";

// NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Thumbnail,
  Card,
  Content
} from "native-base";
import { Image } from "react-native";

//const { item } = this.props;
// const { item } = this.props;
const CartItem = props => {
  //console.log(props.item.id);

  ShopStore.fetchItemByID(props.item.item);
  let fetchedItem = ShopStore.fetchedItem;
  console.log("image: ", fetchedItem);
  // let itemImage = ShopStore.fetchItemByID(props.item.id);
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Thumbnail source={{ uri: fetchedItem.image }} />
        <Text
          note
          style={{ marginLeft: 50, marginRight: 10, color: "#778899" }}
        >
          {props.item.size}
        </Text>
        <Text style={{ marginRight: 10, color: "#778899" }}>
          {props.item.quantity + "X"}
        </Text>
        <Text style={{ marginRight: 10, color: "#778899" }}>
          {fetchedItem.price}
        </Text>
      </Left>
      <Right>
        <Button
          transparent
          onPress={() => CartStore.removeItemFromCart(props.item)}
        >
          <Icon
            name="trash"
            style={{ color: "#778899", fontSize: 30, marginLeft: 5 }}
          />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
