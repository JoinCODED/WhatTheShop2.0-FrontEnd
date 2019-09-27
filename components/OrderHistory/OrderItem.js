import React, { Component } from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import historyStore from "../../stores/historyStore";

class OrderItem extends Component {
  render() {
    const { order } = this.props;
    console.log("Order Item", order);
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}>
            {" "}
            {order.product}{" "}
          </Text>
          <Text note style={{ marginLeft: 16 }}>
            {order.unit_price}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "black" }}>Quantity : {order.quantity}</Text>
        </Body>
        <Body>
          <Text style={{ color: "black" }}>
            Order Total : {order.sub_total}
          </Text>
        </Body>
        <Right></Right>
      </ListItem>
    );
  }
}

export default OrderItem;
