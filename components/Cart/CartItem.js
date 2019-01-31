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
  Image,
  Thumbnail
} from "native-base";

//const { item } = this.props;
// const { item } = this.props;
const CartItem = props => {
  console.log(props.item.id);
  let ItemImage = ShopStore.fetchItemByID(props.item.id);
  console.log("Item inside cart item: ", ItemImage.image);
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Thumbnail bordered source={{ uri: ItemImage.image }} />
        <Text note style={{ marginLeft: 100, color: "black" }}>
          {props.item.size}
        </Text>
      </Left>
      <Body>
        <Text style={{ color: "black" }}>{props.item.quantity}</Text>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => CartStore.removeItemFromCart(props.item)}
        >
          <Icon
            name="trash"
            style={{ color: "black", fontSize: 30, marginLeft: 5 }}
          />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
