import React, { Component } from "react";

import { Card, CardItem, Text } from "native-base";

import { observer } from "mobx-react";

class Order extends Component {
  render() {
    const { order } = this.props;

    let itemName = order.choice.map(item => {
      return item.item.name;
    });
    let itemQuantity = order.choice.map(item => {
      return item.quantity;
    });

    return (
      <Card
        style={{
          borderColor: "#BC8F8F",
          flexWrap: "wrap",
          alignItems: "flex-start",
          flexDirection: "row"
        }}
      >
        <CardItem
          style={{
            borderBottomColor: "#BC8F8F",
            borderBottomWidth: 1,
            width: "100%",
            flexWrap: "wrap",
            flexDirection: "column"
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "AcademyEngravedLetPlain"
            }}
          >
            Item Name: {itemName}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "AcademyEngravedLetPlain"
            }}
          >
            Item Quantity: {itemQuantity}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "AcademyEngravedLetPlain"
            }}
          >
            Date of Purchase: {order.date}
          </Text>
        </CardItem>
      </Card>
    );
  }
}
export default observer(Order);
