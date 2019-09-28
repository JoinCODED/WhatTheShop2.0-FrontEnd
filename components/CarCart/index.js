//Store

import React, { Component } from "react";
import { observer } from "mobx-react";
import { Text, List, Button, Spinner, ListItem } from "native-base";
import { withNavigation } from "react-navigation";
import CartItem from "./CartItem";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class CarCart extends Component {
  handlePress = () => {
    cartStore.checkoutCart();
    this.props.navigation.navigate("Profile", {});
  };

  render() {
    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={item.id} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger onPress={() => this.handlePress()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default withNavigation(observer(CarCart));
