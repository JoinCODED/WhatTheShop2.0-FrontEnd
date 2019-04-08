import React, { Component } from "react";
import PrevOrdersCard from "./PrevOrdersCard";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";
import previousOrderStore from "../../stores/previousOrderStore";

class PreviousOrdersList extends Component {
  static navigationOptions = {
    title: "Product-List"
    // headerLeft: null
  };

  componentDidMount() {
    previousOrderStore.fetchAllPreviousOrders();
  }

  render() {
    if (!previousOrderStore.previousOrders) {
      return <Spinner />;
    }
    console.log("xhelloD");
    const orders = previousOrderStore.previousOrders.map(order => (
      <PrevOrdersCard order={order} key={order.id} />
    ));

    return (
      <Content>
        <List>{orders}</List>
      </Content>
    );
  }
}

export default observer(PreviousOrdersList);
