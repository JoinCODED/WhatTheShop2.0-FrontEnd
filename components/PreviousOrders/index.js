import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Icon,
  Content
} from "native-base";
//Stores
import previousOrders from "../../stores/previousOrders";
//Components
import Order from "./order";
class Orders extends Component {
  componentDidMount() {
    previousOrders.fetchOrders();
  }
  render() {
    const orders = previousOrders.orders.map(order => {
      return <Order order={order} key={order.id} />;
    });

    return orders;
  }
}

export default observer(Orders);
