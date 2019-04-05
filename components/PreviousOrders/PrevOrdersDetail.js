import React, { Component } from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";
import previousOrderStore from "../../stores/previousOrderStore";
import OrderedItem from "./OrderedItem";

class CartDetail extends Component {
  static navigationOptions = {
    title: "Cart-detail"
    // headerLeft: null
  };

  render() {
    const prevOrder = this.props.navigation.getParam("prevOrder", {});
    const itemList = prevOrder.items.map(item => (
      <OrderedItem item={item} key={item.id} />
    ));

    return (
      <Content>
        <List>{itemList}</List>
      </Content>
    );
  }
}

export default observer(CartDetail);
