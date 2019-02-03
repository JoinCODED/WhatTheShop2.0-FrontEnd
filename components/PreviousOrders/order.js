import React, { Component } from "react";

import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Content
} from "native-base";
import { observer } from "mobx-react";
class Order extends Component {
  render() {
    //order here is providing the id, user, list of user choices (including the item #, quantity and size),
    //date of purchse, and total price. I think we need a for loop to access the list of user choices.
    const { order } = this.props;
    // keep this consoloe.log to trace what the previous order button is returning.
    // use postman to check what the axios is returning.
    console.log(order);
    return (
      <Content>
        <Card style={{ borderColor: "#BC8F8F" }}>
          <CardItem>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "AcademyEngravedLetPlain"
              }}
            >
              Item Number: {order.choice[0].item}
            </Text>
          </CardItem>
          <CardItem>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "AcademyEngravedLetPlain"
              }}
            >
              Quantity: {order.choice[0].quantity}
            </Text>
          </CardItem>
          <CardItem>
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
      </Content>
    );
  }
}
export default observer(Order);
