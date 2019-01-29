import React, { Component } from "react";

import CartStore from "../../stores/cartStore";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

//const { item } = this.props;
// const { item } = this.props;
const CartItem = props => (
  <ListItem style={{ borderBottomWidth: 0 }}>
    <Left>
      <Text style={{ color: "black", marginLeft: 16 }}>
        {" "}
        {props.item.name}{" "}
      </Text>
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

export default CartItem;
