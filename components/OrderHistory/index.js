import React, { Component } from "react";
import { observer } from "mobx-react";

import { ScrollView } from "react-native";
//Stores
import OrderHistory from "../../stores/orderStore";
//Components
import Order from "./order";

class Orders extends Component {
  static navigationOptions = () => ({
    title: "Order History",
    fontSize: 20
  });
  componentDidMount() {
    OrderHistory.fetchOrders();
  }
  render() {
    const orders = OrderHistory.orders.map(order => {
      return <Order order={order} key={order.id} />;
    });

    return <ScrollView>{orders}</ScrollView>;
  }
}

export default observer(Orders);
